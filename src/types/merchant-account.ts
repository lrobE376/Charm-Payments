/** Domain merchant account record for ops dashboards (separate from Supabase `merchants` row shape). */

export type MerchantAccountProcessor = 'nmi' | 'other' | 'unknown'

export type MerchantAccountGateway = 'nmi' | 'other' | 'unknown'

export type MerchantAccountStatus = 'draft' | 'pending_review' | 'active' | 'suspended' | 'closed'

export interface MerchantAccount {
  id: string
  businessName: string
  ownerName: string
  email: string
  phone: string
  status: MerchantAccountStatus
  processor: MerchantAccountProcessor
  gateway: MerchantAccountGateway
  createdAt: string
}

export type CreateMerchantAccountInput = Omit<MerchantAccount, 'id' | 'createdAt' | 'status'> & {
  status?: MerchantAccountStatus
}
