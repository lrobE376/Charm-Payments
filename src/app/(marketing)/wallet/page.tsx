import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CreditCard, Shield, Smartphone, UserPlus, Zap } from 'lucide-react'
import WalletWaitlistForm from './wallet-waitlist-form'

export const metadata: Metadata = {
  title: 'Charm Wallet — Banking Built for St. Louis',
  description:
    'Charm Wallet is a digital wallet built for underbanked communities in St. Louis. Instant access to your money, no credit check, no minimum balance. Join the waitlist today.',
}

const txRows = [
  { name: 'Payment Received', amt: '+$340.00', time: 'Today', color: 'text-brand-accent' },
  { name: 'Transfer to Bank', amt: '-$200.00', time: 'Yesterday', color: 'text-white/60' },
  { name: 'Card Purchase', amt: '-$42.18', time: 'Sun', color: 'text-white/60' },
]

const revealDelays = ['delay-100', 'delay-200', 'delay-300'] as const

export default function WalletPage() {
  return (
    <>
      <section
        className="relative overflow-hidden px-6 py-16 md:py-24"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 100%)' }}
      >
        <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2">
            <span className="section-label !border-white/20 !bg-white/10 !text-brand-accent">CHARM WALLET</span>
            <h1 className="font-display mt-4 whitespace-pre-line text-4xl font-bold text-white md:text-5xl lg:text-[3rem]">
              {`Your Money.\nInstant Access.\nNo Bank Required.`}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              Charm Wallet gives St. Louis residents instant access to their money — no credit check, no minimum balance, no hidden fees. Get paid faster, spend smarter, and
              build financial stability starting today.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="stats-badge !border-white/15 !bg-white/10 !text-white">No Credit Check</span>
              <span className="stats-badge !border-white/15 !bg-white/10 !text-white">FDIC Insured</span>
              <span className="stats-badge !border-white/15 !bg-white/10 !text-white">Instant Transfers</span>
              <span className="stats-badge !border-white/15 !bg-white/10 !text-white">No Minimum Balance</span>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#waitlist" className="btn-accent inline-flex min-h-[44px] items-center justify-center">
                Join the Waitlist
              </a>
              <a
                href="#how-it-works"
                className="btn-outline inline-flex min-h-[44px] items-center justify-center !border-white/45 !text-white !shadow-none hover:!border-white hover:!bg-white hover:!text-brand-dark"
              >
                See How It Works
              </a>
            </div>
            <p className="mt-6 max-w-lg text-xs leading-relaxed text-white/40">
              Charm Wallet banking services are provided by a sponsor bank, Member FDIC. Deposits insured up to $250,000.
            </p>
          </div>

          <div className="mt-14 hidden justify-center lg:mt-0 lg:flex lg:w-1/2">
            <div className="relative w-[280px]">
              <div className="animate-float rounded-[40px] border-4 border-white/20 bg-brand-dark p-4 shadow-2xl">
                <div className="mb-4 flex items-center justify-between px-2">
                  <span className="text-[10px] text-white/60">9:41</span>
                  <span className="text-[10px] text-white/60">●●●</span>
                </div>
                <div className="mb-4 rounded-[20px] bg-brand-accent p-5">
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-brand-dark">Available Balance</p>
                  <p className="mb-1 font-display text-3xl font-bold text-brand-dark">$1,284.50</p>
                  <p className="text-[11px] text-brand-dark/60">Updated just now</p>
                </div>
                <div className="mb-4 grid grid-cols-3 gap-2">
                  {[
                    { label: 'Add Money', icon: '↓' },
                    { label: 'Send', icon: '→' },
                    { label: 'Cash Out', icon: '↑' },
                  ].map((action) => (
                    <div key={action.label} className="rounded-2xl bg-white/10 p-3 text-center">
                      <p className="text-lg font-bold text-brand-accent">{action.icon}</p>
                      <p className="mt-1 text-[9px] text-white">{action.label}</p>
                    </div>
                  ))}
                </div>
                <p className="mb-2 px-1 text-[10px] uppercase tracking-widest text-white/40">Recent</p>
                {txRows.map((tx) => (
                  <div key={`${tx.name}-${tx.time}-${tx.amt}`} className="flex items-center justify-between border-b border-white/10 py-2">
                    <div>
                      <p className="text-[11px] font-semibold text-white">{tx.name}</p>
                      <p className="text-[10px] text-white/40">{tx.time}</p>
                    </div>
                    <span className={`text-[12px] font-bold ${tx.color}`}>{tx.amt}</span>
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-4 -left-6 rounded-2xl bg-white px-4 py-3 shadow-xl">
                <p className="text-[10px] uppercase tracking-wide text-gray-400">FDIC Insured</p>
                <p className="text-sm font-bold text-brand-dark">Up to $250,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-ptb bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label reveal">CHARM BALANCE</p>
          <h2 className="font-display mt-4 text-center text-3xl font-bold md:text-4xl reveal delay-100">
            <span className="gradient-text block whitespace-pre-line">{`Get Paid Instantly.\nSpend From Your Balance.`}</span>
          </h2>
          <p className="text-paragraph mx-auto mt-5 max-w-2xl text-center text-lg reveal delay-200">
            Charm Payments merchants get an even bigger advantage — your processing revenue deposits instantly into your Charm Wallet balance. No waiting 1-2 days for bank
            transfers. Your money is available the moment a customer pays you.
          </p>
          <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-10">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light">
                  <Zap className="h-6 w-6 text-brand-accent" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-dark">Instant Settlement</h3>
                  <p className="text-paragraph mt-2 text-sm leading-relaxed">
                    Payments process and deposit to your Charm Wallet balance immediately — not the next business day. Your money moves at the speed of your business.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light">
                  <CreditCard className="h-6 w-6 text-brand-accent" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-dark">Spend Directly (Coming Soon)</h3>
                  <p className="text-paragraph mt-2 text-sm leading-relaxed">
                    A Charm debit card lets you spend your balance anywhere Visa® is accepted — online, in-store, and at ATMs. One balance for your business and your life.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light">
                  <Shield className="h-6 w-6 text-brand-accent" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-dark">Protected &amp; Insured</h3>
                  <p className="text-paragraph mt-2 text-sm leading-relaxed">
                    Balances held at our sponsor bank are eligible for FDIC insurance up to applicable limits. Security controls and transaction alerts help you stay in
                    control.
                  </p>
                </div>
              </div>
            </div>
            <div className="charm-card bg-brand-card p-8">
              <p className="section-label">MERCHANTS</p>
              <p className="font-display mt-4 text-2xl font-bold text-brand-dark">One wallet for payouts &amp; spending</p>
              <ul className="mt-6 space-y-4 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-dark" aria-hidden />
                  Route card, tap, and online sales into the same balance you use for bills and transfers.
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-dark" aria-hidden />
                  Reduce reliance on slow ACH sweeps when you need cash-on-hand the same day.
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-dark" aria-hidden />
                  Built for St. Louis small businesses that can&apos;t afford to wait on settlement windows.
                </li>
              </ul>
              <Link href="/apply" className="btn-outline mt-8 inline-flex min-h-[44px] w-full items-center justify-center sm:w-auto">
                Apply for Charm Payments
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-ptb scroll-mt-28 bg-brand-light">
        <div className="mx-auto max-w-7xl px-6">
          <p className="section-label reveal">HOW IT WORKS</p>
          <h2 className="font-display mt-4 text-center text-3xl font-bold text-brand-dark md:text-4xl reveal delay-100">Three steps to your Charm Wallet</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              {
                Icon: UserPlus,
                title: 'Join the waitlist',
                desc: 'Reserve your spot. We&apos;ll invite St. Louis residents first as capacity opens.',
              },
              {
                Icon: Smartphone,
                title: 'Open in minutes',
                desc: 'No credit check. Verify your identity and fund your wallet from a linked bank account or direct deposit.',
              },
              {
                Icon: Zap,
                title: 'Use your balance',
                desc: 'Send money, cash out, and — for merchants — receive Charm Payments payouts instantly to the same balance.',
              },
            ].map(({ Icon, title, desc }, i) => (
              <div key={title} className={`charm-card bg-white p-6 text-center md:text-left reveal ${revealDelays[i]}`}>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light md:mx-0">
                  <Icon className="h-7 w-7 text-brand-dark" aria-hidden />
                </div>
                <h3 className="font-display mt-4 text-lg font-bold text-brand-dark">{title}</h3>
                <p className="text-paragraph mt-2 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="section-ptb scroll-mt-28 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="section-label">WAITLIST</p>
          <h2 className="font-display mt-4 text-3xl font-bold text-brand-dark md:text-4xl">Be first when we launch in St. Louis</h2>
          <p className="text-paragraph mx-auto mt-4 max-w-xl text-lg">
            Charm Wallet is rolling out to underbanked neighborhoods and Charm Payments merchants. Leave your name and email — we&apos;ll notify you before public signup.
          </p>
          <div className="mt-10">
            <WalletWaitlistForm />
          </div>
          <p className="text-paragraph mx-auto mt-8 max-w-2xl text-xs leading-relaxed">
            Charm Payments is a payment facilitator, not a bank. Charm Wallet deposit accounts and cards are offered by a sponsor bank, Member FDIC, where applicable. Deposits
            may be insured up to $250,000. Fees and features are subject to the account agreement.
          </p>
        </div>
      </section>

      <section
        className="section-ptb px-6 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #082720 0%, #0c3a30 50%, #0f4a3d 100%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="section-label !border-white/20 !bg-white/10 !text-brand-accent">GET STARTED</p>
          <h2 className="font-display mt-4 text-3xl font-bold md:text-4xl">Processing for your business. A wallet for your community.</h2>
          <p className="mt-4 text-lg text-white/80">
            Already a merchant? Pair Charm Payments with Charm Wallet for instant balance access. New to Charm? Start with payments — wallet access follows at approval.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/apply" className="btn-accent inline-flex min-h-[44px] items-center justify-center">
              Apply for Charm Payments
            </Link>
            <a
              href="#waitlist"
              className="btn-outline inline-flex min-h-[44px] items-center justify-center !border-white/45 !text-white !shadow-none hover:!border-white hover:!bg-white hover:!text-brand-dark"
            >
              Join the Wallet Waitlist
            </a>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-xs leading-relaxed text-white/60">
            Charm Payments is a payment facilitator, not a bank. Payment processing services are provided through our licensed acquiring bank partner. Merchant funds are subject
            to the terms of the Merchant Agreement.
          </p>
        </div>
      </section>
    </>
  )
}
