// src/app/(marketing)/page.tsx
import { Hero } from '@/components/atelier/sections/Hero'
import { StatsRow } from '@/components/atelier/sections/StatsRow'
import { Marquee } from '@/components/atelier/sections/Marquee'
import { WhyWeWin } from '@/components/atelier/sections/WhyWeWin'
import { WhatChanges } from '@/components/atelier/sections/WhatChanges'
import { HowItWorks } from '@/components/atelier/sections/HowItWorks'
import { StLouisBuilt } from '@/components/atelier/sections/StLouisBuilt'
import { MerchantReviews } from '@/components/atelier/sections/MerchantReviews'
import { StopOverpaying } from '@/components/atelier/sections/StopOverpaying'

export default function HomePage() {
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
