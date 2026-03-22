import { BadgeCheck, Cpu, Headphones, Landmark, ShieldCheck, Zap } from 'lucide-react'

const reasons = [
  {
    title: 'Lower processing fees',
    body: 'Interchange-plus and statement review so you keep more of every sale.',
    icon: Zap,
  },
  {
    title: 'Fast payouts',
    body: 'Card deposits on a predictable timeline — no mystery holds on standard accounts.',
    icon: Landmark,
  },
  {
    title: 'No long-term contracts',
    body: 'Month-to-month on Starter and Growth. Walk away if we don’t earn your business.',
    icon: BadgeCheck,
  },
  {
    title: 'Real human support',
    body: 'Gateway engineers and underwriting you can reach — not endless phone trees.',
    icon: Headphones,
  },
  {
    title: 'PCI compliant infrastructure',
    body: 'Tokenization, vaulting, and fraud tools built on enterprise-grade rails.',
    icon: ShieldCheck,
  },
  {
    title: 'Powered by enterprise gateway',
    body: 'NMI — the same stack behind billions in annual processing volume.',
    icon: Cpu,
  },
] as const

/** “Why switch to Charm” — checklist-style proof grid. */
export default function ProofSection({ id = 'why-switch' }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-24 bg-neutral-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">Why switch to Charm</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Built for merchants who are{' '}
            <span className="gradient-text">done guessing on fees</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--paragraph)]/85">
            Same gateway power as the biggest names — with pricing and support that treat you like a partner, not a ticket number.
          </p>
        </div>
        <ul className="mt-14 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, body, icon: Icon }) => (
            <li
              key={title}
              className="flex gap-4 rounded-2xl border border-[rgba(8,39,32,0.08)] bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
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
