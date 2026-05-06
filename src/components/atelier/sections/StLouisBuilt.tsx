// src/components/atelier/sections/StLouisBuilt.tsx
import Image from 'next/image'
import { Container } from '@/components/atelier/Container'
import { EyebrowTag } from '@/components/atelier/EyebrowTag'
import { cn } from '@/lib/utils'

const SPEC_ROWS = [
  { label: 'CITY', value: 'St. Louis, Missouri' },
  { label: 'FOUNDED', value: '2024' },
  { label: 'SUPPORT', value: 'Local · same time zone' },
  { label: 'SCOPE', value: 'St. Louis & nationwide' },
]

export function StLouisBuilt() {
  return (
    <section id="st-louis-built" className="bg-white py-9 px-lg">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2xl items-center">
          <div
            className={cn(
              'relative aspect-[4/5] overflow-hidden',
              'bg-atelier-ink',
              '[background-image:linear-gradient(135deg,#2A2A2A_0%,#1A1A1A_50%,#0F3520_100%)]',
            )}
          >
            <Image
              src="/images/pexels-rdne-7697211.jpg"
              alt="Barber checking his Charm Payments dashboard between clients"
              fill
              className="object-cover opacity-60"
              sizes="(min-width: 768px) 50vw, 100vw"
            />

            <span
              aria-hidden
              className={cn(
                'pointer-events-none absolute inset-1',
                '[border-width:0.5px] border-atelier-gold/15',
              )}
            />

            <div
              className={cn(
                'absolute top-3 left-3',
                'font-atelierMono text-[10px] uppercase tracking-label',
                'bg-atelier-cream/10 text-atelier-cream',
                'px-2 py-1',
              )}
            >
              DOCUMENTARY · NO. 001
            </div>

            <div
              className={cn(
                'absolute top-3 right-3',
                'font-atelierMono text-[10px] uppercase tracking-label',
                'bg-atelier-gold/15 text-atelier-gold',
                '[border-width:0.5px] border-atelier-gold',
                'px-2 py-1',
              )}
            >
              35MM · KODAK
            </div>

            <div
              className={cn(
                'absolute inset-x-0 bottom-0 px-base pt-2xl pb-base',
                '[background-image:linear-gradient(to_top,rgba(0,0,0,0.9),transparent)]',
              )}
            >
              <div className="font-atelierMono text-[10px] uppercase tracking-label text-atelier-gold">
                FRAME 001
              </div>
              <p className="font-atelierSerif text-base text-atelier-cream mt-1 leading-snug">
                Barber checking his Charm dashboard between clients.
              </p>
              <div className="font-atelierMono text-[10px] uppercase tracking-spec text-atelier-cream/70 mt-2">
                ST. LOUIS, MO · 38.6270° N · 90.1994° W
              </div>
            </div>
          </div>

          <div>
            <EyebrowTag section="§06" label="ST. LOUIS BUILT" />
            <h3
              className={cn(
                'mt-base font-atelierSerif text-2xl md:text-3xl font-medium',
                'leading-tight tracking-[-0.02em] text-atelier-ink',
              )}
            >
              Built for the business owners who keep{' '}
              <em className="italic text-atelier-forest">St. Louis</em> running.
            </h3>
            <p className="text-base text-black/70 mt-md leading-relaxed">
              From barbershops to boutiques, St. Louis merchants use Charm to
              finally see what they&apos;re paying — and stop their processor
              from quietly keeping the difference.
            </p>

            <dl
              className={cn(
                'mt-lg bg-atelier-creamWarm p-3',
                'border-l-[3px] border-atelier-forest',
              )}
            >
              {SPEC_ROWS.map((row, i) => (
                <div
                  key={row.label}
                  className={cn(
                    'grid grid-cols-[110px_1fr] gap-xs py-1.5',
                    i < SPEC_ROWS.length - 1 &&
                      '[border-bottom-width:0.5px] border-black/10',
                  )}
                >
                  <dt className="font-atelierMono text-[10px] uppercase tracking-label text-black/55">
                    {row.label}
                  </dt>
                  <dd className="font-atelierMono text-xs uppercase tracking-spec text-atelier-ink">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-lg flex flex-wrap gap-sm">
              <a
                href="/apply"
                className={cn(
                  'inline-flex items-center gap-xs',
                  'bg-atelier-ink text-atelier-cream',
                  'px-md py-sm text-sm font-medium rounded-atelierXs',
                  'hover:opacity-90 transition-opacity',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
                )}
              >
                Get My Free Audit
                <span aria-hidden>↗</span>
              </a>
              <a
                href="/quote"
                className={cn(
                  'inline-flex items-center px-md py-sm text-sm',
                  'border border-atelier-ink/30 text-atelier-ink rounded-atelierXs',
                  'hover:border-atelier-ink/60 transition-colors',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
                )}
              >
                Free Rate Audit
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
