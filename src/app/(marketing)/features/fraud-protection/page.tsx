import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Building2, CheckCircle, Globe, Lock, Shield, ShoppingCart, Utensils, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fraud Protection — Charm Payments',
  description:
    'AI-powered fraud screening on every transaction. Basic fraud screening included free. Kount Advanced available. Protect your business from chargebacks and fraud losses.',
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

export default function FraudProtectionPage() {
  return (
    <>
      <section
        className="relative overflow-hidden px-6 py-20 text-center md:py-28"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 100%)' }}
      >
        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="section-label !border-white/20 !bg-white/10 !text-brand-accent">FRAUD PROTECTION</span>
          <h1 className="font-display mt-4 whitespace-pre-line text-4xl font-bold text-white md:text-5xl lg:text-[3rem]">
            {`Stop Fraud Before It\nCosts You Money`}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
            Every Charm Payments transaction runs through AI-powered fraud screening. Basic protection is included free. Add Kount Advanced — the same fraud AI used by Fortune
            500 companies — for enterprise-grade protection.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Included Free</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">AI-Powered</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Kount Advanced Available</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Real-Time Screening</span>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/apply" className="btn-accent inline-flex min-h-[44px] items-center justify-center">
              Apply for Your Merchant Account
            </Link>
            <Link
              href="/quote"
              className="btn-outline inline-flex min-h-[44px] items-center justify-center !border-white/45 !text-white !shadow-none hover:!border-white hover:!bg-white hover:!text-brand-dark"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="section-ptb bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label">LAYERS OF PROTECTION</p>
          <h2 className="font-display mt-4 max-w-3xl whitespace-pre-line text-3xl font-bold text-brand-dark md:text-4xl">
            {`Multiple Lines of Defense\nOn Every Transaction`}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="charm-card bg-brand-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                <Shield className="h-8 w-8 text-brand-dark" aria-hidden />
              </div>
              <h3 className="font-display mt-4 text-xl font-bold text-brand-dark">Basic Fraud Screening</h3>
              <p className="mt-1 text-sm font-semibold text-brand-dark">Included free</p>
              <p className="text-paragraph mt-3 text-sm leading-relaxed">
                AI screening on every transaction. Flags suspicious patterns, velocity checks, and known fraud indicators before approval.
              </p>
              <ul className="mt-4 space-y-2">
                {['Real-time transaction screening', 'Velocity checks', 'IP and device fingerprinting', 'Included in all plans'].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-dark" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="charm-card bg-brand-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                <Zap className="h-8 w-8 text-brand-dark" aria-hidden />
              </div>
              <h3 className="font-display mt-4 text-xl font-bold text-brand-dark">Kount® Advanced</h3>
              <p className="mt-1 text-sm font-semibold text-brand-dark">$7/mo + $0.07/txn</p>
              <p className="text-paragraph mt-3 text-sm leading-relaxed">
                Enterprise-grade fraud AI from Kount — the industry standard used by the world&apos;s largest merchants. Machine learning that improves over time.
              </p>
              <ul className="mt-4 space-y-2">
                {['Machine learning fraud models', 'Global fraud intelligence network', 'Custom risk rules', 'Chargeback liability protection'].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-dark" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="charm-card bg-brand-card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                <Lock className="h-8 w-8 text-brand-dark" aria-hidden />
              </div>
              <h3 className="font-display mt-4 text-xl font-bold text-brand-dark">Payer Authentication</h3>
              <p className="mt-1 text-sm font-semibold text-brand-dark">$9/mo + $0.09/txn</p>
              <p className="text-paragraph mt-3 text-sm leading-relaxed">
                3D Secure authentication adds an extra verification step for high-risk transactions. Shifts chargeback liability to the card issuer.
              </p>
              <ul className="mt-4 space-y-2">
                {['3D Secure 2.0 support', 'Liability shift on authenticated txns', 'Frictionless for low-risk orders', 'Required by some card networks'].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-dark" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-ptb bg-brand-light">
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label">WHO NEEDS ADVANCED PROTECTION</p>
          <h2 className="font-display mt-4 max-w-3xl whitespace-pre-line text-3xl font-bold text-brand-dark md:text-4xl">
            {`Industries With Higher\nFraud Exposure`}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: ShoppingCart,
                title: 'E-Commerce',
                desc: 'Card-not-present transactions carry higher fraud risk. Kount Advanced significantly reduces chargeback rates for online stores.',
              },
              {
                Icon: Globe,
                title: 'Digital Goods',
                desc: 'Software, gaming, and digital downloads are frequent fraud targets. Advanced screening blocks fraudulent orders before delivery.',
              },
              {
                Icon: Utensils,
                title: 'Food Delivery',
                desc: 'High order volume and card-not-present creates fraud exposure. AI screening protects margin on every order.',
              },
              {
                Icon: Building2,
                title: 'High-Risk Merchants',
                desc: 'Travel, nutraceuticals, and other high-risk categories require robust fraud tools to maintain processing privileges.',
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
          <h2 className="font-display mt-4 text-3xl font-bold text-brand-dark md:text-4xl">Fraud Protection FAQ</h2>
          <div className="mt-8">
            <FaqItem
              q="What fraud protection is included for free?"
              a="Basic fraud screening is included in all Charm Payments accounts at no extra charge. This includes real-time AI screening, velocity checks, and device fingerprinting on every transaction."
            />
            <FaqItem
              q="What is Kount Advanced and do I need it?"
              a={"Kount is an enterprise fraud intelligence platform used by major merchants worldwide. It's recommended for e-commerce merchants, high-risk businesses, and anyone with elevated chargeback rates. Cost is $7/mo plus $0.07 per transaction."}
            />
            <FaqItem
              q="What is a chargeback and how do I prevent them?"
              a="A chargeback is when a customer disputes a charge with their bank. The disputed amount is held while the bank investigates. Strong fraud screening reduces fraudulent chargebacks. Clear billing descriptors and good customer service reduce legitimate disputes."
            />
            <FaqItem
              q="What is Payer Authentication (3D Secure)?"
              a="3D Secure adds a verification step where the cardholder confirms the purchase with their bank. When authentication succeeds, chargeback liability shifts from you to the card issuer."
            />
            <FaqItem
              q="How does fraud screening affect approval rates?"
              a="Basic screening has minimal impact on legitimate transactions. Kount Advanced uses machine learning to distinguish fraud from good orders — reducing false declines that hurt your revenue."
            />
            <FaqItem
              q="What should I do if I get a chargeback?"
              a="Log in to your dashboard and respond with evidence within the deadline shown. Our team can guide you through the dispute process. A $25 chargeback fee applies per dispute."
            />
          </div>
        </div>
      </section>

      <section
        className="section-ptb px-6 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 50%, #0f4a3d 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="section-label !border-white/20 !bg-white/10 !text-brand-accent">PROTECT YOUR REVENUE</p>
          <h2 className="font-display mt-4 whitespace-pre-line text-3xl font-bold md:text-4xl">
            {`Stop Fraud Before\nIt Reaches Your Account.`}
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Basic fraud protection included free. Kount Advanced available for $7/mo. Apply today and protect every transaction.
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
