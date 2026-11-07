/** Maximum JSON body size for public marketing forms (bytes). */
export const MAX_FORM_JSON_BYTES = 32_768;

export function formBodyTooLarge(request: Request): boolean {
  const header = request.headers.get("content-length");
  if (!header) return false;
  const length = Number(header);
  return Number.isFinite(length) && length > MAX_FORM_JSON_BYTES;
}
