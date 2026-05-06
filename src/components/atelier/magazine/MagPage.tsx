// src/components/atelier/magazine/MagPage.tsx
import { MagMetaStrip, type MagMetaStripProps } from './MagMetaStrip'
import { MagHero, type MagHeroProps } from './MagHero'
import { MagMarquee, type MagMarqueeProps } from './MagMarquee'
import { MagThreeCardRow, type MagThreeCardRowProps } from './MagThreeCardRow'
import { MagEditorialBreak, type MagEditorialBreakProps } from './MagEditorialBreak'
import { MagFeatureList, type MagFeatureListProps } from './MagFeatureList'
import { MagSpecTable, type MagSpecTableProps } from './MagSpecTable'
import { MagPullQuote, type MagPullQuoteProps } from './MagPullQuote'
import { MagPullQuoteRow, type MagPullQuoteRowProps } from './MagPullQuoteRow'
import { MagStatsRow, type MagStatsRowProps } from './MagStatsRow'
import { MagComparison, type MagComparisonProps } from './MagComparison'
import { MagFinalCta, type MagFinalCtaProps } from './MagFinalCta'
import { MagForestBand, type MagForestBandProps } from './MagForestBand'
import { MagGradientBreak } from './MagGradientBreak'

export type MagPageProps = {
  meta: MagMetaStripProps
  hero: MagHeroProps
  marquee?: MagMarqueeProps
  threeCards?: MagThreeCardRowProps
  editorialBreak?: MagEditorialBreakProps
  featureList?: MagFeatureListProps
  specTable?: MagSpecTableProps
  pullQuote?: MagPullQuoteProps
  pullQuoteRow?: MagPullQuoteRowProps
  statsRow?: MagStatsRowProps
  forestBand?: MagForestBandProps
  comparison?: MagComparisonProps
  finalCta?: MagFinalCtaProps
}

export function MagPage({
  meta,
  hero,
  marquee,
  threeCards,
  editorialBreak,
  featureList,
  specTable,
  pullQuote,
  pullQuoteRow,
  statsRow,
  forestBand,
  comparison,
  finalCta,
}: MagPageProps) {
  return (
    <>
      <MagMetaStrip {...meta} />
      <MagHero {...hero} />
      {marquee ? <MagMarquee {...marquee} /> : null}
      {threeCards ? <MagThreeCardRow {...threeCards} /> : null}
      {editorialBreak ? <MagEditorialBreak {...editorialBreak} /> : null}
      {featureList ? <MagFeatureList {...featureList} /> : null}
      {specTable ? <MagSpecTable {...specTable} /> : null}
      {pullQuote ? <MagPullQuote {...pullQuote} /> : null}
      {pullQuoteRow ? <MagPullQuoteRow {...pullQuoteRow} /> : null}
      {statsRow ? <MagStatsRow {...statsRow} /> : null}
      {forestBand ? (
        <>
          <MagGradientBreak variant="light-to-forest" />
          <MagForestBand {...forestBand} />
          <MagGradientBreak variant="forest-to-light" />
        </>
      ) : null}
      {comparison ? <MagComparison {...comparison} /> : null}
      {finalCta ? (
        <>
          <MagGradientBreak variant="light-to-warm" />
          <MagFinalCta {...finalCta} />
        </>
      ) : null}
    </>
  )
}
