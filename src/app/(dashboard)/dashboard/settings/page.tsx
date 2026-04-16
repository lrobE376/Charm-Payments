import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Settings' }

export default async function SettingsPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/login')
  const { data: merchant } = await supabase.from('merchants').select('*').eq('user_id', user.id).single()
  if (!merchant) redirect('/apply/pending')
  const m = merchant as {
    business_name: string
    dba_name: string | null
    email: string
    phone: string
    plan: string
    status: string
    mid: string | null
  }
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-sm text-gray-500 mt-1">Account details (read-only)</p>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="text-gray-500">Business name</dt>
            <dd className="font-medium text-gray-900 mt-1">{m.business_name}</dd>
          </div>
          <div>
            <dt className="text-gray-500">DBA</dt>
            <dd className="font-medium text-gray-900 mt-1">{m.dba_name || '—'}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Email</dt>
            <dd className="font-medium text-gray-900 mt-1">{m.email}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Phone</dt>
            <dd className="font-medium text-gray-900 mt-1">{m.phone}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Plan</dt>
            <dd className="font-medium text-gray-900 mt-1 capitalize">{m.plan}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Status</dt>
            <dd className="font-medium text-gray-900 mt-1 capitalize">{m.status}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-gray-500">Merchant ID (MID)</dt>
            <dd className="font-mono font-medium text-gray-900 mt-1">{m.mid || 'Pending assignment'}</dd>
          </div>
        </dl>
        <p className="text-sm text-gray-500 pt-4 border-t border-gray-100">
          To update your business profile, banking, or processing limits, contact{' '}
          <a href="mailto:merchants@charmpayments.com" className="text-brand-dark font-medium hover:underline">
            merchants@charmpayments.com
          </a>{' '}
          or call <a href="tel:+13145550198" className="text-brand-dark font-medium hover:underline">+1 (314) 555-0198</a>.
        </p>
      </div>
    </div>
  )
}
