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
            src="/images/sumup-uALOu8Rdv9M-unsplash.jpg"
            alt={alt ?? caption}
            fill
            sizes="360px"
            className="object-cover"
            priority
          />
        </div>
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



