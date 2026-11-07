import nodemailer, { type Transporter } from "nodemailer";

import { company } from "@/data/company";

/**
 * Transactional email over authenticated SMTP, using the office mailbox itself
 * as the sender. Mail addressed to the office therefore stays inside the
 * mailbox provider rather than crossing a third-party sending service.
 *
 * Most providers reject a From address that is not the authenticated mailbox
 * or one of its aliases, so MAIL_FROM_ADDRESS defaults to SMTP_USER.
 */

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  password: string;
  from: string;
  to: string;
};

export type MailPayload = {
  subject: string;
  lines: string[];
  replyTo?: string;
};

export type AcknowledgmentPayload = {
  to: string;
  subject: string;
  lines: string[];
};

export class MailNotConfiguredError extends Error {}

function readConfig(): SmtpConfig {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;

  if (!host || !user || !password) {
    throw new MailNotConfiguredError(
      "Set SMTP_HOST, SMTP_USER, and SMTP_PASSWORD to enable form email delivery.",
    );
  }

  const port = Number(process.env.SMTP_PORT ?? 465);
  if (!Number.isInteger(port) || port <= 0) {
    throw new MailNotConfiguredError(`SMTP_PORT must be a positive integer, received "${process.env.SMTP_PORT}".`);
  }

  return {
    host,
    port,
    user,
    password,
    from: process.env.MAIL_FROM_ADDRESS ?? user,
    to: process.env.CONTACT_TO_EMAIL ?? company.email,
  };
}

let transporter: Transporter | undefined;

function getTransporter(config: SmtpConfig) {
  /**
   * Cached across invocations so a warm function reuses the TLS handshake.
   * The timeouts matter more than they would on a long-lived server: without
   * them an unresponsive mail host would hang until the platform kills the
   * function, and the visitor would see nothing at all.
   */
  transporter ??= nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: { user: config.user, pass: config.password },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });

  return transporter;
}

export async function sendOfficeEmail({ subject, lines, replyTo }: MailPayload) {
  const config = readConfig();

  await getTransporter(config).sendMail({
    from: { name: `${company.name} Website`, address: config.from },
    to: config.to,
    subject,
    text: lines.join("\n"),
    ...(replyTo ? { replyTo } : {}),
  });
}

/**
 * Best-effort confirmation to the person who submitted a form. A failed ack must
 * not block the submission once the office notification has already gone out.
 */
export async function sendAcknowledgmentEmail({ to, subject, lines }: AcknowledgmentPayload) {
  const config = readConfig();

  try {
    await getTransporter(config).sendMail({
      from: { name: company.name, address: config.from },
      to,
      subject,
      text: lines.join("\n"),
    });
  } catch (error) {
    console.error("Acknowledgment email failed:", error);
  }
}

function officeSignatureLines() {
  return [
    company.name,
    company.address.formatted,
    `Email: ${company.email}`,
    `Office hours: ${company.hours.days}, ${company.hours.time}`,
  ];
}

export function buildContactAcknowledgment(name: string) {
  const greeting = name.trim() ? `Hello ${name.trim()},` : "Hello,";

  return {
    subject: "We received your message — Bravo Healthcare",
    lines: [
      greeting,
      "",
      "Thank you for contacting Bravo Healthcare. We received your message and will follow up during our office hours.",
      "",
      ...officeSignatureLines(),
      "",
      company.emergencyMessage,
      "This website and email are not emergency channels.",
    ],
  };
}

export function buildReferralAcknowledgment(sourceName: string) {
  const greeting = sourceName.trim() ? `Hello ${sourceName.trim()},` : "Hello,";

  return {
    subject: "We received your referral — Bravo Healthcare",
    lines: [
      greeting,
      "",
      "Thank you for submitting a referral to Bravo Healthcare. We received your request and will follow up during our office hours.",
      "",
      ...officeSignatureLines(),
      "",
      company.emergencyMessage,
      "This website and email are not emergency channels.",
    ],
  };
}

export function formatField(label: string, value: string | undefined) {
  return `${label}: ${value?.trim() ? value.trim() : "—"}`;
}
