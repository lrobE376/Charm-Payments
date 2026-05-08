// src/app/(marketing)/charm-defense/page.tsx
import type { Metadata } from 'next'
import { MagPage } from '@/components/atelier/magazine/MagPage'
import { HeroVisual } from '@/components/atelier/magazine/HeroVisual'

export const metadata: Metadata = {
  title: 'Charm Defense â€” Chargeback protection, included',
  description:
    'Every Charm merchant account comes with built-in chargeback monitoring, automated evidence, and dispute response. No add-on. No upsell. Included.',
}

export default function CharmDefensePage() {
  return (
    <MagPage
      meta={{
        issue: 'Charm Defense Â· St. Louis, MO',
        folio: 'Chargeback protection, included',
        filed: 'Filed 05.06.2026',
      }}
      hero={{
        eyebrow: 'Included Â· No add-on Â· No upcharge',
        headlineLines: [
          { text: 'Chargeback defense,' },
          { text: 'included.', italicTarget: 'included.', size: 'lg' },
        ],
        subtitle:
          'Every Charm merchant account comes with built-in chargeback monitoring, automated evidence, and dispute response. Not an add-on. Not an upsell. Just how we run your account.',
        primaryCta: { label: 'Get Free Rate Audit', href: '/quote' },
        secondaryCta: { label: 'See how it works', href: '#flow' },
        visualVariant: 'defense',
        visualSlot: <HeroVisual variant="defense" caption="FIG. 01 â€” YOUR ACCOUNT Â· LIVE" />,
      }}
      threeCards={{
        eyebrow: 'How it works.',
        headline: 'Three things happen â€” {none of them are your job.}',
        cards: [
          {
            figLabel: 'Stage A Â· You',
            title: 'Subscribe',
            description:
              'Open a Charm merchant account. Defense activates with the same application â€” no second contract, no add-on cart.',
            image: undefined,
          },
          {
            figLabel: 'Stage B Â· Charm',
            title: 'Disputed',
            description:
              "A chargeback hits. Charm intercepts it the moment the issuing bank flags it â€” you don't open a portal, you don't draft a response.",
            image: undefined,
          },
          {
            figLabel: 'Stage C Â· Charm',
            title: 'Response',
            description:
              'Charm assembles the evidence packet, files the response, and recovers the funds. You get a notification when the case is won.',
            image: undefined,
          },
        ],
      }}
      editorialBreak={{
        text: 'Zero merchant effort. Charm handles stages B and C. {You just get paid.}',
      }}
      featureList={{
        eyebrow: "What's included.",
        headline: 'Four things, all {in your account.}',
        columns: 2,
        items: [
          {
            figLabel: 'Alerts',
            title: 'Real-time chargeback alerts',
            description:
              'Visa and Mastercard alerts intercept disputes before they post. Stay below the 1% threshold and protect your processing eligibility â€” automatically.',
          },
          {
            figLabel: 'Evidence',
            title: 'Automated evidence packets',
            description:
              'Charm pulls every relevant data point â€” transaction logs, customer history, shipping confirmation, IP, device fingerprint â€” and assembles a complete, optimized dispute response.',
          },
          {
            figLabel: 'Friendly fraud',
            title: 'Friendly-fraud prevention',
            description:
              'Block known digital shoplifters before they ship. Every Charm merchant benefits from the network â€” repeat offenders flagged across thousands of accounts.',
          },
          {
            figLabel: 'Managed',
            title: 'Fully managed end-to-end',
            description:
              "From the first alert to the final recovery. You get a notification when we win â€” that's the only thing on your plate.",
          },
        ],
      }}
      specTable={{
        eyebrow: "Who it's for.",
        title: 'Built for the businesses we already serve.',
        rows: [
          {
            label: 'Independent retail',
            value:
              'Brick-and-mortar with a card terminal. We catch friendly-fraud disputes before they hit your bottom line â€” without you ever opening a portal.',
          },
          {
            label: 'eCommerce',
            value:
              'Recurring billing means recurring chargebacks. Charm fights every one â€” friendly fraud, "didn\'t recognize," failed-card excuses.',
          },
          {
            label: 'High-risk',
            value:
              "CBD, supplements, digital goods â€” the verticals other processors won't touch. Built-in defense keeps you below the 1% threshold.",
          },
          {
            label: 'SaaS',
            value:
              'Account-sharing disputes, refund-dodging, "I forgot to cancel" â€” Charm\'s evidence packets answer all of it.',
          },
        ],
      }}
      statsRow={{
        eyebrow: 'The numbers.',
        stats: [
          { num: '300%', label: 'Average increase in win rate' },
          { num: '4X', label: 'ROI on every recovered dispute' },
          { num: '90%', label: 'Reduction in chargebacks' },
        ],
      }}
      forestBand={{
        eyebrow: 'Defense, included',
        headline: "Disputes are inevitable. Losing them {isn't.}",
        subtitle:
          'Charm Defense intercepts disputes, builds evidence, and responds on your behalf. Most resolve before they post.',
        stats: [
          { num: '78%', label: 'Average win rate' },
          { num: 'Auto', label: 'Evidence assembly' },
          { num: '0', label: 'Action required from you' },
        ],
        backgroundImage: undefined,
      }}
      finalCta={{
        eyebrow: 'Stop losing.',
        headlineLines: [
          { text: 'Stop losing revenue to' },
          {
            text: 'disputes you should be winning.',
            italicTarget: 'disputes you should be winning.',
            size: 'lg',
          },
        ],
        subtitle:
          'Charm Defense is included in every merchant account. The application is the same one. The pricing is the same one. The protection is automatic.',
        primaryCta: { label: 'Get Free Rate Audit', href: '/quote' },
        secondaryCta: { label: 'Talk to Charm', href: '/contact' },
        gradientVariant: 'defense',
      }}
    />
  )
}




