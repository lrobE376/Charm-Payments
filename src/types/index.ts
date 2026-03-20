export type TransactionStatus = 'approved' | 'declined' | 'pending' | 'settled' | 'refunded' | 'disputed' | 'voided'
export type CardType = 'visa' | 'mastercard' | 'amex' | 'discover' | 'other'
export type MerchantStatus = 'pending' | 'approved' | 'suspended' | 'closed'

export interface Merchant {
  id: string
  user_id: string
  business_name: string
  dba_name: string | null
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  ein: string
  status: MerchantStatus
  mid: string | null
  plan: 'starter' | 'growth' | 'enterprise'
  created_at: string
}

export interface Transaction {
  id: string
  merchant_id: string
  transaction_id: string
  amount: number
  fee: number
  net_amount: number
  status: TransactionStatus
  card_type: CardType
  card_last4: string
  cardholder_name: string
  auth_code: string | null
  response_text: string
  created_at: string
  settled_at: string | null
}

export interface Payout {
  id: string
  merchant_id: string
  amount: number
  fee: number
  net_amount: number
  bank_last4: string
  status: 'pending' | 'processing' | 'deposited' | 'failed'
  estimated_deposit: string
  deposited_at: string | null
  created_at: string
}

export interface Dispute {
  id: string
  merchant_id: string
  transaction_id: string
  amount: number
  reason_code: string
  reason_description: string
  status: 'open' | 'under_review' | 'won' | 'lost' | 'expired'
  response_deadline: string
  created_at: string
}
