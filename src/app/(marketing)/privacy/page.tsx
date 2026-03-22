import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy — Charm Payments' },
  description:
    'Learn how Charm Payments collects, uses, and protects your business and personal information as a merchant account holder.',
}

export default function PrivacyPage() {
  return (
    <section className="section-ptb">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brand-dark mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Privacy Policy
        </h1>
        <p className="text-paragraph mb-4">Last updated: March 2026</p>
        <p className="text-paragraph mb-6">
          Charm Payments (a Charm Holdings LLC company) is committed to protecting your privacy. This policy explains what information we collect, how we use it,
          and your rights.
        </p>
        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Information We Collect
        </h2>
        <p className="text-paragraph mb-4">
          We collect business and personal information you provide when applying for a merchant account, including your name, business name, EIN, bank account details,
          and contact information. We also collect transaction data processed through our gateway.
        </p>
        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
          How We Use Your Information
        </h2>
        <p className="text-paragraph mb-4">
          We use your information to process payments, prevent fraud, comply with legal requirements, and communicate with you about your merchant account. We do not
          sell your personal information to third parties.
        </p>
        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Data Security
        </h2>
        <p className="text-paragraph mb-4">
          Your data is encrypted in transit and at rest. We follow PCI DSS standards for payment data. Access to your information is limited to authorized personnel
          only.
        </p>
        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Contact Us
        </h2>
        <p className="text-paragraph mb-4">
          Questions about this policy? Email us at merchants@charmpayments.com or call +1 (314) 555-0198.
        </p>
        <p className="text-sm text-gray-400 mt-12">
          Charm Payments is a payment facilitator, not a bank. Payment processing services are provided through our licensed acquiring bank partner. Merchant funds
          are subject to the terms of the Merchant Agreement.
        </p>
      </div>
    </section>
  )
}
