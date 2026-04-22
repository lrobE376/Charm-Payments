// src/app/(marketing)/features/invoicing/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Bell, Calculator, CheckCircle, Download, Globe, RefreshCw, Send, Users, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Charm Invoice — Charm Payments',
  description:
    'Professional invoicing built for Charm Payments merchants. Recurring invoices, client portal, multi-currency, PDF generation, payment reminders, and tax calculations. Free for all merchants.',
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
      {/* Hero */}
      <section
        className="relative overflow-hidden px-6 py-20 text-center md:py-28"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 100%)' }}
      >
        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="section-label !border-white/20 !bg-white/10 !text-brand-accent">CHARM INVOICE</span>
          <h1 className="font-display mt-4 whitespace-pre-line text-4xl font-bold text-white md:text-5xl lg:text-[3rem]">
            {`Professional Invoicing\nThat Gets You Paid Faster`}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
            Free invoicing for every Charm Payments merchant. Create, send, and collect on professional invoices without a separate subscription or software — recurring
            schedules, a client portal, multi-currency support, and more, built directly into your account.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Free for Merchants</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Recurring Invoices</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Multi-Currency</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Coming Soon</span>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/apply" className="btn-accent inline-flex min-h-[44px] items-center justify-center">
              Join the Waitlist
            </Link>
            <Link
              href="/features"
              className="btn-outline inline-flex min-h-[44px] items-center justify-center !border-white/45 !text-white !shadow-none hover:!border-white hover:!bg-white hover:!text-brand-dark"
            >
              See All Features
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-ptb bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label">HOW IT WORKS</p>
          <h2 className="font-display mt-4 max-w-3xl whitespace-pre-line text-3xl font-bold text-brand-dark md:text-4xl">
            {`Three Steps From\nInvoice to Deposit`}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                Icon: FileText,
                title: 'Create the Invoice',
                desc: 'Add line items, set a due date, apply taxes, and attach a note. Your branding is automatic — no design work required.',
              },
              {
                Icon: Send,
                title: 'Send to Your Client',
                desc: 'Deliver the invoice by email or text. Clients open a mobile-friendly payment page and pay with any card — no account needed.',
              },
              {
                Icon: CheckCircle,
                title: 'Collect and Move On',
                desc: 'Payment is confirmed instantly. Funds deposit to your bank account on the next business day. Unpaid invoices send automatic reminders.',
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
                'Branded invoices with your business name',
                'Email and SMS delivery',
                'Accept all major cards and Apple Pay',
                'Automatic late-payment reminders',
                'Download and share PDF invoices',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {[
                'Recurring invoice schedules',
                'Client portal for payment history',
                'Multi-currency invoicing',
                'Configurable tax rates per line item',
                'Full transaction history and reporting',
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

      {/* Features */}
      <section className="section-ptb bg-brand-light">
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label">WHAT'S INCLUDED</p>
          <h2 className="font-display mt-4 max-w-3xl whitespace-pre-line text-3xl font-bold text-brand-dark md:text-4xl">
            {`Every Tool You Need.\nFree with Your Account.`}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                Icon: RefreshCw,
                title: 'Recurring Invoices',
                desc: 'Set invoices to send automatically on a weekly, monthly, or custom schedule. Perfect for retainers, subscriptions, and maintenance contracts.',
              },
              {
                Icon: Users,
                title: 'Client Portal',
                desc: 'Clients get a dedicated portal to view current and past invoices, download PDFs, and pay outstanding balances — no login required.',
              },
              {
                Icon: Globe,
                title: 'Multi-Currency',
                desc: 'Invoice international clients in their local currency. Exchange rates are displayed at checkout so there are no surprises at payment.',
              },
              {
                Icon: Download,
                title: 'PDF Generation',
                desc: 'Every invoice is automatically formatted as a professional PDF. Send it attached to email, share a link, or download for your records.',
              },
              {
                Icon: Bell,
                title: 'Payment Reminders',
                desc: 'Automatic reminders go out before and after the due date. Reduce late payments without a single follow-up phone call.',
              },
              {
                Icon: Calculator,
                title: 'Tax Calculations',
                desc: 'Apply tax rates per line item or for the whole invoice. Support for multiple tax types — sales tax, VAT, GST — with totals clearly broken out.',
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

      {/* FAQ */}
      <section className="section-ptb bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-label">COMMON QUESTIONS</p>
          <h2 className="font-display mt-4 text-3xl font-bold text-brand-dark md:text-4xl">Invoicing FAQ</h2>
          <div className="mt-8">
            <FaqItem
              q="When does Charm Invoice launch?"
              a="Charm Invoice is currently in development and will be available to Charm Payments merchants soon. Join the waitlist through the merchant application form and we will notify you the moment early access opens."
            />
            <FaqItem
              q="Is it really free for merchants?"
              a="Yes. Charm Invoice is included at no additional monthly cost with every active Charm Payments merchant account. Your standard processing rate applies to payments collected through invoices."
            />
            <FaqItem
              q="How do recurring invoices work?"
              a="Set up a recurring schedule when creating an invoice — weekly, monthly, quarterly, or a custom interval. Invoices are generated and sent automatically on each cycle without any action required from you."
            />
            <FaqItem
              q="What currencies are supported?"
              a="Charm Invoice supports invoicing in major world currencies. The client sees the invoice in their currency, and the exchange rate is displayed transparently at checkout."
            />
            <FaqItem
              q="How does the client portal work?"
              a="Each client receives a unique link that shows their invoice history, lets them download PDFs, and allows them to pay any outstanding balance — no account or password needed."
            />
            <FaqItem
              q="Can I handle multiple tax rates?"
              a="Yes. Apply different tax rates at the line-item level or across the whole invoice. Charm Invoice supports sales tax, VAT, GST, and custom tax labels, with all totals broken out clearly on the invoice."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-ptb px-6 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 50%, #0f4a3d 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="section-label !border-white/20 !bg-white/10 !text-brand-accent">COMING SOON</p>
          <h2 className="font-display mt-4 whitespace-pre-line text-3xl font-bold md:text-4xl">{`Get Paid Faster.\nNo Extra Software.`}</h2>
          <p className="mt-4 text-lg text-white/80">
            Charm Invoice is coming to every merchant account at no additional cost. Apply now to reserve your spot and get early access when we launch.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/apply" className="btn-accent inline-flex min-h-[44px] items-center justify-center">
              Join the Waitlist
            </Link>
            <Link
              href="/contact"
              className="btn-outline inline-flex min-h-[44px] items-center justify-center !border-white/45 !text-white !shadow-none hover:!border-white hover:!bg-white hover:!text-brand-dark"
            >
              Talk to Our Team
            </Link>
          </div>
          {disclaimer}
        </div>
      </section>
    </>
  )
}
