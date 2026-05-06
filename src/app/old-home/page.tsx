// src/app/old-home/page.tsx
// Frozen snapshot of the Atelier-dark homepage (pre-Apple-canvas migration).
// Used as emergency rollback if the new homepage at / needs to be reverted.
import type { Metadata } from 'next'
import { Hero } from '@/components/atelier/sections/Hero'
import { StatsRow } from '@/components/atelier/sections/StatsRow'
import { Marquee } from '@/components/atelier/sections/Marquee'
import { WhyWeWin } from '@/components/atelier/sections/WhyWeWin'
import { WhatChanges } from '@/components/atelier/sections/WhatChanges'
import { HowItWorks } from '@/components/atelier/sections/HowItWorks'
import { StLouisBuilt } from '@/components/atelier/sections/StLouisBuilt'
import { MerchantReviews } from '@/components/atelier/sections/MerchantReviews'
import { StopOverpaying } from '@/components/atelier/sections/StopOverpaying'

export const metadata: Metadata = {
  title: 'Old Homepage Backup — Charm Payments',
  description: 'Frozen pre-migration snapshot of the homepage. Not for public consumption.',
  robots: { index: false, follow: false },
}

export default function OldHomePage() {
  return (
    <>
      <Hero />
      <StatsRow />
      <Marquee />
      <WhyWeWin />
      <WhatChanges />
      <HowItWorks />
      <StLouisBuilt />
      <MerchantReviews />
      <StopOverpaying />
    </>
  )
}
