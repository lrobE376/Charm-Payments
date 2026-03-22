import { randomUUID } from 'crypto'
import type { CreateTicketInput, Ticket, TicketStatus } from '@/types/ticket'

const tickets: Ticket[] = []

function nowIso(): string {
  return new Date().toISOString()
}

export function createTicket(input: CreateTicketInput): Ticket {
  const ticket: Ticket = {
    id: randomUUID(),
    leadId: input.leadId,
    accountId: input.accountId,
    name: input.name,
    email: input.email,
    subject: input.subject,
    message: input.message,
    priority: input.priority,
    status: input.status ?? 'open',
    createdAt: nowIso(),
  }
  tickets.push(ticket)
  return ticket
}

export function getTickets(): Ticket[] {
  return [...tickets].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
}

export function updateTicketStatus(id: string, status: TicketStatus): Ticket | null {
  const i = tickets.findIndex((t) => t.id === id)
  if (i === -1) return null
  const next = { ...tickets[i], status }
  tickets[i] = next
  return next
}

export function assignTicket(id: string, assigneeId: string): Ticket | null {
  // TODO: add assignee field to Ticket type and persist (DB / external tool)
  void assigneeId
  const t = tickets.find((x) => x.id === id)
  return t ?? null
}
