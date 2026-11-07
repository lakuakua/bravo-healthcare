/** Public Turnstile site key — safe to embed in the client bundle when set. */
export const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? "";

export function turnstileEnabledOnClient() {
  return Boolean(turnstileSiteKey);
}
