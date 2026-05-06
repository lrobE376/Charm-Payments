import type { Metadata } from 'next'
import { HeaderAtelier } from '@/components/marketing/HeaderAtelier'
import { FooterAtelier } from '@/components/marketing/FooterAtelier'

export const metadata: Metadata = {
  title: 'Payment Processing Built for Business',
  description:
    'Charm Payments gives St. Louis small businesses enterprise-grade payment processing — credit cards, ACH, Apple Pay, and more. No long-term contracts.',
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderAtelier />
      <main id="main-content">{children}</main>
      <FooterAtelier />
    </>
  )
}
