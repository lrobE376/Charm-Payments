import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Terms & Conditions' }

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900">Terms & Conditions</h1>
      <p className="text-gray-600 mt-4 leading-relaxed">
        Insert your Merchant Agreement summary, prohibited use policy, and limitation of liability clauses after legal review. Link the full PDF from this page
        for e-signature workflows.
      </p>
    </div>
  )
}
