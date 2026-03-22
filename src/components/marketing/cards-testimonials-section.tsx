const testimonials = [
  {
    initials: 'DM',
    name: 'Darius M.',
    business: 'Freelance Barber, The Grove',
    quote:
      "Clients tap my chair display and I'm in their phone. No more 'what was your number again?' texts.",
  },
  {
    initials: 'TP',
    name: 'Tasha P.',
    business: 'Owner, Petal & Bloom Floral',
    quote: 'I added my whole seasonal menu to my profile. The Pay Me button alone paid for the first year.',
  },
  {
    initials: 'RJ',
    name: 'Rico J.',
    business: 'Personal Trainer, Midtown STL',
    quote: 'Handed out 200 paper cards last year. Zero callbacks. One Charm Card — three new clients this month.',
  },
] as const

const trustPills = ['NMI Gateway', 'First Data/Fiserv', '256-bit SSL'] as const

export default function CardsTestimonialsSection() {
  return (
    <section className="section-ptb bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">Trusted in St. Louis</span>
          <h2 className="font-display mt-3 text-3xl font-bold md:text-4xl">Real businesses. Real results.</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article key={t.initials} className="charm-card flex flex-col p-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-dark font-display text-sm font-bold text-white">
                {t.initials}
              </div>
              <p className="font-display mt-4 font-bold text-[var(--heading)]">{t.name}</p>
              <p className="mt-1 text-sm text-gray-500">{t.business}</p>
              <p className="mt-4 flex-1 italic leading-relaxed text-gray-700">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-brand-accent" aria-hidden="true">
                {'★★★★★'}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-3">
          <span className="text-sm font-medium text-gray-600">Secured by</span>
          {trustPills.map((label) => (
            <span
              key={label}
              className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-brand-dark"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
