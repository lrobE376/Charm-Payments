// src/app/(admin)/admin/admins/page.tsx
import type { Metadata } from 'next'
import { createAdminClient } from '@/lib/supabase/admin'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = { title: 'Admins — Admin' }

export default async function AdminAdminsPage() {
  const admin = createAdminClient()
  const { data: admins } = await admin
    .from('admin_profiles')
    .select('id, email, full_name, created_at')
    .order('created_at', { ascending: true })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Admin Users</h1>
        <p className="mt-1 text-sm text-gray-500">
          Users with admin portal access. To add an admin, insert a row into{' '}
          <code className="text-xs bg-gray-100 px-1 rounded">admin_profiles</code> via the Supabase
          service role.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Email</th>
              <th className="px-5 py-3">Added</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {(admins ?? []).map((a) => (
              <tr key={a.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3.5 font-medium text-gray-900">{a.full_name ?? '—'}</td>
                <td className="px-5 py-3.5 text-gray-600">{a.email}</td>
                <td className="px-5 py-3.5 text-xs text-gray-400">{formatDate(a.created_at)}</td>
              </tr>
            ))}
            {!admins?.length && (
              <tr>
                <td colSpan={3} className="px-5 py-12 text-center text-sm text-gray-400">
                  No admins configured
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
