import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, DollarSign, Download, Heart, Scissors, Truck, Wrench, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tap to Pay — Charm Payments',
  description:
    'Turn your iPhone or Android into a payment terminal with Charm Payments Tap to Pay. No hardware needed. Accept contactless payments anywhere. $0/mo.',
}

const disclaimer = (
  <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-white/70">
    Charm Payments is a payment facilitator, not a bank. Payment processing services are provided through our licensed acquiring bank partner. Merchant funds are subject to
    the terms of the Merchant Agreement.
  </p>
)

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-gray-200 py-4">
      <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-brand-dark [&::-webkit-details-marker]:hidden">
        <span>{q}</span>
        <ArrowRight className="h-4 w-4 shrink-0 rotate-90 text-gray-400 transition-transform group-open:-rotate-90" aria-hidden />
      </summary>
      <p className="text-paragraph mt-3 text-sm leading-relaxed">{a}</p>
    </details>
  )
}

export default function TapToPayPage() {
  return (
    <>
      <section
        className="relative overflow-hidden px-6 py-20 text-center md:py-28"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 100%)' }}
      >
        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="section-label !border-white/20 !bg-white/10 !text-brand-accent">TAP TO PAY</span>
          <h1 className="font-display mt-4 whitespace-pre-line text-4xl font-bold text-white md:text-5xl lg:text-[3rem]">
            {`Your Phone Is Your\nPayment Terminal`}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
            No card reader. No hardware to buy. Turn any iPhone or Android into a fully functional payment terminal — accept tap, chip, and contactless payments anywhere you
            do business.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">$0/mo</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">iPhone &amp; Android</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">No Hardware</span>
            <span className="stats-badge !border-white/15 !bg-white/10 !text-white">$0.10 per tap</span>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/apply" className="btn-accent inline-flex min-h-[44px] items-center justify-center">
              Apply for Your Merchant Account
            </Link>
            <Link
              href="/quote"
              className="btn-outline inline-flex min-h-[44px] items-center justify-center !border-white/45 !text-white !shadow-none hover:!border-white hover:!bg-white hover:!text-brand-dark"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="section-ptb bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label">HOW IT WORKS</p>
          <h2 className="font-display mt-4 max-w-3xl whitespace-pre-line text-3xl font-bold text-brand-dark md:text-4xl">
            {`Accept a Payment in\nUnder 30 Seconds`}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                Icon: Download,
                title: 'Download the App',
                desc: 'Install the Charm Payments mobile app on your iPhone or Android. Log in with your merchant credentials. Takes two minutes.',
              },
              {
                Icon: DollarSign,
                title: 'Enter the Amount',
                desc: 'Type in the sale amount, add a description, and tap charge. The app prompts the customer to tap their card or phone.',
              },
              {
                Icon: Zap,
                title: 'Customer Taps and Pays',
                desc: 'Customer taps their card, Apple Pay, or Google Pay to your phone. Payment approved in seconds. Receipt sent by email or text.',
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="text-center md:text-left">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light md:mx-0">
                  <Icon className="h-7 w-7 text-brand-dark" aria-hidden />
                </div>
                <h3 className="font-display mt-4 text-xl font-bold text-brand-dark">{title}</h3>
                <p className="text-paragraph mt-2 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <ul className="space-y-3">
              {['iPhone XS and later supported', 'Android 8.0 and later supported', 'Apple Pay and Google Pay ready', 'Chip, tap, and contactless', '$0 monthly fee'].map(
                (t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                    {t}
                  </li>
                ),
              )}
            </ul>
            <ul className="space-y-3">
              {[
                'Works on WiFi or cellular data',
                'No Bluetooth reader needed',
                'Full transaction history in dashboard',
                'Next-business-day funding',
                '$0.10 per tap transaction',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-dark" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-ptb bg-brand-light">
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label">PERFECT FOR</p>
          <h2 className="font-display mt-4 max-w-3xl whitespace-pre-line text-3xl font-bold text-brand-dark md:text-4xl">
            {`Every Mobile Merchant\nin St. Louis`}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Scissors,
                title: 'Barbers & Stylists',
                desc: 'Finish the cut, tap your phone to their card. No fumbling with a card reader. No receipt printer. Just tap, pay, and on to the next client.',
              },
              {
                Icon: Truck,
                title: 'Food Trucks & Markets',
                desc: "Accept payments at farmers markets, pop-up events, and festivals. Works on your phone's data — no WiFi required.",
              },
              {
                Icon: Wrench,
                title: 'Contractors & Trades',
                desc: 'Collect payment on the job site the moment the work is done. No more waiting for checks to clear or chasing invoices.',
              },
              {
                Icon: Heart,
                title: 'Mobile Health & Beauty',
                desc: 'Massage therapists, estheticians, and mobile nail techs who work at client locations. Get paid before you pack up.',
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="charm-card bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light">
                  <Icon className="h-6 w-6 text-brand-dark" aria-hidden />
                </div>
                <h3 className="font-display mt-4 text-lg font-bold text-brand-dark">{title}</h3>
                <p className="text-paragraph mt-2 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-ptb bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-label">COMMON QUESTIONS</p>
          <h2 className="font-display mt-4 text-3xl font-bold text-brand-dark md:text-4xl">Tap to Pay FAQ</h2>
          <div className="mt-8">
            <FaqItem
              q="What phones support Tap to Pay?"
              a="iPhone XS and later running iOS 16 or higher. Android devices running Android 8.0 or higher with NFC capability — most modern Android phones qualify."
            />
            <FaqItem
              q="Does the customer need an app?"
              a={"No. The customer taps their physical card or uses Apple Pay or Google Pay on their own phone. They don't download anything."}
            />
            <FaqItem
              q="What is the transaction fee?"
              a="$0.10 per tap transaction on top of your standard processing rate. No monthly fee for Tap to Pay."
            />
            <FaqItem
              q="Does it work without WiFi?"
              a={"Yes. The app uses your phone's cellular data connection. As long as you have cell signal, you can process payments."}
            />
            <FaqItem
              q="Is it secure?"
              a="Yes. Tap to Pay uses the same NFC encryption technology built into Apple Pay and Google Pay. Card data is tokenized and never stored on your device."
            />
            <FaqItem
              q="Can I use Tap to Pay alongside a physical terminal?"
              a="Yes. Your Charm Payments account supports both Tap to Pay and card present terminals under the same merchant account."
            />
          </div>
        </div>
      </section>

      <section
        className="section-ptb px-6 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 50%, #0f4a3d 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="section-label !border-white/20 !bg-white/10 !text-brand-accent">GET STARTED FREE</p>
          <h2 className="font-display mt-4 whitespace-pre-line text-3xl font-bold md:text-4xl">
            {`No Hardware. No Monthly Fee.\nJust Tap and Get Paid.`}
          </h2>
          <p className="mt-4 text-lg text-white/80">Apply today and start accepting payments on your phone within 48 hours of approval.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/apply" className="btn-accent inline-flex min-h-[44px] items-center justify-center">
              Apply for Your Merchant Account
            </Link>
            <Link
              href="/contact"
              className="btn-outline inline-flex min-h-[44px] items-center justify-center !border-white/45 !text-white !shadow-none hover:!border-white hover:!bg-white hover:!text-brand-dark"
            >
              Talk to Our Team
            </Link>
          </div>
          {disclaimer}
        </div>
      </section>
    </>
  )
}
