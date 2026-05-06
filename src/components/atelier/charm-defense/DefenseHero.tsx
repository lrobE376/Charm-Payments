// src/components/atelier/charm-defense/DefenseHero.tsx
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Container } from '@/components/atelier/Container'
import { cn } from '@/lib/utils'
import { prefersReducedMotion } from '@/lib/motion'

const PILLS = [
  'AUTOMATED EVIDENCE',
  'ALERTS · VISA · MC',
  'FULLY MANAGED',
  'ZERO MERCHANT EFFORT',
]

export function DefenseHero() {
  const disputesRef = useRef<HTMLSpanElement>(null)
  const recoveredRef = useRef<HTMLSpanElement>(null)
  const winRateRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const disputes = disputesRef.current
    const recovered = recoveredRef.current
    const winRate = winRateRef.current
    if (!disputes || !recovered || !winRate) return

    if (prefersReducedMotion()) {
      disputes.textContent = '24'
      recovered.textContent = '$3,142'
      winRate.textContent = '71%'
      return
    }

    const tl = gsap.timeline({ delay: 0.2 })

    const disputesC = { val: 0 }
    const recoveredC = { val: 0 }
    const winRateC = { val: 0 }

    tl.to(
      disputesC,
      {
        val: 24,
        duration: 1.2,
        ease: 'power2.out',
        onUpdate: () => {
          disputes.textContent = String(Math.round(disputesC.val))
        },
      },
      0,
    )

    tl.to(
      recoveredC,
      {
        val: 3142,
        duration: 1.2,
        ease: 'power2.out',
        onUpdate: () => {
          recovered.textContent = `$${Math.round(recoveredC.val).toLocaleString('en-US')}`
        },
      },
      0.08,
    )

    tl.to(
      winRateC,
      {
        val: 71,
        duration: 1.2,
        ease: 'power2.out',
        onUpdate: () => {
          winRate.textContent = `${Math.round(winRateC.val)}%`
        },
      },
      0.16,
    )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section className="bg-[#0F3520] text-atelier-cream py-10 px-lg">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2xl items-center">
          <div>
            <span
              className={cn(
                'inline-flex items-center gap-2 mb-base',
                'bg-atelier-gold/15 text-atelier-gold',
                '[border-width:0.5px] border-atelier-gold',
                'font-atelierMono text-xs uppercase tracking-label',
                'px-2.5 py-1 rounded-atelierPill',
              )}
            >
              <span
                aria-hidden
                className="block w-1.5 h-1.5 rounded-full bg-atelier-gold"
              />
              INCLUDED · NO ADD-ON · NO UPCHARGE
            </span>

            <h1
              className={cn(
                'font-atelierSerif text-4xl md:text-5xl font-medium',
                'leading-[0.97] tracking-[-0.025em] text-atelier-cream',
              )}
            >
              Chargeback defense,{' '}
              <em className="italic text-atelier-gold">included.</em>
            </h1>

            <p className="text-base text-atelier-cream/[0.78] mt-md leading-relaxed max-w-xl">
              Every Charm merchant account comes with built-in chargeback
              monitoring, automated evidence, and dispute response. Not an
              add-on. Not an upsell. Just how we run your account.
            </p>

            <div className="mt-lg flex flex-wrap gap-sm">
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
                Apply for a Charm account
                <span aria-hidden>↗</span>
              </a>
              <a
                href="#flow"
                className={cn(
                  'inline-flex items-center gap-xs',
                  'text-atelier-gold text-sm font-medium',
                  'px-md py-sm',
                  'hover:opacity-80 transition-opacity',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
                )}
              >
                See how it works
                <span aria-hidden>→</span>
              </a>
            </div>

            <ul className={cn('mt-lg grid grid-cols-2 gap-2 max-w-[360px]')}>
              {PILLS.map((pill) => (
                <li
                  key={pill}
                  className={cn(
                    'font-atelierMono text-xs uppercase tracking-label',
                    'text-atelier-gold',
                    '[border-width:0.5px] border-atelier-gold/40 rounded-atelierPill',
                    'px-2.5 py-[5px]',
                    'whitespace-nowrap',
                  )}
                >
                  ✓ {pill}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={cn(
              'bg-atelier-paper text-atelier-ink',
              'p-3.5 rounded-atelierSm',
              '[border-width:0.5px] border-atelier-gold/30',
            )}
          >
            <header
              className={cn(
                'flex items-center justify-between gap-xs pb-2 mb-3',
                '[border-bottom-width:0.5px] border-black/15',
              )}
            >
              <span className="font-atelierMono text-[10px] uppercase tracking-label text-black/55">
                YOUR ACCOUNT · LIVE
              </span>
              <span
                className={cn(
                  'inline-flex items-center gap-1.5',
                  'font-atelierMono text-[10px] uppercase tracking-label',
                  'text-atelier-teal',
                )}
              >
                <span
                  aria-hidden
                  className="block w-1.5 h-1.5 rounded-full bg-atelier-teal"
                />
                ACTIVE
              </span>
            </header>

            <div className="grid grid-cols-2 gap-2">
              <Cell label="DISPUTES THIS QUARTER">
                <span
                  ref={disputesRef}
                  className="font-atelierMono text-2xl text-atelier-ink tabular-nums"
                >
                  0
                </span>
              </Cell>
              <Cell label="RECOVERED FOR YOU">
                <span
                  ref={recoveredRef}
                  className="font-atelierMono text-2xl text-atelier-forest tabular-nums"
                >
                  $0
                </span>
              </Cell>
              <Cell label="WIN RATE">
                <span
                  ref={winRateRef}
                  className="font-atelierMono text-2xl text-atelier-gold tabular-nums"
                >
                  0%
                </span>
              </Cell>
              <Cell label="YOUR TIME SPENT">
                <span className="font-atelierMono text-2xl text-atelier-ink tabular-nums">
                  0 hrs
                </span>
              </Cell>
            </div>

            <div
              className={cn(
                'mt-3 bg-[#0F3520] text-atelier-cream',
                'px-3 py-2',
                'flex items-center justify-between gap-xs',
              )}
            >
              <span className="font-atelierMono text-[10px] uppercase tracking-label text-atelier-cream/65">
                DEFENSE FEE
              </span>
              <span className="font-atelierMono text-sm text-atelier-gold tracking-spec">
                $0.00 · INCLUDED
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Cell({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-atelier-creamWarm p-2.5">
      <div className="font-atelierMono text-[10px] uppercase tracking-label text-black/55">
        {label}
      </div>
      <div className="mt-1 leading-none">{children}</div>
    </div>
  )
}
