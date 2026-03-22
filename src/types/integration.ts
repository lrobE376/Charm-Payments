export type IntegrationProvider = 'pipedrive' | 'ooma' | 'nmi' | 'email' | 'unknown'

export interface IntegrationResult {
  success: boolean
  provider: IntegrationProvider
  externalId?: string
  message: string
  raw?: unknown
}
