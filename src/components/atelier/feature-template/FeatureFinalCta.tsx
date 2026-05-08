// src/components/atelier/feature-template/FeatureFinalCta.tsx
import Link from 'next/link'
import { Container } from '@/components/atelier/Container'
import { cn } from '@/lib/utils'

export type FeatureFinalCtaProps = {
  eyebrow?: string
  title: string
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  disclaimer?: string
}

const DEFAULT_DISCLAIMER =
  'Charm Payments — built and supported in St. Louis, Missouri. Subject to merchant agreement and underwriting approval.'

function renderTitle(title: string) {
  if (!title.includes('{')) return title
  const parts: React.ReactNode[] = []
  const regex = /\{([^}]+)\}/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0
  while ((match = regex.exec(title)) !== null) {
    if (match.index > lastIndex) parts.push(title.slice(lastIndex, match.index))
    parts.push(
      <em key={key++} className="italic text-atelier-forest">
        {match[1]}
      </em>,
    )
    lastIndex = regex.lastIndex
  }
  if (lastIndex < title.length) parts.push(title.slice(lastIndex))
  return parts
}

export function FeatureFinalCta({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  disclaimer,
}: FeatureFinalCtaProps) {
  const eyebrowText = eyebrow ?? 'Get started'
  const isSection = eyebrowText.trim().startsWith('§')
  const eyebrowClass = isSection
    ? 'font-atelierMono text-xs uppercase tracking-label text-atelier-gold'
    : 'font-stripeSans'
  const eyebrowStyle: React.CSSProperties = isSection
    ? {}
    : { fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', color: 'rgba(0,0,0,0.5)' }

  return (
    <section className="bg-apple-canvas-warm" style={{ padding: '110px 32px' }}>
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <div className={eyebrowClass} style={eyebrowStyle}>
            {eyebrowText}
          </div>

          <h2
            className={cn(
              'mt-base font-atelierSerif text-3xl md:text-4xl font-medium',
              'leading-[1.05] tracking-[-0.025em] text-apple-ink',
            )}
          >
            {renderTitle(title)}
          </h2>

          <p
            className="mt-md font-stripeSans text-base leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'rgba(0,0,0,0.72)' }}
          >
            {subtitle}
          </p>

          <div className="mt-xl flex flex-wrap gap-sm justify-center">
            <Link
              href={primaryCta.href}
              className={cn(
                'inline-flex items-center gap-1.5',
                'bg-atelier-forest text-white',
                'font-stripeSans text-sm font-medium',
                'px-6 py-3 rounded-pill',
                'hover:opacity-90 transition-opacity',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
              )}
            >
              {primaryCta.label}
              <span aria-hidden>→</span>
            </Link>
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className={cn(
                  'inline-flex items-center px-[22px] py-[11px] text-sm font-medium font-stripeSans',
                  'border border-black/[0.18] text-apple-ink rounded-pill',
                  'hover:border-black/40 transition-colors',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
                )}
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>

          <p
            className="mt-xl font-stripeSans text-xs leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'rgba(0,0,0,0.5)' }}
          >
            {disclaimer ?? DEFAULT_DISCLAIMER}
          </p>
        </div>
      </Container>
    </section>
  )
}



