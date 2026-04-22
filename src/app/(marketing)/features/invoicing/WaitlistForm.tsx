// src/app/(marketing)/features/invoicing/WaitlistForm.tsx
'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { BorderBeam } from '@/components/magicui/border-beam'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-4">
        <CheckCircle className="h-10 w-10 text-brand-accent" aria-hidden />
        <p className="text-lg font-semibold text-white">You&apos;re on the list.</p>
        <p className="text-sm text-white/70">We&apos;ll reach out as soon as your account is ready.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your business email"
        required
        className="min-h-[44px] flex-1 rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white placeholder-white/50 outline-none ring-offset-0 transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/40"
      />
      <div className="relative inline-flex shrink-0 overflow-hidden rounded-[0.375rem]">
        <BorderBeam colorFrom="#C9A96E" colorTo="#1E5C35" contentBackground="#C9A96E" duration={10} />
        <button
          type="submit"
          className="btn-accent relative z-10 inline-flex min-h-[44px] items-center justify-center"
        >
          Join the Waitlist
        </button>
      </div>
    </form>
  )
}
