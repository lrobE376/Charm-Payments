// src/app/prototype/home/page.tsx
import type { Metadata } from 'next'
import { MagPage } from '@/components/atelier/magazine/MagPage'
import { HeroVisual } from '@/components/atelier/magazine/HeroVisual'

export const metadata: Metadata = {
  title: 'Prototype — Charm Payments',
  description: 'Design system prototype, not for public consumption.',
  robots: { index: false, follow: false },
}

export default function PrototypeHomePage() {
  return (
    <MagPage
      meta={{
        issue: 'Issue 01 · St. Louis, MO',
        folio: 'Folio 001 — A new specification',
        filed: 'Filed 05.06.2026',
      }}
      hero={{
        eyebrow: '§ 01 — A new specification',
        headlineLines: [
          { text: 'Stop overpaying' },
          { text: "for what's already yours.", italicTarget: "already yours." },
        ],
        subtitle:
          'Lower rates. Same-day approval. Real human support — in St. Louis, in plain English, on the phone when you need it. For independent merchants who deserve better than the big processors.',
        primaryCta: { label: 'Apply for your account', href: '/apply' },
        secondaryCta: { label: 'Get a free quote', href: '/quote' },
        visualVariant: 'home',
        visualSlot: <HeroVisual variant="home" caption="FIG. 01 — A NEW STANDARD" />,
      }}
      threeCards={{
        eyebrow: '§ 02 — What you actually get',
        headline: 'Three things that change {on day one.}',
        cards: [
          {
            figLabel: 'Fig. 02.A',
            title: 'Lower effective rate',
            description:
              'Interchange-plus pricing means you pay the wholesale rate plus a small, transparent margin. No hidden tiers.',
          },
          {
            figLabel: 'Fig. 02.B',
            title: 'Same-day funding',
            description:
              'Money in your account the same day, not three business days later. Cash flow that respects your business cycle.',
          },
          {
            figLabel: 'Fig. 02.C',
            title: 'A real human',
            description:
              'Call our number and a person picks up — in St. Louis, who knows your account. No tier-one queue, no offshore script.',
          },
        ],
      }}
      pullQuote={{
        eyebrow: '§ 03',
        text: '"Switched from Square last quarter. Charm cut my effective rate by {0.4 points} — and I have a phone number that actually picks up."',
        citeName: 'Marcus T.',
        citeRole: 'Owner · Metro Auto Repair',
        citeLocation: 'St. Louis, MO',
        verifiedDate: 'Verified · 03.2026',
      }}
      comparison={{
        eyebrow: '§ 04 — A comparison',
        headline: 'Two ways to process. {One that respects you.}',
        theirs: {
          label: 'Specimen A — The other guys',
          title: '3.5% + $0.30 per swipe',
          items: [
            'Hidden monthly fees',
            'Statement fees',
            'PCI compliance fees',
            'Chargeback fees up to $50',
            'Phone tree to nowhere',
          ],
        },
        ours: {
          label: 'Specimen B — Charm Payments',
          title: 'Interchange-plus, transparent',
          items: [
            'Zero monthly fees',
            'No statement fees, ever',
            'PCI included free',
            'Chargeback Defense, included',
            'A real human in St. Louis',
          ],
        },
      }}
      finalCta={{
        eyebrow: '§ 05 — Begin',
        headlineLines: [
          { text: 'The audit is free.' },
          { text: "The savings aren't.", italicTarget: "The savings aren't." },
        ],
        subtitle:
          "Send us your latest processing statement. We'll show you what you've been overpaying — and what we'd charge instead. Usually within 24 hours.",
        primaryCta: { label: 'Get a free rate audit', href: '/quote' },
        secondaryCta: { label: 'Apply now', href: '/apply' },
        gradientVariant: 'home',
      }}
    />
  )
}
