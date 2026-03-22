import type { CreateTicketInput, TicketPriority } from '@/types/ticket'

export type TicketCreateValidation =
  | { ok: true; value: CreateTicketInput }
  | { ok: false; error: string; code: string }

const PRIORITIES: TicketPriority[] = ['low', 'normal', 'high', 'urgent']

function isPriority(p: string): p is TicketPriority {
  return PRIORITIES.includes(p as TicketPriority)
}

export function parseTicketCreateBody(body: unknown): TicketCreateValidation {
  if (body === null || typeof body !== 'object') {
    return { ok: false, error: 'Invalid JSON body', code: 'INVALID_BODY' }
  }
  const b = body as Record<string, unknown>
  const name = typeof b.name === 'string' ? b.name.trim() : ''
  const email = typeof b.email === 'string' ? b.email.trim() : ''
  const subject = typeof b.subject === 'string' ? b.subject.trim() : ''
  const message = typeof b.message === 'string' ? b.message.trim() : ''
  const priorityRaw = typeof b.priority === 'string' ? b.priority.trim() : 'normal'
  const leadId = typeof b.leadId === 'string' ? b.leadId : undefined
  const accountId = typeof b.accountId === 'string' ? b.accountId : undefined

  if (!name) return { ok: false, error: 'Name is required', code: 'MISSING_NAME' }
  if (!email) return { ok: false, error: 'Email is required', code: 'MISSING_EMAIL' }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: 'Invalid email', code: 'INVALID_EMAIL' }
  if (!subject) return { ok: false, error: 'Subject is required', code: 'MISSING_SUBJECT' }
  if (!message) return { ok: false, error: 'Message is required', code: 'MISSING_MESSAGE' }
  if (!isPriority(priorityRaw)) return { ok: false, error: 'Invalid priority', code: 'INVALID_PRIORITY' }

  const value: CreateTicketInput = {
    name,
    email,
    subject,
    message,
    priority: priorityRaw,
    leadId,
    accountId,
  }
  return { ok: true, value }
}
