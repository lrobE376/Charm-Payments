// src/components/atelier/SpecCard.tsx
import { cn } from '@/lib/utils'

type SpecCardVariant = 'default' | 'code' | 'verified'
type AccentColor = 'forest' | 'gold'
type BadgeColor = 'forest' | 'gold' | 'ink'

const FOREST_HOVER_SHADOW =
  'hover:shadow-[0_1px_0_rgba(30,92,53,0.1),0_12px_32px_-10px_rgba(30,92,53,0.22),0_24px_48px_-20px_rgba(30,92,53,0.14)]'

const GOLD_HOVER_SHADOW =
  'hover:shadow-[0_1px_0_rgba(201,169,110,0.18),0_12px_32px_-10px_rgba(201,169,110,0.28),0_24px_48px_-20px_rgba(201,169,110,0.18)]'

export interface SpecCardProps {
  figLabel?: string
  title?: string
  description?: string
  variant?: SpecCardVariant
  badge?: string
  badgeColor?: BadgeColor
  accentColor?: AccentColor
  code?: React.ReactNode
  children?: React.ReactNode
  className?: string
  focusable?: boolean
  ariaLabel?: string
}

export function SpecCard({
  figLabel,
  title,
  description,
  variant = 'default',
  badge,
  badgeColor,
  accentColor = 'forest',
  code,
  children,
  className,
  focusable,
  ariaLabel,
}: SpecCardProps) {
  const isCode = variant === 'code'
  const isVerified = variant === 'verified'

  const baseSurface = isCode
    ? 'bg-[#0A2516] text-atelier-cream border-atelier-gold/40'
    : 'bg-white text-atelier-ink border-black/20'

  const hoverSurface = isCode
    ? 'hover:bg-[#0A2516] hover:border-atelier-gold'
    : 'hover:bg-[var(--hover-card-bg)] hover:border-atelier-forest'

  const hoverShadow = isCode ? GOLD_HOVER_SHADOW : FOREST_HOVER_SHADOW

  const accentBarColor = isCode ? 'bg-atelier-gold' : 'bg-atelier-forest'

  const cornerColor = isCode ? 'border-atelier-gold' : 'border-atelier-forest'

  const figRest = isCode ? 'text-atelier-gold/85' : 'text-black/55'
  const figHover = isCode
    ? 'group-hover:text-atelier-gold group-focus-visible:text-atelier-gold'
    : 'group-hover:text-atelier-forest group-focus-visible:text-atelier-forest'

  const titleRest = isCode ? 'text-atelier-cream' : 'text-atelier-ink'
  const titleHover = isCode
    ? 'group-hover:text-atelier-gold group-focus-visible:text-atelier-gold'
    : 'group-hover:text-atelier-forestDeep group-focus-visible:text-atelier-forestDeep'

  const descRest = isCode ? 'text-atelier-cream/70' : 'text-black/65'

  const dotRest =
    accentColor === 'gold' ? 'bg-atelier-gold' : 'bg-atelier-forest'
  const dotHover =
    accentColor === 'gold'
      ? 'group-hover:bg-atelier-forest group-focus-visible:bg-atelier-forest'
      : 'group-hover:bg-atelier-gold group-focus-visible:bg-atelier-gold'

  const focusHoverShadow = isCode
    ? 'focus-visible:shadow-[0_1px_0_rgba(201,169,110,0.18),0_12px_32px_-10px_rgba(201,169,110,0.28),0_24px_48px_-20px_rgba(201,169,110,0.18)]'
    : 'focus-visible:shadow-[0_1px_0_rgba(30,92,53,0.1),0_12px_32px_-10px_rgba(30,92,53,0.22),0_24px_48px_-20px_rgba(30,92,53,0.14)]'

  return (
    <div
      tabIndex={focusable ? 0 : undefined}
      role={focusable ? 'group' : undefined}
      aria-label={focusable ? ariaLabel : undefined}
      className={cn(
        'group relative isolate overflow-hidden',
        'p-md rounded-atelierXs',
        '[border-width:0.5px]',
        baseSurface,
        hoverSurface,
        hoverShadow,
        'transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.85,0.25,1)]',
        'hover:-translate-y-2 hover:scale-[1.02]',
        'will-change-transform',
        focusable && [
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atelier-gold',
          'focus-visible:-translate-y-2 focus-visible:scale-[1.02]',
          isCode
            ? 'focus-visible:bg-[#0A2516] focus-visible:border-atelier-gold'
            : 'focus-visible:bg-[var(--hover-card-bg)] focus-visible:border-atelier-forest',
          focusHoverShadow,
        ],
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute left-0 top-0 bottom-0 w-[3px] origin-top',
          'scale-y-0 group-hover:scale-y-100 group-focus-visible:scale-y-100',
          'transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0.85,0.25,1)]',
          accentBarColor,
        )}
      />

      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute top-2 right-2 w-1.5 h-1.5',
          '[border-top-width:1px] [border-right-width:1px]',
          cornerColor,
          'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100',
          'transition-opacity duration-300 ease-out',
        )}
      />

      <div
        className={cn(
          'flex items-center justify-between gap-xs',
          isVerified
            ? 'pb-xs mb-xs [border-bottom-width:0.5px] border-dashed border-black/20'
            : 'mb-xs',
        )}
      >
        {figLabel ? (
          <span
            className={cn(
              'font-atelierMono text-[11px] uppercase tracking-label',
              figRest,
              figHover,
              'transition-colors duration-300 ease-out',
            )}
          >
            {figLabel}
          </span>
        ) : (
          <span aria-hidden />
        )}

        {badge ? (
          isVerified ? (
            <span
              className={cn(
                'font-atelierMono text-[10px] uppercase tracking-label px-1.5 py-0.5 font-medium',
                '[border-width:0.5px]',
                'bg-atelier-gold/15 text-atelier-forestDeep border-atelier-gold rotate-[-2deg]',
              )}
            >
              {badge}
            </span>
          ) : (
            <span
              className={cn(
                'font-atelierMono text-xs uppercase tracking-label',
                badgeColor === 'gold'
                  ? 'text-atelier-gold'
                  : badgeColor === 'ink'
                    ? 'text-atelier-ink'
                    : isCode
                      ? 'text-atelier-gold'
                      : 'text-atelier-forest',
              )}
            >
              {badge}
            </span>
          )
        ) : (
          <span
            aria-hidden
            className={cn(
              'block w-1.5 h-1.5',
              dotRest,
              dotHover,
              'rotate-0 group-hover:rotate-180 group-focus-visible:rotate-180',
              'transition-all duration-[400ms] ease-out',
            )}
          />
        )}
      </div>

      {title ? (
        <h3
          className={cn(
            'font-atelierSerif font-medium leading-tight tracking-[-0.015em]',
            'text-base md:text-lg',
            titleRest,
            titleHover,
            'transition-colors duration-300 ease-out',
          )}
        >
          {title}
        </h3>
      ) : null}

      {description ? (
        <p className={cn('mt-xs text-xs leading-relaxed', descRest)}>
          {description}
        </p>
      ) : null}

      {isCode && code ? (
        <pre
          className={cn(
            'mt-sm overflow-x-auto',
            'bg-black/30 border border-atelier-gold/20 rounded-atelierXs',
            'p-xs text-[11px] leading-relaxed font-atelierMono text-atelier-cream/90',
          )}
        >
          <code>{code}</code>
        </pre>
      ) : null}

      {children ? <div className="mt-sm">{children}</div> : null}
    </div>
  )
}
