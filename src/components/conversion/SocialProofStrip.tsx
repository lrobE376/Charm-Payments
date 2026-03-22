import { BadgeCheck, MapPin } from 'lucide-react'

/**
 * B2B trust strip — word-style marks (no trademark artwork) + partner badges.
 */
export default function SocialProofStrip() {
  return (
    <section className="border-b border-gray-200/80 bg-white py-5" aria-label="Trust and certifications">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 px-6 md:flex-row md:flex-wrap md:gap-10">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex min-h-[32px] min-w-[56px] items-center justify-center rounded-md bg-[#1434CB] px-3 py-1.5 text-[11px] font-black tracking-tight text-white shadow-sm">
            VISA
          </span>
          <span className="inline-flex min-h-[32px] min-w-[72px] items-center justify-center rounded-md bg-gradient-to-r from-[#EB001B] to-[#F79E1B] px-3 py-1.5 text-[10px] font-black tracking-tight text-white shadow-sm">
            Mastercard
          </span>
        </div>

        <div className="hidden h-10 w-px bg-gray-200 md:block" aria-hidden />

        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-sales-green/35 bg-sales-green/10 px-4 py-2 text-xs font-bold text-sales-navy">
            <BadgeCheck className="h-4 w-4 shrink-0 text-sales-green" aria-hidden />
            Official NMI Certified Partner
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-bold text-sales-navy">
            <MapPin className="h-4 w-4 shrink-0 text-sales-green" aria-hidden />
            St. Louis Based Support
          </span>
        </div>
      </div>
    </section>
  )
}
