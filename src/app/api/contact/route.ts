import {
  MailNotConfiguredError,
  buildContactAcknowledgment,
  formatField,
  sendAcknowledgmentEmail,
  sendOfficeEmail,
} from "@/lib/mail";
import { guardFormSubmission, stripTurnstileField } from "@/lib/api-form-guard";
import { formBodyTooLarge } from "@/lib/api-request";
import { HONEYPOT_FIELD, contactSchema } from "@/lib/schemas";

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

  const parsed = contactSchema.safeParse(stripTurnstileField(record));
  if (!parsed.success) {
    return Response.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  const { name, phone, email, interest, message } = parsed.data;

  try {
    await sendOfficeEmail({
      subject: `Website inquiry — ${interest}`,
      replyTo: email,
      lines: [
        "A new inquiry was submitted from the Bravo Healthcare website.",
        "",
        formatField("Name", name),
        formatField("Phone", phone),
        formatField("Email", email),
        formatField("Service interest", interest),
        "",
        "Message:",
        message,
      ],
    });

    const acknowledgment = buildContactAcknowledgment(name);
    await sendAcknowledgmentEmail({ to: email, ...acknowledgment });
  } catch (error) {
    console.error("Contact form delivery failed:", error instanceof Error ? error.message : "unknown");
    const status = error instanceof MailNotConfiguredError ? 503 : 502;
    return Response.json({ error: "We could not send your request." }, { status });
  }

  return Response.json({ ok: true });
}
