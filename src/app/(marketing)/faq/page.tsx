import type { Metadata } from 'next'
import { FaqPageClient } from './faq-page-client'

export const metadata: Metadata = {
  title: 'FAQ — Payment Processing Questions',
  description:
    'Answers to the most common merchant questions about Charm Payments — rates, fees, approvals, chargebacks, integrations, and more.',
}

export default function FaqPage() {
  return <FaqPageClient />
}
