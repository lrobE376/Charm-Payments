import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Briefcase, Building2, CheckCircle, Home, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ACH & eCheck Processing — Charm Payments',
  description:
    'Accept ACH bank transfers and eChecks with Charm Payments. Lower processing costs for high-ticket transactions. $25 setup, $5/mo, $0.50 per transaction.',
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

export default function AchFeaturePage() {
  return (
    <>
      <section
        className="relative overflow-hidden px-6 py-20 text-center md:py-28"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 100%)' }}
      >
        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="section-label !border-white/20 !bg-white/10 !text-brand-accent">ACH &amp; eCHECK PROCESSING</span>
          <h1 className="font-display mt-4 whitespace-pre-line text-4xl font-bold text-white md:text-5xl lg:text-[3rem]">
            {`Accept Bank Transfers\nat a Fraction of the Cost`}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
            ACH and eCheck processing lets you collect payments directly from customer bank accounts — at dramatically lower rates than credit cards. Perfect for high-ticket
            transactions, B2B invoicing, and recurring payments.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">$0.50 per transaction</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">$5/mo</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">B2B Ready</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Recurring Supported</span>
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
            {`Direct Bank Payments\nFor Any Transaction`}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                Icon: Building2,
                title: 'Customer Provides Bank Details',
                desc: 'Customer enters their routing number and account number — or you key it in on their behalf. Secure and encrypted at entry.',
              },
              {
                Icon: ArrowRight,
                title: 'Transfer Initiates',
                desc: "Charm Payments initiates an ACH debit from the customer's bank account. Standard processing takes 1-3 business days.",
              },
              {
                Icon: CheckCircle,
                title: 'Funds Deposit',
                desc: 'Payment clears and deposits to your merchant bank account. You receive notification when the transfer completes.',
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
                'Lower cost than credit card processing',
                'No card network interchange fees',
                'Recurring ACH available',
                'B2B and high-ticket transactions',
                'Same-day ACH available on request',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {['$25 one-time setup fee', '$5/mo ACH monthly fee', '$0.50 per ACH transaction', '$2.00 return/NOC fee', '$25 insufficient funds fee'].map((t) => (
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
          <p className="section-label">BEST FOR HIGH-TICKET TRANSACTIONS</p>
          <h2 className="font-display mt-4 max-w-3xl whitespace-pre-line text-3xl font-bold text-brand-dark md:text-4xl">
            {`Save Thousands on\nHigh-Value Payments`}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Building2,
                title: 'B2B Payments',
                desc: 'Invoice other businesses and collect via bank transfer. Lower fees on large invoices save significantly vs card processing.',
              },
              {
                Icon: Home,
                title: 'Real Estate & Property',
                desc: 'Security deposits, rent payments, and property management fees. ACH is standard for recurring real estate transactions.',
              },
              {
                Icon: Briefcase,
                title: 'Professional Services',
                desc: 'Attorneys, accountants, and consultants billing large retainers. Save hundreds per month vs credit card fees on large invoices.',
              },
              {
                Icon: Truck,
                title: 'Wholesale & Distribution',
                desc: 'Collect from wholesale buyers and distributors via ACH. Standard practice in B2B commerce at much lower cost than cards.',
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
          <h2 className="font-display mt-4 text-3xl font-bold text-brand-dark md:text-4xl">ACH &amp; eCheck FAQ</h2>
          <div className="mt-8">
            <FaqItem
              q="What does ACH processing cost?"
              a="$25 one-time setup fee, $5/mo ACH monthly fee, and $0.50 per ACH transaction. Return and NOC fees are $2.00 each. Insufficient funds fee is $25.00."
            />
            <FaqItem
              q="How long does an ACH transfer take?"
              a="Standard ACH processing takes 1-3 business days. Same-day ACH may be available for qualified merchants."
            />
            <FaqItem
              q="What is a return fee?"
              a="If a bank transfer fails — insufficient funds, closed account, or incorrect details — a $2.00 return fee applies."
            />
            <FaqItem
              q="Can I use ACH for recurring payments?"
              a="Yes. ACH recurring billing is supported. Combine with Customer Vault to store bank account details and charge automatically on a schedule."
            />
            <FaqItem
              q="Is ACH more secure than checks?"
              a={"Yes. ACH transfers are processed through the Federal Reserve's banking network with full encryption. No paper check ever changes hands."}
            />
            <FaqItem
              q="When does ACH make more financial sense than cards?"
              a="For transactions over $500, ACH saves significantly. At $0.50 flat vs 2.90% + $0.30, a $1,000 invoice costs $0.50 via ACH vs $29.30 via card."
            />
          </div>
        </div>
      </section>

      <section
        className="section-ptb px-6 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 50%, #0f4a3d 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="section-label !border-white/20 !bg-white/10 !text-brand-accent">ADD ACH PROCESSING</p>
          <h2 className="font-display mt-4 whitespace-pre-line text-3xl font-bold md:text-4xl">
            {`Stop Paying Card Fees\non High-Ticket Sales.`}
          </h2>
          <p className="mt-4 text-lg text-white/80">Add ACH processing to your Charm Payments account. $25 setup. $5/mo. $0.50 per transaction.</p>
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
