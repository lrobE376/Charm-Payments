// src/components/conversion/PrimaryCTA.tsx
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type Variant = 'default' | 'on-dark' | 'sales' | 'sales-dark' | 'sales-dark-audit'

export type PrimaryCTAProps = {
  primary?: string
  secondary?: string
  primaryHref?: string
  secondaryHref?: string
  className?: string
  variant?: Variant
}

const base =
  'inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[10px] px-7 py-3.5 text-[15px] font-bold transition-all duration-200'

const primaryBtn =
  'text-white shadow-md hover:opacity-90 hover:-translate-y-px'

const ghostBtn =
  'bg-transparent hover:bg-[var(--primary)] hover:text-white'

export default function PrimaryCTA({
  primary = 'Apply Now',
  secondary = 'Get Instant Quote',
  primaryHref = '/apply',
  secondaryHref = '/quote',
  className = '',
  variant = 'default',
}: PrimaryCTAProps) {
  const primaryStyle = {
    background: 'linear-gradient(135deg, #004421, #1E5C35)',
  }

  const ghostStyle = {
    border: '1px solid var(--primary)',
    color: 'var(--primary)',
  }

  const ghostDarkStyle = {
    border: '1px solid rgba(255,255,255,0.5)',
    color: 'white',
  }

  if (variant === 'sales') {
    return (
      <div className={`flex flex-wrap items-center gap-3 sm:gap-4 ${className}`}>
        <Link href={primaryHref} className={`${base} ${primaryBtn}`} style={primaryStyle}>
          {primary}
          <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden />
        </Link>
        <Link href={secondaryHref} className={`${base} ${ghostBtn}`} style={ghostStyle}>
          {secondary}
        </Link>
      </div>
    )
  }

  if (variant === 'sales-dark') {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 ${className}`}>
        <Link href={primaryHref} className={`${base} ${primaryBtn}`} style={primaryStyle}>
          {primary}
          <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden />
        </Link>
        <Link href={secondaryHref} className={`${base} hover:bg-white/10`} style={ghostDarkStyle}>
          {secondary}
        </Link>
      </div>
    )
  }

  if (variant === 'sales-dark-audit') {
    return (
      <div className={`flex flex-wrap items-center gap-3 sm:gap-4 ${className}`}>
        <Link href={primaryHref} className={`${base} hover:bg-white/10`} style={ghostDarkStyle}>
          {primary}
        </Link>
        <Link href={secondaryHref} className={`${base} ${primaryBtn}`} style={primaryStyle}>
          {secondary}
          <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden />
        </Link>
      </div>
    )
  }

  const isDark = variant === 'on-dark'

  return (
    <div className={`flex flex-wrap items-center gap-3 sm:gap-4 ${className}`}>
      <Link href={primaryHref} className="btn-accent inline-flex">
        {primary}
        <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden />
      </Link>
      <Link
        href={secondaryHref}
        className={`${isDark ? 'btn-outline !text-white !border-white/45 !shadow-none hover:!bg-white hover:!text-brand-dark hover:!border-white' : 'btn-outline'} inline-flex justify-center`}
      >
        {secondary}
      </Link>
    </div>
  )
}
