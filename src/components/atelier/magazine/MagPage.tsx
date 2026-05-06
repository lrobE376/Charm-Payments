// src/components/atelier/magazine/MagPage.tsx
import { MagMetaStrip, type MagMetaStripProps } from './MagMetaStrip'
import { MagHero, type MagHeroProps } from './MagHero'
import { MagThreeCardRow, type MagThreeCardRowProps } from './MagThreeCardRow'
import { MagFeatureList, type MagFeatureListProps } from './MagFeatureList'
import { MagPullQuote, type MagPullQuoteProps } from './MagPullQuote'
import { MagComparison, type MagComparisonProps } from './MagComparison'
import { MagFinalCta, type MagFinalCtaProps } from './MagFinalCta'

export type MagPageProps = {
  meta: MagMetaStripProps
  hero: MagHeroProps
  threeCards: MagThreeCardRowProps
  featureList?: MagFeatureListProps
  pullQuote: MagPullQuoteProps
  comparison: MagComparisonProps
  finalCta: MagFinalCtaProps
}

export function MagPage({
  meta,
  hero,
  threeCards,
  featureList,
  pullQuote,
  comparison,
  finalCta,
}: MagPageProps) {
  return (
    <>
      <MagMetaStrip {...meta} />
      <MagHero {...hero} />
      <MagThreeCardRow {...threeCards} />
      {featureList ? <MagFeatureList {...featureList} /> : null}
      <MagPullQuote {...pullQuote} />
      <MagComparison {...comparison} />
      <MagFinalCta {...finalCta} />
    </>
  )
}
