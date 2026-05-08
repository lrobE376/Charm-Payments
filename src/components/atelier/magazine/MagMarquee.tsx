// src/components/atelier/magazine/MagMarquee.tsx
'use client'

import { Fragment } from 'react'
import Image from 'next/image'

export type MagMarqueeItem = {
  name: string
  logoSrc?: string
  alt?: string
}

export type MagMarqueeProps = {
  eyebrow?: string
  items: MagMarqueeItem[]
  speed?: 'slow' | 'normal' | 'fast'
}

const SPEED_DURATION: Record<NonNullable<MagMarqueeProps['speed']>, string> = {
  slow: '60s',
  normal: '40s',
  fast: '25s',
}

export function MagMarquee({ eyebrow, items, speed = 'normal' }: MagMarqueeProps) {
  if (items.length === 0) return null
  const loop = [...items, ...items]

  return (
    <section
      aria-label={eyebrow ?? `Trusted by ${items.map((i) => i.name).join(' Â· ')}`}
      className="bg-apple-canvas overflow-hidden relative"
      style={{ padding: '60px 32px' }}
    >
      {eyebrow ? (
        <div
          className="font-stripeSans text-center mx-auto"
          style={{
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.06em',
            color: 'rgba(0,0,0,0.5)',
            marginBottom: 28,
          }}
        >
          {eyebrow}
        </div>
      ) : null}

      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          left: 0,
          top: 0,
          bottom: 0,
          width: 80,
          background: 'linear-gradient(to right, #FBFBFD, transparent)',
          zIndex: 2,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          right: 0,
          top: 0,
          bottom: 0,
          width: 80,
          background: 'linear-gradient(to left, #FBFBFD, transparent)',
          zIndex: 2,
        }}
      />

      <div className="mag-marquee-track flex items-center w-max">
        {loop.map((item, i) => (
          <Fragment key={`${item.name}-${i}`}>
            <span
              aria-hidden={i >= items.length}
              className="mag-marquee-item flex items-center justify-center mx-7"
              style={{ height: 32 }}
            >
              {item.logoSrc ? (
                <Image
                  src={item.logoSrc}
                  alt={item.alt ?? item.name}
                  width={120}
                  height={32}
                  className="object-contain"
                  style={{ maxHeight: 32, width: 'auto', filter: 'grayscale(100%)', opacity: 0.55 }}
                />
              ) : (
                <span
                  className="font-atelierMono whitespace-nowrap"
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: 'rgba(0,0,0,0.55)',
                  }}
                >
                  {item.name}
                </span>
              )}
            </span>
          </Fragment>
        ))}
      </div>

      <style>{`
        .mag-marquee-track {
          animation: mag-marquee ${SPEED_DURATION[speed]} linear infinite;
        }
        .mag-marquee-track:hover {
          animation-play-state: paused;
        }
        .mag-marquee-item:hover img {
          filter: grayscale(0%) !important;
          opacity: 1 !important;
        }
        .mag-marquee-item:hover span {
          color: rgba(0,0,0,0.85) !important;
        }
        @keyframes mag-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mag-marquee-track {
            animation-play-state: paused !important;
          }
        }
      `}</style>
    </section>
  )
}



