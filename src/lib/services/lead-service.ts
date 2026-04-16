// src/lib/services/lead-service.ts
import { createAdminClient } from '@/lib/supabase/admin'
import type { CreateLeadInput, Lead, LeadStatus } from '@/types/lead'

// ── row shape returned by Supabase ────────────────────────────────────────────

type LeadRow = {
  id: string
  name: string
  business_name: string
  email: string
  phone: string
  monthly_volume: string
  source: string
  status: string
  notes: string
  created_at: string
}

function rowToLead(row: LeadRow): Lead {
  return {
    id: row.id,
    name: row.name,
    businessName: row.business_name,
    email: row.email,
    phone: row.phone,
    monthlyVolume: row.monthly_volume,
    source: row.source as Lead['source'],
    status: row.status as Lead['status'],
    notes: row.notes,
    createdAt: row.created_at,
  }
}

// ── public API ────────────────────────────────────────────────────────────────

export async function createLead(input: CreateLeadInput): Promise<Lead> {
  const db = createAdminClient()

  const { data, error } = await db
    .from('leads')
    .insert({
      name: input.name,
      business_name: input.businessName,
      email: input.email,
      phone: input.phone,
      monthly_volume: input.monthlyVolume,
      source: input.source,
      status: input.status ?? 'new',
      notes: input.notes ?? '',
    })
    .select()
    .single()

  if (error) throw new Error(`Failed to insert lead: ${error.message}`)

  return rowToLead(data as LeadRow)
}

export async function getLeads(): Promise<Lead[]> {
  const db = createAdminClient()
  const { data, error } = await db
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw new Error(`Failed to fetch leads: ${error.message}`)
  return (data as LeadRow[]).map(rowToLead)
}

export async function updateLeadStatus(id: string, status: LeadStatus): Promise<Lead | null> {
  const db = createAdminClient()
  const { data, error } = await db
    .from('leads')
    .update({ status })
    .eq('id', id)
    .select()
    .single()

  if (error) return null
  return rowToLead(data as LeadRow)
}

export async function attachLeadNote(id: string, note: string): Promise<Lead | null> {
  const db = createAdminClient()

  const { data: existing, error: fetchErr } = await db
    .from('leads')
    .select('notes')
    .eq('id', id)
    .single()

  if (fetchErr || !existing) return null

  const appended = existing.notes ? `${existing.notes}\n${note}` : note

  const { data, error } = await db
    .from('leads')
    .update({ notes: appended })
    .eq('id', id)
    .select()
    .single()

  if (error) return null

  return rowToLead(data as LeadRow)
}
