import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Briefcase, CheckCircle, FileText, GraduationCap, Home, Send, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Electronic Invoicing — Charm Payments',
  description:
    'Send professional payment invoices from your Charm Payments dashboard. Customer clicks the link and pays instantly. $5/mo. No separate invoicing software needed.',
}

const disclaimer = (
  <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-white/70">
    Charm Payments is a payment facilitator, not a bank. Payment processing services are provided through our licensed acquiring bank partner. Merchant funds are subject to
    the terms of the Merchant Agreement.
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
      <section
        className="relative overflow-hidden px-6 py-20 text-center md:py-28"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 100%)' }}
      >
        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="section-label !border-white/20 !bg-white/10 !text-brand-accent">ELECTRONIC INVOICING</span>
          <h1 className="font-display mt-4 whitespace-pre-line text-4xl font-bold text-white md:text-5xl lg:text-[3rem]">
            {`Send an Invoice.\nGet Paid in Minutes.`}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
            Stop chasing checks and waiting on wire transfers. Send a professional payment invoice from your Charm Payments dashboard — your customer gets a link, clicks it,
            and pays instantly with any card or Apple Pay.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">$5/mo</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Email or Text Delivery</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Track Paid &amp; Unpaid</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">$0.05 per invoice</span>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/apply" className="btn-accent inline-flex min-h-[44px] items-center justify-center">
              Apply for Your Merchant Account
            </Link>
            <Link
              href="/pricing"
              className="btn-outline inline-flex min-h-[44px] items-center justify-center !border-white/45 !text-white !shadow-none hover:!border-white hover:!bg-white hover:!text-brand-dark"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="section-ptb bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label">HOW IT WORKS</p>
          <h2 className="font-display mt-4 max-w-3xl whitespace-pre-line text-3xl font-bold text-brand-dark md:text-4xl">
            {`Invoice Sent. Payment\nReceived. That Simple.`}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                Icon: FileText,
                title: 'Create the Invoice',
                desc: "Log in to your dashboard, click new invoice. Add line items, amounts, due date, and your customer's email or phone number.",
              },
              {
                Icon: Send,
                title: 'Send It Instantly',
                desc: 'Customer receives a branded payment link by email or text. One tap opens the invoice with a secure payment form.',
              },
              {
                Icon: CheckCircle,
                title: 'Get Paid',
                desc: 'Customer pays with card, Apple Pay, or Google Pay. You get notified instantly. Funds deposit next business day.',
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
                'Send via email or SMS text',
                'Branded with your business name',
                'Customer pays in one tap',
                'Accept all major cards + Apple Pay',
                'Automatic payment reminders',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {[
                'Track paid and unpaid invoices',
                'Add multiple line items',
                'Set due dates and payment terms',
                'Download invoice as PDF',
                'Full reporting in dashboard',
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

      <section className="section-ptb bg-brand-light">
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label">WHO USES INVOICING</p>
          <h2 className="font-display mt-4 max-w-3xl whitespace-pre-line text-3xl font-bold text-brand-dark md:text-4xl">
            {`Perfect for Service\nBusinesses of Every Kind`}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Wrench,
                title: 'Contractors',
                desc: 'Invoice for labor and materials after the job is complete. Customer pays from their phone before you leave the site.',
              },
              {
                Icon: Briefcase,
                title: 'Consultants',
                desc: 'Send professional invoices for consulting retainers, project milestones, and hourly work. Collect upfront or on completion.',
              },
              {
                Icon: Home,
                title: 'Home Services',
                desc: 'Cleaners, landscapers, and handymen who work by appointment. Invoice on the spot and get paid before you drive away.',
              },
              {
                Icon: GraduationCap,
                title: 'Tutors & Coaches',
                desc: 'Invoice clients weekly or monthly for sessions. Set up recurring billing to charge automatically every month.',
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

      <section className="section-ptb bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-label">COMMON QUESTIONS</p>
          <h2 className="font-display mt-4 text-3xl font-bold text-brand-dark md:text-4xl">Invoicing FAQ</h2>
          <div className="mt-8">
            <FaqItem
              q="What does electronic invoicing cost?"
              a="$5/mo to enable the invoicing feature plus $0.05 per invoice created. Your standard processing rate applies to each payment collected."
            />
            <FaqItem
              q="Can I send invoices by text message?"
              a="Yes. When creating an invoice, choose to deliver via email or SMS text. The customer gets a link that opens a mobile-friendly payment page."
            />
            <FaqItem
              q="What payment methods can customers use?"
              a="All major credit and debit cards — Visa, Mastercard, American Express, Discover. Apple Pay and Google Pay are also supported on compatible devices."
            />
            <FaqItem
              q="Can I set up recurring invoices?"
              a="Yes. Combine electronic invoicing with the Recurring Billing add-on to automatically send and charge invoices on a schedule — weekly, monthly, or custom."
            />
            <FaqItem
              q={"What if a customer doesn't pay?"}
              a="The dashboard shows all unpaid invoices with due dates. You can send manual payment reminders with one click or set up automatic reminder emails."
            />
            <FaqItem
              q="Does the invoice show my branding?"
              a="Yes. Invoices display your business name and are delivered from your Charm Payments account. Customers see your business, not Charm Payments."
            />
          </div>
        </div>
      </section>

      <section
        className="section-ptb px-6 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 50%, #0f4a3d 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="section-label !border-white/20 !bg-white/10 !text-brand-accent">START INVOICING</p>
          <h2 className="font-display mt-4 whitespace-pre-line text-3xl font-bold md:text-4xl">
            {`Stop Chasing Payments.\nStart Collecting Them.`}
          </h2>
          <p className="mt-4 text-lg text-white/80">Add electronic invoicing to your Charm Payments account and get paid faster — starting at $5/mo.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/apply" className="btn-accent inline-flex min-h-[44px] items-center justify-center">
              Apply for Your Merchant Account
            </Link>
            <Link
              href="/features"
              className="btn-outline inline-flex min-h-[44px] items-center justify-center !border-white/45 !text-white !shadow-none hover:!border-white hover:!bg-white hover:!text-brand-dark"
            >
              See All Features
            </Link>
          </div>
          {disclaimer}
        </div>
      </section>
    </>
  )
}
