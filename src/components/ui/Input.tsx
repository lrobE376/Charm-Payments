import { cn } from '@/lib/utils'
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  hint?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, hint, className, id, ...props }, ref) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium text-atelier-ink-soft">
        {label}
        {props.required && (
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input
        ref={ref}
        id={inputId}
        className={cn(
          'w-full px-4 py-3 rounded-[10px] border text-sm transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-brand-dark focus:border-transparent placeholder:text-gray-400 shadow-[0_1px_2px_rgba(0,0,0,0.02)]',
          error ? 'border-red-500 bg-red-50' : 'border-black/10 bg-white hover:border-black/20',
          className
        )}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        aria-invalid={error ? 'true' : undefined}
        {...props}
      />
      {hint && !error && (
        <p id={`${inputId}-hint`} className="text-xs text-atelier-ink-soft/70">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${inputId}-error`} role="alert" className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  )
})
Input.displayName = 'Input'
export default Input



