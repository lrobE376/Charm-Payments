// src/components/atelier/magazine/MagGradientBreak.tsx

export type MagGradientBreakVariant =
  | 'light-to-tinted'
  | 'tinted-to-light'
  | 'light-to-forest'
  | 'forest-to-light'
  | 'light-to-warm'
  | 'warm-to-light'

export type MagGradientBreakProps = {
  variant: MagGradientBreakVariant
  height?: number
}

const GRADIENTS: Record<MagGradientBreakVariant, string> = {
  'light-to-tinted': 'linear-gradient(to bottom, #FBFBFD 0%, #F5F4F1 100%)',
  'tinted-to-light': 'linear-gradient(to bottom, #F5F4F1 0%, #FBFBFD 100%)',
  'light-to-forest': 'linear-gradient(to bottom, #FBFBFD 0%, #0F3520 100%)',
  'forest-to-light': 'linear-gradient(to bottom, #0F3520 0%, #FBFBFD 100%)',
  'light-to-warm': 'linear-gradient(to bottom, #FBFBFD 0%, #F8F5F0 100%)',
  'warm-to-light': 'linear-gradient(to bottom, #F8F5F0 0%, #FBFBFD 100%)',
}

export function MagGradientBreak({ variant, height }: MagGradientBreakProps) {
  const isForestVariant = variant === 'light-to-forest' || variant === 'forest-to-light'
  const resolvedHeight = height ?? (isForestVariant ? 120 : 80)

  return (
    <div
      aria-hidden
      style={{
        height: resolvedHeight,
        background: GRADIENTS[variant],
      }}
    />
  )
}



