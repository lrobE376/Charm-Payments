import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Terms & Conditions — Charm Payments' },
  description:
    'Review the terms and conditions governing your Charm Payments merchant account, including fees, chargebacks, and acceptable use.',
}

export default function TermsPage() {
  return (
    <section className="section-ptb">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brand-dark mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Terms & Conditions
        </h1>
        <p className="text-paragraph mb-4">Last updated: March 2026</p>
        <p className="text-paragraph mb-6">
          By applying for or using a Charm Payments merchant account, you agree to these terms. Please read them carefully.
        </p>
        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Merchant Agreement
        </h2>
        <p className="text-paragraph mb-4">
          Your use of Charm Payments is governed by our Merchant Agreement, which is provided upon account approval. The Merchant Agreement contains binding terms
          regarding processing rates, fees, chargebacks, and account termination.
        </p>
        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Acceptable Use
        </h2>
        <p className="text-paragraph mb-4">
          You may only use Charm Payments for lawful business transactions. Prohibited uses include fraud, money laundering, and processing for restricted business
          types not approved in your Merchant Agreement.
        </p>
        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Chargebacks and Disputes
        </h2>
        <p className="text-paragraph mb-4">
          You are responsible for chargebacks and disputes arising from your transactions. Charm Payments will notify you of disputes and provide tools to respond
          through your merchant dashboard.
        </p>
        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Termination
        </h2>
        <p className="text-paragraph mb-4">
          Either party may terminate the merchant account with written notice. Charm Payments reserves the right to suspend accounts immediately for violations of
          these terms or suspected fraud.
        </p>
        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Contact Us
        </h2>
        <p className="text-paragraph mb-4">Questions? Email merchants@charmpayments.com or call +1 (314) 555-0198.</p>
        <p className="text-sm text-gray-400 mt-12">
          Charm Payments is a payment facilitator, not a bank. Payment processing services are provided through our licensed acquiring bank partner. Merchant funds
          are subject to the terms of the Merchant Agreement.
        </p>
      </div>
    </section>
  )
}
