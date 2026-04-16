// src/app/(marketing)/gateway/hardware/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Cpu } from 'lucide-react'
import { hardwareDevices } from '@/lib/nmi-products'

export const metadata: Metadata = {
  title: 'Payment Hardware — Charm Payments',
  description:
    'NMI-certified payment terminals for every environment. PAX A920 SmartPOS, Ingenico Lane/3000, and Lane/7000 — all EMV, NFC, and PCI PTS 5.X certified.',
}

const categories = [
  {
    id: 'countertop',
    label: 'Countertop Terminals',
    description: 'For retail and restaurant fixed-point checkout',
  },
  {
    id: 'mobile',
    label: 'Mobile SmartPOS',
    description: 'Wireless Android POS for mobile & service businesses',
  },
  {
    id: 'unattended',
    label: 'Unattended & Self-Service',
    description: 'Kiosks, parking, vending, EV charging, and transit',
  },
] as const

const certBadges = ['PCI PTS 5.X', 'EMV L1 & L2', 'Visa Contactless', 'Mastercard Contactless', 'NMI Certified']

export default function HardwarePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark text-white section-ptb">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="section-label text-brand-accent mb-4">Payment Hardware</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Certified Terminals for
              <span className="gradient-text block">Every Environment</span>
            </h1>
            <p className="text-lg text-white/75 mb-8 leading-relaxed">
              Every device we offer is NMI-certified, PCI PTS 5.X compliant, and supports EMV
              contact, contactless, and NFC payments right out of the box.
            </p>
            <div className="flex flex-wrap gap-2">
              {certBadges.map((b) => (
                <span
                  key={b}
                  className="bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full border border-white/20"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs info */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <div key={cat.id} className="text-center p-4">
                <p className="font-bold text-brand-dark">{cat.label}</p>
                <p className="text-sm text-gray-500 mt-1">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Cards */}
      <section className="section-ptb bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-10">
            {hardwareDevices.map((device) => (
              <div
                key={device.id}
                className="charm-card overflow-hidden grid md:grid-cols-5 gap-0"
              >
                {/* Left: image placeholder with accent color */}
                <div className="md:col-span-1 bg-brand-dark flex items-center justify-center p-8 min-h-[200px]">
                  <div className="text-center">
                    <Cpu className="w-14 h-14 text-brand-accent mx-auto mb-3" />
                    <span className="text-xs text-white/50 uppercase tracking-widest">
                      {device.category}
                    </span>
                  </div>
                </div>

                {/* Right: content */}
                <div className="md:col-span-4 p-8">
                  <div className="flex flex-wrap items-start gap-3 mb-3">
                    <h2 className="text-2xl font-bold text-brand-dark">{device.name}</h2>
                    <span className="bg-brand-accent/20 text-brand-dark text-xs font-semibold px-2.5 py-1 rounded-full mt-0.5">
                      {device.tagline}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{device.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Highlights */}
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                        Key Highlights
                      </h3>
                      <ul className="space-y-2">
                        {device.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specs */}
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                        Technical Specifications
                      </h3>
                      <dl className="space-y-1.5">
                        {device.specs.map((s) => (
                          <div key={s.label} className="flex gap-2 text-sm">
                            <dt className="text-gray-400 font-medium shrink-0 w-28">{s.label}</dt>
                            <dd className="text-gray-700">{s.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unattended vertical callout */}
      <section className="section-ptb bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="charm-card p-10 bg-brand-dark text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="section-label text-brand-accent mb-3">Unattended & Self-Service</p>
                <h2 className="text-3xl font-bold mb-4">
                  Payments That Run Without a Cashier
                </h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  NMI&apos;s unattended platform supports parking paystations, vending machines, kiosks,
                  EV charging stations, transit ticketing, and toll booths — all managed through the
                  same gateway dashboard.
                </p>
                <ul className="space-y-2">
                  {[
                    'Auto-board terminals on first transaction',
                    'PCI P2PE for distributed remote networks',
                    '20+ years unattended payment experience',
                    'Unified reporting with retail & ecommerce',
                  ].map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                {['Parking Paystations', 'Vending Machines', 'Kiosks', 'EV Charging Stations', 'Transit Ticketing', 'Toll Booths'].map(
                  (v) => (
                    <div
                      key={v}
                      className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                    >
                      <div className="w-2 h-2 bg-brand-accent rounded-full shrink-0" />
                      <span className="text-sm text-white/80">{v}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-brand-accent/10 border-t border-brand-accent/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-brand-dark">
              Ready to Order or Have Questions?
            </h3>
            <p className="text-gray-600 mt-1">
              Contact us and we&apos;ll help you choose the right terminal for your business.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/apply" className="btn-primary inline-flex items-center gap-2">
              Apply for a Merchant Account <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-outline inline-flex items-center gap-2">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
