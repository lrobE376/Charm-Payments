// src/lib/integrations/zapier.ts
// Fire-and-forget Zapier webhook relay → Salesforce via Zap.
// Never throws. Never blocks the calling route.
// Callers: triggerZap(...).catch(() => {}) — do NOT await.

// ── Payload interfaces ────────────────────────────────────────────────────────

export interface ApplicationEventPayload {
  // Identity
  firstName: string
  lastName: string
  email: string
  phone?: string
  dob?: string
  // Business
  businessName: string
  dbaName?: string
  businessType?: string
  ein?: string
  website?: string
  industry?: string
  // Address
  address?: string
  city?: string
  state?: string
  zip?: string
  // Processing profile
  monthlyVolume?: string
  averageTicket?: string
  currentTerminal?: string
  existingProcessor?: string
  devicePreference?: string
  existingPosSoftware?: string
  locationCount?: string | number
  // Customer profile
  hasCustomerDatabase?: boolean | string
  customerCount?: string | number
  needsRecurringBilling?: boolean | string
  needsOnlinePayments?: boolean | string
  needsInvoicing?: boolean | string
  // Bank metadata (last4 only — never raw numbers)
  bankName?: string
  accountType?: string
  accountLast4?: string
  routingLast4?: string
  // Notes
  notes?: string
}

export interface QuoteEventPayload {
  name: string
  businessName: string
  email: string
  phone: string
  monthlyVolume?: string
  currentProcessor?: string
  statementUrl?: string
}

export interface LeadEventPayload {
  name: string
  businessName: string
  email: string
  phone: string
  monthlyVolume: string
  source: string
  notes?: string
}

/**
 * Contact form payload.
 * NOTE: the contact form has no explicit "subject" field — callers derive it
 * (e.g. "Contact form inquiry — Acme Corp"). businessName and monthlyVolume
 * are optional extensions beyond the base spec; they are available from the
 * contact form and are valuable for Salesforce lead qualification.
 */
export interface ContactEventPayload {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  businessName?: string
  monthlyVolume?: string
}

export interface TicketEventPayload {
  leadId?: string
  accountId?: string
  name: string
  email: string
  subject: string
  message: string
  priority: string
}

// ── Discriminated event map ───────────────────────────────────────────────────

type ZapEvent = 'application' | 'quote' | 'lead' | 'contact' | 'ticket'

type ZapPayloadMap = {
  application: ApplicationEventPayload
  quote: QuoteEventPayload
  lead: LeadEventPayload
  contact: ContactEventPayload
  ticket: TicketEventPayload
}

// ── Envelope (what Zapier receives) ──────────────────────────────────────────
// Payload fields are spread at the top level alongside metadata so Zapier
// field mappings work without navigating nested keys.

type ZapEnvelope<E extends ZapEvent> = {
  event: E
  submittedAt: string
  source: 'charmpayments.com'
} & ZapPayloadMap[E]

// ── Return type ───────────────────────────────────────────────────────────────

export interface ZapResult {
  success: boolean
  reason?: string
  error?: Error
}

// ── Core function ─────────────────────────────────────────────────────────────

export async function triggerZap<E extends ZapEvent>(
  event: E,
  payload: ZapPayloadMap[E],
): Promise<ZapResult> {
  const webhookUrl = process.env.ZAPIER_SALESFORCE_WEBHOOK
  if (!webhookUrl) {
    return { success: false, reason: 'webhook_not_configured' }
  }

  const envelope: ZapEnvelope<E> = {
    event,
    submittedAt: new Date().toISOString(),
    source: 'charmpayments.com',
    ...payload,
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(envelope),
    })
    if (!res.ok) {
      const err = new Error(`Zapier responded with HTTP ${res.status}`)
      console.error('[Zapier] Webhook delivery failed:', err.message)
      return { success: false, error: err }
    }
    return { success: true }
  } catch (err) {
    const error = err instanceof Error ? err : new Error(String(err))
    console.error('[Zapier] Webhook request error:', error.message)
    return { success: false, error }
  }
}
