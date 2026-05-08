import type { Metadata } from 'next'
import { ContactPageClient } from './contact-page-client'

export const metadata: Metadata = {
  title: 'Get Approved in 24â€“48 Hours â€” Contact Charm Payments',
  description:
    'No setup fees. No long-term contracts. Contact Charm Payments for merchant payment processing â€” call, email, or start your application online.',
}

export default function ContactPage() {
  return <ContactPageClient />
}



