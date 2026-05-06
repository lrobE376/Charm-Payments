// src/components/atelier/charm-defense/DefenseUseCases.tsx
import { Container } from '@/components/atelier/Container'
import { EyebrowTag } from '@/components/atelier/EyebrowTag'
import { SpecCard } from '@/components/atelier/SpecCard'
import { cn } from '@/lib/utils'

const USE_CASES = [
  {
    id: 'retail',
    title: 'Independent retail & restaurants',
    description:
      'Brick-and-mortar with a card terminal. We catch friendly-fraud disputes before they hit your bottom line — without you ever opening a portal.',
  },
  {
    id: 'ecommerce',
    title: 'eCommerce & subscription',
    description:
      'Recurring billing means recurring chargebacks. Charm fights every one — friendly fraud, “didn’t recognize,” failed-card excuses.',
  },
  {
    id: 'high-risk',
    title: 'High-risk merchants',
    description:
      "CBD, supplements, digital goods — the verticals other processors won't touch. Built-in defense keeps you below the 1% threshold.",
  },
  {
    id: 'saas',
    title: 'SaaS & digital services',
    description:
      "Account-sharing disputes, refund-dodging, “I forgot to cancel” — Charm's evidence packets answer all of it.",
  },
]

export function DefenseUseCases() {
  return (
    <section className="bg-white py-9 px-lg">
      <Container>
        <div className="mb-2xl">
          <EyebrowTag section="§" label="WHO IT'S FOR" />
          <h2
            className={cn(
              'mt-base font-atelierSerif text-3xl md:text-4xl font-medium',
              'leading-tight tracking-[-0.025em] text-atelier-ink',
              'max-w-3xl',
            )}
          >
            Built for the businesses we{' '}
            <em className="italic text-atelier-forest">already serve.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
          {USE_CASES.map((u) => (
            <SpecCard
              key={u.id}
              title={u.title}
              description={u.description}
              className="bg-atelier-creamWarm p-3"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
