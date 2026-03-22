const faqItems = [
  {
    q: 'Do people need an app to tap my card?',
    a: 'No app required — ever. When someone taps your Charm Card, their phone opens your profile instantly in Safari or Chrome. Works on any modern iPhone or Android.',
  },
  {
    q: 'Can I update my info after the card ships?',
    a: 'Yes. Your digital profile lives in your Charm Cards dashboard. Change your number, add a new service, or swap your photo anytime — your physical card always points to the latest version.',
  },
  {
    q: 'What if I lose my physical card?',
    a: 'Order a replacement for $15. Your digital card (the link and wallet pass) stays active and unchanged — no data is stored on the physical card itself.',
  },
  {
    q: 'How many team members can I add?',
    a: 'Unlimited users on every plan at $99/month flat. Add your whole crew — barbers, stylists, front desk — no per-seat fees.',
  },
] as const

export default function CardsFaqSection() {
  return (
    <section className="section-ptb bg-[var(--brand-light)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">FAQ</span>
          <h2 className="font-display mt-3 text-3xl font-bold md:text-4xl">Questions? We&apos;ve got answers.</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {faqItems.map((item) => (
            <div key={item.q} className="charm-card border-l-4 border-brand-accent p-6">
              <h3 className="font-display text-lg font-bold text-[var(--heading)]">{item.q}</h3>
              <p className="mt-3 leading-relaxed text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
