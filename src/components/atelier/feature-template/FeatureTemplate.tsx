// src/components/atelier/feature-template/FeatureTemplate.tsx
import { FeatureHero } from './FeatureHero'
import { FeatureHowItWorks } from './FeatureHowItWorks'
import { FeatureTierCards } from './FeatureTierCards'
import { FeatureIndustries } from './FeatureIndustries'
import { FeatureFaq } from './FeatureFaq'
import { FeatureFinalCta } from './FeatureFinalCta'
import type { FeatureData } from '@/lib/features/types'

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

      <FeatureFaq {...data.faq} />

      <FeatureFinalCta {...data.finalCta} />
    </>
  )
}
