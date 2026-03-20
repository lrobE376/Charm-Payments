import type { Metadata } from 'next'
import Navbar from '@/components/marketing/Navbar'
import Footer from '@/components/marketing/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Payment Processing Built for Business',
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
