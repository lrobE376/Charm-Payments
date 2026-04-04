'use client'

import { useState } from 'react'
import Link from 'next/link'
import { signIn } from './actions'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const formData = new FormData(e.currentTarget)
    setLoading(true)
    try {
      const result = await signIn(formData)
      if (result?.error) setError(result.error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
      <h1 className="text-2xl font-bold text-gray-900">Merchant Login</h1>
      <p className="text-sm text-gray-500 mt-2">Sign in to your Charm Payments dashboard.</p>
      <form onSubmit={onSubmit} className="mt-8 space-y-5">
        <Input label="Email" name="email" type="email" autoComplete="email" required />
        <div>
          <Input label="Password" name="password" type="password" autoComplete="current-password" required />
          <div className="flex justify-end mt-1.5">
            <Link href="/forgot-password" className="text-xs text-brand-dark hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>
        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        <Button type="submit" className="w-full" loading={loading}>
          Sign In
        </Button>
      </form>
      <p className="text-sm text-gray-500 mt-6 text-center">
        Need an account?{' '}
        <Link href="/apply" className="text-brand-dark font-semibold hover:underline">
          Apply for a merchant account
        </Link>
      </p>
    </div>
  )
}
