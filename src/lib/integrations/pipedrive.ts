import type { Lead } from '@/types/lead'
import type { IntegrationResult } from '@/types/integration'

const API_TOKEN = process.env.PIPEDRIVE_API_TOKEN ?? ''
const DOMAIN = process.env.PIPEDRIVE_DOMAIN ?? ''

function buildBaseUrl(): string {
  const raw = DOMAIN.trim()
  if (!raw) return 'https://api.pipedrive.com/v1'
  if (raw.startsWith('http://') || raw.startsWith('https://')) {
    return `${raw.replace(/\/$/, '')}/v1`
  }
  return `https://${raw}/v1`
}

const BASE_URL = buildBaseUrl()

async function pipedriveRequest<T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' = 'GET',
  body?: Record<string, unknown>
): Promise<{ success: boolean; data?: T; error?: string }> {
  if (!API_TOKEN) {
    // TODO: add PIPEDRIVE_API_TOKEN to .env.local — keep message server-side only where possible
    return {
      success: false,
      error: 'Pipedrive API token not configured',
    }
  }

  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
  const url = `${BASE_URL}${path}?api_token=${encodeURIComponent(API_TOKEN)}`

  try {
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: method !== 'GET' && body !== undefined ? JSON.stringify(body) : undefined,
    })
    const json = (await res.json()) as {
      success?: boolean
      data?: T
      error?: string
      error_info?: string
    }
    if (!res.ok) {
      return {
        success: false,
        error: json.error ?? json.error_info ?? `HTTP ${res.status}`,
      }
    }
    if (json.success === false) {
      return { success: false, error: json.error ?? 'Pipedrive error' }
    }
    return { success: true, data: json.data }
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Unknown error',
    }
  }
}

/**
 * Creates a Person in Pipedrive from a Lead.
 */
export async function createPerson(lead: Lead): Promise<IntegrationResult> {
  const phone = lead.phone.trim()
  const result = await pipedriveRequest<{ id: number }>('/persons', 'POST', {
    name: lead.name,
    email: [{ value: lead.email, primary: true }],
    ...(phone ? { phone: [{ value: phone, primary: true }] } : {}),
  })
  return {
    success: result.success,
    provider: 'pipedrive',
    externalId: result.data?.id !== undefined ? String(result.data.id) : undefined,
    message: result.success ? `Person created: ${lead.name}` : result.error ?? 'Failed to create person',
    raw: result.data,
  }
}

/**
 * Creates an Organization in Pipedrive from a Lead.
 */
export async function createOrganization(lead: Lead): Promise<IntegrationResult> {
  const result = await pipedriveRequest<{ id: number }>('/organizations', 'POST', { name: lead.businessName })
  return {
    success: result.success,
    provider: 'pipedrive',
    externalId: result.data?.id !== undefined ? String(result.data.id) : undefined,
    message: result.success ? `Organization created: ${lead.businessName}` : result.error ?? 'Failed to create organization',
    raw: result.data,
  }
}

function dealValueFromLead(lead: Lead): number {
  const n = Number(lead.monthlyVolume)
  return Number.isFinite(n) ? n : 0
}

/**
 * Creates a Deal in Pipedrive linked to person + org.
 */
export async function createDeal(lead: Lead, personId: string, orgId: string): Promise<IntegrationResult> {
  const pid = Number.parseInt(personId, 10)
  const oid = Number.parseInt(orgId, 10)
  const result = await pipedriveRequest<{ id: number }>('/deals', 'POST', {
    title: `${lead.businessName} — Charm Payments`,
    person_id: pid,
    org_id: oid,
    value: dealValueFromLead(lead),
    currency: 'USD',
  })
  return {
    success: result.success,
    provider: 'pipedrive',
    externalId: result.data?.id !== undefined ? String(result.data.id) : undefined,
    message: result.success ? `Deal created for ${lead.businessName}` : result.error ?? 'Failed to create deal',
    raw: result.data,
  }
}

/**
 * Adds a note to a Pipedrive deal.
 */
export async function addNoteToDeal(dealId: string, note: string): Promise<IntegrationResult> {
  const result = await pipedriveRequest<{ id: number }>('/notes', 'POST', {
    deal_id: Number.parseInt(dealId, 10),
    content: note,
  })
  return {
    success: result.success,
    provider: 'pipedrive',
    externalId: result.data?.id !== undefined ? String(result.data.id) : undefined,
    message: result.success ? 'Note added to deal' : result.error ?? 'Failed to add note',
    raw: result.data,
  }
}

/**
 * Logs a call activity to a Pipedrive deal.
 * Call this after an Ooma dial link is used (or from the dashboard “Log call” action).
 */
export async function logCallActivity(
  dealId: string,
  leadName: string,
  phone: string,
  note?: string
): Promise<IntegrationResult> {
  const result = await pipedriveRequest<{ id: number }>('/activities', 'POST', {
    deal_id: Number.parseInt(dealId, 10),
    subject: `Call with ${leadName}`,
    type: 'call',
    note:
      note ??
      `Outbound call to ${phone} via Ooma. Initiated from Charm Payments leads dashboard.`,
    done: 0,
  })
  return {
    success: result.success,
    provider: 'pipedrive',
    externalId: result.data?.id !== undefined ? String(result.data.id) : undefined,
    message: result.success ? `Call activity logged for ${leadName}` : result.error ?? 'Failed to log call activity',
    raw: result.data,
  }
}

/**
 * Full lead sync: creates Person + Organization + Deal.
 * Returns all three IDs for storage on the Lead.
 */
export async function syncLeadToPipedrive(lead: Lead): Promise<{
  success: boolean
  personId?: string
  orgId?: string
  dealId?: string
  error?: string
}> {
  const [personResult, orgResult] = await Promise.all([createPerson(lead), createOrganization(lead)])

  if (!personResult.success || !orgResult.success) {
    return {
      success: false,
      error: !personResult.success ? personResult.message : orgResult.message,
    }
  }

  const dealResult = await createDeal(lead, personResult.externalId ?? '', orgResult.externalId ?? '')

  if (!dealResult.success) {
    return { success: false, error: dealResult.message }
  }

  const dealId = dealResult.externalId
  if (dealId) {
    await addNoteToDeal(
      dealId,
      `Lead source: ${lead.source}. Monthly volume: ${lead.monthlyVolume}. Submitted via Charm Payments on ${new Date(
        lead.createdAt
      ).toLocaleDateString()}.`
    )
  }

  return {
    success: true,
    personId: personResult.externalId,
    orgId: orgResult.externalId,
    dealId: dealResult.externalId,
  }
}
