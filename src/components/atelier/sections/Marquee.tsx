// src/components/atelier/sections/Marquee.tsx
'use client'

import { Fragment } from 'react'
import { cn } from '@/lib/utils'

const RAILS = [
  'VISA',
  'MASTERCARD',
  'AMEX',
  'DISCOVER',
  'ACH/eCHECK',
  'APPLE PAY',
  'GOOGLE PAY',
  'VIRTUAL TERMINAL',
  'RECURRING BILLING',
  'PCI DSS',
]

export function Marquee() {
  const loop = [...RAILS, ...RAILS]

  return (
    <section
      aria-label={`Accepted: ${RAILS.join(' · ')}`}
      className={cn(
        'bg-atelier-creamWarm',
        '[border-bottom-width:0.5px] border-black/[0.08]',
        'py-3 overflow-hidden relative',
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-[80px] bg-gradient-to-r from-atelier-creamWarm to-transparent z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-[80px] bg-gradient-to-l from-atelier-creamWarm to-transparent z-10"
      />
      <div
        className={cn(
          'flex items-center gap-base w-max',
          'animate-[marquee_28s_linear_infinite]',
          'hover:[animation-play-state:paused]',
          'motion-reduce:[animation-play-state:paused]',
        )}
      >
        {loop.map((name, i) => (
          <Fragment key={`${name}-${i}`}>
            <span
              aria-hidden={i >= RAILS.length}
              className={cn(
                'font-atelierMono text-xs uppercase whitespace-nowrap',
                'text-black/55 tracking-[0.08em]',
              )}
            >
              {name}
            </span>
            <span aria-hidden className="font-atelierMono text-xs text-black/30">
              ·
            </span>
          </Fragment>
        ))}
      </div>
    </section>
  )
}
