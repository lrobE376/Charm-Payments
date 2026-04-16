import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { formatCurrency, formatDate } from '@/lib/utils'
import Badge from '@/components/ui/Badge'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Disputes' }

type DisputeRow = {
  id: string
  amount: number
  reason_code: string
  reason_description: string
  status: string
  response_deadline: string
  created_at: string
  transactions: { transaction_id: string } | null
}

function daysUntil(dateStr: string): number {
  const d = new Date(dateStr)
  const now = new Date()
  return Math.ceil((d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
}

export default async function DisputesPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/login')
  const { data: merchant } = await supabase.from('merchants').select('id').eq('user_id', user.id).single()
  if (!merchant) redirect('/apply/pending')
  const { data: raw } = await supabase
    .from('disputes')
    .select('*, transactions(transaction_id)')
    .eq('merchant_id', merchant.id)
    .order('created_at', { ascending: false })
  const disputes = (raw ?? []) as DisputeRow[]
  const openCount = disputes.filter((d) => d.status === 'open' || d.status === 'under_review').length
  return (
    <div className="space-y-6">
      {openCount > 0 && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
          <strong className="font-semibold">Action required:</strong> You have {openCount} open dispute
          {openCount === 1 ? '' : 's'}. Respond before the deadline to protect your revenue.
        </div>
      )}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Disputes</h1>
        <p className="text-sm text-gray-500 mt-1">Chargebacks and retrieval requests</p>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[960px]">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-4 py-3 font-medium text-gray-500">Date filed</th>
                <th className="px-4 py-3 font-medium text-gray-500">Transaction ID</th>
                <th className="px-4 py-3 font-medium text-gray-500">Reason</th>
                <th className="px-4 py-3 font-medium text-gray-500 text-right">Amount</th>
                <th className="px-4 py-3 font-medium text-gray-500">Response deadline</th>
                <th className="px-4 py-3 font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {!disputes.length && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                    No disputes on file.
                  </td>
                </tr>
              )}
              {disputes.map((d) => {
                const txId = d.transactions?.transaction_id ?? '—'
                const days = daysUntil(d.response_deadline)
                const urgent = days >= 0 && days <= 3
                return (
                  <tr key={d.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{formatDate(d.created_at)}</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">{txId}</td>
                    <td className="px-4 py-3 text-gray-800">
                      <span className="font-medium">{d.reason_code}</span>
                      <span className="text-gray-500"> — {d.reason_description}</span>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-red-600">{formatCurrency(Number(d.amount))}</td>
                    <td className="px-4 py-3">
                      <span
                        className={
                          urgent ? 'font-semibold text-red-600 whitespace-nowrap' : 'text-gray-600 whitespace-nowrap'
                        }
                      >
                        {formatDate(d.response_deadline)}
                        {urgent && ` (${days}d left)`}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <Badge status={d.status} />
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
