export type IntegrationProvider = 'ooma' | 'nmi' | 'zapier' | 'email' | 'unknown'

export interface IntegrationResult {
  success: boolean
  provider: IntegrationProvider
  externalId?: string
  message: string
  raw?: unknown
}
