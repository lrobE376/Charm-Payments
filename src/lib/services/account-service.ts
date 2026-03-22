import { randomUUID } from 'crypto'
import type { CreateMerchantAccountInput, MerchantAccount, MerchantAccountStatus } from '@/types/merchant-account'

const accounts: MerchantAccount[] = [
  {
    id: 'demo-acct-1',
    businessName: 'Demo Coffee Co.',
    ownerName: 'Alex Merchant',
    email: 'alex@example.com',
    phone: '+13145550198',
    status: 'active',
    processor: 'nmi',
    gateway: 'nmi',
    createdAt: new Date().toISOString(),
  },
]

export function createMerchantAccount(input: CreateMerchantAccountInput): MerchantAccount {
  const row: MerchantAccount = {
    id: randomUUID(),
    businessName: input.businessName,
    ownerName: input.ownerName,
    email: input.email,
    phone: input.phone,
    status: input.status ?? 'pending_review',
    processor: input.processor,
    gateway: input.gateway,
    createdAt: new Date().toISOString(),
  }
  accounts.push(row)
  return row
}

export function getMerchantAccounts(): MerchantAccount[] {
  return [...accounts].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
}

export function updateMerchantStatus(id: string, status: MerchantAccountStatus): MerchantAccount | null {
  const i = accounts.findIndex((a) => a.id === id)
  if (i === -1) return null
  const next = { ...accounts[i], status }
  accounts[i] = next
  return next
}
