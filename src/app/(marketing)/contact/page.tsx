import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Contact Us' }

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
      <p className="text-gray-600 mt-4 leading-relaxed">
        This page will host your contact form, office hours, and escalation paths for existing merchants. For now, reach us at{' '}
        <a href="mailto:merchants@charmpayments.com" className="text-brand-dark font-semibold hover:underline">
          merchants@charmpayments.com
        </a>{' '}
        or{' '}
        <a href="tel:+13145550198" className="text-brand-dark font-semibold hover:underline">
          +1 (314) 555-0198
        </a>
        .
      </p>
    </div>
  )
}
