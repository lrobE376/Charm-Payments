import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Briefcase, Calendar, CheckCircle, Dumbbell, RefreshCw, Shield, UserPlus } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Recurring Billing — Charm Payments',
  description:
    'Automate subscription payments and recurring charges with Charm Payments. Set it once and collect automatically — weekly, monthly, or on any schedule.',
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

export default function RecurringBillingPage() {
  return (
    <>
      <section
        className="relative overflow-hidden px-6 py-20 text-center md:py-28"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 100%)' }}
      >
        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="section-label !border-white/20 !bg-white/10 !text-brand-accent">RECURRING BILLING</span>
          <h1 className="font-display mt-4 whitespace-pre-line text-4xl font-bold text-white md:text-5xl lg:text-[3rem]">
            {`Set It Once.\nGet Paid Every Time.`}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
            Stop manually charging repeat customers. Set up automatic recurring payments and let Charm Payments handle the rest — weekly, monthly, quarterly, or any schedule
            you choose.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Included in All Plans</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Any Schedule</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Auto Retry on Failure</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Customer Vault</span>
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
            {`Automated Payments\nThat Run Themselves`}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                Icon: UserPlus,
                title: 'Add the Customer',
                desc: "Enter your customer's card details once. They're stored securely in your Customer Vault — encrypted and PCI compliant.",
              },
              {
                Icon: Calendar,
                title: 'Set the Schedule',
                desc: 'Choose how often to charge — daily, weekly, monthly, quarterly, or a custom date. Set the amount and let the system take over.',
              },
              {
                Icon: RefreshCw,
                title: 'Payments Run Automatically',
                desc: 'Charges process on schedule without any action from you. Failed payments retry automatically. You get notified of successes and failures.',
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
                'Weekly, monthly, quarterly, or custom schedule',
                'Automatic retry on failed payments',
                'Customer vault for stored cards',
                'Email notifications on each charge',
                'Pause or cancel any subscription',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {[
                'Proration for mid-cycle changes',
                'Trial periods supported',
                'Multiple subscriptions per customer',
                'Export subscription data to CSV',
                'Full reporting dashboard',
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
          <p className="section-label">BUILT FOR RECURRING REVENUE</p>
          <h2 className="font-display mt-4 max-w-3xl whitespace-pre-line text-3xl font-bold text-brand-dark md:text-4xl">
            {`Every Business That\nBills Repeat Customers`}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Dumbbell,
                title: 'Gyms & Fitness Studios',
                desc: 'Monthly membership dues collected automatically. No front desk time, no awkward billing conversations, no missed payments.',
              },
              {
                Icon: Shield,
                title: 'Security & Monitoring',
                desc: 'Monthly monitoring fees for alarm systems, cameras, and security services. Set and forget.',
              },
              {
                Icon: BookOpen,
                title: 'Tutoring & Education',
                desc: 'Monthly tuition, weekly session fees, or semester billing. Parents pay automatically — you focus on teaching.',
              },
              {
                Icon: Briefcase,
                title: 'Retainer Services',
                desc: 'Consultants, attorneys, bookkeepers, and agencies on monthly retainers. Invoice once, bill forever.',
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
          <h2 className="font-display mt-4 text-3xl font-bold text-brand-dark md:text-4xl">Recurring Billing FAQ</h2>
          <div className="mt-8">
            <FaqItem
              q="Is recurring billing included in my plan?"
              a="Yes. Recurring billing is included in all Charm Payments merchant accounts — Starter, Growth, and Enterprise. No add-on fee required."
            />
            <FaqItem
              q="What happens when a card payment fails?"
              a="The system automatically retries the failed charge on a configurable schedule. You receive an email notification so you can also follow up manually."
            />
            <FaqItem
              q="Can customers update their own card details?"
              a="You can update customer card details from your dashboard at any time. A customer-facing update portal is available on request."
            />
            <FaqItem
              q="Is stored card data secure?"
              a="Yes. Cards are stored in an encrypted Customer Vault that is PCI DSS compliant. The actual card number is never stored — only a secure token."
            />
            <FaqItem
              q="Can I offer a free trial period?"
              a={"Yes. You can set a trial period of any length before the first charge. The customer's card is stored during the trial and charged automatically when it ends."}
            />
            <FaqItem
              q="What billing schedules are supported?"
              a="Daily, weekly, bi-weekly, monthly, quarterly, annual, or any custom date interval you specify."
            />
          </div>
        </div>
      </section>

      <section
        className="section-ptb px-6 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 50%, #0f4a3d 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="section-label !border-white/20 !bg-white/10 !text-brand-accent">AUTOMATE YOUR BILLING</p>
          <h2 className="font-display mt-4 whitespace-pre-line text-3xl font-bold md:text-4xl">
            {`Stop Chasing Payments.\nAutomate Everything.`}
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Recurring billing is included in every Charm Payments account. Apply today and set up your first subscription within 48 hours.
          </p>
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
