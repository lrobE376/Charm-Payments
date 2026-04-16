// src/app/(admin)/admin/applications/page.tsx
import type { Metadata } from 'next'
import { createAdminClient } from '@/lib/supabase/admin'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Applications — Admin' }

const STATUS_STYLES: Record<string, string> = {
  new:      'bg-blue-50 text-blue-700',
  review:   'bg-amber-50 text-amber-700',
  approved: 'bg-green-50 text-green-700',
  declined: 'bg-red-50 text-red-700',
}

export default async function ApplicationsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>
}) {
  const { status } = await searchParams
  const admin = createAdminClient()

  let query = admin
    .from('merchant_applications')
    .select('id, first_name, last_name, business_name, email, monthly_volume, status, created_at')
    .order('created_at', { ascending: false })
    .limit(100)

  if (status) query = query.eq('status', status)

  const { data: applications } = await query

  const filters = ['all', 'new', 'review', 'approved', 'declined']

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Applications</h1>
          <p className="mt-1 text-sm text-gray-500">Merchant account applications</p>
        </div>
      </div>

      {/* Status filter tabs */}
      <div className="flex gap-2 flex-wrap">
        {filters.map((f) => (
          <Link
            key={f}
            href={f === 'all' ? '/admin/applications' : `/admin/applications?status=${f}`}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold capitalize transition-colors ${
              (f === 'all' && !status) || f === status
                ? 'bg-brand-dark text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {f}
          </Link>
        ))}
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
              <th className="px-5 py-3">Applicant</th>
              <th className="px-5 py-3">Business</th>
              <th className="px-5 py-3">Monthly Vol.</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Date</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {(applications ?? []).map((app) => (
              <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3.5 font-medium text-gray-900">
                  {app.first_name} {app.last_name}
                  <div className="text-xs text-gray-400 font-normal">{app.email}</div>
                </td>
                <td className="px-5 py-3.5 text-gray-700">{app.business_name}</td>
                <td className="px-5 py-3.5 text-gray-700">{app.monthly_volume ?? '—'}</td>
                <td className="px-5 py-3.5">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold capitalize ${
                      STATUS_STYLES[app.status] ?? 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-gray-500 text-xs">
                  {formatDate(app.created_at)}
                </td>
                <td className="px-5 py-3.5 text-right">
                  <Link
                    href={`/admin/applications/${app.id}`}
                    className="text-xs font-semibold text-brand-dark hover:underline"
                  >
                    Review →
                  </Link>
                </td>
              </tr>
            ))}
            {!applications?.length && (
              <tr>
                <td colSpan={6} className="px-5 py-12 text-center text-sm text-gray-400">
                  No applications found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
