// src/components/atelier/feature-template/FeatureTemplate.tsx
import { FeatureHero } from './FeatureHero'
import { FeatureHowItWorks } from './FeatureHowItWorks'
import { FeatureTierCards } from './FeatureTierCards'
import { FeatureIndustries } from './FeatureIndustries'
import { FeatureFaq } from './FeatureFaq'
import { FeatureFinalCta } from './FeatureFinalCta'
import { MagForestBand } from '@/components/atelier/magazine/MagForestBand'
import { MagGradientBreak } from '@/components/atelier/magazine/MagGradientBreak'
import type { FeatureData } from '@/lib/features/types'

const UNIVERSAL_FOREST_BAND = {
  eyebrow: 'Every feature, included',
  headline: 'Apply once. Get the {whole stack.}',
  subtitle:
    'Charm Payments accounts come with the full toolkit — no add-ons, no tier upgrades, no surprise charges.',
  stats: [
    { num: '0', label: 'Add-on fees' },
    { num: 'Same day', label: 'Approval target' },
    { num: '1', label: 'Application' },
  ],
}

export function FeatureTemplate({ data }: { data: FeatureData }) {
  return (
    <>
      <FeatureHero {...data.hero} />

      {data.bodyVariant === 'how-it-works' && data.howItWorks ? (
        <FeatureHowItWorks {...data.howItWorks} />
      ) : null}

      {data.bodyVariant === 'tier-cards' && data.tierCards ? (
        <FeatureTierCards {...data.tierCards} />
      ) : null}

      <FeatureIndustries {...data.industries} />

      <MagGradientBreak variant="light-to-forest" />
      <MagForestBand {...UNIVERSAL_FOREST_BAND} />
      <MagGradientBreak variant="forest-to-light" />

      <FeatureFaq {...data.faq} />

      <MagGradientBreak variant="light-to-warm" />
      <FeatureFinalCta {...data.finalCta} />
    </>
  )
}



