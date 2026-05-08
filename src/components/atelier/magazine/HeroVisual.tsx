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

export function HeroVisual({ caption, src, alt }: HeroVisualProps) {
  return (
    <figure className="flex w-full max-w-[360px] flex-col items-stretch gap-3">
      {src ? (
        <div
          className="relative overflow-hidden"
          style={{
            width: '100%',
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
        <Placeholder />
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

function Placeholder() {
  // Pattern is neutral across variants. The variant tint travels through the FIG label only.
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: '100%',
        height: 360,
        borderRadius: 8,
        border: `0.5px dashed rgba(0,0,0,0.18)`,
        background: '#FFFFFF',
      }}
      aria-hidden
    >
      {/* Concentric rings â€” quiet, geometric, intentional */}
      <svg
        className="absolute inset-0 m-auto"
        width="220"
        height="220"
        viewBox="0 0 220 220"
        fill="none"
        style={{ inset: 0 }}
      >
        <circle cx="110" cy="110" r="100" stroke="rgba(0,0,0,0.06)" strokeWidth="0.5" fill="none" />
        <circle cx="110" cy="110" r="68" stroke="rgba(0,0,0,0.08)" strokeWidth="0.5" fill="none" />
        <circle cx="110" cy="110" r="36" stroke="rgba(0,0,0,0.10)" strokeWidth="0.5" fill="none" />
        <circle cx="110" cy="110" r="2" fill="rgba(0,0,0,0.25)" />
      </svg>

      {/* Crosshair lines */}
      <span
        className="pointer-events-none absolute"
        style={{
          left: '50%',
          top: 14,
          bottom: 14,
          width: '0.5px',
          background: 'rgba(0,0,0,0.06)',
        }}
      />
      <span
        className="pointer-events-none absolute"
        style={{
          top: '50%',
          left: 14,
          right: 14,
          height: '0.5px',
          background: 'rgba(0,0,0,0.06)',
        }}
      />

      {/* Caption inside the slot */}
      <div
        className="absolute bottom-3 left-3 font-atelierMono text-[10px] uppercase tracking-label"
        style={{ color: 'rgba(0,0,0,0.35)' }}
      >
        Image slot Â· 360 Ã— 360
      </div>
      <div
        className="absolute top-3 right-3 font-atelierMono text-[10px] uppercase tracking-label"
        style={{ color: 'rgba(0,0,0,0.35)' }}
      >
        â†—
      </div>
    </div>
  )
}



