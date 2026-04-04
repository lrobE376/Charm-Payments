// src/app/(marketing)/about/page.tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PrimaryCTA from '@/components/conversion/PrimaryCTA'

export const metadata: Metadata = {
  title: { absolute: 'About — Charm Payments' },
  description:
    'Charm Payments is a St. Louis-based payment facilitator founded by Lee Robertson. We give Main Street merchants a local alternative to Square and Stripe — built on NMI and First Data.',
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-dark text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2">
            <p className="text-sm font-semibold text-brand-accent uppercase tracking-wide">About Us</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              Built in St. Louis.<br />Built for Main Street.
            </h1>
            <p className="text-white/75 mt-5 max-w-xl text-lg leading-relaxed">
              Charm Payments gives independent merchants a transparent, locally-owned alternative to
              the big processors — with no hidden fees, real support, and the infrastructure of
              enterprise acquirers behind it.
            </p>
            <div className="mt-8">
              <PrimaryCTA variant="on-dark" />
            </div>
          </div>
          <div className="hidden lg:flex lg:w-1/2 justify-center mt-12 lg:mt-0">
            <div className="relative w-full max-w-[460px]">
              <div className="rounded-[24px] overflow-hidden shadow-2xl">
                <Image
                  src="/images/pexels-mikhail-nilov-7681664.jpg"
                  alt="Lee Robertson, founder of Charm Payments, St. Louis MO"
                  width={600}
                  height={700}
                  className="w-full h-[480px] object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-4 max-w-[220px]">
                <p className="text-[11px] text-brand-accent font-bold uppercase tracking-wide">Founded</p>
                <p className="text-sm font-semibold text-gray-900">St. Louis, Missouri</p>
                <p className="text-xs text-gray-500 mt-0.5">Charm Holdings LLC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:flex lg:gap-16 lg:items-start">
          <div className="lg:w-1/3 mb-10 lg:mb-0">
            <div className="rounded-[20px] overflow-hidden shadow-lg bg-brand-light aspect-[4/5] flex items-center justify-center">
              <div className="text-center px-8">
                <div className="w-20 h-20 rounded-full bg-brand-dark flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-brand-accent">LR</span>
                </div>
                <p className="font-bold text-gray-900 text-lg">Lee Robertson</p>
                <p className="text-sm text-gray-500 mt-1">Founder &amp; CEO</p>
                <p className="text-xs text-gray-400 mt-0.5">St. Louis, MO</p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3">
            <p className="section-label mb-4">OUR FOUNDER</p>
            <h2 className="text-3xl font-bold text-gray-900">Lee Robertson</h2>
            <p className="text-gray-600 mt-5 leading-relaxed">
              Lee Robertson brings more than 15 years of experience in information technology,
              systems integration, and business operations to Charm Payments. A proud Lincoln
              University of Missouri alumnus, Lee has spent his career understanding how technology
              can remove friction for business owners — and how often it fails to.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              After watching friends and clients overpay for merchant processing through opaque flat
              rates and arbitrary fees — and receiving no support when disputes arose — Lee founded
              Charm Payments to do things differently. The mission is simple: give St. Louis
              merchants the same pricing transparency, gateway technology, and acquiring infrastructure
              that enterprise retailers have, without the enterprise-level complexity.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Charm Payments operates as a division of Charm Holdings LLC, registered through
              Northwest Registered Agent and headquartered in St. Louis, Missouri.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                '15+ Years in IT',
                'Lincoln University Missouri',
                'St. Louis, MO',
                'Charm Holdings LLC',
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold bg-brand-light text-brand-dark px-3 py-1.5 rounded-full border border-brand-dark/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label mx-auto mb-4">OUR MISSION</p>
            <h2 className="text-3xl font-bold text-gray-900">
              The local alternative to Square and Stripe
            </h2>
            <p className="text-gray-600 mt-5 text-lg leading-relaxed">
              Square and Stripe built their businesses around simplicity for startups. Independent
              merchants — restaurants, salons, retailers, service businesses — deserve more than a
              one-size-fits-all flat rate. They deserve interchange-plus transparency, a real
              account manager they can call, and a processor that understands their industry.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              That&apos;s why Charm Payments was built for St. Louis businesses first. We live here.
              We know the neighborhoods, the margins, and what it means when a chargeback threatens
              a month&apos;s payroll. We are not a fintech company in San Francisco managing your
              account from a dashboard. We are your local payment partner.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Transparent Pricing',
                body: 'Interchange-plus pricing on Growth and Enterprise plans. You see every pass-through cost from Visa, Mastercard, and Discover. No bundled rates. No mystery line items.',
              },
              {
                title: 'Real Support',
                body: 'A gateway question should not require a chatbot. We answer calls for gateway configuration, underwriting, and chargeback response. You get a person who knows your account.',
              },
              {
                title: 'No Long-Term Lock-In',
                body: 'Month-to-month on Starter and Growth. We earn your business every month. If we are not saving you money or giving you better service, you should be free to leave.',
              },
            ].map((item) => (
              <div key={item.title} className="charm-card p-8">
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label mx-auto mb-4">INFRASTRUCTURE &amp; PARTNERS</p>
            <h2 className="text-3xl font-bold text-gray-900">Enterprise infrastructure. Main Street pricing.</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We white-label the same gateway and acquiring network used by national chains and
              enterprise retailers — and deliver it to independent merchants at competitive rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-gray-100 bg-brand-light p-8">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-2">Payment Gateway</p>
              <p className="text-2xl font-bold text-brand-dark">NMI</p>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                Network Merchants Inc. (NMI) is one of the largest independent payment gateways in
                North America, processing billions in annual volume. Charm Payments operates as an
                NMI white-label reseller, giving merchants access to NMI&apos;s full feature
                suite — virtual terminal, customer vault, recurring billing, hosted fields,
                iSpyFraud — under our brand.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-brand-light p-8">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-2">Acquiring Bank</p>
              <p className="text-2xl font-bold text-brand-dark">First Data / Fiserv</p>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                Settlement and acquiring services are provided through First Data, now a Fiserv
                company and one of the largest acquiring banks in the United States. Your merchant
                account is sponsored by our licensed acquiring bank partner, with settlement
                timelines and reserve terms outlined in your Merchant Agreement.
              </p>
            </div>
          </div>

          <div className="mt-10 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-brand-dark/10 bg-brand-dark/5 p-6 text-sm text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Compliance &amp; Security:</strong> Charm Payments
              mandates CB911 chargeback protection on all accounts. All transactions are processed
              through PCI DSS-compliant infrastructure. Charm Payments is a payment facilitator,
              not a bank. Payment processing services are provided through our licensed acquiring
              bank partner. Merchant funds are subject to the terms of the Merchant Agreement.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold">Ready to work with a local processor?</h2>
          <p className="text-white/75 mt-4 leading-relaxed">
            Apply online in minutes. Our team reviews applications within 24–48 hours and contacts
            you directly — no automated runaround.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <PrimaryCTA variant="on-dark" />
            <Link
              href="/contact"
              className="btn-outline border-white/30 text-white hover:bg-white/10 px-6 py-2.5 text-sm font-semibold rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-8 text-xs text-white/40">
            Charm Payments · Charm Holdings LLC · St. Louis, MO · Northwest Registered Agent
          </p>
        </div>
      </section>
    </div>
  )
}
