'use client'

import { useState } from 'react'

export default function WalletWaitlistForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim() || 'Wallet waitlist',
          email: email.trim(),
          business: 'Charm Wallet waitlist',
          phone: '',
          volume: 'Unknown',
          message: 'Charm Wallet waitlist signup from /wallet',
        }),
      })
      const data = (await res.json()) as { success?: boolean; error?: string }
      if (!res.ok || data.success === false) {
        setStatus('error')
        setErrorMessage(typeof data.error === 'string' ? data.error : 'Something went wrong.')
        return
      }
      setStatus('success')
      setName('')
      setEmail('')
    } catch {
      setStatus('error')
      setErrorMessage('Unable to send. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-brand-accent/40 bg-brand-light px-6 py-8 text-center">
        <p className="font-display text-lg font-bold text-brand-dark">You&apos;re on the list.</p>
        <p className="text-paragraph mt-2 text-sm">We&apos;ll email you when Charm Wallet opens in St. Louis.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-md">
      <div className="flex flex-col gap-4 sm:flex-row">
        <label className="sr-only" htmlFor="wallet-waitlist-name">
          Name
        </label>
        <input
          id="wallet-waitlist-name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="min-h-[44px] flex-1 rounded-xl border border-gray-200 px-4 text-sm text-brand-dark outline-none ring-brand-dark focus:ring-2"
        />
        <label className="sr-only" htmlFor="wallet-waitlist-email">
          Email
        </label>
        <input
          id="wallet-waitlist-email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-h-[44px] flex-1 rounded-xl border border-gray-200 px-4 text-sm text-brand-dark outline-none ring-brand-dark focus:ring-2"
        />
      </div>
      <button type="submit" disabled={status === 'loading'} className="btn-accent mt-4 w-full min-h-[44px] sm:w-auto">
        {status === 'loading' ? 'Joining…' : 'Join the Waitlist'}
      </button>
      {status === 'error' && (
        <p className="mt-3 text-center text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  )
}
