/**
 * Trust signals above the fold — payment brands + NMI.
 * Word-style marks only (no trademark assets) for safe display.
 */
export default function TrustBar({ className = '' }: { className?: string }) {
  const brands = [
    { label: 'VISA', className: 'bg-[#1434CB] text-white' },
    { label: 'Mastercard', className: 'bg-[#EB001B] text-white' },
    { label: 'Amex', className: 'bg-[#006FCF] text-white' },
    { label: 'Apple Pay', className: 'bg-black text-white' },
  ] as const

  return (
    <div className={`space-y-3 ${className}`}>
      <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--heading)]/70 sm:text-left">
        Trusted by thousands of businesses
      </p>
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          {brands.map(({ label, className: c }) => (
            <span
              key={label}
              className={`inline-flex min-h-[28px] min-w-[52px] items-center justify-center rounded-md px-2.5 py-1 text-[10px] font-black tracking-tight shadow-sm ${c}`}
            >
              {label}
            </span>
          ))}
        </div>
        <p className="text-center text-xs font-semibold text-[var(--heading)]/80 sm:text-right">
          <span className="text-brand-accent">●</span> Powered by{' '}
          <span className="font-bold text-brand-dark">NMI Gateway</span>
        </p>
      </div>
    </div>
  )
}
