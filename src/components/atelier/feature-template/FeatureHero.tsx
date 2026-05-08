// src/components/atelier/feature-template/FeatureHero.tsx
import Link from 'next/link'
import { Container } from '@/components/atelier/Container'
import { HeroVisual } from '@/components/atelier/magazine/HeroVisual'
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
  const isSection = breadcrumb.trim().startsWith('Â§')
  const eyebrowClass = isSection
    ? 'font-atelierMono text-xs uppercase tracking-label text-atelier-gold mb-base'
    : 'font-stripeSans mb-base'
  const eyebrowStyle: React.CSSProperties = isSection
    ? {}
    : { fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', color: 'rgba(0,0,0,0.5)' }

  return (
    <section
      className="relative overflow-hidden bg-apple-canvas"
      style={{ padding: '100px 32px' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: 760,
          height: 760,
          top: -240,
          left: 'calc(100% - 460px)',
          background:
            'radial-gradient(closest-side, rgba(245,242,234,0.65) 0%, rgba(189,153,82,0.06) 50%, transparent 75%)',
          filter: 'blur(2px)',
        }}
      />
      <Container>
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 items-start lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <div className={eyebrowClass} style={eyebrowStyle}>
              {breadcrumb}
            </div>

            <h1
              className="font-atelierSerif text-apple-ink"
              style={{
                fontSize: 'clamp(34px, 4vw, 48px)',
                lineHeight: 1,
                fontWeight: 500,
                letterSpacing: '-0.025em',
                maxWidth: 580,
              }}
            >
              {title}
            </h1>

            <p
              className="font-stripeSans"
              style={{
                marginTop: 24,
                fontSize: 17,
                lineHeight: 1.6,
                maxWidth: 480,
                color: 'rgba(0,0,0,0.72)',
              }}
            >
              {subtitle}
            </p>

            {pills && pills.length > 0 ? (
              <ul className="mt-lg flex flex-wrap gap-2 max-w-2xl">
                {pills.map((pill) => (
                  <li
                    key={pill}
                    className="font-stripeSans"
                    style={{
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      color: 'rgba(0,0,0,0.6)',
                      border: '0.5px solid rgba(0,0,0,0.18)',
                      borderRadius: 980,
                      padding: '4px 12px',
                    }}
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
                  'inline-flex items-center gap-1.5',
                  'bg-atelier-forest text-white',
                  'font-stripeSans text-sm font-medium',
                  'px-6 py-3 rounded-pill',
                  'hover:opacity-90 transition-opacity',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
                )}
              >
                {primaryCta.label}
                <span aria-hidden>â†’</span>
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
          </div>

          <div>
            <HeroVisual variant="feature" caption="FIG. 01 â€” A SAMPLE STATEMENT" />
          </div>
        </div>
      </Container>
    </section>
  )
}



