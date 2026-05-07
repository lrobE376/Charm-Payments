// src/components/atelier/magazine/MagPage.tsx
import { MagMetaStrip, type MagMetaStripProps } from './MagMetaStrip'
import { MagHero, type MagHeroProps } from './MagHero'
import { MagMarquee, type MagMarqueeProps } from './MagMarquee'
import { MagThreeCardRow, type MagThreeCardRowProps } from './MagThreeCardRow'
import { MagStickyCardScroll, type MagStickyCardScrollProps } from './MagStickyCardScroll'
import { MagEditorialBreak, type MagEditorialBreakProps } from './MagEditorialBreak'
import { MagFeatureList, type MagFeatureListProps } from './MagFeatureList'
import { MagSpecTable, type MagSpecTableProps } from './MagSpecTable'
import { MagPullQuote, type MagPullQuoteProps } from './MagPullQuote'
import { MagPullQuoteRow, type MagPullQuoteRowProps } from './MagPullQuoteRow'
import { MagStatsRow, type MagStatsRowProps } from './MagStatsRow'
import { MagFaq, type MagFaqProps } from './MagFaq'
import { MagComparison, type MagComparisonProps } from './MagComparison'
import { MagFinalCta, type MagFinalCtaProps } from './MagFinalCta'
import { MagForestBand, type MagForestBandProps } from './MagForestBand'
import { MagGradientBreak } from './MagGradientBreak'

export type MagPageProps = {
  variant?: 'standard' | 'cinematic-tier2'
  meta: MagMetaStripProps
  hero: MagHeroProps
  marquee?: MagMarqueeProps
  threeCards?: MagThreeCardRowProps
  stickyCardScroll?: MagStickyCardScrollProps
  editorialBreak?: MagEditorialBreakProps
  featureList?: MagFeatureListProps
  specTable?: MagSpecTableProps
  pullQuote?: MagPullQuoteProps
  pullQuoteRow?: MagPullQuoteRowProps
  statsRow?: MagStatsRowProps
  faq?: MagFaqProps
  forestBand?: MagForestBandProps
  comparison?: MagComparisonProps
  finalCta?: MagFinalCtaProps
}

export function MagPage({
  variant = 'standard',
  meta,
  hero,
  marquee,
  threeCards,
  stickyCardScroll,
  editorialBreak,
  featureList,
  specTable,
  pullQuote,
  pullQuoteRow,
  statsRow,
  faq,
  forestBand,
  comparison,
  finalCta,
}: MagPageProps) {
  const tier2 = variant === 'cinematic-tier2'
  const pullQuoteResolved: MagPullQuoteProps | undefined = pullQuote
    ? { ...pullQuote, variant: pullQuote.variant ?? (tier2 ? 'cinematic-tier2' : 'standard') }
    : undefined

  return (
    <>
      <MagMetaStrip {...meta} />
      <MagHero {...hero} />
      {marquee ? <MagMarquee {...marquee} /> : null}
      {stickyCardScroll ? <MagStickyCardScroll {...stickyCardScroll} /> : null}
      {threeCards ? <MagThreeCardRow {...threeCards} /> : null}
      {editorialBreak ? <MagEditorialBreak {...editorialBreak} /> : null}
      {featureList ? <MagFeatureList {...featureList} /> : null}
      {specTable ? <MagSpecTable {...specTable} /> : null}
      {pullQuoteResolved ? <MagPullQuote {...pullQuoteResolved} /> : null}
      {pullQuoteRow ? <MagPullQuoteRow {...pullQuoteRow} /> : null}
      {statsRow ? <MagStatsRow {...statsRow} /> : null}
      {faq ? <MagFaq {...faq} /> : null}
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
