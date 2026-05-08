// src/app/(marketing)/page.tsx
import type { Metadata } from 'next'
import { MagPage } from '@/components/atelier/magazine/MagPage'
import { HeroVisual } from '@/components/atelier/magazine/HeroVisual'

export const metadata: Metadata = {
  title: 'Charm Connect - Merchant Platform Layer',
  description:
    'Charm Connect helps merchants accept payments, reduce chargebacks, and manage the business from one simple platform.',
}

export default function HomePage() {
  return (
    <MagPage
      meta={{
        issue: 'Charm Payments Â· St. Louis, MO',
        folio: 'Accept payments. Reduce chargebacks. Manage the business.',
        filed: 'Filed 05.06.2026',
      }}
      hero={{
        eyebrow: 'Premium merchant infrastructure.',
        headlineLines: [
          { text: 'Charm Connect' },
          { text: 'Is the Merchant Layer' },
          { text: 'Your Business Actually Uses.', size: 'lg' },
        ],
        subtitle:
          "Accept payments, reduce chargebacks, and manage your business from one simple platform. Stripe Connect can handle connected-account onboarding and core payment infrastructure when configured; Charm owns the branded merchant experience, rate-audit funnel, dashboard, and chargeback-support layer.",
        primaryCta: { label: 'Get Free Rate Audit', href: '/quote' },
        secondaryCta: { label: 'Talk to Charm', href: '/contact' },
        visualVariant: 'home',
        visualSlot: <HeroVisual variant="home" caption="FIG. 01 â€” A NEW STANDARD" />,
      }}
      marquee={{
        eyebrow: 'Accepted everywhere',
        items: [
          { name: 'VISA' },
          { name: 'MASTERCARD' },
          { name: 'AMEX' },
          { name: 'DISCOVER' },
          { name: 'ACH/eCHECK' },
          { name: 'APPLE PAY' },
          { name: 'GOOGLE PAY' },
          { name: 'VIRTUAL TERMINAL' },
          { name: 'RECURRING BILLING' },
          { name: 'PCI DSS' },
        ],
        speed: 'normal',
      }}
      featureList={{
        eyebrow: 'What changes.',
        headline: 'Run the merchant workflow {without juggling} disconnected tools.',
        columns: 6,
        items: [
          {
            figLabel: 'Fig. 04.A',
            title: 'Rate Audit Intake',
            description:
              'Collect the statement, business context, and pain points before a merchant commits to onboarding.',
          },
          {
            figLabel: 'Fig. 04.B',
            title: 'Stripe Connect-Ready Onboarding',
            description: 'Prepared for hosted or embedded connected-account onboarding when configuration is live.',
          },
          {
            figLabel: 'Fig. 04.C',
            title: 'Merchant Dashboard',
            description:
              'Profile, onboarding status, payments overview, support, platform fees, and dispute work in one place.',
          },
          {
            figLabel: 'Fig. 04.D',
            title: 'Charm Defense',
            description:
              'Nine Gates chargeback support turns disputes from a panic workflow into a documented operating system.',
          },
          {
            figLabel: 'Fig. 04.E',
            title: 'Business Tools',
            description: 'Invoices, payment links, card tools, and support workflows under one merchant-facing brand.',
          },
          {
            figLabel: 'Fig. 04.F',
            title: 'Honest Infrastructure',
            description:
              'Charm is not presented as a bank or processor. The platform sits above payment infrastructure and owns the merchant experience.',
          },
        ],
      }}
      threeCards={{
        eyebrow: 'How it works.',
        headline: 'Three steps to a platform that {works for the merchant.}',
        cards: [
          {
            figLabel: 'STEP 01',
            title: 'Start with a rate audit',
            description:
              'Tell us about your business, current setup, and statement pain before you commit to onboarding.',
            image: '/images/pexels-rdne-7697434.jpg',
            imageAlt: 'Business owner reviewing a merchant payment application on a tablet.',
          },
          {
            figLabel: 'STEP 02',
            title: 'Map the operating layer',
            description:
              'Charm reviews payment workflow, chargeback exposure, and which tools belong in your merchant dashboard.',
            image: '/images/pexels-pavel-danilyuk-6612717.jpg',
            imageAlt: 'Payment terminal and countertop setup ready for merchant approval.',
          },
          {
            figLabel: 'STEP 03',
            title: 'Onboard when ready',
            description:
              "When onboarding is ready, Stripe Connect can handle account verification while Charm gives the merchant one branded operating layer.",
            image: '/images/sumup-uALOu8Rdv9M-unsplash.jpg',
            imageAlt: 'Customer completing a card payment at checkout.',
          },
        ],
      }}
      specTable={{
        eyebrow: 'St. Louis built.',
        title: 'Built for the business owners who keep St. Louis running.',
        rows: [
          { label: 'City', value: 'St. Louis, Missouri' },
          { label: 'Founded', value: '2024' },
          { label: 'Support', value: 'Local Â· same time zone' },
          { label: 'Scope', value: 'St. Louis & nationwide' },
          { label: 'Documentary', value: 'Stripe Connect-ready merchant layer' },
          { label: 'Frame 001', value: 'Barber checking his Charm dashboard between clients.' },
          { label: 'Geo', value: 'St. Louis, MO Â· 38.6270Â° N Â· 90.1994Â° W' },
        ],
        footnote:
          "From rate audit to chargeback support, Charm Connect is designed for merchants who want a serious operating layer before they commit to onboarding.",
      }}
      forestBand={{
        eyebrow: 'The promise',
        headline: 'Serious merchants need less noise and {better operating rhythm.}',
        subtitle:
          'Built for independent merchants who want clean onboarding, better chargeback posture, and a dashboard that respects their time.',
        stats: [
          { num: 'Audit', label: 'Statement-first intake' },
          { num: 'Defense', label: 'Chargeback support layer' },
          { num: 'Connect', label: 'Stripe Connect-ready foundation' },
        ],
        backgroundImage: '/images/christiann-koepke-WiE01mC9AtY-unsplash.jpg',
        backgroundImageAlt: 'St. Louis storefront and local business street scene.',
      }}
      comparison={{
        eyebrow: 'Why we win.',
        headline: "What your current setup doesn't {make easy} to audit.",
        theirs: {
          label: 'Specimen A â€” The Other Guys',
          title: 'Extracted: $359.85/mo',
          items: [
            'Discount rate Â· Bundled % Â· $269.00',
            'Per-transaction Â· 120 Ã— $0.20 Â· $24.00',
            'Statement fee Â· Monthly Â· $12.50',
            'PCI compliance Â· Quarterly Â· $19.95',
            'Non-qual surcharge Â· Card-mix Â· $28.40',
            'Batch fee Â· Per close Â· $6.00',
          ],
        },
        ours: {
          label: 'Specimen B â€” Charm Payments',
          title: 'Billed: $190.00/mo Â· You keep $169/mo Â· $2,028/yr',
          items: [
            'Interchange Â· Passthrough Â· $165.00',
            'Charm markup Â· Flat Â· $25.00',
            'Statement fee Â· Not billed',
            'PCI compliance Â· Not billed',
            'Non-qual surcharge Â· Not billed',
            'Batch fee Â· Not billed',
          ],
        },
      }}
      finalCta={{
        eyebrow: 'Start with the audit.',
        headlineLines: [
          { text: 'Send the statement.' },
          { text: 'See the operating picture.', italicTarget: 'See the operating picture.', size: 'lg' },
        ],
        subtitle:
          "Charm reviews the statement, payment workflow, and chargeback exposure before asking you to onboard. No fake urgency, no processor cosplay, no obligation.",
        primaryCta: { label: 'Get Free Rate Audit', href: '/quote' },
        secondaryCta: { label: 'Talk to Charm', href: '/contact' },
        gradientVariant: 'home',
        disclaimer:
          'Charm Connect is a platform layer in progress. Payment onboarding and connected-account infrastructure are intended to run through Stripe Connect when configured. Rate audit is free and non-binding.',
      }}
    />
  )
}




