// src/app/(auth)/apply/pending/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function ApplicationPendingPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const email = user?.email ?? ''

  const steps = [
    { label: 'Submitted', done: true },
    { label: 'Under Review', active: true },
    { label: 'Approved', done: false },
    { label: 'Live', done: false },
  ]

  return (
    <div className="min-h-screen bg-brand-light flex flex-col">
      <header className="bg-white border-b border-gray-100 px-6 py-4">
        <Link href="/">
          <Image src="/images/logo.png" alt="Charm Payments" width={220} height={66} className="h-10 w-auto" />
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-light">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7 text-brand-dark" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-gray-900">Your application is under review</h1>
          <p className="mt-3 text-sm leading-relaxed text-gray-500">
            We typically review applications within 24 hours. You&apos;ll receive an email at{' '}
            <strong className="text-gray-800">{email}</strong> when a decision is made.
          </p>

          {/* Status stepper */}
          <div className="mt-8 flex items-center justify-between gap-1">
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1
              return (
                <div key={step.label} className="flex flex-1 flex-col items-center gap-1.5">
                  <div className="flex w-full items-center">
                    {/* connector left */}
                    <div className={`h-0.5 flex-1 ${i === 0 ? 'invisible' : step.done || step.active ? 'bg-brand-dark' : 'bg-gray-200'}`} />
                    {/* dot */}
                    <div
                      className={[
                        'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold',
                        step.done
                          ? 'bg-brand-dark text-white'
                          : step.active
                          ? 'border-2 border-brand-dark bg-white text-brand-dark'
                          : 'bg-gray-200 text-gray-400',
                      ].join(' ')}
                    >
                      {step.done ? (
                        <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                          <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                        </svg>
                      ) : (
                        <span>{i + 1}</span>
                      )}
                    </div>
                    {/* connector right */}
                    <div className={`h-0.5 flex-1 ${isLast ? 'invisible' : step.done ? 'bg-brand-dark' : 'bg-gray-200'}`} />
                  </div>
                  <span
                    className={[
                      'text-[11px] font-medium leading-tight',
                      step.active ? 'text-brand-dark' : step.done ? 'text-gray-700' : 'text-gray-400',
                    ].join(' ')}
                  >
                    {step.label}
                  </span>
                </div>
              )
            })}
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Questions?{' '}
            <a href="mailto:merchants@charmpayments.com" className="font-semibold text-brand-dark hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </main>

      <footer className="py-4 px-4 text-center text-xs text-gray-400">
        <p>© Charm Payments — A Charm Holdings LLC Company</p>
        <p className="mt-1">
          Charm Payments is a payment facilitator, not a bank. Payment processing services are provided through our
          licensed acquiring bank partner. Merchant funds are subject to the terms of the Merchant Agreement.
        </p>
      </footer>
    </div>
  )
}
