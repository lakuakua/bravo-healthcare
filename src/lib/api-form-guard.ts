import { clientIpFromRequest, formRateLimitExceeded } from "@/lib/rate-limit";
import { turnstileRequired, verifyTurnstileToken } from "@/lib/turnstile";

type GuardFailure = { response: Response };

export async function guardFormSubmission(
  request: Request,
  record: Record<string, unknown>,
): Promise<GuardFailure | void> {
  const ip = clientIpFromRequest(request);
  if (await formRateLimitExceeded(`form:${ip}`)) {
    return {
      response: Response.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 },
      ),
    };
  }

  if (turnstileRequired()) {
    const token =
      typeof record.turnstileToken === "string" ? record.turnstileToken : undefined;
    const valid = await verifyTurnstileToken(token, ip);
    if (!valid) {
      return {
        response: Response.json(
          { error: "Please complete the verification and try again." },
          { status: 400 },
        ),
      };
    }
  }
}

export function stripTurnstileField<T extends Record<string, unknown>>(record: T): T {
  if (!("turnstileToken" in record)) return record;
  const { turnstileToken: _, ...rest } = record;
  return rest as T;
}
