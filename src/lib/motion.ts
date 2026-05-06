// src/lib/motion.ts
export const reducedMotionQuery = '(prefers-reduced-motion: reduce)'

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia(reducedMotionQuery).matches
}

export const SCROLL_TRIGGER_DEFAULTS = {
  start: 'top 75%',
  toggleActions: 'play none none none',
} as const
