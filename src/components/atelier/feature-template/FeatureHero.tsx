// src/components/atelier/feature-template/FeatureHero.tsx
import Link from 'next/link'
import { Container } from '@/components/atelier/Container'
import { cn } from '@/lib/utils'

export type FeatureHeroProps = {
  breadcrumb: string
  title: string
  subtitle: string
  pills?: string[]
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function FeatureHero({
  breadcrumb,
  title,
  subtitle,
  pills,
  primaryCta,
  secondaryCta,
}: FeatureHeroProps) {
  return (
    <section className="bg-atelier-forest-deep text-atelier-cream py-16 md:py-24 px-lg">
      <Container>
        <div className="max-w-4xl">
          <div className="font-atelierMono text-xs uppercase tracking-label text-atelier-gold mb-base">
            {breadcrumb}
          </div>

          <h1
            className={cn(
              'font-atelierSerif text-4xl md:text-5xl font-medium',
              'leading-[1.05] tracking-[-0.025em] text-atelier-cream',
              'max-w-[580px]',
            )}
          >
            {title}
          </h1>

          <p className="font-atelierSans text-base text-atelier-cream/85 mt-md leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          {pills && pills.length > 0 ? (
            <ul className="mt-lg flex flex-wrap gap-2 max-w-2xl">
              {pills.map((pill) => (
                <li
                  key={pill}
                  className={cn(
                    'font-atelierMono text-xs uppercase tracking-label',
                    'text-atelier-gold',
                    '[border-width:0.5px] border-atelier-gold/30 rounded-atelierXs',
                    'bg-white/[0.04]',
                    'px-2.5 py-1',
                  )}
                >
                  {pill}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-xl flex flex-wrap gap-sm">
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
        </div>
      </Container>
    </section>
  )
}
