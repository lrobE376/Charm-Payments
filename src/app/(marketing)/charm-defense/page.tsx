// src/app/(marketing)/charm-defense/page.tsx
import type { Metadata } from 'next'
import { DefenseHero } from '@/components/atelier/charm-defense/DefenseHero'
import { DefenseFlow } from '@/components/atelier/charm-defense/DefenseFlow'
import { DefenseIncluded } from '@/components/atelier/charm-defense/DefenseIncluded'
import { DefenseUseCases } from '@/components/atelier/charm-defense/DefenseUseCases'
import { DefenseNumbers } from '@/components/atelier/charm-defense/DefenseNumbers'

export const metadata: Metadata = {
  title: 'Charm Defense — Chargeback protection, included',
  description:
    'Every Charm merchant account comes with built-in chargeback monitoring, automated evidence, and dispute response. No add-on. No upsell. Included.',
}

export default function CharmDefensePage() {
  return (
    <>
      <DefenseHero />
      <DefenseFlow />
      <DefenseIncluded />
      <DefenseUseCases />
      <DefenseNumbers />
    </>
  )
}
