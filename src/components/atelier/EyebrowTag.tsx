// src/components/atelier/EyebrowTag.tsx
import { cn } from '@/lib/utils'

export interface EyebrowTagProps {
  section: string
  label: string
  variant?: 'dark' | 'gold'
  className?: string
}

export function EyebrowTag({
  section,
  label,
  variant = 'dark',
  className,
}: EyebrowTagProps) {
  const palette =
    variant === 'gold'
      ? 'bg-atelier-gold text-atelier-ink font-medium'
      : 'bg-atelier-ink text-atelier-gold'

  return (
    <span
      className={cn(
        'inline-block font-atelierMono text-xs uppercase tracking-label',
        'px-3 py-1.5',
        palette,
        className,
      )}
    >
      <span>{section}</span>
      <span aria-hidden className="mx-1.5 opacity-70">
        ·
      </span>
      <span>{label}</span>
    </span>
  )
}
