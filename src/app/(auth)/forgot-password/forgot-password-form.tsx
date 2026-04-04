// src/app/(auth)/forgot-password/forgot-password-form.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export function ForgotPasswordForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setSubmitted(true)
    } catch {
      setError('Unable to reach the server. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-brand-light flex items-center justify-center mb-4">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-7 h-7 text-brand-dark"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Check your inbox</h1>
        <p className="text-sm text-gray-500 mt-3 leading-relaxed">
          If a merchant account exists for{' '}
          <strong className="text-gray-800">{email}</strong>, a password reset link has been sent.
          Check your inbox and spam folder — the link expires in 1&nbsp;hour.
        </p>
        <Link
          href="/login"
          className="inline-block mt-6 text-sm font-semibold text-brand-dark hover:underline"
        >
          Back to sign in
        </Link>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
      <h1 className="text-2xl font-bold text-gray-900">Reset your password</h1>
      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
        Enter your merchant account email and we&apos;ll send a secure reset link.
      </p>
      <form onSubmit={onSubmit} className="mt-8 space-y-5">
        <Input
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        <Button type="submit" className="w-full" loading={loading}>
          Send Reset Link
        </Button>
      </form>
      <p className="text-sm text-gray-500 mt-6 text-center">
        Remember your password?{' '}
        <Link href="/login" className="text-brand-dark font-semibold hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  )
}
