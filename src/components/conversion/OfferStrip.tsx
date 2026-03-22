import Link from 'next/link'

/** Thin top promo bar — sits above main nav in marketing layout. */
export default function OfferStrip() {
  return (
    <div
      className="bg-[#082720] text-center text-xs font-semibold text-white/95 sm:text-sm"
      role="note"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2.5">
        <span className="text-brand-accent">Free account review — we&apos;ll beat your current rate</span>
        <span className="hidden sm:inline text-white/30" aria-hidden>
          ·
        </span>
        <Link
          href="/quote"
          className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white transition hover:border-brand-accent hover:text-brand-accent sm:text-xs"
        >
          Get instant quote
        </Link>
      </div>
    </div>
  )
}
