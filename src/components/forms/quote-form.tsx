'use client'
// src/components/forms/quote-form.tsx

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { useDropzone } from 'react-dropzone'

// ── constants ────────────────────────────────────────────────────────────────

const processorOptions = [
  { value: '', label: 'Select processor' },
  { value: 'Square', label: 'Square' },
  { value: 'Stripe', label: 'Stripe' },
  { value: 'Toast', label: 'Toast' },
  { value: 'Clover', label: 'Clover' },
  { value: 'PayPal/Zettle', label: 'PayPal / Zettle' },
  { value: 'Heartland', label: 'Heartland' },
  { value: 'First Data/Fiserv', label: 'First Data / Fiserv' },
  { value: 'Chase Paymentech', label: 'Chase Paymentech' },
  { value: 'Bank', label: 'Bank' },
  { value: 'Other', label: 'Other' },
  { value: 'None/just starting out', label: 'None / just starting out' },
]

const volumeOptions = [
  { value: '', label: 'Select range' },
  { value: 'under-10k', label: 'Under $10K / month' },
  { value: '10k-50k', label: '$10K – $50K' },
  { value: '50k-100k', label: '$50K – $100K' },
  { value: '100k-500k', label: '$100K – $500K' },
  { value: 'over-500k', label: 'Over $500K' },
]

const orderLocationOptions = [
  { value: 'in-store', label: 'In-store' },
  { value: 'online', label: 'Online only' },
  { value: 'both', label: 'Both in-store & online' },
  { value: 'mobile', label: 'Mobile / on-the-go' },
  { value: 'phone', label: 'Phone orders' },
]

const paymentMethodOptions = [
  { value: 'tap/swipe', label: 'Tap / swipe / dip (card present)' },
  { value: 'online-checkout', label: 'Online checkout' },
  { value: 'manual-key', label: 'Manual key-entry' },
  { value: 'invoice', label: 'Invoice / send-a-link' },
  { value: 'recurring', label: 'Recurring / subscription' },
]

const paymentTimingOptions = [
  { value: 'at-order', label: 'At time of order' },
  { value: 'deposit', label: 'Deposit upfront, balance later' },
  { value: 'after-service', label: 'After service is delivered' },
  { value: 'scheduled', label: 'Scheduled / installment' },
]

// ── types ────────────────────────────────────────────────────────────────────

interface UploadedFile {
  name: string
  url: string
  path: string
  status: 'uploading' | 'done' | 'error'
}

interface FormState {
  first_name: string
  last_name: string
  business_name: string
  email: string
  phone: string
  current_processor: string
  monthly_volume: string
  average_ticket: string
  order_location: string
  payment_methods: string[]
  payment_timing: string
  takes_moto_orders: boolean
  needs_mobile_payment: boolean
  notes: string
}

// ── styles ───────────────────────────────────────────────────────────────────

const inputCls =
  'w-full rounded-lg border border-[rgba(8,39,32,0.12)] bg-white px-4 py-3 text-[var(--paragraph)] min-h-[44px] outline-none transition focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/15'
const labelCls = 'mb-2 block text-sm font-semibold text-[var(--heading)]'

// ── step indicator ───────────────────────────────────────────────────────────

function StepIndicator({ step }: { step: number }) {
  const steps = ['Contact & Processor', 'How You Take Orders', 'Statement Upload']
  return (
    <div className="mb-8 flex items-center gap-0">
      {steps.map((title, i) => {
        const num = i + 1
        const active = num === step
        const done = num < step
        return (
          <div key={num} className="flex flex-1 items-center">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                  done
                    ? 'bg-brand-accent text-brand-dark'
                    : active
                      ? 'bg-brand-dark text-white'
                      : 'bg-gray-200 text-gray-500'
                }`}
              >
                {done ? '✓' : num}
              </div>
              <span className={`mt-1 hidden text-xs sm:block ${active ? 'font-semibold text-brand-dark' : 'text-gray-400'}`}>
                {title}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`mx-2 h-0.5 flex-1 transition-colors ${done ? 'bg-brand-accent' : 'bg-gray-200'}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}

// ── dropzone step ────────────────────────────────────────────────────────────

function StatementDropzone({
  uploads,
  onUploaded,
}: {
  uploads: UploadedFile[]
  onUploaded: (file: UploadedFile) => void
}) {
  const [uploading, setUploading] = useState(false)

  const onDrop = useCallback(
    async (accepted: File[]) => {
      const remaining = 3 - uploads.length
      const files = accepted.slice(0, remaining)
      if (!files.length) return
      setUploading(true)
      for (const file of files) {
        const placeholder: UploadedFile = { name: file.name, url: '', path: '', status: 'uploading' }
        onUploaded(placeholder)
        const fd = new FormData()
        fd.append('file', file)
        try {
          const res = await fetch('/api/quote/upload', { method: 'POST', body: fd })
          const j = (await res.json()) as { success?: boolean; data?: { url: string; path: string } }
          if (res.ok && j.success && j.data) {
            onUploaded({ name: file.name, url: j.data.url, path: j.data.path, status: 'done' })
          } else {
            onUploaded({ name: file.name, url: '', path: '', status: 'error' })
          }
        } catch {
          onUploaded({ name: file.name, url: '', path: '', status: 'error' })
        }
      }
      setUploading(false)
    },
    [uploads.length, onUploaded],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': [], 'image/jpeg': [], 'image/png': [], 'image/webp': [] },
    maxSize: 10 * 1024 * 1024,
    disabled: uploads.length >= 3 || uploading,
    multiple: true,
  })

  return (
    <div>
      <div
        {...getRootProps()}
        className={`cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition-colors ${
          isDragActive
            ? 'border-brand-accent bg-brand-accent/10'
            : uploads.length >= 3
              ? 'cursor-not-allowed border-gray-200 bg-gray-50 opacity-60'
              : 'border-brand-dark/25 bg-neutral-50 hover:border-brand-dark/50'
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-sm font-semibold text-brand-dark">
          {isDragActive ? 'Drop files here…' : 'Drag & drop your statement here'}
        </p>
        <p className="mt-1 text-xs text-gray-500">PDF, JPG, PNG — max 10 MB — up to 3 files</p>
        <button
          type="button"
          className="mt-3 rounded-lg bg-brand-dark px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
          disabled={uploads.length >= 3 || uploading}
        >
          Browse files
        </button>
      </div>

      {uploads.length > 0 && (
        <ul className="mt-4 space-y-2">
          {uploads.map((f, i) => (
            <li key={i} className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-4 py-3 text-sm">
              <span className="flex-1 truncate text-gray-700">{f.name}</span>
              {f.status === 'uploading' && (
                <span className="text-xs text-gray-400">Uploading…</span>
              )}
              {f.status === 'done' && (
                <span className="font-bold text-brand-accent">✓</span>
              )}
              {f.status === 'error' && (
                <span className="text-xs text-red-500">Failed</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

// ── main component ───────────────────────────────────────────────────────────

export default function QuoteForm() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const [uploads, setUploads] = useState<UploadedFile[]>([])

  const [form, setForm] = useState<FormState>({
    first_name: '',
    last_name: '',
    business_name: '',
    email: '',
    phone: '',
    current_processor: '',
    monthly_volume: '',
    average_ticket: '',
    order_location: '',
    payment_methods: [],
    payment_timing: '',
    takes_moto_orders: false,
    needs_mobile_payment: false,
    notes: '',
  })

  function set(field: keyof FormState, value: FormState[keyof FormState]) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function toggleMethod(value: string) {
    setForm((prev) => ({
      ...prev,
      payment_methods: prev.payment_methods.includes(value)
        ? prev.payment_methods.filter((v) => v !== value)
        : [...prev.payment_methods, value],
    }))
  }

  function handleUpload(file: UploadedFile) {
    setUploads((prev) => {
      const existing = prev.findIndex((f) => f.name === file.name && f.status === 'uploading')
      if (existing !== -1) {
        const next = [...prev]
        next[existing] = file
        return next
      }
      return [...prev, file]
    })
  }

  function validateStep1(): string | null {
    if (!form.first_name.trim()) return 'First name is required.'
    if (!form.last_name.trim()) return 'Last name is required.'
    if (!form.business_name.trim()) return 'Business name is required.'
    if (!form.email.trim()) return 'Email is required.'
    if (!form.phone.trim()) return 'Phone is required.'
    return null
  }

  function validateStep2(): string | null {
    if (!form.order_location) return 'Select where you take orders.'
    if (!form.payment_timing) return 'Select when you collect payment.'
    return null
  }

  function nextStep() {
    setError(null)
    if (step === 1) {
      const err = validateStep1()
      if (err) { setError(err); return }
    }
    if (step === 2) {
      const err = validateStep2()
      if (err) { setError(err); return }
    }
    setStep((s) => s + 1)
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const statementUrls = uploads.filter((u) => u.status === 'done').map((u) => u.url)

    const res = await fetch('/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: form.first_name,
        last_name: form.last_name,
        business_name: form.business_name,
        email: form.email,
        phone: form.phone,
        current_processor: form.current_processor || undefined,
        monthly_volume: form.monthly_volume || undefined,
        average_ticket: form.average_ticket || undefined,
        order_location: form.order_location || undefined,
        payment_method: form.payment_methods.join(', ') || undefined,
        payment_timing: form.payment_timing || undefined,
        takes_moto_orders: form.takes_moto_orders,
        needs_mobile_payment: form.needs_mobile_payment,
        statement_urls: statementUrls,
        has_statement: statementUrls.length > 0,
        notes: form.notes || undefined,
      }),
    })

    setLoading(false)
    const j = (await res.json().catch(() => ({}))) as { success?: boolean; error?: string }
    if (!res.ok || j.success === false) {
      setError(j.error ?? 'Something went wrong. Try again or call us directly.')
      return
    }
    setDone(true)
  }

  // ── success state ──────────────────────────────────────────────────────────

  if (done) {
    return (
      <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/20">
          <span className="text-xl font-bold text-brand-dark">✓</span>
        </div>
        <h2 className="text-xl font-bold text-brand-dark">Quote request received</h2>
        <p className="mt-2 text-gray-600">
          A specialist will review your details and follow up within 2 business hours.
        </p>
        <Link href="/apply" className="btn-accent mt-6 inline-flex">
          Continue to full application
        </Link>
      </div>
    )
  }

  // ── form ───────────────────────────────────────────────────────────────────

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
      <StepIndicator step={step} />

      {error && (
        <div role="alert" className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* ── Step 1 ── */}
      {step === 1 && (
        <div className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelCls} htmlFor="qf-first">First name <span className="text-red-500">*</span></label>
              <input id="qf-first" type="text" required className={inputCls} autoComplete="given-name"
                value={form.first_name} onChange={(e) => set('first_name', e.target.value)} />
            </div>
            <div>
              <label className={labelCls} htmlFor="qf-last">Last name <span className="text-red-500">*</span></label>
              <input id="qf-last" type="text" required className={inputCls} autoComplete="family-name"
                value={form.last_name} onChange={(e) => set('last_name', e.target.value)} />
            </div>
          </div>
          <div>
            <label className={labelCls} htmlFor="qf-biz">Business name <span className="text-red-500">*</span></label>
            <input id="qf-biz" type="text" required className={inputCls} autoComplete="organization"
              value={form.business_name} onChange={(e) => set('business_name', e.target.value)} />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelCls} htmlFor="qf-email">Email <span className="text-red-500">*</span></label>
              <input id="qf-email" type="email" required className={inputCls} autoComplete="email"
                value={form.email} onChange={(e) => set('email', e.target.value)} />
            </div>
            <div>
              <label className={labelCls} htmlFor="qf-phone">Phone <span className="text-red-500">*</span></label>
              <input id="qf-phone" type="tel" required className={inputCls} autoComplete="tel"
                value={form.phone} onChange={(e) => set('phone', e.target.value)} />
            </div>
          </div>
          <div>
            <label className={labelCls} htmlFor="qf-processor">Current processor</label>
            <select id="qf-processor" className={inputCls}
              value={form.current_processor} onChange={(e) => set('current_processor', e.target.value)}>
              {processorOptions.map((o) => (
                <option key={o.value || '_empty'} value={o.value} disabled={o.value === ''}>{o.label}</option>
              ))}
            </select>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelCls} htmlFor="qf-volume">Monthly volume</label>
              <select id="qf-volume" className={inputCls}
                value={form.monthly_volume} onChange={(e) => set('monthly_volume', e.target.value)}>
                {volumeOptions.map((o) => (
                  <option key={o.value || '_empty'} value={o.value} disabled={o.value === ''}>{o.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelCls} htmlFor="qf-ticket">Average ticket</label>
              <input id="qf-ticket" type="text" placeholder="e.g. $45" className={inputCls}
                value={form.average_ticket} onChange={(e) => set('average_ticket', e.target.value)} />
            </div>
          </div>
          <button type="button" onClick={nextStep} className="btn-accent w-full justify-center sm:w-auto">
            Next: How you take orders →
          </button>
        </div>
      )}

      {/* ── Step 2 ── */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <p className={labelCls}>Where do you take orders? <span className="text-red-500">*</span></p>
            <div className="mt-2 space-y-2">
              {orderLocationOptions.map((o) => (
                <label key={o.value} className="flex cursor-pointer items-center gap-3 rounded-lg border border-[rgba(8,39,32,0.1)] px-4 py-3 transition hover:border-brand-dark/30 has-[:checked]:border-brand-dark has-[:checked]:bg-brand-dark/5">
                  <input type="radio" name="order_location" value={o.value} className="accent-brand-dark"
                    checked={form.order_location === o.value}
                    onChange={() => set('order_location', o.value)} />
                  <span className="text-sm text-gray-700">{o.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className={labelCls}>How do you accept payment? <span className="text-gray-400 font-normal">(select all that apply)</span></p>
            <div className="mt-2 space-y-2">
              {paymentMethodOptions.map((o) => (
                <label key={o.value} className="flex cursor-pointer items-center gap-3 rounded-lg border border-[rgba(8,39,32,0.1)] px-4 py-3 transition hover:border-brand-dark/30 has-[:checked]:border-brand-dark has-[:checked]:bg-brand-dark/5">
                  <input type="checkbox" value={o.value} className="accent-brand-dark"
                    checked={form.payment_methods.includes(o.value)}
                    onChange={() => toggleMethod(o.value)} />
                  <span className="text-sm text-gray-700">{o.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className={labelCls}>When do you collect payment? <span className="text-red-500">*</span></p>
            <div className="mt-2 space-y-2">
              {paymentTimingOptions.map((o) => (
                <label key={o.value} className="flex cursor-pointer items-center gap-3 rounded-lg border border-[rgba(8,39,32,0.1)] px-4 py-3 transition hover:border-brand-dark/30 has-[:checked]:border-brand-dark has-[:checked]:bg-brand-dark/5">
                  <input type="radio" name="payment_timing" value={o.value} className="accent-brand-dark"
                    checked={form.payment_timing === o.value}
                    onChange={() => set('payment_timing', o.value)} />
                  <span className="text-sm text-gray-700">{o.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-3 rounded-xl border border-[rgba(8,39,32,0.08)] bg-neutral-50 p-4">
            <label className="flex cursor-pointer items-center gap-3">
              <input type="checkbox" className="accent-brand-dark"
                checked={form.takes_moto_orders}
                onChange={(e) => set('takes_moto_orders', e.target.checked)} />
              <span className="text-sm text-gray-700">We take mail/telephone (MOTO) orders</span>
            </label>
            <label className="flex cursor-pointer items-center gap-3">
              <input type="checkbox" className="accent-brand-dark"
                checked={form.needs_mobile_payment}
                onChange={(e) => set('needs_mobile_payment', e.target.checked)} />
              <span className="text-sm text-gray-700">We need mobile / tap-to-pay on a phone</span>
            </label>
          </div>

          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(1)}
              className="btn-outline flex-1 justify-center sm:flex-none">
              ← Back
            </button>
            <button type="button" onClick={nextStep}
              className="btn-accent flex-1 justify-center sm:flex-none">
              Next: Upload statement →
            </button>
          </div>
        </div>
      )}

      {/* ── Step 3 ── */}
      {step === 3 && (
        <form onSubmit={onSubmit} noValidate>
          <div className="space-y-6">
            <div>
              <p className={labelCls}>Upload your processing statement</p>
              <StatementDropzone uploads={uploads} onUploaded={handleUpload} />
              <p className="mt-3 text-xs text-gray-500">
                Don&apos;t have it?{' '}
                <span className="font-medium text-brand-dark">Submit without it</span> — we&apos;ll request it later.
              </p>
            </div>

            <div>
              <label className={labelCls} htmlFor="qf-notes">Anything else we should know? <span className="text-gray-400 font-normal">(optional)</span></label>
              <textarea id="qf-notes" rows={3} className={`${inputCls} resize-none`}
                placeholder="Special pricing needs, high-risk items, multiple locations…"
                value={form.notes} onChange={(e) => set('notes', e.target.value)} />
            </div>

            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(2)}
                className="btn-outline flex-1 justify-center sm:flex-none">
                ← Back
              </button>
              <button type="submit" disabled={loading}
                className="btn-accent flex-1 justify-center sm:flex-none disabled:opacity-60">
                {loading ? 'Submitting…' : 'Get my quote'}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}
