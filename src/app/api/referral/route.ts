import {
  MailNotConfiguredError,
  buildReferralAcknowledgment,
  formatField,
  sendAcknowledgmentEmail,
  sendOfficeEmail,
} from "@/lib/mail";
import { guardFormSubmission, stripTurnstileField } from "@/lib/api-form-guard";
import { formBodyTooLarge } from "@/lib/api-request";
import { HONEYPOT_FIELD, referralSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  if (formBodyTooLarge(request)) {
    return Response.json({ error: "Request too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const record = body as Record<string, unknown>;
  if (typeof record?.[HONEYPOT_FIELD] === "string" && record[HONEYPOT_FIELD] !== "") {
    return Response.json({ ok: true });
  }

  const blocked = await guardFormSubmission(request, record);
  if (blocked) return blocked.response;

  const parsed = referralSchema.safeParse(stripTurnstileField(record));
  if (!parsed.success) {
    return Response.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  const {
    sourceName,
    organization,
    sourcePhone,
    sourceEmail,
    clientName,
    clientPhone,
    county,
    service,
    notes,
  } = parsed.data;

  try {
    await sendOfficeEmail({
      subject: `Referral — ${clientName} (${county} County)`,
      replyTo: sourceEmail,
      lines: [
        "A new referral was submitted from the Bravo Healthcare website.",
        "",
        "Referral source",
        formatField("Name", sourceName),
        formatField("Organization", organization),
        formatField("Phone", sourcePhone),
        formatField("Email", sourceEmail),
        "",
        "Client",
        formatField("Name", clientName),
        formatField("Preferred phone", clientPhone),
        formatField("County", county),
        formatField("Requested service", service),
        "",
        "Additional notes:",
        notes?.trim() ? notes.trim() : "—",
      ],
    });

    const acknowledgment = buildReferralAcknowledgment(sourceName);
    await sendAcknowledgmentEmail({ to: sourceEmail, ...acknowledgment });
  } catch (error) {
    console.error("Referral form delivery failed:", error instanceof Error ? error.message : "unknown");
    const status = error instanceof MailNotConfiguredError ? 503 : 502;
    return Response.json({ error: "We could not submit your referral." }, { status });
  }

  return Response.json({ ok: true });
}
