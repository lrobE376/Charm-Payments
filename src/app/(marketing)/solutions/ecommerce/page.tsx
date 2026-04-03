import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'E-Commerce Payment Processing – Charm Payments',
  description:
    'Stripe\'s 2.9% is easy to start on and expensive to scale. Charm gives you a dedicated merchant account, shows you every fee every card type every time, and won\'t pause your account without warning.',
}

const features = [
  {
    label: 'Hosted Checkout',
    heading: 'PCI-compliant checkout in minutes',
    body: 'Launch a hosted payment page without custom dev. Style it to match your brand using NMI hosted fields. PCI scope handled. No card data touches your servers.',
  },
  {
    label: '200+ Integrations',
    heading: 'Connects to your existing stack',
    body: 'WooCommerce, Shopify, Magento, BigCommerce, and 200+ more. Or integrate directly via REST API if you are building headless. One gateway, any platform.',
  },
  {
    label: 'Subscriptions',
    heading: 'Recurring billing without the add-on',
    body: 'Build subscription products, billing cycles, and smart retry logic inside NMI — no Stripe Billing or third-party tool required. Reduces cost and complexity.',
  },
  {
    label: 'Fraud & 3D Secure',
    heading: 'Layered fraud controls for online risk',
    body: '3D Secure 2.0, AVS matching, CVV rules, and iSpyFraud — all configurable to your transaction risk profile. Dispute documentation built in when chargebacks hit.',
  },
]

const whyItems = [
  { title: 'See every fee, every card, every time', desc: 'Debit is cheaper than credit — and you see that on every line of your statement.' },
  { title: '200+ cart integrations', desc: 'Connects to the platform you already use without ripping anything out.' },
  { title: 'Dedicated merchant account', desc: 'Not an aggregated account that can be paused. A real MID with stable fund flow.' },
  { title: 'No long-term contracts', desc: 'Month-to-month. Earn it every statement cycle.' },
]

const testimonials = [
  {
    quote: 'The WooCommerce integration was straightforward. We were processing the same day and the reporting is cleaner than anything we had before.',
    name: 'Ryan M.',
    role: 'E-Commerce Store Owner',
    initial: 'R',
  },
  {
    quote: 'Subscription billing works without Stripe Billing. That alone saves us hundreds a month on platform fees.',
    name: 'Jess T.',
    role: 'SaaS Founder',
    initial: 'J',
  },
  {
    quote: 'We process six figures monthly online. The interchange-plus pricing at our volume is meaningfully better than the flat rates we were on.',
    name: 'David K.',
    role: 'Online Retailer',
    initial: 'D',
  },
]

const platforms = ['WooCommerce', 'Shopify', 'Magento', 'BigCommerce', 'Squarespace', 'Wix', 'Custom API', 'Headless Commerce']

const faqs = [
  {
    q: 'How do I connect my existing store to Charm Payments?',
    a: 'NMI has pre-built integrations for 200+ shopping carts. For most platforms it is a plugin install and configuration. For custom builds, we provide full REST API documentation.',
  },
  {
    q: 'Is this a dedicated merchant account or an aggregated one like Stripe?',
    a: 'Dedicated. You get your own MID with First Data/Fiserv as the acquiring bank. This means more stable fund flow and no risk of sudden account holds from aggregator risk models.',
  },
  {
    q: 'Can I run subscriptions without a third-party billing tool?',
    a: 'Yes. NMI includes recurring billing with configurable cycles, smart retry logic, and dunning management. No Stripe Billing or separate subscription platform required.',
  },
  {
    q: 'How does fraud protection work for online transactions?',
    a: 'NMI layers AVS, CVV, iSpyFraud velocity rules, and optional 3D Secure 2.0. All rules are configurable to match your product mix and chargeback risk profile.',
  },
]

export default function EcommerceSolutionsPage() {
  return (
    <div className="relative">

      {/* HERO */}
      <section
        className="relative overflow-hidden pt-16 pb-20 lg:pt-20 lg:pb-28"
        style={{ background: 'linear-gradient(145deg, #0E1A12 0%, #182A1C 52%, #0E1A12 100%)' }}
      >
        <div className="pointer-events-none absolute -right-24 -top-20 h-[380px] w-[380px] rounded-full bg-sales-green/15 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" aria-hidden />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold text-sales-green/80 uppercase tracking-widest mb-4">Trusted by 500+ St. Louis merchants</p>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur-sm mb-6">
              <span className="h-2 w-2 shrink-0 rounded-full bg-sales-green animate-pulse" aria-hidden />
              E-Commerce · Payment Processing
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Stripe Is Taking More From Every Sale Than Your Blended Rate Shows.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              Stripe and PayPal charge the same flat rate whether a customer pays with a basic debit card or a premium Amex — and keep the difference. Charm gives you a dedicated merchant account, shows you every fee every card type every time, and won&apos;t pause your business without warning.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/apply" className="btn-accent">Get My Free Rate Audit</Link>
              <Link href="/quote" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                Free Rate Audit <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3 list-none p-0">
              {['200+ cart integrations', 'Apple Pay & Google Pay', 'Subscription billing', 'PCI DSS compliant'].map((label) => (
                <li key={label} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90">
                  <CheckCircle className="h-3.5 w-3.5 shrink-0 text-sales-green" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PLATFORM STRIP */}
      <section className="border-y border-gray-100 bg-slate-50/80 py-6">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mr-2">Integrates with</span>
            {platforms.map((v) => (
              <span key={v} className="rounded-full border border-brand-dark/10 bg-white px-4 py-1.5 text-xs font-semibold text-brand-dark shadow-brand-sm">{v}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white section-ptb">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="section-label">BUILT FOR E-COMMERCE</span>
            <h2 className="font-display mt-3 text-3xl font-bold text-brand-dark md:text-4xl">Every Problem With Your Current Payment Stack — Gone</h2>
            <p className="mt-4 text-lg text-paragraph">Checkout, subscriptions, fraud, and digital wallets — one merchant account handles everything so you stop paying for three separate tools to run one store.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {features.map(({ label, heading, body }) => (
              <div key={heading} className="group rounded-[20px] border border-gray-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sales-green/40 hover:shadow-sales-glow">
                <span className="inline-block rounded-full bg-sales-green/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sales-navy mb-4">{label}</span>
                <h3 className="text-xl font-bold text-brand-dark">{heading}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paragraph">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHARM */}
      <section className="bg-brand-light section-ptb">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-label">WHY CHARM PAYMENTS</span>
              <h2 className="font-display mt-3 text-3xl font-bold text-brand-dark md:text-4xl">
                Stripe&apos;s 2.9% is simple — and expensive at scale
              </h2>
              <p className="mt-4 leading-relaxed text-paragraph">
                Stripe and PayPal are easy to integrate but built around a flat rate that does not care whether a customer pays with a basic debit card or a premium Amex rewards card. At e-commerce volume, that blended margin gap is a significant monthly cost — and you are on an aggregated account that can be paused without warning.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {whyItems.map(({ title, desc }) => (
                  <div key={title} className="rounded-xl border border-brand-dark/10 bg-white p-5 shadow-brand-sm">
                    <CheckCircle className="h-5 w-5 text-sales-green mb-2" />
                    <h4 className="font-bold text-brand-dark text-sm">{title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-paragraph">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-brand-dark/10 bg-white p-10 shadow-brand-md">
              <p className="text-sm font-bold uppercase tracking-widest text-sales-green mb-2">Free Rate Audit</p>
              <h3 className="font-display text-2xl font-bold text-brand-dark">See how much you will save at your volume</h3>
              <p className="mt-3 text-sm leading-relaxed text-paragraph">Send us your last processor statement. We will line-item the comparison and show exactly what changes with Charm — before you commit to anything.</p>
              <Link href="/quote" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-dark underline-offset-2 hover:underline">
                Get your free audit <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 section-ptb">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <span className="section-label">MERCHANT REVIEWS</span>
            <h2 className="font-display mt-3 text-3xl font-bold text-brand-dark md:text-4xl">What Online Merchants Found When They Saw Their Real Costs</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-[20px] border border-gray-100 bg-white p-8 shadow-brand-sm">
                <p className="italic leading-relaxed text-gray-600 text-sm">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sales-navy font-bold text-white text-sm">{t.initial}</div>
                  <div>
                    <p className="font-bold text-brand-dark text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-gray-400">Testimonials are illustrative. Individual merchant results may vary.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white section-ptb">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <span className="section-label">FAQ</span>
            <h2 className="font-display mt-3 text-3xl font-bold text-brand-dark md:text-4xl">Common questions from online merchants</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {faqs.map(({ q, a }) => (
              <div key={q} className="py-6">
                <h3 className="font-bold text-brand-dark">{q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paragraph">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden section-ptb px-6 text-center" style={{ background: 'linear-gradient(145deg, #0E1A12 0%, #182A1C 50%, #0E1A12 100%)' }}>
        <div className="relative z-10 mx-auto max-w-2xl">
          <span className="inline-block rounded-full border border-sales-green/50 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sales-green">READY TO SWITCH?</span>
          <h2 className="font-display mt-4 text-3xl font-bold text-white md:text-4xl">Find Out What Stripe Has Been Keeping From Every Sale.</h2>
          <p className="mt-4 text-lg text-white/75">Your last Stripe statement is a blended number that hides what you actually pay per card type. We&apos;ll break it down, line by line, and show you exactly what changes with Charm — no commitment, no pressure.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/apply" className="btn-accent">Get My Free Audit</Link>
            <Link href="/quote" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
              Free Rate Audit <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
