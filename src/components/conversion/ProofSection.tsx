import { BadgeCheck, Cpu, Headphones, Landmark, ShieldCheck, Zap } from 'lucide-react'

const reasons = [
  {
    title: 'Lower processing fees',
    body: 'Interchange-plus and statement review so you keep more of every sale.',
    icon: Zap,
  },
  {
    title: 'Fast payouts',
    body: 'Card deposits on a predictable timeline \u2014 no mystery holds on standard accounts.',
    icon: Landmark,
  },
  {
    title: 'No long-term contracts',
    body: "Month-to-month on Starter and Growth. Walk away if we don't earn your business.",
    icon: BadgeCheck,
  },
  {
    title: 'Real human support',
    body: 'Gateway engineers and underwriting you can reach \u2014 not endless phone trees.',
    icon: Headphones,
  },
  {
    title: 'PCI compliant infrastructure',
    body: 'Tokenization, vaulting, and fraud tools built on enterprise-grade rails.',
    icon: ShieldCheck,
  },
  {
    title: 'Powered by enterprise gateway',
    body: 'NMI \u2014 the same stack behind billions in annual processing volume.',
    icon: Cpu,
  },
] as const

/** "Why switch to Charm" \u2014 checklist-style proof grid. */
export default function ProofSection({ id = 'why-switch' }: { id?: string }) {
  return (
    <section id={id} data-section className="scroll-mt-24 py-20" style={{ background: 'var(--surface)' }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span data-animate="fade-up" className="section-label">Why switch to Charm</span>
          <h2 data-animate="fade-up" data-delay="80" className="mt-3 text-3xl font-bold md:text-4xl">
            Built for merchants who are{' '}
            <span className="gradient-text inline-block whitespace-nowrap">done guessing on fees</span>
          </h2>
          <p data-animate="fade-up" data-delay="160" className="mt-4 text-lg text-[var(--paragraph)]/85">
            Same gateway power as the biggest names \u2014 with pricing and support that treat you like a partner, not a ticket number.
          </p>
        </div>
        <ul className="mt-14 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, body, icon: Icon }, idx) => (
            <li
              key={title}
              data-animate="scale-up"
              data-delay={String(idx * 80)}
              className="flex gap-4 rounded-2xl p-6 transition hover:shadow-md"
              style={{
                background: 'var(--surface-container-lowest)',
                outline: '1px solid var(--outline-variant)',
                boxShadow: '0px 4px 20px rgba(28,28,21,0.04), 0px 2px 6px rgba(28,28,21,0.04)',
              }}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white" style={{ background: 'var(--primary)' }}>
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-bold text-[var(--heading)]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--paragraph)]/80">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
