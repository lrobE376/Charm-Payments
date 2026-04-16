// src/app/(admin)/admin/tickets/page.tsx
import type { Metadata } from 'next'
import { createAdminClient } from '@/lib/supabase/admin'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = { title: 'Tickets — Admin' }

const PRIORITY_STYLES: Record<string, string> = {
  low:      'bg-gray-100 text-gray-600',
  medium:   'bg-blue-50 text-blue-700',
  high:     'bg-amber-50 text-amber-700',
  urgent:   'bg-red-50 text-red-700',
}

export default async function AdminTicketsPage() {
  const admin = createAdminClient()
  const { data: tickets } = await admin
    .from('tickets')
    .select('id, name, email, subject, priority, status, created_at')
    .order('created_at', { ascending: false })
    .limit(200)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Support Tickets</h1>
        <p className="mt-1 text-sm text-gray-500">All inbound support requests</p>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
              <th className="px-5 py-3">From</th>
              <th className="px-5 py-3">Subject</th>
              <th className="px-5 py-3">Priority</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {(tickets ?? []).map((t) => (
              <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3.5 font-medium text-gray-900">
                  {t.name}
                  <div className="text-xs text-gray-400 font-normal">{t.email}</div>
                </td>
                <td className="px-5 py-3.5 text-gray-700 max-w-xs truncate">{t.subject}</td>
                <td className="px-5 py-3.5">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold capitalize ${
                    PRIORITY_STYLES[t.priority] ?? 'bg-gray-100 text-gray-600'
                  }`}>
                    {t.priority}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold capitalize ${
                    t.status === 'open'    ? 'bg-red-50 text-red-700' :
                    t.status === 'closed'  ? 'bg-green-50 text-green-700' :
                                             'bg-gray-100 text-gray-600'
                  }`}>
                    {t.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-xs text-gray-400">{formatDate(t.created_at)}</td>
              </tr>
            ))}
            {!tickets?.length && (
              <tr>
                <td colSpan={5} className="px-5 py-12 text-center text-sm text-gray-400">
                  No tickets yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
