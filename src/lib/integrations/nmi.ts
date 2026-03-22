import type { IntegrationResult } from '@/types/integration'

/** TODO: Wire NMI Collect.js, boarding APIs, and transaction endpoints per NMI docs. */

export async function createCustomerProfile(merchantRef: string): Promise<IntegrationResult> {
  return {
    success: true,
    provider: 'nmi',
    message: `Stub: createCustomerProfile (${merchantRef}) — implement NMI customer vault / tokenization flow`,
  }
}

export async function createApplicationPlaceholder(_payload: Record<string, unknown>): Promise<IntegrationResult> {
  return {
    success: true,
    provider: 'nmi',
    message: 'Stub: merchant application boarding — map fields to NMI or acquirer API',
    raw: _payload,
  }
}

export async function createTransactionPlaceholder(_amountCents: number): Promise<IntegrationResult> {
  return {
    success: true,
    provider: 'nmi',
    message: `Stub: transaction for ${_amountCents} cents — use gateway only in PCI-compliant paths`,
  }
}
