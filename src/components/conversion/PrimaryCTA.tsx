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

export default function PrimaryCTA({
  primary = 'Apply Now',
  secondary = 'Get Instant Quote',
  primaryHref = '/apply',
  secondaryHref = '/quote',
  className = '',
  variant = 'default',
}: PrimaryCTAProps) {
  if (variant === 'sales') {
    return (
      <div className={`flex flex-wrap items-center gap-3 sm:gap-4 ${className}`}>
        <Link href={primaryHref} className={`${base} bg-sales-green text-sales-navy shadow-md hover:brightness-110`}>
          {primary}
          <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden />
        </Link>
        <Link
          href={secondaryHref}
          className={`${base} border-2 border-sales-navy bg-transparent text-sales-navy hover:bg-sales-navy hover:text-white`}
        >
          {secondary}
        </Link>
      </div>
    )
  }

  if (variant === 'sales-dark') {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 ${className}`}>
        <Link href={primaryHref} className={`${base} bg-sales-green text-sales-navy shadow-lg hover:brightness-110`}>
          {primary}
          <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden />
        </Link>
        <Link
          href={secondaryHref}
          className={`${base} border-2 border-sales-green bg-transparent text-sales-green hover:bg-sales-green/15`}
        >
          {secondary}
        </Link>
      </div>
    )
  }

  if (variant === 'sales-dark-audit') {
    /** Audit CTA is the high-contrast conversion hook (filled green). */
    return (
      <div className={`flex flex-wrap items-center gap-3 sm:gap-4 ${className}`}>
        <Link
          href={primaryHref}
          className={`${base} border-2 border-white/75 bg-transparent text-white hover:bg-white/10`}
        >
          {primary}
        </Link>
        <Link href={secondaryHref} className={`${base} bg-sales-green text-sales-navy shadow-lg hover:brightness-110`}>
          {secondary}
          <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden />
        </Link>
      </div>
    )
  }

  const isDark = variant === 'on-dark'
  const outlineClass = isDark
    ? 'btn-outline !text-white !border-white/45 !shadow-none hover:!bg-white hover:!text-brand-dark hover:!border-white'
    : 'btn-outline'

  return (
    <div className={`flex flex-wrap items-center gap-3 sm:gap-4 ${className}`}>
      <Link href={primaryHref} className="btn-accent inline-flex">
        {primary}
        <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden />
      </Link>
      <Link href={secondaryHref} className={`${outlineClass} inline-flex justify-center`}>
        {secondary}
      </Link>
    </div>
  )
}
