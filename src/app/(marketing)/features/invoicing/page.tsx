// src/app/(marketing)/features/invoicing/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart2,
  Bell,
  Briefcase,
  Building2,
  Calculator,
  CheckCircle,
  DollarSign,
  Download,
  FileText,
  Gift,
  Globe,
  Monitor,
  Phone,
  RefreshCw,
  Send,
  Store,
  Users,
} from 'lucide-react'
import WaitlistForm from './WaitlistForm'

export const metadata: Metadata = {
  title: 'Charm Invoicing — Charm Payments',
  description:
    'Free professional invoicing for Charm Payments merchants. Recurring invoices, client portal, multi-currency support, PDF generation, automatic payment reminders, and tax calculations.',
}

const pageDisclaimer = (
  <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-white/60">
    Charm Payments is a registered ISO/Agent of Fiserv/First Data Merchant Services. Processing services are subject to merchant approval and compliance with applicable
    regulations.
  </p>
)

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-gray-200 py-4">
      <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-brand-dark [&::-webkit-details-marker]:hidden">
        <span>{q}</span>
        <ArrowRight className="h-4 w-4 shrink-0 rotate-90 text-gray-400 transition-transform group-open:-rotate-90" aria-hidden />
      </summary>
      <p className="text-paragraph mt-3 text-sm leading-relaxed">{a}</p>
    </details>
  )
}

export default function InvoicingPage() {
  return (
    <>
      {/* ── Section 1: Hero ─────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 py-20 text-center md:py-28"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 100%)' }}
      >
        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="section-label !border-white/20 !bg-white/10 !text-brand-accent">CHARM INVOICING</span>
          <h1 className="font-display mt-4 text-4xl font-bold text-white md:text-5xl lg:text-[3rem]">
            Professional invoicing. Zero software fees. Get paid faster.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
            Send beautiful branded invoices, accept payments in one click, and get paid directly into your Charm Payments account. Free for every Charm merchant — no
            subscription, no per-invoice charges, no catches.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Free for Charm merchants</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Unlimited invoices</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Payment in seconds</span>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="#waitlist" className="btn-accent inline-flex min-h-[44px] items-center justify-center">
              Coming Soon — Join the Waitlist
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              Already a Charm merchant? Learn more
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 2: How It Works ──────────────────────────────── */}
      <section className="section-ptb bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label">HOW IT WORKS</p>
          <h2 className="font-display mt-4 max-w-3xl text-3xl font-bold text-brand-dark md:text-4xl">From invoice to paid in three steps.</h2>
          <p className="text-paragraph mt-3 max-w-2xl text-base leading-relaxed">
            No complicated setup. No accounting degree required. Just professional invoices your clients can pay instantly.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                Icon: FileText,
                title: 'Create your invoice',
                desc: 'Add your client, your services or products, your rates. Charm builds a professional branded invoice in seconds. Save templates for work you do often.',
              },
              {
                Icon: Send,
                title: 'Send to your client',
                desc: "Email the invoice directly from Charm. Your client gets a professional PDF plus a secure link to pay online. They don't need an account.",
              },
              {
                Icon: DollarSign,
                title: 'Get paid',
                desc: "Clients pay by card, ACH, or bank transfer through your Charm Payments account. Money lands in your account the next business day. We send automatic reminders so you don't have to.",
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="text-center md:text-left">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light md:mx-0">
                  <Icon className="h-7 w-7 text-brand-dark" aria-hidden />
                </div>
                <h3 className="font-display mt-4 text-xl font-bold text-brand-dark">{title}</h3>
                <p className="text-paragraph mt-2 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <ul className="space-y-3">
              {[
                'Recurring invoices for subscriptions and retainers',
                'Client portal where customers see all their invoices',
                'Multi-currency support for international clients',
                'Automatic payment reminders (no awkward follow-ups)',
                'Partial payments and deposits',
                'Quote and estimate conversion',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {[
                'Professional PDF generation with your branding',
                'Tax and discount calculations',
                'Mobile-friendly for your clients',
                'Payment tracking and history',
                'Late fee automation (optional)',
                'Client statements and reports',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-dark" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Section 3: Who It's For ──────────────────────────────── */}
      <section className="section-ptb bg-brand-light">
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label">WHO IT&apos;S FOR</p>
          <h2 className="font-display mt-4 max-w-3xl text-3xl font-bold text-brand-dark md:text-4xl">Built for service businesses that run on invoicing.</h2>
          <p className="text-paragraph mt-3 max-w-2xl text-base leading-relaxed">
            If you send invoices, Charm Invoicing fits. Here&apos;s who uses it best.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Briefcase,
                title: 'Consultants & Freelancers',
                desc: "Send professional invoices for project work, retainers, or hourly billing. Track what's paid, what's pending, and what's overdue without chasing clients.",
              },
              {
                Icon: Building2,
                title: 'Service Businesses',
                desc: 'Landscapers, cleaners, contractors, trainers, designers. If you bill for your time or services, Charm Invoicing replaces clunky software and paper invoices.',
              },
              {
                Icon: Users,
                title: 'Nonprofits & Churches',
                desc: 'Invoice sponsors, grant payments, and service fees. Free processing discounts for verified 501(c)(3) organizations. Donation pages available too.',
              },
              {
                Icon: Store,
                title: 'B2B Merchants',
                desc: 'Wholesalers, agencies, and businesses serving other businesses. Send detailed invoices, offer net-30 terms, accept ACH for low-fee processing.',
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="charm-card bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light">
                  <Icon className="h-6 w-6 text-brand-dark" aria-hidden />
                </div>
                <h3 className="font-display mt-4 text-lg font-bold text-brand-dark">{title}</h3>
                <p className="text-paragraph mt-2 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Why Charm ─────────────────────────────────── */}
      <section className="section-ptb bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label">WHY CHARM</p>
          <h2 className="font-display mt-4 max-w-3xl whitespace-pre-line text-3xl font-bold text-brand-dark md:text-4xl">
            {`Invoicing software shouldn't cost extra.\nProcessing shouldn't cost a fortune.`}
          </h2>
          <p className="text-paragraph mt-3 max-w-2xl text-base leading-relaxed">
            Most invoicing platforms charge monthly fees plus take a cut of every payment. Charm does neither.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                Icon: Gift,
                title: 'Free, forever',
                desc: 'Unlimited invoices. Unlimited clients. No monthly subscription. No per-invoice fees. The software is free when you process payments through Charm.',
              },
              {
                Icon: BarChart2,
                title: 'Transparent processing',
                desc: 'Pay only for the payments you accept, at fair rates. No hidden fees. No surprise charges. The same pricing whether you send 10 invoices a month or 1,000.',
              },
              {
                Icon: Monitor,
                title: 'Everything in one place',
                desc: 'Invoicing, virtual terminal, recurring billing, and payment processing in one dashboard. One login, one merchant account, one support team.',
              },
              {
                Icon: Phone,
                title: 'Real human support',
                desc: "When something goes wrong, a real person picks up. Not a chatbot. Not a ticket system. Charm merchants talk to Charm people.",
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-5 rounded-2xl bg-brand-light p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white">
                  <Icon className="h-6 w-6 text-brand-dark" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-dark">{title}</h3>
                  <p className="text-paragraph mt-1 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: FAQ ───────────────────────────────────────── */}
      <section className="section-ptb bg-brand-light">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-label">FREQUENTLY ASKED QUESTIONS</p>
          <h2 className="font-display mt-4 text-3xl font-bold text-brand-dark md:text-4xl">Questions merchants ask us.</h2>
          <div className="mt-8">
            <FaqItem
              q="Is Charm Invoicing really free?"
              a="Yes. If you process payments through Charm Payments, invoicing is included at no additional cost. Unlimited invoices, unlimited clients, no monthly fees."
            />
            <FaqItem
              q="Do I need a Charm Payments account?"
              a="Yes. Charm Invoicing is a benefit for Charm Payments merchants. If you don't have a merchant account yet, you can apply at the same time you sign up."
            />
            <FaqItem
              q="What does payment processing cost?"
              a="Processing rates depend on your business type and volume. Most merchants pay between 2.3% and 2.9% plus a small per-transaction fee for card payments. ACH payments are significantly cheaper. Quote-based pricing — we'll give you a straight answer, not a rate card."
            />
            <FaqItem
              q="Can my clients pay without creating an account?"
              a="Yes. Your clients click a link in the invoice email and pay with a card or bank account. No signup required for them."
            />
            <FaqItem
              q="Does it work for recurring billing?"
              a="Yes. Set up recurring invoices for subscriptions, memberships, or retainer clients. They send automatically on the schedule you choose. Clients can save a payment method for automatic collection."
            />
            <FaqItem
              q="Can I import my existing clients and data?"
              a="Yes. Import clients from CSV, QuickBooks, or directly from other invoicing tools. We'll help you through the migration if you have a lot of data."
            />
            <FaqItem
              q="Is my data secure?"
              a="Yes. All invoicing data is encrypted in transit and at rest. Payment data is PCI-compliant through our processing infrastructure. Your clients' payment information is tokenized — we never store card numbers."
            />
            <FaqItem
              q="When is it launching?"
              a="Charm Invoicing is currently in private beta with select merchants. Join the waitlist and we'll let you know when your account is ready. Existing Charm Payments merchants will get priority access."
            />
          </div>
        </div>
      </section>

      {/* ── Section 6: Waitlist CTA ──────────────────────────────── */}
      <section
        id="waitlist"
        className="section-ptb px-6 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 50%, #0f4a3d 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="section-label !border-white/20 !bg-white/10 !text-brand-accent">COMING SOON</p>
          <h2 className="font-display mt-4 text-3xl font-bold md:text-4xl">Ready to invoice like a pro?</h2>
          <p className="mt-4 text-lg text-white/80">
            Join the waitlist. We&apos;ll let you know when Charm Invoicing opens to your account.
          </p>
          <div className="mt-10">
            <WaitlistForm />
          </div>
          <p className="mt-5 text-sm text-white/60">Already a Charm Payments merchant? You&apos;re first in line.</p>
          {pageDisclaimer}
        </div>
      </section>
    </>
  )
}
