import { CheckCircle, CreditCard, Smartphone } from 'lucide-react'
import CardsNfcDemo from '@/components/marketing/CardsNfcDemo'

const digitalFeatures = [
  'A unique link (yourname.charmcards.co)',
  'Apple Wallet & Google Wallet pass',
  'NFC-ready profile page',
  'Pay Me button for instant payment requests',
  'Lead capture form',
  'Real-time analytics dashboard',
  'Update anytime from your phone',
] as const

const physicalFeatures = [
  'Metal or bamboo finish options',
  'NFC chip embedded — one tap shares your digital card',
  'QR code printed on back',
  'No app needed to scan',
  'One-time hardware cost (not a subscription)',
] as const

export default function CardsWhatsIncludedSection() {
  return (
    <section className="section-ptb bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">What You&apos;re Getting</span>
          <h2 className="font-display mt-3 text-3xl font-bold md:text-4xl">One card. Two ways to share.</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0">
          <div className="lg:border-r lg:border-gray-200 lg:pr-10">
            <div className="flex items-start gap-3">
              <Smartphone className="h-8 w-8 shrink-0 text-brand-accent" aria-hidden />
              <div>
                <h3 className="font-display text-xl font-bold text-[var(--heading)]">Your Digital Card</h3>
                <p className="font-display mt-1 font-bold text-brand-dark">Always with you</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {digitalFeatures.map((line) => (
                <li key={line} className="flex gap-3 text-sm text-[var(--paragraph)] md:text-base">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" strokeWidth={2} aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-10">
            <div className="flex items-start gap-3">
              <CreditCard className="h-8 w-8 shrink-0 text-gray-400" aria-hidden />
              <div>
                <h3 className="font-display text-xl font-bold text-[var(--heading)]">Your Physical Card</h3>
                <p className="font-display mt-1 font-bold text-gray-600">Optional. Unforgettable.</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {physicalFeatures.map((line) => (
                <li key={line} className="flex gap-3 text-sm text-[var(--paragraph)] md:text-base">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" strokeWidth={2} aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <CardsNfcDemo />
        </div>

        <div className="charm-card mt-10 border-l-4 border-brand-accent bg-brand-card p-5">
          <p className="text-[var(--paragraph)] leading-relaxed">
            🔑 The physical card is the key. Your digital profile is the room. You control everything from the dashboard.
          </p>
        </div>
      </div>
    </section>
  )
}
