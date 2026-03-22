'use client'

import { useState } from 'react'

export default function SupportTicketForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const fd = new FormData(e.currentTarget)
    const res = await fetch('/api/tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: String(fd.get('name') ?? '').trim(),
        email: String(fd.get('email') ?? '').trim(),
        subject: String(fd.get('subject') ?? '').trim(),
        message: String(fd.get('message') ?? '').trim(),
        priority: fd.get('priority') ?? 'normal',
      }),
    })
    setLoading(false)
    const j = (await res.json().catch(() => ({}))) as { success?: boolean; error?: string }
    if (!res.ok || j.success === false) {
      setError(j.error || 'Could not submit ticket.')
      return
    }
    setDone(true)
    e.currentTarget.reset()
  }

  const input =
    'w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/15'

  if (done) {
    return (
      <p className="rounded-lg border border-brand-accent/30 bg-brand-light px-4 py-3 text-sm text-brand-dark">
        Ticket recorded. {/* TODO: sync to email / helpdesk when integrated */}
        Our team will follow up on the email you provided.
      </p>
    )
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      {error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-600" htmlFor="st-name">
            Name
          </label>
          <input id="st-name" name="name" required className={input} autoComplete="name" />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-600" htmlFor="st-email">
            Email
          </label>
          <input id="st-email" name="email" type="email" required className={input} autoComplete="email" />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-gray-600" htmlFor="st-subject">
          Subject
        </label>
        <input id="st-subject" name="subject" required className={input} />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-gray-600" htmlFor="st-priority">
          Priority
        </label>
        <select id="st-priority" name="priority" className={input} defaultValue="normal">
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-gray-600" htmlFor="st-message">
          Message
        </label>
        <textarea id="st-message" name="message" required rows={4} className={`${input} min-h-[100px] resize-y py-2`} />
      </div>
      <button type="submit" className="rounded-lg bg-brand-dark px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark/90" disabled={loading}>
        {loading ? 'Submitting…' : 'Open ticket'}
      </button>
    </form>
  )
}
