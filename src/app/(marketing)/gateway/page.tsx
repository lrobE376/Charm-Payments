// src/app/(marketing)/gateway/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Zap, Shield, Globe, BarChart3 } from 'lucide-react'
import { solutionVerticals } from '@/lib/nmi-products'

export const metadata: Metadata = {
  title: 'Gateway & Products — Charm Payments',
  description:
    'Powered by NMI — a full-featured payment gateway with 200+ processor connections, 125+ shopping cart integrations, and hardware for every environment.',
}

const stats = [
  { value: '$203B+', label: 'Payments Volume' },
  { value: '277K+', label: 'Merchants Served' },
  { value: '200+', label: 'Processor Connections' },
  { value: '125+', label: 'Shopping Cart Integrations' },
]

const gatewayHighlights = [
  {
    icon: Zap,
    title: 'Seamless White Labeling',
    description:
      'Control your brand across the entire gateway — your logo, your colors, your domain name.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description:
      'PCI P2PE, 3DS2, tokenization, and advanced fraud filters protect every transaction.',
  },
  {
    icon: Globe,
    title: 'Omnichannel in One Place',
    description:
      'In-store, online, mobile, and unattended payments all managed from a single dashboard.',
  },
  {
    icon: BarChart3,
    title: 'Automated Billing & Reporting',
    description:
      'Commissions tracking, residual reporting, and automated merchant billing — all from your Partner Portal.',
  },
]

export default function GatewayPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark text-white section-ptb">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="section-label text-brand-accent mb-4">Powered by NMI</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              A Complete Payment
              <span className="gradient-text block">Gateway & Product Suite</span>
            </h1>
            <p className="text-lg text-white/75 mb-8 leading-relaxed">
              Charm Payments is built on the NMI gateway — the same infrastructure trusted by
              277,000+ merchants and $203B+ in annual payment volume. You get every tool you need,
              white-labeled under your brand.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/apply" className="btn-accent">
                Apply for a Merchant Account
              </Link>
              <Link href="/gateway/features" className="btn-outline border-white/30 text-white hover:border-brand-accent">
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-accent/10 border-y border-brand-accent/20 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.value} className="text-center">
                <p className="text-3xl font-bold text-brand-dark">{s.value}</p>
                <p className="text-sm text-gray-600 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Cards — Features & Hardware */}
      <section className="section-ptb bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
              Software & Hardware in One Platform
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From hosted checkout pages and recurring billing to countertop terminals and mobile
              SmartPOS — everything ships through the same NMI gateway.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Features card */}
            <div className="charm-card p-8 flex flex-col">
              <div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center mb-6 shrink-0">
                <Zap className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">
                Gateway Features
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Virtual Terminal, Collect.js, Customer Vault, Recurring Billing, Fraud Prevention,
                Webhooks, 3DS, QuickBooks SyncPay, Google Pay — 11 powerful features included.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Virtual Terminal & Collect Checkout',
                  'Customer Vault & Tokenization',
                  'Automatic Card Updater',
                  'Fraud Prevention & 3DS',
                  'Webhooks & Real-Time Reporting',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Link
                  href="/gateway/features"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  View All Features <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Hardware card */}
            <div className="charm-card p-8 flex flex-col">
              <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center mb-6 shrink-0">
                <Shield className="w-6 h-6 text-brand-dark" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">
                Payment Hardware
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Certified terminals for countertop, mobile, and unattended environments. PAX A920
                SmartPOS, Ingenico Lane/3000, Lane/7000 — all PCI PTS 5.X certified and NMI
                certified.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'PAX A920 Android SmartPOS',
                  'Ingenico Lane/3000 Countertop',
                  'Ingenico Lane/7000 Multi-Lane',
                  'NFC & contactless on every device',
                  'EMV L1 & L2 certified',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Link
                  href="/gateway/hardware"
                  className="btn-accent inline-flex items-center gap-2"
                >
                  See Hardware Options <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gateway Highlights */}
      <section className="section-ptb bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Platform Advantages</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
              Built for ISOs & Payment Partners
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gatewayHighlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center p-6">
                <div className="w-12 h-12 bg-brand-dark/8 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-brand-dark" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Verticals */}
      <section className="section-ptb bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Industry Solutions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
              Payments for Every Business Type
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionVerticals.map((v) => (
              <div key={v.id} className="charm-card p-6">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-brand-dark mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-ptb bg-brand-dark text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Accepting Payments?
          </h2>
          <p className="text-white/70 mb-8">
            Apply for your merchant account today. No setup fees to start.
          </p>
          <Link href="/apply" className="btn-accent text-lg px-8 py-4">
            Apply for Your Merchant Account
          </Link>
        </div>
      </section>
    </>
  )
}
