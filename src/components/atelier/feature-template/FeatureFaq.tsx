// src/components/atelier/feature-template/FeatureFaq.tsx
import { Container } from '@/components/atelier/Container'
import { cn } from '@/lib/utils'

export type FaqItem = { q: string; a: string }

export type FeatureFaqProps = {
  eyebrow?: string
  title: string
  items: FaqItem[]
}

export function FeatureFaq({ eyebrow, title, items }: FeatureFaqProps) {
  const eyebrowText = eyebrow ?? 'Questions'
  const isSection = eyebrowText.trim().startsWith('§')
  const eyebrowClass = isSection
    ? 'font-atelierMono text-xs uppercase tracking-label text-atelier-gold'
    : 'font-stripeSans'
  const eyebrowStyle: React.CSSProperties = isSection
    ? {}
    : { fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', color: 'rgba(0,0,0,0.5)' }

  return (
    <section className="bg-apple-canvas" style={{ padding: '90px 32px' }}>
      <Container>
        <div className="max-w-3xl">
          <div className={eyebrowClass} style={eyebrowStyle}>
            {eyebrowText}
          </div>
          <h2
            className={cn(
              'mt-base font-atelierSerif text-3xl md:text-4xl font-medium',
              'leading-tight tracking-[-0.025em] text-apple-ink',
            )}
          >
            {title}
          </h2>

          <div className="mt-xl">
            {items.map((item, i) => (
              <details
                key={item.q}
                className={cn(
                  'group',
                  '[border-bottom-width:0.5px] border-black/10',
                  i === 0 && '[border-top-width:0.5px] border-black/10',
                )}
              >
                <summary
                  className={cn(
                    'flex items-center justify-between gap-base',
                    'cursor-pointer list-none py-base',
                    'font-atelierSerif text-base font-medium text-apple-ink',
                    '[&::-webkit-details-marker]:hidden',
                    'hover:text-atelier-forest transition-colors',
                  )}
                >
                  <span>{item.q}</span>
                  <span
                    aria-hidden
                    className={cn(
                      'shrink-0 font-atelierMono text-base text-atelier-gold',
                      'transition-transform duration-200 ease-out',
                      'group-open:rotate-45',
                    )}
                  >
                    +
                  </span>
                </summary>
                <p
                  className={cn(
                    'pb-base pr-2xl',
                    'font-stripeSans text-sm leading-relaxed',
                  )}
                  style={{ color: 'rgba(0,0,0,0.65)' }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
