import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type CTA = {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
}

export function TrustBadgeRow({
  items,
  className,
}: {
  items: ReactNode[]
  className?: string
}) {
  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      {items.map((item, i) => (
        <div key={i} className="stats-badge bg-white/10 text-white">
          {item}
        </div>
      ))}
    </div>
  )
}

export function FeatureImageCard({
  src,
  alt,
  caption,
  className,
  priority,
}: {
  src: string
  alt: string
  caption?: ReactNode
  className?: string
  priority?: boolean
}) {
  return (
    <div className={cn('charm-card overflow-hidden bg-white', className)}>
      <div className="relative aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority={priority}
        />
      </div>
      {caption ? (
        <div className="border-t border-black/5 px-5 py-4 text-sm leading-relaxed text-atelier-ink-soft">
          {caption}
        </div>
      ) : null}
    </div>
  )
}

export function SecurityBadgeRow({
  items,
  className,
}: {
  items: ReactNode[]
  className?: string
}) {
  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      {items.map((item, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]"
        >
          {item}
        </span>
      ))}
    </div>
  )
}

export function MerchantTrustStrip({
  title,
  items,
  className,
}: {
  title: string
  items: { label: string; value: string }[]
  className?: string
}) {
  return (
    <div className={cn('grid gap-4 rounded-[18px] border border-black/5 bg-white p-5 shadow-sm', className)}>
      <p className="font-atelierMono text-xs uppercase tracking-label text-atelier-forest">{title}</p>
      <div className="grid gap-3 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item.label} className="rounded-[14px] bg-brand-light/70 p-4">
            <div className="text-sm font-medium text-atelier-ink-soft">{item.label}</div>
            <div className="mt-1 text-lg font-semibold text-atelier-ink">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function FormIntroPanel({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  badges,
}: {
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt: string
  badges: ReactNode[]
}) {
  return (
    <div className="mb-8 grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div>
        <p className="font-atelierMono text-xs uppercase tracking-label text-atelier-forest">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-semibold text-atelier-ink">{title}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-atelier-ink-soft">{description}</p>
        <SecurityBadgeRow items={badges} className="mt-5" />
      </div>
      <FeatureImageCard src={image} alt={imageAlt} priority />
    </div>
  )
}

export function SectionHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  trustItems,
  visual,
  align = 'left',
  className,
}: {
  eyebrow: string
  title: string
  description: string
  primaryCta?: CTA
  secondaryCta?: CTA
  trustItems?: ReactNode[]
  visual: ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  const copyAlign = align === 'center' ? 'text-center items-center' : 'text-center lg:text-left lg:items-start'
  const actionsAlign = align === 'center' ? 'justify-center' : 'justify-center lg:justify-start'

  return (
    <section className={cn('relative overflow-hidden', className)}>
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className={cn('flex flex-col', copyAlign)}>
          <span className="section-label">{eyebrow}</span>
          <h1 className="font-display mt-4 whitespace-pre-line text-4xl font-bold md:text-5xl lg:text-[3rem]">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed lg:mx-0">
            {description}
          </p>
          {trustItems?.length ? (
            <SecurityBadgeRow items={trustItems} className={cn('mt-8', actionsAlign)} />
          ) : null}
          {(primaryCta || secondaryCta) ? (
            <div className={cn('mt-10 flex flex-wrap gap-4', actionsAlign)}>
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className={cn(
                    'inline-flex min-h-[44px] items-center justify-center',
                    primaryCta.variant === 'secondary'
                      ? 'btn-outline'
                      : 'btn-accent',
                  )}
                >
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="btn-outline inline-flex min-h-[44px] items-center justify-center"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
        <div>{visual}</div>
      </div>
    </section>
  )
}



