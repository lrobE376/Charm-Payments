'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { createClient } from '@/lib/supabase/client'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (error) {
      toast.error(error.message)
      return
    }
    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
      <h1 className="text-2xl font-bold text-gray-900">Merchant Login</h1>
      <p className="text-sm text-gray-500 mt-2">Sign in to your Charm Payments dashboard.</p>
      <form onSubmit={onSubmit} className="mt-8 space-y-5">
        <Input label="Email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input
          label="Password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
