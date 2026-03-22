/** Sales / acquisition lead — pipeline model (not a full CRM). */

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'proposal' | 'won' | 'lost' | 'converted'

export type LeadSource =
  | 'website'
  | 'quote'
  | 'contact'
  | 'apply'
  | 'referral'
  | 'partner'
  | 'other'
  | 'manual'

export interface Lead {
  id: string
  name: string
  businessName: string
  email: string
  phone: string
  monthlyVolume: string
  source: LeadSource
  status: LeadStatus
  notes: string
  createdAt: string
  pipedrivePersonId?: string
  pipedriveOrgId?: string
  pipedriveDealId?: string
  pipedriveSyncedAt?: string
}

export type CreateLeadInput = Omit<Lead, 'id' | 'createdAt' | 'status' | 'pipedrivePersonId' | 'pipedriveOrgId' | 'pipedriveDealId' | 'pipedriveSyncedAt'> & {
  status?: LeadStatus
  notes?: string
}
