// src/lib/services/ticket-service.ts
import { createAdminClient } from '@/lib/supabase/admin'
import type { CreateTicketInput, Ticket, TicketStatus } from '@/types/ticket'

// ── row shape returned by Supabase ────────────────────────────────────────────

type TicketRow = {
  id: string
  lead_id: string | null
  account_id: string | null
  name: string
  email: string
  subject: string
  message: string
  priority: string
  status: string
  created_at: string
}

function rowToTicket(row: TicketRow): Ticket {
  return {
    id: row.id,
    leadId: row.lead_id ?? undefined,
    accountId: row.account_id ?? undefined,
    name: row.name,
    email: row.email,
    subject: row.subject,
    message: row.message,
    priority: row.priority as Ticket['priority'],
    status: row.status as Ticket['status'],
    createdAt: row.created_at,
  }
}

// ── public API ────────────────────────────────────────────────────────────────

export async function createTicket(input: CreateTicketInput): Promise<Ticket> {
  const db = createAdminClient()

  const insert = {
    lead_id: input.leadId ?? null,
    account_id: input.accountId ?? null,
    name: input.name,
    email: input.email,
    subject: input.subject,
    message: input.message,
    priority: input.priority,
    status: input.status ?? 'open',
  }

  const { data, error } = await db
    .from('tickets')
    .insert(insert)
    .select()
    .single()

  if (error) throw new Error(`Failed to insert ticket: ${error.message}`)
  return rowToTicket(data as TicketRow)
}

export async function getTickets(): Promise<Ticket[]> {
  const db = createAdminClient()
  const { data, error } = await db
    .from('tickets')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw new Error(`Failed to fetch tickets: ${error.message}`)
  return (data as TicketRow[]).map(rowToTicket)
}

export async function updateTicketStatus(id: string, status: TicketStatus): Promise<Ticket | null> {
  const db = createAdminClient()
  const { data, error } = await db
    .from('tickets')
    .update({ status })
    .eq('id', id)
    .select()
    .single()

  if (error) return null
  return rowToTicket(data as TicketRow)
}

export async function assignTicket(id: string, assigneeId: string): Promise<Ticket | null> {
  // assignee_id column can be added to the tickets table when a helpdesk
  // integration is wired up — for now just return the current ticket row
  void assigneeId
  const db = createAdminClient()
  const { data, error } = await db
    .from('tickets')
    .select('*')
    .eq('id', id)
    .single()

  if (error) return null
  return rowToTicket(data as TicketRow)
}
