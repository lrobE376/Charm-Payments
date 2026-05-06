// src/components/atelier/magazine/MagPage.tsx
import { MagMetaStrip, type MagMetaStripProps } from './MagMetaStrip'
import { MagHero, type MagHeroProps } from './MagHero'
import { MagThreeCardRow, type MagThreeCardRowProps } from './MagThreeCardRow'
import { MagEditorialBreak, type MagEditorialBreakProps } from './MagEditorialBreak'
import { MagFeatureList, type MagFeatureListProps } from './MagFeatureList'
import { MagPullQuote, type MagPullQuoteProps } from './MagPullQuote'
import { MagComparison, type MagComparisonProps } from './MagComparison'
import { MagFinalCta, type MagFinalCtaProps } from './MagFinalCta'

export type MagPageProps = {
  meta: MagMetaStripProps
  hero: MagHeroProps
  threeCards: MagThreeCardRowProps
  editorialBreak?: MagEditorialBreakProps
  featureList?: MagFeatureListProps
  pullQuote: MagPullQuoteProps
  comparison: MagComparisonProps
  finalCta: MagFinalCtaProps
}

export function MagPage({
  meta,
  hero,
  threeCards,
  editorialBreak,
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
      {editorialBreak ? <MagEditorialBreak {...editorialBreak} /> : null}
      {featureList ? <MagFeatureList {...featureList} /> : null}
      <MagPullQuote {...pullQuote} />
      <MagComparison {...comparison} />
      <MagFinalCta {...finalCta} />
    </>
  )
}
