import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { DollarSign, CreditCard, ArrowDownToLine, AlertCircle } from 'lucide-react'
import StatCard from '@/components/ui/StatCard'
import { formatCurrency, formatDateTime } from '@/lib/utils'
import Badge from '@/components/ui/Badge'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Dashboard Overview' }

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/login')
  const { data: merchant } = await supabase.from('merchants').select('id').eq('user_id', user.id).single()
  if (!merchant) redirect('/apply/pending')
  const [{ data: transactions }, { data: payouts }, { data: disputes }] = await Promise.all([
    supabase.from('transactions').select('*').eq('merchant_id', merchant.id).order('created_at', { ascending: false }).limit(10),
    supabase.from('payouts').select('*').eq('merchant_id', merchant.id).order('created_at', { ascending: false }).limit(5),
    supabase.from('disputes').select('*').eq('merchant_id', merchant.id).eq('status', 'open'),
  ])
  const totalVolume =
    transactions?.reduce((sum, t) => (t.status !== 'declined' ? sum + Number(t.amount) : sum), 0) ?? 0
  const totalFees = transactions?.reduce((sum, t) => sum + Number(t.fee), 0) ?? 0
  const pendingPayout =
    payouts?.filter((p) => p.status === 'pending').reduce((sum, p) => sum + Number(p.net_amount), 0) ?? 0
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
        <p className="text-sm text-gray-500 mt-1">Your payment activity at a glance</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard label="Total Volume" value={formatCurrency(totalVolume)} icon={DollarSign} sub="All transactions" />
        <StatCard label="Processing Fees" value={formatCurrency(totalFees)} icon={CreditCard} sub="Total fees charged" />
        <StatCard label="Pending Payout" value={formatCurrency(pendingPayout)} icon={ArrowDownToLine} sub="Awaiting deposit" />
        <StatCard label="Open Disputes" value={String(disputes?.length ?? 0)} icon={AlertCircle} sub="Require response" />
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">Recent Transactions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-6 py-3 font-medium text-gray-500">Transaction ID</th>
                <th className="px-6 py-3 font-medium text-gray-500">Date</th>
                <th className="px-6 py-3 font-medium text-gray-500">Card</th>
                <th className="px-6 py-3 font-medium text-gray-500 text-right">Amount</th>
                <th className="px-6 py-3 font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {!transactions?.length && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                    No transactions yet. Once you start processing payments, they will appear here.
                  </td>
                </tr>
              )}
              {transactions?.map((t) => (
                <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs text-gray-600">{t.transaction_id}</td>
                  <td className="px-6 py-4 text-gray-600">{formatDateTime(t.created_at)}</td>
                  <td className="px-6 py-4 text-gray-600 capitalize">
                    {t.card_type} •••• {t.card_last4}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-gray-900">{formatCurrency(Number(t.amount))}</td>
                  <td className="px-6 py-4">
                    <Badge status={t.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
