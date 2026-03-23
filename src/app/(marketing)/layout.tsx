import type { Metadata } from 'next'
import Navbar from '@/components/marketing/Navbar'
import Footer from '@/components/marketing/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import OfferStrip from '@/components/conversion/OfferStrip'

export const metadata: Metadata = {
  title: 'Payment Processing Built for Business',
  description:
    'Charm Payments gives St. Louis small businesses enterprise-grade payment processing — credit cards, ACH, Apple Pay, and more. No long-term contracts. Powered by NMI and First Data.',
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 shadow-sm">
        <OfferStrip />
        <Navbar />
      </header>
      <main id="main-content">{children}</main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
