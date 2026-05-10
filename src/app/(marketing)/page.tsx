import type { Metadata } from 'next'
import { HomePage } from '@/components/home/HomePage'

export const metadata: Metadata = {
  title: 'Charm Payments - Premium Merchant Infrastructure',
  description:
    'Take payments, manage your business, and keep everything in one place with premium merchant infrastructure from Charm Payments.',
}

export default function MarketingHomePage() {
  return <HomePage />
}
