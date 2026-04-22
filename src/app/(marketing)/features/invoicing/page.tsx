// src/app/(marketing)/features/invoicing/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertCircle,
  ArrowRight,
  Award,
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  FileText,
  HelpCircle,
  Settings,
  Shield,
  Smile,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { SparklesText } from '@/components/magicui/sparkles-text'
import { BorderBeam } from '@/components/magicui/border-beam'
import { Marquee } from '@/components/magicui/marquee'
import WaitlistForm from './WaitlistForm'

export const metadata: Metadata = {
  title: 'Charm Invoicing — Charm Payments',
  description:
    'Free professional invoicing for independent consultants and freelancers. Automatic payment reminders, online payment links, and next-day funding — built into your Charm Payments account.',
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

function TrustItem({
  Icon,
  name,
  subtitle,
}: {
  Icon: React.ComponentType<{ className?: string }>
  name: string
  subtitle: string
}) {
  return (
    <div className="mx-3 flex min-w-[180px] flex-col rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white px-6 py-5">
      <Icon className="h-8 w-8 text-[#1E5C35]" aria-hidden />
      <p className="mt-3 text-sm font-semibold text-brand-dark">{name}</p>
      <p className="text-xs text-[#3d3d2e]">{subtitle}</p>
    </div>
  )
}

const painCards = [
  {
    Icon: Clock,
    title: 'The 30-day silence',
    body: 'Invoice sent Friday. Work was great. By week two you\'re drafting a third "just checking in" email, wondering if you\'re being annoying. By week four you\'re calculating how much you need this relationship. You get paid eventually. You\'re depleted.',
  },
  {
    Icon: HelpCircle,
    title: '"I thought I paid that"',
    body: "The client is certain they sent it. You check your bank. Nothing. You spend an hour tracing email threads, finding proof, feeling like the villain in your own story — because you asked to be paid for work you already did.",
  },
  {
    Icon: Calendar,
    title: 'The weekend spreadsheet',
    body: "Sunday night. Open the invoice tracker. Update the days-outstanding column. Flag the ones past 30. Flag the ones past 60. Wonder if sending another reminder makes you look desperate. Close the laptop. Don't relax.",
  },
  {
    Icon: AlertCircle,
    title: 'The PayPal shame',
    body: "Asking a client for $12,000 via Venmo feels wrong. But you don't have a real payment processor, so you email a PDF and hope. Half the time they mail a check. You drive to the bank. This is not why you went independent.",
  },
]

const turnBlocks = [
  {
    Icon: CheckCircle,
    title: 'You stop being the collector',
    body: "Charm sends the reminders on a schedule you set. Day 7, day 14, day 30 — automatically. You never have to write another 'just following up' email. The relationship stays intact. The invoice gets paid.",
  },
  {
    Icon: Zap,
    title: 'They pay the first time',
    body: "Your client gets a clean invoice with a single payment link. Card, ACH, bank transfer — whatever's easiest for them. No account required. No PDF to print and mail. Most pay the same day.",
  },
  {
    Icon: Smile,
    title: 'Your Sunday nights are yours again',
    body: 'No spreadsheets. No status columns. No mental math about who owes what. Charm tracks every invoice, every payment, every reminder. You open the dashboard, see green, close it, go live your life.',
  },
]

const steps = [
  {
    Icon: FileText,
    title: 'Create your invoice',
    body: 'Add your client, the work, and your rate. Charm builds a professional branded invoice in under a minute. Save it as a template for recurring clients.',
  },
  {
    Icon: CreditCard,
    title: 'Your client pays online',
    body: 'They get an email with a secure payment link. Card, ACH, or bank transfer — no account required. Most clients pay within 24 hours.',
  },
  {
    Icon: TrendingUp,
    title: 'You get paid',
    body: 'Funds hit your Charm Payments account the next business day. No holds, no surprises, no waiting.',
  },
  {
    Icon: Settings,
    title: 'Charm handles the rest',
    body: "Automatic reminders on your schedule. Late fee triggers if you've set them. A full audit trail of every invoice, every payment, every status — without you lifting a finger.",
  },
]

const compareRows = [
  { feature: 'Monthly software fee',         current: '$15 – $60 / month',  charm: '$0' },
  { feature: 'Per-invoice fee',              current: 'Up to $1 / invoice', charm: '$0' },
  { feature: 'Payment processing cut',       current: '2.9% – 3.5% + fees', charm: 'Your standard Charm rate' },
  { feature: 'Automatic payment reminders',  current: 'You do it manually',  charm: 'Included' },
  { feature: 'Client self-pay portal',       current: 'Paid tier only',      charm: 'Included' },
  { feature: 'Branded PDF invoices',         current: 'Paid tier only',      charm: 'Included' },
  { feature: 'Recurring invoice automation', current: 'Paid tier only',      charm: 'Included' },
  { feature: 'ACH / bank transfer support',  current: 'Paid tier only',      charm: 'Included' },
]

const trustItems = [
  { Icon: Shield,    name: 'NMI Gateway',        subtitle: 'Processing $3B+ annually' },
  { Icon: Building2, name: 'First Data / Fiserv', subtitle: '40+ years of acquiring'  },
  { Icon: Award,     name: 'Charm Holdings LLC',  subtitle: 'Registered ISO/Agent'    },
]

export default function InvoicingPage() {
  return (
    <>
      {/* ── Section 1: Hero ─────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 py-20 text-center md:py-28"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 100%)' }}
      >
        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="section-label !border-white/20 !bg-white/10 !text-brand-accent">FOR CONSULTANTS AND FREELANCERS</span>
          <h1 className="font-display mt-4 text-4xl font-bold text-white md:text-5xl lg:text-[3rem]">
            <SparklesText colors={['#C9A96E', '#E8C99A', '#fff9']} sparkleCount={6}>
              You&apos;re running a business. Not a collections agency.
            </SparklesText>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            Send a professional invoice. Get paid the next business day. Let Charm send the reminders, chase the late payments, and keep the books — so you don&apos;t have to.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <div className="relative inline-flex overflow-hidden rounded-[0.375rem]">
              <BorderBeam colorFrom="#C9A96E" colorTo="#1E5C35" contentBackground="#C9A96E" duration={8} />
              <Link href="#waitlist" className="btn-accent relative z-10 inline-flex min-h-[44px] items-center justify-center">
                Reserve Your Spot in Beta
              </Link>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              Already a Charm merchant? Learn more
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/50">
            Free for Charm merchants&nbsp;&middot;&nbsp;Beta launching Q2 2026&nbsp;&middot;&nbsp;Only 100 spots
          </p>
        </div>
      </section>

      {/* ── Section 2: Pain — dark gradient, white cards with icons ─ */}
      <section
        className="section-ptb"
        style={{ background: 'linear-gradient(to bottom, #0a1f14, #0f2819)' }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label !border-white/20 !bg-white/10 !text-brand-accent">IF THIS SOUNDS FAMILIAR</p>
          <h2 className="font-display mt-4 text-3xl font-bold text-white md:text-4xl">You know the feeling.</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70">
            The project&apos;s done. The invoice is sent. The client goes quiet. Now what?
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {painCards.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-7 shadow-[0_8px_32px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.38)]"
              >
                <Icon className="h-6 w-6 text-[#1E5C35]/60" aria-hidden />
                <h3 className="font-display mt-3 text-lg font-bold text-brand-dark">{title}</h3>
                <p className="text-paragraph mt-3 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: The Turn — cream with radial glow, grid, gold icons */}
      <section
        className="section-ptb bg-[#fdf9ed]"
        style={{ backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,169,110,0.10) 0%, transparent 70%)' }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <p className="section-label">IMAGINE INSTEAD</p>
          <h2 className="font-display mt-4 text-4xl font-bold text-brand-dark md:text-5xl">
            Invoices that pay themselves.
          </h2>
          <p className="text-paragraph mt-4 text-lg leading-relaxed">You send one invoice. Charm does the rest.</p>
          <div className="mt-14 grid gap-12 sm:grid-cols-3">
            {turnBlocks.map(({ Icon, title, body }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <Icon className="h-8 w-8 text-brand-accent" aria-hidden />
                <h3 className="font-display mt-4 text-2xl font-bold text-brand-dark">{title}</h3>
                <p className="text-paragraph mt-2 text-base leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: How It Works — pure white, large numbered steps ─ */}
      <section className="section-ptb bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label">HOW IT WORKS</p>
          <h2 className="font-display mt-4 max-w-3xl text-3xl font-bold text-brand-dark md:text-4xl">
            From finished work to paid. Four clicks.
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ Icon, title, body }, i) => (
              <div key={title}>
                <p className="font-display select-none text-8xl font-bold leading-none text-brand-accent/20">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <div className="mb-4 mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light">
                  <Icon className="h-7 w-7 text-brand-dark" aria-hidden />
                </div>
                <p className="label-sm text-brand-accent">Step {i + 1}</p>
                <h3 className="font-display mt-1 text-lg font-bold text-brand-dark">{title}</h3>
                <p className="text-paragraph mt-2 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: The Real Math — cream tint, dense table ──────── */}
      <section className="section-ptb bg-[#fdf9ed]">
        <div className="mx-auto max-w-5xl px-6">
          <p className="section-label">THE REAL COST OF WHAT YOU&apos;RE USING NOW</p>
          <h2 className="font-display mt-4 text-3xl font-bold text-brand-dark md:text-4xl">
            You&apos;re already paying for worse invoicing. Here&apos;s how much.
          </h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-[rgba(0,68,33,0.12)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#004421] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold">Current Setup</th>
                  <th className="px-6 py-4 text-left font-semibold">Charm Invoicing</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(({ feature, current, charm }, i) => (
                  <tr key={feature} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-[#fafaf8]'}`}>
                    <td className="px-6 py-4 font-medium text-[#1c1c15]">{feature}</td>
                    <td className="px-6 py-4 text-[#3d3d2e]">{current}</td>
                    <td className="bg-[#fdf9ed] px-6 py-4 font-semibold text-[#004421]">{charm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 rounded-2xl bg-[#004421] px-8 py-6">
            <p className="text-base font-medium leading-relaxed text-white">
              For a consultant invoicing $15,000/month, switching to Charm typically saves $400–$800 per year plus 40–60 hours of admin time.
            </p>
          </div>
          <p className="mt-4 text-xs text-[#3d3d2e]/70">
            Comparison based on industry-standard pricing as of April 2026. Your actual savings may vary based on volume and provider.
          </p>
        </div>
      </section>

      {/* ── Section 6: Why This Works — dark forest, white text, Marquee */}
      <section className="section-ptb bg-[#004421]">
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label !border-white/20 !bg-white/10 !text-brand-accent">BUILT ON REAL INFRASTRUCTURE</p>
          <h2 className="font-display mt-4 max-w-3xl text-3xl font-bold text-white md:text-4xl">Not a toy. Not a tech demo.</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70">
            Charm Invoicing runs on the same infrastructure used by major payment processors worldwide.
          </p>
        </div>
        <div className="mt-12">
          <Marquee pauseOnHover className="[--duration:30s]" repeat={4} fadeColor="#004421">
            {trustItems.map(({ Icon, name, subtitle }) => (
              <TrustItem key={name} Icon={Icon} name={name} subtitle={subtitle} />
            ))}
          </Marquee>
        </div>
      </section>

      {/* ── Section 7: FAQ — white, understated ─────────────────────*/}
      <section className="section-ptb bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-label">YOU PROBABLY HAVE QUESTIONS</p>
          <h2 className="font-display mt-4 text-3xl font-bold text-brand-dark md:text-4xl">Fair enough. Here are the real answers.</h2>
          <div className="mt-8">
            <FaqItem
              q="Is Charm Invoicing really free?"
              a="No monthly fee. No per-invoice charge. No software subscription. You pay only the processing rate on payments you collect — the same rate you'd pay anyway for card processing."
            />
            <FaqItem
              q="Do I need an existing Charm Payments account?"
              a="Yes — Charm Invoicing is built into your Charm merchant account. If you don't have one yet, you can apply at the same time you join the waitlist."
            />
            <FaqItem
              q="What does payment processing actually cost?"
              a="Rates are quote-based and depend on your business and volume. Most merchants pay between 2.3% and 2.9% plus a small per-transaction fee for card payments. ACH is significantly cheaper. We give you a straight number — no rate cards."
            />
            <FaqItem
              q="Can my clients pay without signing up for anything?"
              a="Yes. They click a link in the invoice email and pay with a card or bank account. No app, no account, no friction on their end."
            />
            <FaqItem
              q="How is this different from other invoicing software that's already free?"
              a="Most 'free' invoicing tools route payments through their own gateway at 2.9–3.5%. The invoicing looks free but the processing isn't. Charm is already your payment processor (or will be) — invoicing is bundled in at no extra cost. One relationship, one rate."
            />
            <FaqItem
              q="Does it handle recurring billing?"
              a="Yes. Set up recurring invoices for retainer clients, subscriptions, or installment schedules. Clients can save a payment method for automatic collection."
            />
            <FaqItem
              q="Is my data and my clients' data secure?"
              a="Yes. All data is encrypted in transit and at rest. Payment data is PCI-compliant. Card numbers are tokenized immediately — neither you nor Charm stores them."
            />
            <FaqItem
              q="When is it launching, and how do I get early access?"
              a="Beta launches Q2 2026. We're capping the initial cohort at 100 merchants. Existing Charm Payments merchants go first. Join the waitlist now to hold your spot."
            />
          </div>
        </div>
      </section>

      {/* ── Section 8: Final CTA — dark gradient ────────────────────*/}
      <section
        id="waitlist"
        className="section-ptb px-6 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 50%, #0f4a3d 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="section-label !border-white/20 !bg-white/10 !text-brand-accent">COMING SOON</p>
          <h2 className="font-display gradient-text mt-4 text-3xl font-bold md:text-4xl">Stop chasing. Start collecting.</h2>
          <p className="mt-4 text-lg text-white/80">
            Join the Charm Invoicing beta. Free for Charm Payments merchants. 100 spots total.
          </p>
          <div className="mt-10">
            <WaitlistForm cta="Reserve Your Spot" />
          </div>
          <p className="mt-5 text-sm text-white/60">No credit card. No commitment. No sales calls unless you ask for one.</p>
          {pageDisclaimer}
        </div>
      </section>
    </>
  )
}
