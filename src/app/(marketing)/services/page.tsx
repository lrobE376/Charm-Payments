import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Solutions' }

export default function ServicesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900">Solutions</h1>
      <p className="text-gray-600 mt-4 leading-relaxed">
        Deep-dive pages for virtual terminal, recurring billing, e-commerce gateway, ACH, and high-risk programs will expand this section. Use it to anchor SEO
        for industry-specific keywords and link from your homepage feature grid.
      </p>
    </div>
  )
}
