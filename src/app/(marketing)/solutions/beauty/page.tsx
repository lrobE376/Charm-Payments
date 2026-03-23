import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Beauty & Salons — Charm Payments',
  description:
    'Beauty & Salons payment processing from Charm Payments. Powered by NMI gateway and First Data/Fiserv acquiring.',
}

export default function BeautySolutionsPage() {
  return (
    <div className="section-ptb">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="section-label">COMING SOON</span>
        <h1 className="font-display mt-6 mb-4 text-4xl font-bold text-brand-dark">Beauty &amp; Salons</h1>
        <p className="text-paragraph mb-8 text-lg">
          Full page coming soon. In the meantime, learn about all our features or apply now.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/features" className="btn-accent">
            See All Features
          </Link>
          <Link href="/apply" className="btn-outline">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  )
}
