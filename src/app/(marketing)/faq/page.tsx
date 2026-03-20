import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'FAQ' }

export default function FaqPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h1>
      <p className="text-gray-600 mt-4 leading-relaxed">
        Merchant-focused FAQs covering approval timelines, funding schedules, chargebacks, and integrations will be published here. Content can be synced from
        your compliance and support teams.
      </p>
    </div>
  )
}
