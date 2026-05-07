// src/lib/email/escape.ts
// HTML escape helper for safe interpolation of user-controlled values
// into HTML email templates. Wrap every untrusted value before injecting
// it into an HTML string.

export function escapeHtml(input: unknown): string {
  if (input === null || input === undefined) return ''
  return String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
