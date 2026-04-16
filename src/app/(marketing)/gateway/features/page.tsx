// src/app/(marketing)/gateway/features/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { gatewayFeatures } from '@/lib/nmi-products'

export const metadata: Metadata = {
  title: 'Gateway Features — Charm Payments',
  description:
    'Virtual Terminal, Collect.js, Customer Vault, Recurring Billing, Fraud Prevention, Webhooks, 3DS, and more — all included in your Charm Payments gateway.',
}

export default function GatewayFeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark text-white section-ptb">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="section-label text-brand-accent mb-4">Gateway Features</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Every Tool Your Merchants Need
              <span className="gradient-text block">Included in One Gateway</span>
            </h1>
            <p className="text-lg text-white/75 leading-relaxed">
              From accepting online payments with a single line of code to automating subscription
              billing and preventing fraud before it happens — the NMI gateway has it all built in.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-ptb bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {gatewayFeatures.map((feature) => (
              <div key={feature.id} className="charm-card p-7 flex flex-col relative">
                {feature.badge && (
                  <span className="absolute top-4 right-4 bg-brand-accent text-brand-dark text-xs font-bold px-2.5 py-1 rounded-full">
                    {feature.badge}
                  </span>
                )}
                <h2 className="text-xl font-bold text-brand-dark mb-3 pr-8">
                  {feature.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {feature.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {feature.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Gateway Features callout */}
      <section className="section-ptb bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Also Included</p>
              <h2 className="text-3xl font-bold text-brand-dark mb-5">
                More Core Gateway Capabilities
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Every Charm Payments gateway account also includes these built-in tools at no extra
                cost.
              </p>
              <ul className="space-y-3">
                {[
                  'Electronic Check (ACH) processing',
                  '3rd Party Shopping Cart integrations (125+)',
                  'QR Code payment links',
                  'Batch processing for high-volume transactions',
                  'Query API for custom reporting',
                  'Product Manager for SKU & inventory management',
                  'Terminal Management System (TMS)',
                  'Transaction routing across multiple MIDs',
                  'PCI P2PE point-to-point encryption',
                  'Remote Key Injection for secure terminal setup',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="charm-card p-8 bg-brand-dark text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Apply for your merchant account and get access to the full NMI gateway — including
                every feature on this page.
              </p>
              <Link
                href="/apply"
                className="btn-accent inline-flex items-center gap-2 w-full justify-center"
              >
                Apply for Your Merchant Account <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="mt-3 text-white/60 hover:text-white text-sm text-center block transition-colors"
              >
                Have questions? Contact us first →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware CTA strip */}
      <section className="py-12 bg-brand-accent/10 border-y border-brand-accent/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-brand-dark">
              Also Need Payment Hardware?
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              We offer certified NMI terminals for every environment — countertop, mobile, and
              unattended.
            </p>
          </div>
          <Link
            href="/gateway/hardware"
            className="btn-primary inline-flex items-center gap-2 shrink-0"
          >
            View Hardware Options <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
