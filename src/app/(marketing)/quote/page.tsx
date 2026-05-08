import type { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/forms/quote-form'
import { BadgeCheck, FileText, ShieldCheck } from 'lucide-react'
import { FeatureImageCard, MerchantTrustStrip, SectionHero } from '@/components/marketing/visual-system'

export const metadata: Metadata = {
  title: 'Free Rate Audit - Charm Connect',
  description:
    'Start a low-friction merchant rate audit with Charm Connect. Share your current setup, statement, and chargeback concerns before onboarding.',
}

export default function QuotePage() {
  return (
    <div>
      <SectionHero
        className="bg-brand-dark text-white"
        eyebrow="Free rate audit"
        title="Send the statement. Get the operating picture."
        description="A premium, low-friction intake for merchants who want clarity before they onboard. Charm reviews your current costs, payment workflow, and chargeback exposure without pretending to be your bank or processor."
        primaryCta={{ label: 'Start Rate Audit', href: '#quote-form' }}
        secondaryCta={{ label: 'Talk to Charm', href: '/contact' }}
        trustItems={[
          <span key="tp" className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" aria-hidden />
            Transparent pricing
          </span>,
          <span key="sr" className="inline-flex items-center gap-2">
            <FileText className="h-4 w-4" aria-hidden />
            Statement review
          </span>,
          <span key="no" className="inline-flex items-center gap-2">
            <BadgeCheck className="h-4 w-4" aria-hidden />
            No obligation
          </span>,
        ]}
        visual={
          <div className="grid gap-4">
            <FeatureImageCard
              src="/images/pexels-rdne-7697434.jpg"
              alt="Merchant reviewing payment operations on a tablet"
              className="border border-white/10 bg-white/5"
              priority
              caption={
                <div className="space-y-2">
                  <p className="font-atelierMono text-xs uppercase tracking-label text-brand-accent">Comparison workflow</p>
                  <p className="text-white/75">
                    We review the statement and payment workflow before asking you to onboard.
                  </p>
                </div>
              }
            />
            <MerchantTrustStrip
              title="Audit posture"
              items={[
                { label: 'Commitment', value: 'No obligation' },
                { label: 'Focus', value: 'Rates + disputes' },
                { label: 'Platform', value: 'Connect-ready' },
              ]}
              className="bg-white"
            />
          </div>
        }
      />

      <section id="quote-form" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-brand-dark">What happens next</h2>
            <ul className="mt-4 list-none space-y-3 p-0 text-gray-700">
              <li className="flex gap-2">
                <span className="font-bold text-brand-accent">1.</span>
                We review your statement, processor relationship, and current workflow.
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-brand-accent">2.</span>
                Charm identifies rate issues, chargeback exposure, and dashboard needs.
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-brand-accent">3.</span>
                If there is a fit, you can move to onboarding when you are ready.
              </li>
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-gray-500">
              Charm Connect is a platform layer in progress. Stripe Connect onboarding and connected-account infrastructure should be treated as pending until configured in the environment.
            </p>
            <Link href="/contact" className="mt-6 inline-block text-sm font-semibold text-brand-dark underline-offset-2 hover:underline">
              Prefer to talk first? Talk to Charm
            </Link>
          </div>
          <div className="lg:col-span-3">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  )
}



