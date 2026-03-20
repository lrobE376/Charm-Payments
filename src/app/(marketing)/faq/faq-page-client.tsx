'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

type Category = 'pricing' | 'approval' | 'tech' | 'chargebacks'

type TabId = 'all' | Category

const tabs: { id: TabId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'pricing', label: 'Pricing & Fees' },
  { id: 'approval', label: 'Getting Approved' },
  { id: 'tech', label: 'Processing & Tech' },
  { id: 'chargebacks', label: 'Chargebacks' },
]

const faqItems: { id: number; category: Category; q: string; a: string }[] = [
  {
    id: 1,
    category: 'pricing',
    q: 'What are your processing rates?',
    a: "Our Starter plan is a flat rate of 2.9% + $0.30 per transaction — no monthly fee and no setup fee. Our Growth plan uses interchange-plus pricing at IC+ 0.30%, which is the most transparent pricing model in the industry — you see exactly what the card network charges plus our fixed markup. Enterprise accounts receive custom volume-based pricing. All rates and fees are disclosed in your Merchant Agreement before you sign anything.",
  },
  {
    id: 2,
    category: 'pricing',
    q: 'Are there monthly fees or hidden charges?',
    a: "No monthly fees on Starter or Growth plans. No setup fees on any plan. The only costs you'll see are your per-transaction rates and standard card network assessment fees — which every processor passes through. We do not add hidden markups. Your complete Schedule of Fees is provided with your merchant application before you commit to anything.",
  },
  {
    id: 3,
    category: 'pricing',
    q: 'What is interchange-plus pricing and why is it better?',
    a: 'Interchange is the base cost that Visa or Mastercard charges for every transaction — it varies by card type. Interchange-plus pricing passes that exact base cost to you, then adds our fixed markup on top. You see both numbers on your statement. Compare this to flat-rate or tiered pricing where processors bundle everything together and pocket the difference. IC+ pricing typically saves businesses 15–30% compared to flat-rate at higher volumes.',
  },
  {
    id: 4,
    category: 'pricing',
    q: 'Are there fees for chargebacks?',
    a: 'Yes — a chargeback fee applies when a cardholder disputes a transaction with their bank. This fee is disclosed in your Schedule of Fees before you sign up. The disputed amount is also temporarily held while the case is reviewed. We notify you immediately when a chargeback is filed and assist you in submitting evidence to contest it if you have grounds to do so.',
  },
  {
    id: 5,
    category: 'approval',
    q: 'How long does merchant approval take?',
    a: 'Most standard merchant accounts are approved within 24–48 business hours. High-risk accounts or businesses with unusual processing history may take 3–5 business days. Once approved, our team configures your gateway and you can start accepting payments the same day. We handle the technical setup at no charge.',
  },
  {
    id: 6,
    category: 'approval',
    q: 'What documents do I need to apply?',
    a: "You'll need your business EIN, owner information (name, date of birth, SSN last 4 for identity verification), business address, and bank account details for fund deposits. For high-risk businesses, we may request additional documentation such as processing history or business financials. The application takes about 10 minutes to complete online.",
  },
  {
    id: 7,
    category: 'approval',
    q: 'Do you approve high-risk merchants?',
    a: 'Yes. We have specialized underwriting for industries that traditional processors often decline — including subscription businesses, high-ticket retail, continuity billing, and others. Contact our team to discuss your specific business type before applying so we can match you with the right underwriting pathway.',
  },
  {
    id: 8,
    category: 'tech',
    q: 'When do I receive my funds?',
    a: 'Card transactions typically settle to your verified bank account within 1–2 business days. ACH transactions follow standard Nacha settlement timelines — generally 1–3 business days. Settlement timing is outlined in your Merchant Agreement. New merchants may have a brief holding period during initial processing as part of standard risk management.',
  },
  {
    id: 9,
    category: 'tech',
    q: 'How do I integrate the payment gateway?',
    a: 'We support 200+ shopping cart integrations including WooCommerce, Shopify, Magento, BigCommerce, and more. We also offer a hosted payment page that requires zero development — just drop a link or button on your site. For custom integrations, NMI provides a full API with detailed documentation. Our team assists with setup and integration at no charge.',
  },
  {
    id: 10,
    category: 'tech',
    q: 'Is there a long-term contract?',
    a: 'No long-term contracts on Starter or Growth plans — both are month-to-month. You can cancel at any time. Enterprise accounts may include negotiated term agreements based on volume commitments, which are clearly disclosed before signing.',
  },
  {
    id: 11,
    category: 'chargebacks',
    q: 'What happens when I get a chargeback?',
    a: 'When a cardholder disputes a transaction with their bank, the bank files a chargeback against your merchant account. The disputed amount is temporarily held and a chargeback fee is charged. Our team notifies you immediately with the dispute amount, reason code, and response deadline. We guide you through submitting evidence to contest the chargeback if you have grounds to do so. The final outcome is determined by the card network — not Charm Payments.',
  },
  {
    id: 12,
    category: 'chargebacks',
    q: 'How can I prevent chargebacks?',
    a: 'The best chargeback prevention is clear communication with your customers — use a recognizable business name on card statements, provide clear refund policies, and respond quickly to customer complaints. On the technical side, use AVS (Address Verification) and CVV verification on card-not-present transactions, enable 3D Secure for e-commerce, and keep transaction records and shipping confirmations for every order. Our iSpyFraud screening also flags suspicious transactions before they process.',
  },
]

export function FaqPageClient() {
  const [activeTab, setActiveTab] = useState<TabId>('all')
  const [openIds, setOpenIds] = useState<Set<number>>(new Set())

  const visible = useMemo(() => {
    if (activeTab === 'all') return faqItems
    return faqItems.filter((item) => item.category === activeTab)
  }, [activeTab])

  function toggleItem(id: number) {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section
        className="relative px-6 py-20 text-center md:py-28"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <span className="section-label !border-white/20 !bg-white/10 !text-brand-accent">FAQ</span>
          <h1 className="font-display mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Everything you need to know about payment processing with Charm Payments
          </p>
        </div>
      </section>

      {/* SECTION 2 — TABS + ACCORDION */}
      <section className="section-ptb bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {tabs.map(({ id, label }) => {
              const isActive = activeTab === id
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTab(id)}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition md:px-5 ${
                    isActive
                      ? 'bg-brand-dark text-white shadow-brand-sm'
                      : 'border border-gray-300 bg-white text-gray-600 hover:border-brand-dark/30 hover:text-brand-dark'
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>

          <div className="mt-10 space-y-3">
            {visible.map((item) => {
              const isOpen = openIds.has(item.id)
              return (
                <div
                  key={item.id}
                  className={`overflow-hidden rounded-xl bg-brand-card transition-colors ${
                    isOpen
                      ? 'border-y border-r border-[rgba(8,39,32,0.08)] border-l-4 border-l-brand-accent shadow-brand-sm'
                      : 'border border-[rgba(8,39,32,0.08)]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-[var(--heading)] md:text-lg">{item.q}</span>
                    <ChevronDown
                      className={`mt-0.5 h-5 w-5 shrink-0 text-brand-dark transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-[rgba(8,39,32,0.06)] px-5 pb-5 pt-0 md:px-6 md:pb-6">
                      <p className="pt-4 leading-relaxed text-gray-700">{item.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — CTA */}
      <section className="bg-brand-light px-6 py-16 text-center">
        <h2 className="font-display text-2xl font-bold text-[var(--heading)] md:text-3xl">Still Have Questions?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
          Our merchant support team is here to help. We typically respond within 2 business hours.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary justify-center">
            Contact Our Team
          </Link>
          <Link href="/apply" className="btn-outline justify-center">
            Apply Now
          </Link>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-xs leading-relaxed text-gray-500">
          Charm Payments is a payment facilitator, not a bank. Card processing services are provided by third-party processors subject to their terms. See our{' '}
          <Link href="/privacy" className="font-medium text-brand-dark underline-offset-2 hover:underline">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href="/terms" className="font-medium text-brand-dark underline-offset-2 hover:underline">
            Terms of Service
          </Link>
          .
        </p>
      </section>
    </>
  )
}
