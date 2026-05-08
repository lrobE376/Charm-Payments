// src/app/(marketing)/solutions/high-risk/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'High Risk — Charm Payments',
  description:
    'High Risk payment processing from Charm Payments. Built for connected payments gateway and licensed acquiring partners acquiring.',
}

export default function HighRiskSolutionsPage() {
  return (
    <section
      className="bg-apple-canvas"
      style={{ padding: '120px 32px' }}
    >
      <div className="mx-auto text-center" style={{ maxWidth: 720 }}>
        <div
          className="font-stripeSans"
          style={{
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.06em',
            color: 'rgba(0,0,0,0.5)',
            marginBottom: 18,
          }}
        >
          Coming soon.
        </div>

        <h1
          className="font-atelierSerif text-apple-ink"
          style={{
            fontSize: 'clamp(40px, 5.4vw, 64px)',
            lineHeight: 0.96,
            fontWeight: 500,
            letterSpacing: '-0.03em',
            margin: 0,
          }}
        >
          High Risk
        </h1>

        <p
          className="font-stripeSans mx-auto"
          style={{
            marginTop: 24,
            fontSize: 17,
            lineHeight: 1.6,
            maxWidth: 520,
            color: 'rgba(0,0,0,0.72)',
          }}
        >
          Full page coming soon. In the meantime, learn about all our features or Get Free Rate Audit.
        </p>

        <div className="flex flex-wrap justify-center gap-3" style={{ marginTop: 36 }}>
          <Link
            href="/features"
            className={cn(
              'inline-flex items-center gap-1.5',
              'bg-atelier-forest text-white',
              'font-stripeSans text-sm font-medium',
              'px-6 py-3 rounded-pill',
              'hover:opacity-90 transition-opacity',
              'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
            )}
          >
            See All Features
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/apply"
            className={cn(
              'inline-flex items-center px-[22px] py-[11px] text-sm font-medium font-stripeSans',
              'border border-black/[0.18] text-apple-ink rounded-pill',
              'hover:border-black/40 transition-colors',
              'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
            )}
          >
            Get Free Rate Audit
          </Link>
        </div>
      </div>
    </section>
  )
}



