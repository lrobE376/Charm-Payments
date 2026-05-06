// src/lib/features/types.ts
import type { FeatureHeroProps } from '@/components/atelier/feature-template/FeatureHero'
import type {
  FeatureHowItWorksProps,
} from '@/components/atelier/feature-template/FeatureHowItWorks'
import type {
  FeatureTierCardsProps,
  TierCard,
} from '@/components/atelier/feature-template/FeatureTierCards'
import type {
  FeatureIndustriesProps,
} from '@/components/atelier/feature-template/FeatureIndustries'
import type { FeatureFaqProps, FaqItem } from '@/components/atelier/feature-template/FeatureFaq'
import type {
  FeatureFinalCtaProps,
} from '@/components/atelier/feature-template/FeatureFinalCta'

export type FeatureData = {
  slug: string
  meta: { title: string; description: string }
  hero: FeatureHeroProps
  bodyVariant: 'how-it-works' | 'tier-cards'
  howItWorks?: FeatureHowItWorksProps
  tierCards?: FeatureTierCardsProps
  industries: FeatureIndustriesProps
  faq: FeatureFaqProps
  finalCta: FeatureFinalCtaProps
}

export type { TierCard, FaqItem }
