import type { CreateLeadInput, LeadSource } from '@/types/lead'

export type LeadCreateValidation =
  | { ok: true; value: CreateLeadInput }
  | { ok: false; error: string; code: string }

const SOURCES: LeadSource[] = ['website', 'quote', 'contact', 'apply', 'referral', 'partner', 'other', 'manual']

function isLeadSource(s: string): s is LeadSource {
  return SOURCES.includes(s as LeadSource)
}

export function parseLeadCreateBody(body: unknown): LeadCreateValidation {
  if (body === null || typeof body !== 'object') {
    return { ok: false, error: 'Invalid JSON body', code: 'INVALID_BODY' }
  }
  const b = body as Record<string, unknown>
  const name = typeof b.name === 'string' ? b.name.trim() : ''
  const businessName = typeof b.businessName === 'string' ? b.businessName.trim() : ''
  const email = typeof b.email === 'string' ? b.email.trim() : ''
  const phone = typeof b.phone === 'string' ? b.phone.trim() : ''
  const monthlyVolume = typeof b.monthlyVolume === 'string' ? b.monthlyVolume.trim() : ''
  const rawSource = typeof b.source === 'string' ? b.source.trim() : 'website'
  const notes = typeof b.notes === 'string' ? b.notes : ''

  if (!name) return { ok: false, error: 'Name is required', code: 'MISSING_NAME' }
  if (!businessName) return { ok: false, error: 'Business name is required', code: 'MISSING_BUSINESS' }
  if (!email) return { ok: false, error: 'Email is required', code: 'MISSING_EMAIL' }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: 'Invalid email', code: 'INVALID_EMAIL' }
  if (!monthlyVolume) return { ok: false, error: 'Monthly volume is required', code: 'MISSING_VOLUME' }
  if (!isLeadSource(rawSource)) return { ok: false, error: 'Invalid source', code: 'INVALID_SOURCE' }

  const value: CreateLeadInput = {
    name,
    businessName,
    email,
    phone,
    monthlyVolume,
    source: rawSource,
    notes,
  }
  return { ok: true, value }
}
