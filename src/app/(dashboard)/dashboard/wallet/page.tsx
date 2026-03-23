import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { getMerchantBalance, getMerchantTransactions } from '@/lib/services/stripe-service'
import { WalletTransferForm } from '@/components/dashboard/WalletTransferForm'
import { formatCurrency } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Charm Wallet — Dashboard',
}

export default async function WalletPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/login')
  const { data: merchant } = await supabase.from('merchants').select('id').eq('user_id', user.id).single()
  if (!merchant) redirect('/apply')

  const balance = await getMerchantBalance('acct_demo', 'fa_demo')
  const transactions = await getMerchantTransactions('acct_demo', 'fa_demo', 10)

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Charm Wallet</h1>
        <p className="mt-1 text-sm text-gray-500">Merchant balance and bank transfers</p>
      </div>

      <div className="mb-8 rounded-[24px] bg-brand-dark p-8 text-white">
        <p className="mb-2 text-sm uppercase tracking-widest text-white/60">Available Balance</p>
        <p className="mb-1 text-5xl font-bold text-brand-accent">{formatCurrency(balance)}</p>
        <p className="mt-2 text-xs text-white/40">FDIC insured · Powered by Stripe Treasury · Updated just now</p>

        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            { label: 'This Month In', value: '$4,820.00' },
            { label: 'This Month Out', value: '$2,000.00' },
            { label: 'Pending', value: '$340.00' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/10 p-4">
              <p className="mb-1 text-xs text-white/50">{stat.label}</p>
              <p className="text-lg font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
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
                    <span className={tx.status === 'posted' ? 'text-green-600' : 'text-amber-600'}>{tx.status}</span>
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

      <p className="mt-8 text-center text-xs leading-relaxed text-gray-400">
        Charm Wallet banking services are provided by a sponsor bank, Member FDIC. Deposits insured up to $250,000. Charm Wallet is not a bank. Charm Holdings LLC is the
        program manager.
      </p>
    </div>
  )
}
