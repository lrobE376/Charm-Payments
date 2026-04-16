// src/app/(dashboard)/dashboard/wallet/page.tsx
import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { WalletTransferForm } from '@/components/dashboard/WalletTransferForm'
import { getMerchantBalance, getMerchantTransactions } from '@/lib/services/stripe-service'
import { formatCurrency } from '@/lib/utils'
import { Wallet } from 'lucide-react'

export const metadata: Metadata = { title: 'Charm Wallet — Dashboard' }

export default async function WalletPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: merchant } = await supabase
    .from('merchants')
    .select('id, stripe_account_id, financial_account_id')
    .eq('user_id', user.id)
    .single()
  if (!merchant) redirect('/apply/pending')

  const stripeAccountId = (merchant.stripe_account_id as string | null) ?? ''
  const financialAccountId = (merchant.financial_account_id as string | null) ?? ''
  const isLive = Boolean(stripeAccountId && financialAccountId)

  // ── Coming soon state ─────────────────────────────────────────────────────
  if (!isLive) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Charm Wallet</h1>
          <p className="mt-1 text-sm text-gray-500">Merchant balance and bank transfers</p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white py-20 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-light">
            <Wallet className="h-7 w-7 text-brand-dark" />
          </div>
          <h2 className="text-lg font-bold text-gray-900">Charm Wallet — Coming Soon</h2>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-500">
            Your Charm Wallet account is being set up. Once activated, you&apos;ll be able to view your
            balance, see incoming settlements, and transfer funds directly to your bank account.
          </p>
          <p className="mt-4 text-xs text-gray-400">
            Questions?{' '}
            <a href="mailto:merchants@charmpayments.com" className="text-brand-dark hover:underline">
              Contact your account manager
            </a>
          </p>
        </div>
        <p className="text-center text-xs leading-relaxed text-gray-400">
          Charm Wallet banking services are provided by a sponsor bank, Member FDIC. Deposits insured
          up to $250,000. Charm Holdings LLC is the program manager.
        </p>
      </div>
    )
  }

  // ── Live state ────────────────────────────────────────────────────────────
  const balance = await getMerchantBalance(stripeAccountId, financialAccountId)
  const transactions = await getMerchantTransactions(stripeAccountId, financialAccountId, 10)

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Charm Wallet</h1>
        <p className="mt-1 text-sm text-gray-500">Merchant balance and bank transfers</p>
      </div>

      <div className="rounded-[24px] bg-brand-dark p-8 text-white">
        <p className="mb-2 text-sm uppercase tracking-widest text-white/60">Available Balance</p>
        <p className="mb-1 text-5xl font-bold text-brand-accent">{formatCurrency(balance)}</p>
        <p className="mt-2 text-xs text-white/40">FDIC insured · Powered by Stripe Treasury · Updated just now</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-lg font-bold text-gray-900">Transfer to Bank</h2>
          <WalletTransferForm balance={balance} />
        </div>

        <div>
          <h2 className="mb-4 text-lg font-bold text-gray-900">Recent Activity</h2>
          <div className="space-y-3">
            {transactions.map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between rounded-[16px] border border-gray-100 bg-white p-4"
              >
                <div>
                  <p className="text-sm font-semibold text-gray-900">{tx.description}</p>
                  <p className="mt-0.5 text-xs text-gray-400">
                    {new Date(tx.createdAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                    {' · '}
                    <span className={tx.status === 'posted' ? 'text-green-600' : 'text-amber-600'}>
                      {tx.status}
                    </span>
                  </p>
                </div>
                <span className={`text-sm font-bold ${tx.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                  {tx.type === 'credit' ? '+' : '-'}
                  {formatCurrency(Math.abs(tx.amount) / 100)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-xs leading-relaxed text-gray-400">
        Charm Wallet banking services are provided by a sponsor bank, Member FDIC. Deposits insured
        up to $250,000. Charm Holdings LLC is the program manager.
      </p>
    </div>
  )
}
