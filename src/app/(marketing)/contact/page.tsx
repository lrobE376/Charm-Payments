import type { Metadata } from 'next'
import { ContactPageClient } from './contact-page-client'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Charm Payments. Talk to our merchant support team about payment processing, rates, and getting approved.',
}

export default function ContactPage() {
  return <ContactPageClient />
}
