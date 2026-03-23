export interface CharmFinancialAccount {
  id: string
  merchantId: string
  stripeAccountId: string
  financialAccountId: string
  balance: number
  currency: string
  status: 'active' | 'closed' | 'pending'
  createdAt: string
}

export interface CharmTransaction {
  id: string
  financialAccountId: string
  amount: number
  currency: string
  type: 'credit' | 'debit'
  description: string
  status: 'posted' | 'pending' | 'void'
  createdAt: string
}

export interface CharmOutboundTransfer {
  id: string
  financialAccountId: string
  amount: number
  currency: string
  destinationRoutingNumber: string
  destinationAccountNumber: string
  destinationAccountHolderName: string
  transferType: 'ach' | 'wire'
  status: 'processing' | 'posted' | 'failed' | 'canceled'
  createdAt: string
}

export interface CharmConnectAccount {
  id: string
  merchantId: string
  stripeAccountId: string
  email: string
  businessName: string
  status: 'pending' | 'active' | 'restricted'
  createdAt: string
}
