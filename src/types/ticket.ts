/** Support / ticket model — placeholder for future helpdesk integration. */

export type TicketPriority = 'low' | 'normal' | 'high' | 'urgent'

export type TicketStatus = 'open' | 'pending' | 'in_progress' | 'resolved' | 'closed'

export interface Ticket {
  id: string
  leadId?: string
  accountId?: string
  name: string
  email: string
  subject: string
  message: string
  priority: TicketPriority
  status: TicketStatus
  createdAt: string
}

export type CreateTicketInput = Omit<Ticket, 'id' | 'createdAt' | 'status'> & {
  status?: TicketStatus
}
