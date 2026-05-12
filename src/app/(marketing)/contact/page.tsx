import type { Metadata } from 'next'
import { ContactPageClient } from './contact-page-client'

export const metadata: Metadata = {
  title: 'Contact Charm Payments',
  description:
    'Talk with Charm Payments about payment processing, merchant accounts, gateways, chargeback protection, and payment infrastructure.',
}

export default function ContactPage() {
  return <ContactPageClient />
}



