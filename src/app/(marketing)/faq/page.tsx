import type { Metadata } from 'next'
import { FaqPageClient } from './faq-page-client'

export const metadata: Metadata = {
  title: 'FAQ — Payment Processing Questions',
  description:
    'Get answers to common questions about Charm Payments merchant accounts, processing fees, setup time, supported payment types, and more.',
}

export default function FaqPage() {
  return <FaqPageClient />
}
