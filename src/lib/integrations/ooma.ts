const OOMA_ACCOUNT_ID = process.env.OOMA_ACCOUNT_ID ?? ''

/**
 * Formats a phone number for Ooma web click-to-call.
 * Opens the device dialer (tel:) — works with Ooma Office mobile/desktop apps that register tel: handlers.
 */
export function formatDialLink(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  return `tel:${cleaned}`
}

/**
 * Formats an Ooma web phone URL for browser-based dialing.
 * Requires Ooma Office web phone to be enabled on the account.
 */
export function formatOomaWebDialLink(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  if (!OOMA_ACCOUNT_ID) return `tel:${cleaned}`
  return `https://office.ooma.com/dial/${cleaned}?account=${encodeURIComponent(OOMA_ACCOUNT_ID)}`
}

/**
 * Validates a US business phone number.
 */
export function validateBusinessPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.length === 10 || (cleaned.length === 11 && cleaned.startsWith('1'))
}

/**
 * Creates a call activity placeholder for local / downstream logging.
 * Pair with Pipedrive `logCallActivity` after a dial is initiated.
 */
export function createCallActivityPlaceholder(
  phone: string,
  leadName: string
): {
  subject: string
  type: string
  note: string
  phone: string
  timestamp: string
} {
  return {
    subject: `Call with ${leadName}`,
    type: 'call',
    note: `Outbound call initiated via Ooma to ${phone}`,
    phone,
    timestamp: new Date().toISOString(),
  }
}
