// src/app/(admin)/admin/applications/[id]/page.tsx
import type { Metadata } from 'next'
import { createAdminClient } from '@/lib/supabase/admin'
import { notFound } from 'next/navigation'
import { formatDate } from '@/lib/utils'
import { ApplicationReviewForm } from '@/components/admin/ApplicationReviewForm'

export const metadata: Metadata = { title: 'Review Application — Admin' }

const FIELD_LABELS: Record<string, string> = {
  business_name:           'Business Name',
  industry:                'Industry',
  business_type:           'Business Type',
  location_count:          'Locations',
  monthly_volume:          'Monthly Volume',
  average_ticket:          'Avg Ticket',
  existing_processor:      'Current Processor',
  current_terminal:        'Current Terminal',
  device_preference:       'Device Preference',
  existing_pos_software:   'Existing POS',
  needs_recurring_billing: 'Recurring Billing',
  needs_online_payments:   'Online Payments',
  needs_invoicing:         'Invoicing',
  has_customer_database:   'Customer Database',
  customer_count:          'Customer Count',
  ein:                     'EIN',
  city:                    'City',
  state:                   'State',
}

export default async function ApplicationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const admin = createAdminClient()

  const { data: app } = await admin
    .from('merchant_applications')
    .select('*')
    .eq('id', id)
    .single()

  if (!app) notFound()

  const applicantFields: [string, string][] = [
    ['Name', `${app.owner_first_name} ${app.owner_last_name}`],
    ['Email', app.owner_email ?? '—'],
    ['Phone', app.owner_phone ?? '—'],
  ]

  const businessFields = Object.entries(FIELD_LABELS)
    .map(([key, label]): [string, string] => {
      const val = (app as Record<string, unknown>)[key]
      if (val === null || val === undefined || val === '') return [label, '—']
      return [label, String(val)]
    })

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <a href="/admin/applications" className="text-sm text-gray-400 hover:text-gray-600">
          ← Applications
        </a>
        <span className="text-gray-300">|</span>
        <h1 className="text-xl font-bold text-gray-900">{app.business_name}</h1>
        <span
          className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold capitalize ${
            app.status === 'approved' ? 'bg-green-50 text-green-700' :
            app.status === 'declined' ? 'bg-red-50 text-red-700' :
            app.status === 'review'   ? 'bg-amber-50 text-amber-700' :
                                        'bg-blue-50 text-blue-700'
          }`}
        >
          {app.status}
        </span>
        <span className="ml-auto text-xs text-gray-400">Submitted {formatDate(app.created_at)}</span>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left: application details */}
        <div className="lg:col-span-2 space-y-5">
          <div className="rounded-2xl border border-gray-100 bg-white p-6">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Applicant
            </h2>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {applicantFields.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs text-gray-400">{label}</dt>
                  <dd className="mt-0.5 font-medium text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Business Details
            </h2>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {businessFields.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs text-gray-400">{label}</dt>
                  <dd className="mt-0.5 font-medium text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {app.notes && (
            <div className="rounded-2xl border border-gray-100 bg-white p-6">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">Notes</h2>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{app.notes}</p>
            </div>
          )}
        </div>

        {/* Right: decision panel */}
        <div>
          <ApplicationReviewForm
            applicationId={id}
            currentStatus={app.status}
            currentNotes={app.decision_notes ?? ''}
          />
        </div>
      </div>
    </div>
  )
}
