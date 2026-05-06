// src/components/atelier/magazine/HeroVisual.tsx
import Image from 'next/image'

export type HeroVisualVariant =
  | 'home'
  | 'solutions-restaurants'
  | 'defense'
  | 'feature'
  | 'custom'

export type HeroVisualProps = {
  variant: HeroVisualVariant
  caption: string
  src?: string
  alt?: string
}

const VARIANT_TINT: Record<HeroVisualVariant, { from: string; to: string; ring: string }> = {
  home: {
    from: 'rgba(30,92,53,0.10)',
    to: 'rgba(189,153,82,0.06)',
    ring: 'rgba(30,92,53,0.18)',
  },
  'solutions-restaurants': {
    from: 'rgba(189,153,82,0.14)',
    to: 'rgba(30,92,53,0.06)',
    ring: 'rgba(189,153,82,0.22)',
  },
  defense: {
    from: 'rgba(42,191,160,0.10)',
    to: 'rgba(30,92,53,0.10)',
    ring: 'rgba(42,191,160,0.20)',
  },
  feature: {
    from: 'rgba(245,242,234,0.55)',
    to: 'rgba(189,153,82,0.06)',
    ring: 'rgba(0,0,0,0.10)',
  },
  custom: {
    from: 'rgba(0,0,0,0.04)',
    to: 'rgba(0,0,0,0.02)',
    ring: 'rgba(0,0,0,0.10)',
  },
}

export function HeroVisual({ variant, caption, src, alt }: HeroVisualProps) {
  const tint = VARIANT_TINT[variant]

  return (
    <figure className="flex flex-col items-stretch gap-3" style={{ width: 360 }}>
      {src ? (
        <div
          className="relative overflow-hidden"
          style={{
            width: 360,
            height: 360,
            borderRadius: 8,
            border: '0.5px solid rgba(0,0,0,0.08)',
          }}
        >
          <Image
            src={src}
            alt={alt ?? caption}
            fill
            sizes="360px"
            className="object-cover"
            priority
          />
        </div>
      ) : (
        <Placeholder tint={tint} />
      )}

      <figcaption
        className="font-atelierMono text-[10px] uppercase tracking-label text-atelier-gold"
        style={{ paddingTop: 4 }}
      >
        {caption}
      </figcaption>
    </figure>
  )
}

function Placeholder({ tint }: { tint: { from: string; to: string; ring: string } }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: 360,
        height: 360,
        borderRadius: 8,
        border: `0.5px dashed rgba(0,0,0,0.18)`,
        background: `linear-gradient(135deg, ${tint.from} 0%, ${tint.to} 100%), #FAFAF7`,
      }}
      aria-hidden
    >
      {/* Concentric rings — quiet, geometric, intentional */}
      <svg
        className="absolute inset-0 m-auto"
        width="220"
        height="220"
        viewBox="0 0 220 220"
        fill="none"
        style={{ inset: 0 }}
      >
        <circle cx="110" cy="110" r="100" stroke={tint.ring} strokeWidth="0.5" fill="none" />
        <circle cx="110" cy="110" r="68" stroke={tint.ring} strokeWidth="0.5" fill="none" />
        <circle cx="110" cy="110" r="36" stroke={tint.ring} strokeWidth="0.5" fill="none" />
        <circle cx="110" cy="110" r="2" fill={tint.ring} />
      </svg>

      {/* Crosshair lines */}
      <span
        className="pointer-events-none absolute"
        style={{
          left: '50%',
          top: 14,
          bottom: 14,
          width: '0.5px',
          background: tint.ring,
          opacity: 0.5,
        }}
      />
      <span
        className="pointer-events-none absolute"
        style={{
          top: '50%',
          left: 14,
          right: 14,
          height: '0.5px',
          background: tint.ring,
          opacity: 0.5,
        }}
      />

      {/* Caption inside the slot */}
      <div
        className="absolute bottom-3 left-3 font-atelierMono text-[10px] uppercase tracking-label"
        style={{ color: 'rgba(0,0,0,0.35)' }}
      >
        Image slot · 360 × 360
      </div>
      <div
        className="absolute top-3 right-3 font-atelierMono text-[10px] uppercase tracking-label"
        style={{ color: 'rgba(0,0,0,0.35)' }}
      >
        ↗
      </div>
    </div>
  )
}
