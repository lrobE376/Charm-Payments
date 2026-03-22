import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { formatCurrency, formatDate, maskAccountNumber } from '@/lib/utils'
import Badge from '@/components/ui/Badge'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Payouts' }

export default async function PayoutsPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/login')
  const { data: merchant } = await supabase.from('merchants').select('id').eq('user_id', user.id).single()
  if (!merchant) redirect('/apply')
  const { data: payouts } = await supabase
    .from('payouts')
    .select('*')
    .eq('merchant_id', merchant.id)
    .order('created_at', { ascending: false })
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Payouts</h1>
        <p className="text-sm text-gray-500 mt-1">Deposits to your linked bank account</p>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-4 py-3 font-medium text-gray-500">Date</th>
                <th className="px-4 py-3 font-medium text-gray-500">Bank account</th>
                <th className="px-4 py-3 font-medium text-gray-500 text-right">Gross</th>
                <th className="px-4 py-3 font-medium text-gray-500 text-right">Fees</th>
                <th className="px-4 py-3 font-medium text-gray-500 text-right">Net deposit</th>
                <th className="px-4 py-3 font-medium text-gray-500">Est. deposit</th>
                <th className="px-4 py-3 font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {!payouts?.length && (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-gray-400">
                    No payouts yet.
                  </td>
                </tr>
              )}
              {payouts?.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{formatDate(p.created_at)}</td>
                  <td className="px-4 py-3 text-gray-800">{maskAccountNumber(p.bank_last4)}</td>
                  <td className="px-4 py-3 text-right font-semibold text-gray-900">{formatCurrency(Number(p.amount))}</td>
                  <td className="px-4 py-3 text-right text-gray-600">{formatCurrency(Number(p.fee))}</td>
                  <td className="px-4 py-3 text-right text-gray-900 font-medium">{formatCurrency(Number(p.net_amount))}</td>
                  <td className="px-4 py-3 text-gray-600">{formatDate(p.estimated_deposit)}</td>
                  <td className="px-4 py-3">
                    <Badge status={p.status} />
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
