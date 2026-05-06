// src/app/prototype/solutions/restaurants/page.tsx
import type { Metadata } from 'next'
import { MagPage } from '@/components/atelier/magazine/MagPage'
import { HeroVisual } from '@/components/atelier/magazine/HeroVisual'

export const metadata: Metadata = {
  title: 'Prototype — Restaurants — Charm Payments',
  description: 'Design system prototype, not for public consumption.',
  robots: { index: false, follow: false },
}

export default function PrototypeRestaurantsPage() {
  return (
    <MagPage
      meta={{
        issue: 'Solutions · Vol. 02',
        folio: 'Folio 003 — Restaurants & food service',
        filed: 'Filed 05.06.2026',
      }}
      hero={{
        eyebrow: '§ Restaurants & food service',
        headlineLines: [
          { text: 'Tighter margins.' },
          { text: 'Tougher choices.' },
          { text: '{A friendlier processor.}', italic: true, italicTarget: 'A friendlier processor.' },
        ],
        subtitle:
          'Independent restaurants run on small percentages. Charm Payments runs interchange-plus pricing, no monthly fees, and same-day deposits — built for places where every basis point counts.',
        primaryCta: { label: 'Get a free rate audit', href: '/quote' },
        secondaryCta: { label: 'Talk to a human', href: '/contact' },
        visualVariant: 'solutions-restaurants',
        visualSlot: (
          <HeroVisual variant="solutions-restaurants" caption="FIG. 01 — A SAMPLE STATEMENT" />
        ),
      }}
      threeCards={{
        eyebrow: '§ 02 — What restaurants tell us',
        headline: "The hidden fees you can't {read on a statement.}",
        cards: [
          {
            figLabel: 'Fig. 02.A',
            title: 'Tip-adjustment fees',
            description:
              "Most processors charge again when servers add tips after the close. We don't.",
          },
          {
            figLabel: 'Fig. 02.B',
            title: 'Next-day funding',
            description:
              'Cash flow matters at 6am when produce shows up. Same-day batch on every account.',
          },
          {
            figLabel: 'Fig. 02.C',
            title: 'Card-present pricing',
            description:
              'Dipped, swiped, tapped — same low rate. No keyed-in surcharges for tableside payments.',
          },
        ],
      }}
      pullQuote={{
        eyebrow: '§ 03',
        text: '"We were paying Toast 3.49% plus the swipe fee. Charm came in at {2.31% all-in.} That\'s {$8,400 a year} back in our pocket — at a place doing $58k a month."',
        citeName: 'Diane R.',
        citeRole: 'Owner · Provel Cucina',
        citeLocation: 'Maplewood, MO',
        verifiedDate: 'Verified · 02.2026',
      }}
      comparison={{
        eyebrow: '§ 04 — Restaurant processing, compared',
        headline: 'Two ways to handle Saturday night. {One that respects the floor.}',
        theirs: {
          label: 'Specimen A — Toast / Square / generic processors',
          title: '3.49% + tip-adjustment fees',
          items: [
            'Tip-adjustment surcharges',
            'Next-day or 2-day funding',
            'Higher card-not-present rates',
            'Restaurant industry surcharge',
            'Phone tree for support',
          ],
        },
        ours: {
          label: 'Specimen B — Charm Payments',
          title: '2.31% interchange-plus, all-in',
          items: [
            'No tip-adjustment fees, ever',
            'Same-day batch funding',
            'Card-present rates everywhere',
            'No industry surcharge',
            'St. Louis support, real human',
          ],
        },
      }}
      finalCta={{
        eyebrow: '§ 05 — Begin',
        headlineLines: [
          { text: 'Send us your last statement.' },
          {
            text: "{We'll show you the difference.}",
            italic: true,
            italicTarget: "We'll show you the difference.",
          },
        ],
        subtitle:
          'No commitment. No upsell. Just a real number against your real volume — usually within 24 hours.',
        primaryCta: { label: 'Get a free rate audit', href: '/quote' },
        secondaryCta: { label: 'Apply now', href: '/apply' },
        gradientVariant: 'solutions-restaurants',
      }}
    />
  )
}
