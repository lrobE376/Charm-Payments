// src/lib/integrations/zapier.ts
// Fire-and-forget Zapier webhook relay → Salesforce via Zap.
// Never throws. Never blocks the calling route.
// Callers: triggerZap(...).catch(() => {}) — do NOT await.

// ── Payload interfaces ────────────────────────────────────────────────────────

export interface ApplicationEventPayload {
  businessName: string
  email: string
  phone?: string
  monthlyVolume?: string
  businessType?: string
  currentTerminal?: string
  bankName?: string
  accountType?: string
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
