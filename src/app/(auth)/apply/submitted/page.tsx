import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Application Submitted — Charm Payments',
  description:
    'Your Charm Payments merchant account application has been received. Our team will review it and contact you within 1-2 business days.',
}

export default function ApplySubmittedPage() {
  return (
    <div className="w-full max-w-lg text-center px-4">
      <CheckCircle2 className="w-16 h-16 text-brand-accent mx-auto" aria-hidden="true" />
      <h1 className="text-2xl font-bold text-gray-900 mt-6">Application Submitted</h1>
      <p className="text-gray-600 mt-3 leading-relaxed">
        Thank you. Our underwriting team typically reviews new applications within 24–48 business hours. You will hear from us by email or phone.
      </p>
      <p className="text-sm text-gray-500 mt-4">
        Questions? Email{' '}
        <a href="mailto:merchants@charmpayments.com" className="text-brand-dark font-medium hover:underline">
          merchants@charmpayments.com
        </a>{' '}
        or call{' '}
        <a href="tel:+13145550198" className="text-brand-dark font-medium hover:underline">
          +1 (314) 555-0198
        </a>
        .
      </p>
      <Link
        href="/"
        className="inline-flex mt-8 text-sm font-semibold text-brand-dark hover:underline"
      >
        Back to home
      </Link>
    </div>
  )
}
