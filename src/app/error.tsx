// src/app/error.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <div className="w-16 h-16 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mx-auto mb-6">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-8 h-8 text-red-500"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900">Something went wrong</h1>
        <p className="text-gray-500 mt-3 text-sm leading-relaxed">
          An unexpected error occurred. Our team has been notified. Please try again or contact us
          if the issue persists.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <button
            onClick={reset}
            className="btn-primary px-6 py-2.5 text-sm font-semibold rounded-lg min-h-[44px]"
          >
            Try again
          </button>
          <Link
            href="/"
            className="btn-outline px-6 py-2.5 text-sm font-semibold rounded-lg min-h-[44px] inline-flex items-center justify-center"
          >
            Back to home
          </Link>
        </div>

        {error.digest && (
          <p className="mt-6 text-xs text-gray-400">Error ID: {error.digest}</p>
        )}

        <p className="mt-4 text-xs text-gray-400">
          Need help?{' '}
          <a
            href="mailto:merchants@charmpayments.com"
            className="text-brand-dark hover:underline font-medium"
          >
            merchants@charmpayments.com
          </a>
        </p>
      </div>
    </div>
  )
}
