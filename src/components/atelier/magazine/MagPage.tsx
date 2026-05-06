// src/components/atelier/magazine/MagPage.tsx
import { MagMetaStrip, type MagMetaStripProps } from './MagMetaStrip'
import { MagHero, type MagHeroProps } from './MagHero'
import { MagThreeCardRow, type MagThreeCardRowProps } from './MagThreeCardRow'
import { MagPullQuote, type MagPullQuoteProps } from './MagPullQuote'
import { MagComparison, type MagComparisonProps } from './MagComparison'
import { MagFinalCta, type MagFinalCtaProps } from './MagFinalCta'

export type MagPageProps = {
  meta: MagMetaStripProps
  hero: MagHeroProps
  threeCards: MagThreeCardRowProps
  pullQuote: MagPullQuoteProps
  comparison: MagComparisonProps
  finalCta: MagFinalCtaProps
}

export function MagPage({ meta, hero, threeCards, pullQuote, comparison, finalCta }: MagPageProps) {
  return (
    <>
      <MagMetaStrip {...meta} />
      <MagHero {...hero} />
      <MagThreeCardRow {...threeCards} />
      <MagPullQuote {...pullQuote} />
      <MagComparison {...comparison} />
      <MagFinalCta {...finalCta} />
    </>
  )
}
