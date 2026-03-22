import { randomUUID } from 'crypto'
import { syncLeadToPipedrive } from '@/lib/integrations/pipedrive'
import type { CreateLeadInput, Lead, LeadStatus } from '@/types/lead'

/** In-memory store — replace with DB / CRM sync later. */
const leads: Lead[] = []

function nowIso(): string {
  return new Date().toISOString()
}

export async function createLead(input: CreateLeadInput): Promise<Lead> {
  const lead: Lead = {
    id: randomUUID(),
    name: input.name,
    businessName: input.businessName,
    email: input.email,
    phone: input.phone,
    monthlyVolume: input.monthlyVolume,
    source: input.source,
    status: input.status ?? 'new',
    notes: input.notes ?? '',
    createdAt: nowIso(),
  }

  try {
    const sync = await syncLeadToPipedrive(lead)
    if (sync.success) {
      lead.pipedrivePersonId = sync.personId
      lead.pipedriveOrgId = sync.orgId
      lead.pipedriveDealId = sync.dealId
      lead.pipedriveSyncedAt = new Date().toISOString()
    }
    // TODO: if sync fails, queue for retry (dead-letter / Supabase)
    // TODO: replace in-memory store with Supabase
  } catch {
    // TODO: queue for retry — do not block lead creation
  }

  leads.push(lead)
  return lead
}

export async function getLeads(): Promise<Lead[]> {
  return [...leads].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
}

export async function updateLeadStatus(id: string, status: LeadStatus): Promise<Lead | null> {
  const i = leads.findIndex((l) => l.id === id)
  if (i === -1) return null
  const next = { ...leads[i], status }
  leads[i] = next
  return next
}

export async function attachLeadNote(id: string, note: string): Promise<Lead | null> {
  const i = leads.findIndex((l) => l.id === id)
  if (i === -1) return null
  const appended = leads[i].notes ? `${leads[i].notes}\n${note}` : note
  const next = { ...leads[i], notes: appended }
  leads[i] = next

  if (next.pipedriveDealId) {
    const { addNoteToDeal } = await import('@/lib/integrations/pipedrive')
    await addNoteToDeal(next.pipedriveDealId, note)
  }

  return next
}
