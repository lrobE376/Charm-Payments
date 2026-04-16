// src/components/admin/ApplicationReviewForm.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle, XCircle, Clock } from 'lucide-react'

interface Props {
  applicationId: string
  currentStatus: string
  currentNotes: string
}

type Decision = 'review' | 'approved' | 'declined'

export function ApplicationReviewForm({ applicationId, currentStatus, currentNotes }: Props) {
  const router = useRouter()
  const [decision, setDecision] = useState<Decision>(currentStatus as Decision)
  const [notes, setNotes] = useState(currentNotes)
  const [mid, setMid] = useState('')
  const [sendDeclineEmail, setSendDeclineEmail] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (decision === 'approved' && !mid.trim()) {
      setError('MID is required to approve an application')
      return
    }

    setLoading(true)

    try {
      let res: Response

      if (decision === 'approved') {
        res = await fetch(`/api/admin/applications/${applicationId}/approve`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ mid: mid.trim(), notes }),
        })
      } else if (decision === 'declined') {
        res = await fetch(`/api/admin/applications/${applicationId}/decline`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ reason: notes, send_email: sendDeclineEmail }),
        })
      } else {
        res = await fetch(`/api/admin/applications/${applicationId}/review`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ notes }),
        })
      }

      const json = (await res.json()) as { ok: boolean; error?: string }
      if (!res.ok || !json.ok) {
        setError(json.error ?? 'Failed to save decision')
        return
      }

      setSuccess(true)
      router.refresh()
    } catch {
      setError('Network error — please try again')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-100 bg-white p-6 space-y-5 sticky top-20"
    >
      <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Decision</h2>

      {/* Decision picker */}
      <div className="space-y-2">
        {(
          [
            { value: 'review' as const,   label: 'Flag for Review',  Icon: Clock,        colorActive: 'border-amber-500 bg-amber-50',  colorIcon: 'text-amber-600'  },
            { value: 'approved' as const, label: 'Approve',          Icon: CheckCircle,  colorActive: 'border-green-500 bg-green-50',  colorIcon: 'text-green-600'  },
            { value: 'declined' as const, label: 'Decline',          Icon: XCircle,      colorActive: 'border-red-500 bg-red-50',      colorIcon: 'text-red-600'    },
          ]
        ).map(({ value, label, Icon, colorActive, colorIcon }) => (
          <label
            key={value}
            className={`flex items-center gap-3 rounded-xl border-2 p-3 cursor-pointer transition-colors ${
              decision === value ? colorActive : 'border-gray-100 hover:border-gray-200'
            }`}
          >
            <input
              type="radio"
              name="decision"
              value={value}
              checked={decision === value}
              onChange={() => setDecision(value)}
              className="sr-only"
            />
            <Icon className={`h-5 w-5 shrink-0 ${decision === value ? colorIcon : 'text-gray-300'}`} />
            <span className="text-sm font-medium text-gray-800">{label}</span>
          </label>
        ))}
      </div>

      {/* MID — required for approval */}
      {decision === 'approved' && (
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">
            Merchant ID (MID) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={mid}
            onChange={(e) => setMid(e.target.value)}
            placeholder="e.g. 123456789012"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark"
          />
          <p className="mt-1 text-xs text-gray-400">
            A Supabase login will be created and a one-time login link emailed to the merchant.
          </p>
        </div>
      )}

      {/* Notes / reason */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5">
          {decision === 'declined' ? 'Decline Reason' : 'Notes'}
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          placeholder={decision === 'declined'
            ? 'Reason visible to the merchant in the decline email...'
            : 'Internal notes (not sent to merchant)...'
          }
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm resize-none focus:border-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-dark"
        />
      </div>

      {/* Decline email toggle */}
      {decision === 'declined' && (
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={sendDeclineEmail}
            onChange={(e) => setSendDeclineEmail(e.target.checked)}
            className="rounded border-gray-300"
          />
          <span className="text-sm text-gray-700">Send decline email to applicant</span>
        </label>
      )}

      {error && <p className="text-xs text-red-600">{error}</p>}
      {success && (
        <p className="text-xs text-green-600">
          {decision === 'approved'
            ? 'Approved — merchant login created and email sent.'
            : decision === 'declined'
            ? 'Application declined.'
            : 'Flagged for review.'}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-brand-dark py-2.5 text-sm font-semibold text-white hover:bg-brand-dark/90 disabled:opacity-50 transition-colors"
      >
        {loading ? 'Saving…' : 'Save Decision'}
      </button>
    </form>
  )
}
