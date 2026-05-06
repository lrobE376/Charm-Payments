// src/components/atelier/sections/StopOverpaying.tsx
import { Container } from '@/components/atelier/Container'
import { EyebrowTag } from '@/components/atelier/EyebrowTag'
import { cn } from '@/lib/utils'

const FOOTNOTES = [
  {
    id: 'facilitator',
    body: 'Charm Payments is a payment facilitator, not a bank. Payment processing services are provided through our licensed acquiring bank partner.',
  },
  {
    id: 'agreement',
    body: 'Merchant funds are subject to the terms of the Merchant Agreement.',
  },
  {
    id: 'audit',
    body: 'Rate audit is free and non-binding. We compare line-item against your last statement.',
  },
]

export function StopOverpaying() {
  return (
    <section
      id="stop-overpaying"
      className={cn(
        'relative bg-atelier-ink text-atelier-cream',
        'py-11 px-lg',
      )}
    >
      <span
        aria-hidden
        className={cn(
          'absolute top-0 inset-x-0 h-px',
          '[background-image:linear-gradient(90deg,transparent,var(--atelier-gold),transparent)]',
        )}
      />

      <Container>
        <div className="max-w-3xl">
          <EyebrowTag
            section="§08"
            label="STOP OVERPAYING TODAY"
            variant="gold"
          />
          <h2
            className={cn(
              'mt-base font-atelierSerif text-4xl md:text-5xl font-medium',
              'leading-[1.05] tracking-[-0.025em]',
            )}
          >
            Ready to see what your statement{' '}
            <em className="italic text-atelier-gold">is hiding?</em>
          </h2>
          <p className="text-base text-atelier-cream/[0.78] mt-md leading-relaxed max-w-2xl">
            Your last statement has fees your processor buried on purpose.
            We&apos;ll find every one, line them up, and show you exactly what
            you&apos;d save — no cost, no commitment.
          </p>
          <div className="mt-xl flex flex-wrap gap-sm">
            <a
              href="/apply"
              className={cn(
                'inline-flex items-center gap-xs',
                'bg-atelier-gold text-atelier-ink',
                'px-md py-sm text-sm font-medium rounded-atelierXs',
                'hover:opacity-90 transition-opacity',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
              )}
            >
              Get My Free Rate Audit
              <span aria-hidden>↗</span>
            </a>
            <a
              href="/quote"
              className={cn(
                'inline-flex items-center px-md py-sm text-sm',
                'border border-atelier-cream/30 text-atelier-cream rounded-atelierXs',
                'hover:border-atelier-cream/60 transition-colors',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
              )}
            >
              Free Rate Audit
            </a>
          </div>
        </div>

        <div
          className={cn(
            'mt-2xl pt-base',
            '[border-top-width:0.5px] border-atelier-cream/15',
          )}
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {FOOTNOTES.map((f, i) => (
              <div
                key={f.id}
                className={cn(
                  'px-md py-2',
                  i > 0 &&
                    'md:[border-left-width:0.5px] md:border-atelier-cream/15',
                )}
              >
                <p className="text-xs text-atelier-cream/60 leading-relaxed">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
