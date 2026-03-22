import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { formatCurrency, formatDateTime, maskCardNumber } from '@/lib/utils'
import Badge from '@/components/ui/Badge'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Transactions' }

export default async function TransactionsPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/login')
  const { data: merchant } = await supabase.from('merchants').select('id').eq('user_id', user.id).single()
  if (!merchant) redirect('/apply')
  const { data: transactions } = await supabase
    .from('transactions')
    .select('*')
    .eq('merchant_id', merchant.id)
    .order('created_at', { ascending: false })
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
        <p className="text-sm text-gray-500 mt-1">Full history of card and ACH activity</p>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[1000px]">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-4 py-3 font-medium text-gray-500">Transaction ID</th>
                <th className="px-4 py-3 font-medium text-gray-500">Date</th>
                <th className="px-4 py-3 font-medium text-gray-500">Cardholder</th>
                <th className="px-4 py-3 font-medium text-gray-500">Card</th>
                <th className="px-4 py-3 font-medium text-gray-500 text-right">Amount</th>
                <th className="px-4 py-3 font-medium text-gray-500">Type</th>
                <th className="px-4 py-3 font-medium text-gray-500 text-right">Fee</th>
                <th className="px-4 py-3 font-medium text-gray-500 text-right">Net</th>
                <th className="px-4 py-3 font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {!transactions?.length && (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center text-gray-400">
                    No transactions found.
                  </td>
                </tr>
              )}
              {transactions?.map((t) => {
                const isCredit = t.status !== 'refunded' && Number(t.amount) > 0
                return (
                <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 font-mono text-xs text-gray-600">{t.transaction_id}</td>
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{formatDateTime(t.created_at)}</td>
                  <td className="px-4 py-3 text-gray-800">{t.cardholder_name}</td>
                  <td className="px-4 py-3 text-gray-600 capitalize">
                    {t.card_type} {maskCardNumber(t.card_last4)}
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-gray-900">{formatCurrency(Number(t.amount))}</td>
                  <td className="px-4 py-3">
                    {isCredit ? (
                      <span className="text-green-600 font-semibold text-xs bg-green-50 px-2 py-1 rounded-full">Credit</span>
                    ) : (
                      <span className="text-red-600 font-semibold text-xs bg-red-50 px-2 py-1 rounded-full">Debit</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">{formatCurrency(Number(t.fee))}</td>
                  <td className="px-4 py-3 text-right text-gray-900">{formatCurrency(Number(t.net_amount))}</td>
                  <td className="px-4 py-3">
                    <Badge status={t.status} />
                  </td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
