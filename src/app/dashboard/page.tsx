import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BadgeDollarSign,
  Building2,
  CreditCard,
  FileWarning,
  LifeBuoy,
  ShieldCheck,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Merchant Dashboard - Charm Connect',
  description:
    'Future Charm Connect dashboard shell for merchant profile, onboarding, payments, disputes, support, and platform fees.',
}

const modules = [
  {
    title: 'Merchant Profile',
    status: 'Profile layer',
    body: 'Business identity, owner contacts, operating locations, and support preferences will live here.',
    Icon: Building2,
  },
  {
    title: 'Onboarding Status',
    status: 'Stripe Connect-ready',
    body: 'Designed for connected-account onboarding status once Stripe Connect configuration is live.',
    Icon: ShieldCheck,
  },
  {
    title: 'Payments Overview',
    status: 'Pending integration',
    body: 'Gross volume, payouts, payment methods, and reconciliation views will stay intentionally empty until real data exists.',
    Icon: CreditCard,
  },
  {
    title: 'Chargebacks & Disputes',
    status: 'Charm Defense',
    body: 'Nine Gates evidence workflow, deadlines, customer context, and recovery notes belong in this operating layer.',
    Icon: FileWarning,
  },
  {
    title: 'Support Tickets',
    status: 'Support layer',
    body: 'Merchant questions, account requests, and dispute-support conversations will be organized here.',
    Icon: LifeBuoy,
  },
  {
    title: 'Platform Fee Status',
    status: 'Subscription layer',
    body: 'Platform plan, Charm tools, and subscription status will be visible after billing configuration is ready.',
    Icon: BadgeDollarSign,
  },
] as const

export default function DashboardShellPage() {
  return (
    <main className="min-h-screen bg-apple-canvas px-4 py-8 text-apple-ink sm:px-6 sm:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 border-b border-black/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-atelierMono text-xs uppercase tracking-label text-atelier-gold">
              Charm Connect dashboard
            </p>
            <h1 className="mt-3 max-w-2xl font-atelierSerif text-4xl font-medium leading-none md:text-5xl" style={{ overflowWrap: 'break-word' }}>
              Merchant operations shell.
            </h1>
            <p className="mt-4 max-w-2xl font-stripeSans text-base leading-relaxed text-black/65" style={{ overflowWrap: 'break-word' }}>
              This is the future workspace for merchant onboarding, payments,
              disputes, support, and platform subscription status. It uses
              placeholder states only because live account data is not wired yet.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/quote"
              className="inline-flex min-w-0 items-center justify-center rounded-pill bg-atelier-forest px-5 py-3 font-stripeSans text-sm font-medium text-white transition-opacity hover:opacity-90 sm:px-6"
            >
              Get Free Rate Audit
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-w-0 items-center justify-center rounded-pill border border-black/20 px-5 py-3 font-stripeSans text-sm font-medium text-apple-ink transition-colors hover:border-black/40 sm:px-6"
            >
              Talk to Charm
            </Link>
          </div>
        </div>

        <section className="grid gap-4 py-8 md:grid-cols-3">
          {modules.map(({ title, status, body, Icon }) => (
            <article
              key={title}
              className="bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.06)] outline outline-1 outline-black/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-atelierMono text-[10px] uppercase tracking-label text-atelier-gold">
                    {status}
                  </p>
                  <h2 className="mt-3 font-atelierSerif text-2xl font-medium leading-tight">
                    {title}
                  </h2>
                </div>
                <Icon className="h-5 w-5 shrink-0 text-atelier-forest" aria-hidden />
              </div>
              <p className="mt-4 font-stripeSans text-sm leading-relaxed text-black/65">
                {body}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}


