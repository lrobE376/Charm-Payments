// src/components/atelier/feature-template/FeatureFaq.tsx
import { Container } from '@/components/atelier/Container'
import { EyebrowTag } from '@/components/atelier/EyebrowTag'
import { cn } from '@/lib/utils'

export type FaqItem = { q: string; a: string }

export type FeatureFaqProps = {
  eyebrow?: string
  title: string
  items: FaqItem[]
}

export function FeatureFaq({ eyebrow, title, items }: FeatureFaqProps) {
  return (
    <section className="bg-atelier-paper py-12 md:py-16 px-lg">
      <Container>
        <div className="max-w-3xl">
          <EyebrowTag section="§04" label={eyebrow ?? 'QUESTIONS'} />
          <h2
            className={cn(
              'mt-base font-atelierSerif text-3xl md:text-4xl font-medium',
              'leading-tight tracking-[-0.025em] text-atelier-ink',
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
                  '[border-bottom-width:0.5px] border-black/15',
                  i === 0 && '[border-top-width:0.5px] border-black/15',
                )}
              >
                <summary
                  className={cn(
                    'flex items-center justify-between gap-base',
                    'cursor-pointer list-none py-base',
                    'font-atelierSerif text-base font-medium text-atelier-ink',
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
                    'font-atelierSans text-sm text-atelier-ink-soft leading-relaxed',
                  )}
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
