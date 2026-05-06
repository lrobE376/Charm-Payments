// src/components/atelier/feature-template/FeatureFinalCta.tsx
import Link from 'next/link'
import { Container } from '@/components/atelier/Container'
import { EyebrowTag } from '@/components/atelier/EyebrowTag'
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
      <em key={key++} className="italic text-atelier-gold">
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
  return (
    <section className="relative bg-atelier-forest-deep text-atelier-cream py-16 md:py-20 px-lg">
      <span
        aria-hidden
        className="absolute top-0 inset-x-0 h-px [background-image:linear-gradient(90deg,transparent,var(--atelier-gold),transparent)]"
      />

      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <EyebrowTag section="§05" label={eyebrow ?? 'GET STARTED'} variant="gold" />

          <h2
            className={cn(
              'mt-base font-atelierSerif text-3xl md:text-4xl font-medium',
              'leading-[1.05] tracking-[-0.025em]',
            )}
          >
            {renderTitle(title)}
          </h2>

          <p className="mt-md font-atelierSans text-base text-atelier-cream/85 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="mt-xl flex flex-wrap gap-sm justify-center">
            <Link
              href={primaryCta.href}
              className={cn(
                'inline-flex items-center gap-xs',
                'bg-atelier-gold text-atelier-ink',
                'px-md py-sm text-sm font-medium rounded-atelierXs',
                'hover:opacity-90 transition-opacity',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
              )}
            >
              {primaryCta.label}
              <span aria-hidden>↗</span>
            </Link>
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className={cn(
                  'inline-flex items-center px-md py-sm text-sm',
                  'border border-atelier-cream/40 text-atelier-cream rounded-atelierXs',
                  'hover:border-atelier-cream/70 transition-colors',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
                )}
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>

          <p className="mt-xl font-atelierSans text-xs text-atelier-cream/60 leading-relaxed max-w-2xl mx-auto">
            {disclaimer ?? DEFAULT_DISCLAIMER}
          </p>
        </div>
      </Container>
    </section>
  )
}
