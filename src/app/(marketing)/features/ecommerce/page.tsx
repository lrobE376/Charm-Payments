import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Calendar, CheckCircle, Code, Globe, Package, RefreshCw, ShoppingCart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'E-Commerce Payment Gateway — Charm Payments',
  description:
    'Connect your online store to Charm Payments. 125+ shopping cart integrations, Collect.js, and hosted checkout. Accept payments online in minutes.',
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

export default function EcommerceFeaturePage() {
  return (
    <>
      <section
        className="relative overflow-hidden px-6 py-20 text-center md:py-28"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 100%)' }}
      >
        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="section-label !border-white/20 !bg-white/10 !text-brand-accent">E-COMMERCE GATEWAY</span>
          <h1 className="font-display mt-4 whitespace-pre-line text-4xl font-bold text-white md:text-5xl lg:text-[3rem]">
            {`Accept Online Payments\nWith One Line of Code`}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
            Connect your online store to Charm Payments using Collect.js — a single script tag that adds secure card acceptance to any website. Or use our 125+ pre-built
            shopping cart integrations.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">125+ Cart Integrations</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Collect.js</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Hosted Checkout</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Apple Pay &amp; Google Pay</span>
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
          <p className="section-label">INTEGRATION OPTIONS</p>
          <h2 className="font-display mt-4 max-w-3xl whitespace-pre-line text-3xl font-bold text-brand-dark md:text-4xl">
            {`Three Ways to Connect\nYour Online Store`}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                Icon: Code,
                title: 'Collect.js',
                desc: 'Add a single script tag to your website. Collect.js handles card tokenization client-side — card data never touches your server. PCI compliant by design.',
                badge: 'Recommended for developers',
              },
              {
                Icon: ShoppingCart,
                title: '125+ Cart Plugins',
                desc: 'Pre-built integrations for Shopify, WooCommerce, Magento, BigCommerce, OpenCart, and 120+ more. Install the plugin and connect your credentials.',
                badge: 'Easiest setup',
              },
              {
                Icon: Globe,
                title: 'Hosted Payment Page',
                desc: 'No website needed. Use your Charm Payments hosted checkout page — fully branded, mobile-optimized, and ready to share as a link or embed.',
                badge: 'No coding required',
              },
            ].map(({ Icon, title, desc, badge }) => (
              <div key={title} className="charm-card bg-brand-card p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                  <Icon className="h-7 w-7 text-brand-dark" aria-hidden />
                </div>
                <h3 className="font-display mt-4 text-xl font-bold text-brand-dark">{title}</h3>
                <p className="text-paragraph mt-2 text-sm leading-relaxed">{desc}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-brand-accent">{badge}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <ul className="space-y-3">
              {[
                'Visa, Mastercard, Amex, Discover',
                'Apple Pay and Google Pay',
                'ACH and eCheck supported',
                'Recurring billing built in',
                'Customer vault for stored cards',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {[
                'Real-time transaction notifications',
                'Webhook support for automation',
                'Full REST API access',
                'Sandbox environment for testing',
                '200+ processor connections',
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
          <p className="section-label">BUILT FOR ONLINE SELLERS</p>
          <h2 className="font-display mt-4 max-w-3xl whitespace-pre-line text-3xl font-bold text-brand-dark md:text-4xl">
            {`Every Type of\nOnline Business`}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Package,
                title: 'Product Stores',
                desc: 'Physical or digital products. Connect Shopify or WooCommerce in minutes and start accepting payments immediately.',
              },
              {
                Icon: BookOpen,
                title: 'Digital Downloads',
                desc: 'Sell courses, ebooks, templates, and digital products. Instant delivery after payment. No inventory management needed.',
              },
              {
                Icon: Calendar,
                title: 'Booking & Appointments',
                desc: 'Accept deposits or full payment when customers book online. Reduce no-shows with upfront payment collection.',
              },
              {
                Icon: RefreshCw,
                title: 'Subscription Businesses',
                desc: 'Membership sites, SaaS products, and subscription boxes. Recurring billing handles automatic charges on any schedule.',
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
          <h2 className="font-display mt-4 text-3xl font-bold text-brand-dark md:text-4xl">E-Commerce Gateway FAQ</h2>
          <div className="mt-8">
            <FaqItem
              q="What is Collect.js and how does it work?"
              a={"Collect.js is a JavaScript library that captures card details directly in the customer's browser and converts them to a secure token. The token is sent to your server — card data never touches your systems."}
            />
            <FaqItem
              q="Do I need a developer to integrate?"
              a="For Collect.js, basic JavaScript knowledge helps. For shopping cart plugins (Shopify, WooCommerce, etc.), no coding is required — install the plugin and add your credentials."
            />
            <FaqItem
              q="Which shopping carts are supported?"
              a="125+ integrations including Shopify, WooCommerce, Magento, BigCommerce, OpenCart, PrestaShop, Volusion, 3dcart, and many more. Contact us for the full list."
            />
            <FaqItem
              q="Can I accept Apple Pay and Google Pay?"
              a="Yes. Apple Pay and Google Pay are supported on compatible devices through the Collect.js integration and hosted payment page."
            />
            <FaqItem
              q="Is there a sandbox for testing?"
              a="Yes. Your Charm Payments account includes a sandbox environment for development and testing before you go live."
            />
            <FaqItem
              q="What does e-commerce processing cost?"
              a="Your standard processing rate applies — 2.90% + $0.30 per transaction on the Starter plan, or IC+ on the Growth plan. No extra gateway fee for e-commerce."
            />
          </div>
        </div>
      </section>

      <section
        className="section-ptb px-6 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 50%, #0f4a3d 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="section-label !border-white/20 !bg-white/10 !text-brand-accent">START SELLING ONLINE</p>
          <h2 className="font-display mt-4 whitespace-pre-line text-3xl font-bold md:text-4xl">
            {`Connect Your Store.\nStart Collecting Payments.`}
          </h2>
          <p className="mt-4 text-lg text-white/80">125+ integrations. One line of code. Apply today and your gateway is active within 48 hours.</p>
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
