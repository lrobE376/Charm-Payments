'use client'

import { useState } from 'react'
import { ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react'

interface Props {
  balance: number
}

export function WalletTransferForm({ balance }: Props) {
  const [amount, setAmount] = useState('')
  const [routing, setRouting] = useState('')
  const [account, setAccount] = useState('')
  const [holderName, setHolderName] = useState('')
  const [transferType, setTransferType] = useState<'ach' | 'wire'>('ach')
  const [confirmed, setConfirmed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  async function handleTransfer() {
    setError(null)
    const amt = parseFloat(amount)

    if (!confirmed) {
      setError('Confirm that the amount and bank details are correct before transferring.')
      return
    }
    if (!amt || amt <= 0) {
      setError('Enter a valid amount.')
      return
    }
    if (amt > balance) {
      setError('Amount exceeds your available balance.')
      return
    }
    if (routing.length !== 9) {
      setError('Routing number must be 9 digits.')
      return
    }
    if (!account || !holderName) {
      setError('All bank details are required.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/wallet/transfer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amt,
          routingNumber: routing,
          accountNumber: account,
          accountHolderName: holderName,
          transferType,
        }),
      })
      const data = (await res.json()) as { success?: boolean; error?: string }
      if (!res.ok || data.success === false) {
        setError(typeof data.error === 'string' ? data.error : 'Transfer failed.')
        return
      }
      setSuccess(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="rounded-[20px] border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-6 w-6 text-green-600" aria-hidden />
        </div>
        <p className="mb-2 font-bold text-green-800">Transfer Initiated</p>
        <p className="text-sm text-green-600">
          {transferType === 'ach' ? 'ACH transfer processes in 1-2 business days.' : 'Wire transfer processes by end of business day.'}
        </p>
        <button
          type="button"
          onClick={() => {
            setSuccess(false)
            setAmount('')
            setConfirmed(false)
          }}
          className="mt-6 text-sm text-green-700 underline hover:no-underline"
        >
          Make another transfer
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-4 rounded-[20px] border border-gray-100 bg-white p-6">
      <div className="grid grid-cols-2 gap-3">
        {(['ach', 'wire'] as const).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setTransferType(type)}
            className={`rounded-xl border py-3 text-sm font-semibold transition-colors ${
              transferType === type ? 'border-brand-dark bg-brand-dark text-white' : 'border-gray-200 bg-white text-gray-600'
            }`}
          >
            {type === 'ach' ? 'ACH (1-2 days)' : 'Wire (same day)'}
          </button>
        ))}
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500">Amount</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-gray-400">$</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            min={0}
            max={balance}
            className="w-full rounded-xl border border-gray-200 py-3 pl-7 pr-4 text-lg font-bold text-brand-dark focus:border-brand-dark focus:outline-none"
          />
        </div>
        <p className="mt-1 text-xs text-gray-400">Available: {balance.toFixed(2)}</p>
      </div>

      {[
        {
          label: 'Account Holder Name',
          value: holderName,
          setter: setHolderName,
          placeholder: 'James Wilson',
          type: 'text' as const,
        },
        {
          label: 'Routing Number (9 digits)',
          value: routing,
          setter: setRouting,
          placeholder: '121145433',
          type: 'text' as const,
        },
        {
          label: 'Account Number',
          value: account,
          setter: setAccount,
          placeholder: '••••••••••',
          type: 'text' as const,
        },
      ].map((field) => (
        <div key={field.label}>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500">{field.label}</label>
          <input
            type={field.type}
            value={field.value}
            onChange={(e) => field.setter(e.target.value)}
            placeholder={field.placeholder}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-brand-dark focus:border-brand-dark focus:outline-none"
            autoComplete="off"
          />
        </div>
      ))}

      <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 bg-gray-50/80 p-4 text-sm text-gray-700">
        <input
          type="checkbox"
          checked={confirmed}
          onChange={(e) => setConfirmed(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-brand-dark focus:ring-brand-dark"
        />
        <span>I confirm the transfer amount and bank details are correct. I authorize Charm Wallet to debit my available balance.</span>
      </label>

      {error && (
        <div role="alert" className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden />
          {error}
        </div>
      )}

      <button
        type="button"
        onClick={handleTransfer}
        disabled={loading || !confirmed}
        className="btn-accent flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? (
          'Processing...'
        ) : (
          <>
            Transfer Funds
            <ArrowRight className="h-4 w-4" aria-hidden />
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        Transfers are secured and encrypted. Charm Wallet banking services provided by a sponsor bank, Member FDIC.
      </p>
    </div>
  )
}
