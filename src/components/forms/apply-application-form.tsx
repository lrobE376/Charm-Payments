'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

const businessTypes = ['Corporation', 'LLC', 'Sole proprietorship', 'Partnership', 'Non-profit', 'Other']

const stepLabels = ['Business basics', 'Ownership & KYC', 'Banking & settlement', 'Review & submit']

export default function ApplyApplicationForm() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [form, setForm] = useState({
    business_name: '',
    dba_name: '',
    business_type: '',
    ein: '',
    website: '',
    monthly_volume: '',
    average_ticket: '',
    owner_first_name: '',
    owner_last_name: '',
    owner_email: '',
    owner_phone: '',
    owner_dob: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    bank_name: '',
    routing_number: '',
    account_number: '',
    agree_merchant: false,
    agree_fees: false,
  })

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit() {
    if (!form.agree_merchant || !form.agree_fees) return
    setSubmitError(null)
    setSubmitting(true)
    const { agree_merchant, agree_fees, ...payload } = form
    void agree_merchant
    void agree_fees
    const res = await fetch('/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    setSubmitting(false)
    const j = (await res.json().catch(() => ({}))) as { success?: boolean; error?: string }
    if (!res.ok || j.success === false) {
      setSubmitError(j.error || 'Something went wrong. Please try again.')
      return
    }
    router.push('/apply/submitted')
  }

  const progress = (step / 4) * 100

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-10">
      <h1 className="text-2xl font-bold text-gray-900">Merchant application</h1>
      <p className="mt-2 text-sm text-gray-500">Step {step} of 4 — structured for underwriting; no instant decision logic yet.</p>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-brand-light">
        <div className="h-full bg-brand-accent transition-all duration-200" style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-1 text-center text-xs text-gray-400">{stepLabels[step - 1]}</p>

      {step === 1 && (
        <div className="mt-8 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wide text-brand-dark">Business profile</h2>
          <Input label="Legal business name" required value={form.business_name} onChange={(e) => update('business_name', e.target.value)} />
          <Input label="DBA (optional)" value={form.dba_name} onChange={(e) => update('dba_name', e.target.value)} />
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Business type <span className="text-red-500">*</span>
            </label>
            <select
              required
              className="min-h-[44px] w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm"
              value={form.business_type}
              onChange={(e) => update('business_type', e.target.value)}
            >
              <option value="">Select…</option>
              {businessTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <Input
            label="EIN (Employer Identification Number)"
            required
            hint="Required for Know Your Customer (KYC) and underwriting. We verify this with your application documents."
            value={form.ein}
            onChange={(e) => update('ein', e.target.value)}
          />
          <Input label="Website (optional)" type="url" value={form.website} onChange={(e) => update('website', e.target.value)} />
          <Input
            label="Estimated monthly processing volume"
            required
            value={form.monthly_volume}
            onChange={(e) => update('monthly_volume', e.target.value)}
          />
          <Input label="Average ticket size" required value={form.average_ticket} onChange={(e) => update('average_ticket', e.target.value)} />
        </div>
      )}

      {step === 2 && (
        <div className="mt-8 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wide text-brand-dark">Ownership &amp; KYC</h2>
          <p className="text-xs text-gray-500">
            {/* TODO: Beneficial-owner collection for 25%+ equity when required by underwriting */}
            Primary owner details below; additional owners may be requested during review.
          </p>
          <Input label="Owner first name" required value={form.owner_first_name} onChange={(e) => update('owner_first_name', e.target.value)} />
          <Input label="Owner last name" required value={form.owner_last_name} onChange={(e) => update('owner_last_name', e.target.value)} />
          <Input label="Owner email" type="email" required value={form.owner_email} onChange={(e) => update('owner_email', e.target.value)} />
          <Input label="Owner phone" type="tel" required value={form.owner_phone} onChange={(e) => update('owner_phone', e.target.value)} />
          <Input
            label="Owner date of birth"
            type="date"
            required
            hint="Collected for identity verification under federal KYC rules."
            value={form.owner_dob}
            onChange={(e) => update('owner_dob', e.target.value)}
          />
          <Input label="Street address" required value={form.address} onChange={(e) => update('address', e.target.value)} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Input label="City" required value={form.city} onChange={(e) => update('city', e.target.value)} />
            <Input label="State" required value={form.state} onChange={(e) => update('state', e.target.value)} />
            <Input label="ZIP" required value={form.zip} onChange={(e) => update('zip', e.target.value)} />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="mt-8 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wide text-brand-dark">Settlement banking</h2>
          <p className="text-xs text-gray-500">
            {/* TODO: Micro-deposit or instant verification when bank API is integrated */}
            Account used for deposits must match the legal business or DBA on file.
          </p>
          <Input label="Bank name" required value={form.bank_name} onChange={(e) => update('bank_name', e.target.value)} />
          <Input label="Routing number" required value={form.routing_number} onChange={(e) => update('routing_number', e.target.value)} />
          <Input
            label="Account number"
            type="password"
            autoComplete="new-password"
            required
            hint="Transmitted over TLS. Only the last four digits are stored in our systems."
            value={form.account_number}
            onChange={(e) => update('account_number', e.target.value)}
          />
        </div>
      )}

      {step === 4 && (
        <div className="mt-8 space-y-6">
          <div className="space-y-2 rounded-xl bg-brand-light p-4 text-sm text-gray-700">
            <p>
              <strong>{form.business_name}</strong>
              {form.dba_name ? ` (${form.dba_name})` : ''}
            </p>
            <p>
              {form.owner_first_name} {form.owner_last_name} · {form.owner_email}
            </p>
            <p>
              {form.address}, {form.city}, {form.state} {form.zip}
            </p>
            <p>
              Volume: {form.monthly_volume} · Avg ticket: {form.average_ticket}
            </p>
            <p>Bank: {form.bank_name}</p>
          </div>
          <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-700">
            <input
              type="checkbox"
              className="mt-1 rounded border-gray-300"
              checked={form.agree_merchant}
              onChange={(e) => update('agree_merchant', e.target.checked)}
            />
            <span>I agree to the Merchant Agreement and authorize Charm Payments and its partners to obtain credit reports and verify the information provided.</span>
          </label>
          <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-700">
            <input
              type="checkbox"
              className="mt-1 rounded border-gray-300"
              checked={form.agree_fees}
              onChange={(e) => update('agree_fees', e.target.checked)}
            />
            <span>I have reviewed the Schedule of Fees and understand the rates and pass-through network costs that apply to my account.</span>
          </label>
        </div>
      )}

      <div className="mt-10 flex items-start justify-between gap-4">
        {step > 1 ? (
          <Button type="button" variant="ghost" onClick={() => setStep((s) => s - 1)}>
            Back
          </Button>
        ) : (
          <span />
        )}
        {step < 4 ? (
          <Button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            disabled={
              (step === 1 &&
                (!form.business_name || !form.business_type || !form.ein || !form.monthly_volume || !form.average_ticket)) ||
              (step === 2 &&
                (!form.owner_first_name ||
                  !form.owner_last_name ||
                  !form.owner_email ||
                  !form.owner_phone ||
                  !form.owner_dob ||
                  !form.address ||
                  !form.city ||
                  !form.state ||
                  !form.zip)) ||
              (step === 3 && (!form.bank_name || !form.routing_number || !form.account_number))
            }
          >
            Next Step
          </Button>
        ) : (
          <div className="flex min-w-0 max-w-full flex-col items-end">
            <p className="mb-4 mt-2 text-center text-xs text-gray-400">
              By submitting this application you agree to our{' '}
              <Link href="/terms" className="underline hover:text-brand-dark">
                Terms & Conditions
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="underline hover:text-brand-dark">
                Privacy Policy
              </Link>
              .
            </p>
            {submitError && (
              <div role="alert" className="mb-4 w-full rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {submitError} Please try again or call us at +1 (314) 555-0198.
              </div>
            )}
            <Button type="button" loading={submitting} disabled={!form.agree_merchant || !form.agree_fees} onClick={handleSubmit}>
              Submit My Application
            </Button>
          </div>
        )}
      </div>
      <p className="mt-8 text-center text-xs leading-relaxed text-gray-500">
        Charm Payments is a payment facilitator, not a bank. Payment processing services are provided through our licensed acquiring bank partner. Merchant funds
        are subject to the terms of the Merchant Agreement.
      </p>
    </div>
  )
}
