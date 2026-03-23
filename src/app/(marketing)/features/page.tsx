import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Building2,
  CheckCircle,
  Code,
  FileText,
  Globe,
  MessageSquare,
  Monitor,
  Phone,
  QrCode,
  RefreshCw,
  ShoppingCart,
  Smartphone,
  Store,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Payment Processing Features — Charm Payments',
  description:
    'Every feature included with your Charm Payments merchant account — virtual terminal, invoicing, text to pay, recurring billing, QR codes, fraud screening, and more.',
}

const coreFeatures = [
  {
    icon: Monitor,
    name: 'Virtual Terminal',
    desc: 'Accept payments from any browser — no hardware needed. Key in card details manually for phone orders, mail orders, and MOTO transactions. Works on any device, anywhere.',
    features: [
      'Accept Visa, MC, Amex, Discover',
      'Phone and mail order ready',
      'Works from any browser',
      'No software to install',
    ],
  },
  {
    icon: FileText,
    name: 'Electronic Invoicing',
    desc: 'Create and send professional payment invoices in seconds. Your customer gets a link, clicks it, and pays. No chasing checks, no awkward conversations about money.',
    features: ['Send via email or text', 'Customer pays online instantly', 'Track paid and unpaid invoices', 'Add $5/mo per merchant'],
  },
  {
    icon: MessageSquare,
    name: 'Text to Pay',
    desc: 'Send a payment request by text message. Your customer gets an SMS, taps the link, and pays from their phone in under 30 seconds. Perfect for service businesses.',
    features: ['SMS payment requests', 'Customer pays from any phone', 'No app download required', 'Powered by Authvia TXT2Pay'],
  },
  {
    icon: RefreshCw,
    name: 'Recurring Billing',
    desc: 'Set up automatic charges on any schedule — weekly, monthly, or annually. Perfect for memberships, retainers, subscription boxes, and service contracts.',
    features: ['Weekly, monthly, or custom schedule', 'Automatic retry on failed payments', 'Customer vault for stored cards', 'Included in all plans'],
  },
  {
    icon: QrCode,
    name: 'QR Code Payments',
    desc: 'Generate a payment QR code and put it anywhere — receipts, business cards, flyers, menus, storefronts. Customer scans and pays. Zero hardware required.',
    features: ['Instant QR code generation', 'Print on any marketing material', 'Contactless and hygienic', 'Included in all plans'],
  },
  {
    icon: Globe,
    name: 'E-Commerce Gateway',
    desc: 'Connect your online store to Charm Payments with one line of code using Collect.js. Supports 125+ shopping carts including Shopify, WooCommerce, and Magento.',
    features: ['Collect.js — single line of code', '125+ shopping cart integrations', 'Hosted payment page included', 'Apple Pay and Google Pay ready'],
  },
] as const

const omniItems = [
  { icon: Globe, title: 'Online', desc: 'E-commerce, hosted pages, buy buttons, and Collect.js' },
  { icon: Store, title: 'In-Store', desc: 'Card present terminals with WiFi and 4G cellular backup' },
  { icon: Smartphone, title: 'Mobile', desc: 'Tap to Pay on iPhone and Android — no hardware needed' },
  { icon: Phone, title: 'Phone & Mail', desc: 'Virtual terminal for MOTO — key in card details manually' },
] as const

const fraudItems = [
  {
    title: 'Basic Fraud Screening',
    desc: 'AI-powered screening on every transaction. Flags suspicious patterns before they become chargebacks.',
  },
  {
    title: 'Kount® Advanced Fraud Prevention',
    desc: "Enterprise-grade fraud AI used by the world's largest merchants. Machine learning that improves with every transaction.",
  },
  {
    title: 'Payer Authentication (3D Secure)',
    desc: 'Adds an extra verification step for high-risk transactions. Shifts chargeback liability away from you to the card issuer.',
  },
  {
    title: 'PCI DSS Compliance',
    desc: 'Your account is fully PCI compliant from day one. Annual PCI fee of $99 covers your compliance certification.',
  },
  {
    title: 'Breach Protection',
    desc: 'Data breach insurance and monitoring included. $7.95/mo protects you and your customers.',
  },
  {
    title: 'Tokenization',
    desc: 'Card numbers are never stored on your servers. Tokens replace sensitive data at the point of capture.',
  },
] as const

const addOnRows = [
  { feature: 'Electronic Invoicing', monthly: '$5.00/mo', perTxn: '$0.05/invoice', bestFor: 'Service businesses' },
  { feature: 'Text to Pay (TXT2Pay)', monthly: '$5.00/mo', perTxn: '$0.18/txn', bestFor: 'Mobile service providers' },
  { feature: 'Customer Vault', monthly: '$8.00/mo', perTxn: '$0.08/record', bestFor: 'Repeat customers' },
  { feature: 'Automatic Card Updater', monthly: '$5.00/mo', perTxn: '$0.20/record', bestFor: 'Subscription businesses' },
  { feature: 'Payer Authentication', monthly: '$9.00/mo', perTxn: '$0.09/txn', bestFor: 'High-risk reduction' },
  { feature: 'Kount Advanced Fraud', monthly: '$7.00/mo', perTxn: '$0.07/txn', bestFor: 'High volume merchants' },
  { feature: 'Card Present Device', monthly: '$8.00/mo', perTxn: '—', bestFor: 'Retail / restaurant' },
  { feature: 'iProcess Mobile Reader', monthly: '$2.50/mo', perTxn: '—', bestFor: 'Mobile merchants' },
  { feature: 'Electronic Checks (ACH)', monthly: '$15.00/mo', perTxn: '$0.20/txn', bestFor: 'B2B / high ticket' },
  { feature: 'Level III Processing', monthly: '$10.00/mo', perTxn: '$0.10/txn', bestFor: 'B2B / government' },
] as const

export default function FeaturesPage() {
  return (
    <>
      {/* SECTION 1 — DARK HERO */}
      <section
        className="relative overflow-hidden px-6 py-20 text-center md:py-28"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 100%)' }}
      >
        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="section-label !border-white/20 !bg-white/10 !text-brand-accent">EVERYTHING INCLUDED</span>
          <h1 className="font-display mt-4 whitespace-pre-line text-4xl font-bold text-white md:text-5xl lg:text-[3rem]">
            {`Every Tool Your Business\nNeeds to Get Paid`}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
            One merchant account. One gateway. Every payment feature included — virtual terminal, invoicing, text to pay, recurring billing, QR codes, and fraud
            protection. No separate apps. No extra subscriptions.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">200+ Processor Connections</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">125+ Cart Integrations</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">No Setup Fees</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">48-Hour Approval</span>
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

      {/* SECTION 2 — CORE FEATURES */}
      <section className="section-ptb bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="section-label">CORE FEATURES</span>
            <h2 className="font-display mt-3 whitespace-pre-line text-3xl font-bold md:text-4xl">
              <span className="gradient-text">{`Built for How\nReal Businesses Work`}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-[var(--paragraph)]/90">
              Every Charm Payments merchant account includes these tools from day one — no upgrades required.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map(({ icon: Icon, name, desc, features }) => (
              <article key={name} className="charm-card bg-brand-card p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-dark text-white">
                  <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="font-display mt-5 text-xl font-bold text-[var(--heading)]">{name}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{desc}</p>
                <ul className="mt-6 space-y-2">
                  {features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-[var(--paragraph)]">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — ACCEPT ANYWHERE */}
      <section className="section-ptb bg-brand-light">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="section-label">OMNI-CHANNEL</span>
            <h2 className="font-display mt-3 whitespace-pre-line text-3xl font-bold text-[var(--heading)] md:text-4xl">
              {`Accept Payments\nAnywhere Customers Are`}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-[var(--paragraph)]/90">
              Online, in-store, mobile, or over the phone — Charm Payments works across every channel your business operates in.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {omniItems.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="charm-card bg-white p-6 text-center">
                <Icon className="mx-auto mb-3 h-8 w-8 text-brand-dark" aria-hidden />
                <h3 className="font-display text-lg font-bold text-[var(--heading)]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — FRAUD AND SECURITY */}
      <section className="section-ptb bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="section-label">SECURITY &amp; FRAUD PROTECTION</span>
            <h2 className="font-display mt-3 whitespace-pre-line text-3xl font-bold text-[var(--heading)] md:text-4xl">
              {`Bank-Level Security\nOn Every Transaction`}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-[var(--paragraph)]/90">
              Every Charm Payments account includes multiple layers of fraud protection — from basic screening to Kount Advanced, the same AI fraud system used by
              Fortune 500 companies.
            </p>
          </div>
          <div className="mt-14 grid items-center gap-12 md:grid-cols-2">
            <ul className="space-y-6">
              {fraudItems.map(({ title, desc }) => (
                <li key={title} className="flex gap-4">
                  <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-brand-accent" strokeWidth={2} aria-hidden />
                  <div>
                    <h3 className="font-display text-lg font-bold text-[var(--heading)]">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="rounded-[24px] bg-brand-dark p-8 text-white">
              <h3 className="font-display text-xl font-bold text-white">Chargeback Protection</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                When a customer disputes a charge, we notify you immediately and help you submit evidence to win the case. Our team guides you through the response
                process.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="font-display text-2xl font-bold text-brand-accent">$25</p>
                  <p className="mt-1 text-xs text-white/70">Chargeback fee (industry avg: $25-100)</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-brand-accent">$10</p>
                  <p className="mt-1 text-xs text-white/70">Retrieval fee</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-brand-accent">24hr</p>
                  <p className="mt-1 text-xs text-white/70">Dispute notification</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-brand-accent">48hr</p>
                  <p className="mt-1 text-xs text-white/70">Response window</p>
                </div>
              </div>
              <p className="mt-8 text-xs leading-relaxed text-white/60">
                Charm Payments is a payment facilitator, not a bank. Payment processing services are provided through our licensed acquiring bank partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — ADD-ON PRODUCTS */}
      <section className="section-ptb bg-brand-light">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <span className="section-label">ADD-ON PRODUCTS</span>
            <h2 className="font-display mt-3 whitespace-pre-line text-3xl font-bold text-[var(--heading)] md:text-4xl">
              {`Expand Your Capabilities\nWhen You Need Them`}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--paragraph)]/90">
              Add these features to any merchant account. Enable them instantly from your dashboard.
            </p>
          </div>
          <div className="mt-12 overflow-x-auto rounded-[20px] bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th scope="col" className="px-4 py-3 font-semibold text-[var(--heading)]">
                    Feature
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold text-[var(--heading)]">
                    Monthly Fee
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold text-[var(--heading)]">
                    Per Transaction
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold text-[var(--heading)]">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody>
                {addOnRows.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3 font-medium text-[var(--heading)]">{row.feature}</td>
                    <td className="px-4 py-3 text-gray-700">{row.monthly}</td>
                    <td className="px-4 py-3 text-gray-700">{row.perTxn}</td>
                    <td className="px-4 py-3 text-gray-600">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            All add-ons are month-to-month. Enable or disable anytime from your merchant dashboard. No long-term commitments.
          </p>
        </div>
      </section>

      {/* SECTION 6 — INTEGRATIONS */}
      <section className="section-ptb bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="section-label">INTEGRATIONS</span>
            <h2 className="font-display mt-3 whitespace-pre-line text-3xl font-bold text-[var(--heading)] md:text-4xl">
              {`Connects to the Tools\nYou Already Use`}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-[var(--paragraph)]/90">
              200+ payment processor connections and 125+ shopping cart integrations — Charm Payments works with your existing stack out of the box.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="charm-card bg-brand-card p-8">
              <ShoppingCart className="h-8 w-8 text-brand-dark" aria-hidden />
              <h3 className="font-display mt-4 text-xl font-bold text-[var(--heading)]">E-Commerce Platforms</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Shopify · WooCommerce · Magento · BigCommerce · OpenCart · PrestaShop · osCommerce · Volusion
              </p>
              <p className="mt-4 text-xs font-semibold text-brand-dark">125+ total integrations</p>
            </div>
            <div className="charm-card bg-brand-card p-8">
              <Code className="h-8 w-8 text-brand-dark" aria-hidden />
              <h3 className="font-display mt-4 text-xl font-bold text-[var(--heading)]">Developer APIs &amp; SDKs</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                REST API · Collect.js · Direct Post · Gateway Emulator · Webhooks · Batch Upload · iOS SDK · Android SDK
              </p>
              <p className="mt-4 text-xs font-semibold text-brand-dark">Full API documentation included</p>
            </div>
            <div className="charm-card bg-brand-card p-8">
              <Building2 className="h-8 w-8 text-brand-dark" aria-hidden />
              <h3 className="font-display mt-4 text-xl font-bold text-[var(--heading)]">Payment Networks</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Visa · Mastercard · Discover · American Express · JCB · Diners Club · China Union Pay · Apple Pay · Google Pay
              </p>
              <p className="mt-4 text-xs font-semibold text-brand-dark">USD, CAD + international processors</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — DARK CTA */}
      <section
        className="section-ptb px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 50%, #0f4a3d 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <span className="section-label !border-brand-accent/40 !bg-white/10 !text-brand-accent">GET EVERY FEATURE</span>
          <h2 className="font-display mt-4 whitespace-pre-line text-3xl font-bold text-white md:text-4xl">
            {`Everything Included.\nNo Feature Paywalls.`}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            Every Charm Payments merchant account comes with the full NMI gateway — virtual terminal, recurring billing, QR codes, e-commerce integrations, and fraud
            protection. Apply in minutes. Approved in 48 hours.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/apply" className="btn-accent inline-flex min-h-[44px] items-center justify-center">
              Apply for Your Merchant Account
            </Link>
            <Link
              href="/pricing"
              className="btn-outline inline-flex min-h-[44px] items-center justify-center !border-white/45 !text-white !shadow-none hover:!border-white hover:!bg-white hover:!text-brand-dark"
            >
              See Pricing Plans
            </Link>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-xs leading-relaxed text-white/50">
            Charm Payments is a payment facilitator, not a bank. Payment processing services are provided through our licensed acquiring bank partner. Merchant funds
            are subject to the terms of the Merchant Agreement.
          </p>
        </div>
      </section>
    </>
  )
}
