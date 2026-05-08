// src/app/prototype/charm-defense/page.tsx
import type { Metadata } from 'next'
import { MagPage } from '@/components/atelier/magazine/MagPage'
import { HeroVisual } from '@/components/atelier/magazine/HeroVisual'

export const metadata: Metadata = {
  title: 'Prototype â€” Charm Defense â€” Charm Payments',
  description: 'Design system prototype, not for public consumption.',
  robots: { index: false, follow: false },
}

export default function PrototypeCharmDefensePage() {
  return (
    <MagPage
      meta={{
        issue: 'Defense Â· Vol. 03',
        folio: 'Folio 004 â€” The nine gates',
        filed: 'Filed 05.06.2026',
      }}
      hero={{
        eyebrow: 'Charm Defense.',
        headlineLines: [
          { text: 'Disputes are inevitable.' },
          { text: "Losing them {isn't.}", italicTarget: "isn't.", size: 'lg' },
        ],
        subtitle:
          'Charm Defense is a 9-gate fraud and chargeback prevention system, built into every Charm Payments account. We intercept disputes, build evidence, and respond on your behalf â€” most resolve before they post.',
        primaryCta: { label: 'See how it works', href: '#flow' },
        secondaryCta: { label: 'Get Free Rate Audit', href: '/quote' },
        visualVariant: 'defense',
        visualSlot: <HeroVisual variant="defense" caption="FIG. 01 â€” THE NINE GATES" />,
      }}
      editorialBreak={{
        text: 'Most processors wait for disputes. Charm Defense stops them {before they start.}',
      }}
      threeCards={{
        eyebrow: 'How Charm Defense protects you.',
        headline: 'Three layers between your business and {a chargeback.}',
        cards: [
          {
            figLabel: 'Fig. 02.A',
            title: 'Pre-transaction',
            description:
              'Risk scoring, address verification, CVV checking, and velocity monitoring â€” every transaction screened before it settles.',
            image: undefined,
          },
          {
            figLabel: 'Fig. 02.B',
            title: 'Mid-transaction',
            description:
              "Dispute intercept and pre-arbitration network alerts catch potential chargebacks before they're filed.",
            image: undefined,
          },
          {
            figLabel: 'Fig. 02.C',
            title: 'Post-transaction',
            description:
              'Evidence assembly, response drafting, and representment on your behalf â€” most disputes resolved without action from you.',
            image: undefined,
          },
        ],
      }}
      featureList={{
        eyebrow: 'The nine gates.',
        headline: 'Every defense, automatic. {Every gate, included.}',
        columns: 3,
        items: [
          {
            figLabel: 'Gate 01',
            title: 'Risk scoring',
            description:
              'Real-time fraud scoring on every transaction using merchant-category and behavioral signals.',
          },
          {
            figLabel: 'Gate 02',
            title: 'Address verification',
            description:
              'AVS matching prevents card-not-present fraud at the point of authorization.',
          },
          {
            figLabel: 'Gate 03',
            title: 'CVV verification',
            description:
              'Required on all keyed-in transactions, blocking the most common fraud pattern.',
          },
          {
            figLabel: 'Gate 04',
            title: 'Velocity monitoring',
            description:
              'Per-card and per-IP rate limits prevent enumeration and bulk-test attacks.',
          },
          {
            figLabel: 'Gate 05',
            title: '3D Secure',
            description:
              'Optional 3DS challenge for high-risk or high-ticket transactions, shifting liability to the issuer.',
          },
          {
            figLabel: 'Gate 06',
            title: 'Dispute intercept',
            description:
              "Network alerts catch potential disputes before they're filed, giving you a chance to refund and resolve.",
          },
          {
            figLabel: 'Gate 07',
            title: 'Evidence assembly',
            description:
              'When a dispute hits, we assemble shipping records, signatures, and proof of delivery automatically.',
          },
          {
            figLabel: 'Gate 08',
            title: 'Representment',
            description:
              'We draft and submit your response, including all required compelling evidence, on your behalf.',
          },
          {
            figLabel: 'Gate 09',
            title: 'Win-rate reporting',
            description:
              'Monthly dashboard showing your dispute win rate and which categories drive the most chargebacks.',
          },
        ],
      }}
      forestBand={{
        eyebrow: 'Nine gates, included',
        headline: "Disputes are inevitable. Losing them {isn't.}",
        subtitle:
          'Charm Defense intercepts disputes, builds evidence, and responds on your behalf. Most resolve before they post.',
        stats: [
          { num: '78%', label: 'Average win rate' },
          { num: 'Auto', label: 'Evidence assembly' },
          { num: '0', label: 'Action required from you' },
        ],
      }}
      pullQuote={{
        eyebrow: 'Â§ 04',
        text: '"We were losing {18% of disputes} we got. Charm Defense brought it to {78% won.} On a card-not-present business, that\'s the difference between profit and breaking even."',
        citeName: 'James K.',
        citeRole: 'Owner Â· K&K Outdoor Supply',
        citeLocation: 'Chesterfield, MO',
        verifiedDate: 'Verified Â· 01.2026',
      }}
      comparison={{
        eyebrow: 'With Defense, vs. without.',
        headline: 'Two paths through a chargeback. {Only one ends with your money.}',
        theirs: {
          label: 'Specimen A â€” Standard processors',
          title: 'You handle disputes alone',
          items: [
            'No dispute intercept',
            'You assemble evidence yourself',
            'You write the response',
            'Average 12% win rate',
            'Most disputes go uncontested',
          ],
        },
        ours: {
          label: 'Specimen B â€” Charm Defense',
          title: 'We respond on your behalf',
          items: [
            'Network alert intercepts',
            'Auto-assembled evidence',
            'Drafted response, ready to send',
            'Average 60-78% win rate',
            'You see the result, not the work',
          ],
        },
      }}
      finalCta={{
        eyebrow: 'Begin.',
        headlineLines: [
          { text: 'Disputes find every business.' },
          {
            text: "{Most don't fight back.}",
            italic: true,
            italicTarget: "Most don't fight back.",
          },
        ],
        subtitle:
          'Charm Defense is included in every Charm Payments account. Apply once, get the full system â€” no add-on, no surcharge.',
        primaryCta: { label: 'Get Free Rate Audit', href: '/quote' },
        secondaryCta: { label: 'Get a free rate audit', href: '/quote' },
        gradientVariant: 'defense',
      }}
    />
  )
}




