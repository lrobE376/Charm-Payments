'use client'

import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, disabled, children, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref as never}
        disabled={asChild ? undefined : disabled || loading}
        className={cn(
          'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          variant === 'primary' && '[background:linear-gradient(135deg,#004421_0%,#1E5C35_100%)] text-white shadow-[0_2px_8px_rgba(0,68,33,0.25)] hover:opacity-90 hover:-translate-y-px focus-visible:ring-[#004421]',
          variant === 'secondary' && 'bg-brand-accent text-brand-dark hover:bg-brand-accent/90 focus-visible:ring-brand-accent',
          variant === 'ghost' && 'bg-transparent border border-brand-dark text-brand-dark hover:bg-brand-dark/5',
          variant === 'danger' && 'bg-red-600 text-white hover:bg-red-700',
          size === 'sm' && 'px-3 py-1.5 text-sm min-h-[44px]',
          size === 'md' && 'px-5 py-2.5 text-sm min-h-[44px]',
          size === 'lg' && 'px-8 py-3.5 text-base min-h-[52px]',
          className
        )}
        {...props}
      >
        {loading && !asChild ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Processing...
          </span>
        ) : (
          children
        )}
      </Comp>
    )
  }
)
Button.displayName = 'Button'
export default Button
