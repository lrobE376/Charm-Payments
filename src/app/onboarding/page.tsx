// src/app/onboarding/page.tsx
'use client';

import { useState, type FormEvent } from 'react';

export default function OnboardingPage() {
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const payload = { business_name: businessName, email };

      const createRes = await fetch('/api/connect/create-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (createRes.ok) {
        const data = await createRes.json();
        if (!data?.onboarding_url) {
          throw new Error('Missing onboarding_url in response.');
        }
        if (typeof window !== 'undefined') {
          if (typeof data.account_id === 'string' && data.account_id) {
            window.localStorage.setItem('charm_account_id', data.account_id);
          }
          window.localStorage.setItem(
            'charm_account_connected_at',
            new Date().toISOString(),
          );
        }
        window.location.href = data.onboarding_url;
        return;
      }

      if (createRes.status === 409) {
        const linkRes = await fetch('/api/connect/account-link', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!linkRes.ok) {
          const linkErr = await safeReadError(linkRes);
          throw new Error(linkErr ?? `Account link failed (${linkRes.status})`);
        }

        const linkData = await linkRes.json();
        const url = linkData?.url ?? linkData?.onboarding_url;
        if (!url) {
          throw new Error('Missing url in account-link response.');
        }
        window.location.href = url;
        return;
      }

      const createErr = await safeReadError(createRes);
      throw new Error(createErr ?? `Account creation failed (${createRes.status})`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-16"
      style={{ backgroundColor: '#0D1F15' }}
    >
      <div
        className="w-full max-w-md rounded-2xl p-8 shadow-2xl"
        style={{ backgroundColor: '#132A1C', border: '1px solid #1E5C35' }}
      >
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-2" style={{ color: '#C9A96E' }}>
            Merchant Onboarding
          </h1>
          <p className="text-sm" style={{ color: '#8BAF96' }}>
            Tell us about your business to begin processing with Charm Payments.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="business_name"
              className="block text-sm font-medium mb-2"
              style={{ color: '#8BAF96' }}
            >
              Business name
            </label>
            <input
              id="business_name"
              name="business_name"
              type="text"
              required
              autoComplete="organization"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              disabled={loading}
              className="w-full rounded-lg px-4 py-3 text-base outline-none transition focus:ring-2 disabled:opacity-60"
              style={{
                backgroundColor: '#0D1F15',
                border: '1px solid #1E5C35',
                color: '#edf1ee',
              }}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
              style={{ color: '#8BAF96' }}
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="w-full rounded-lg px-4 py-3 text-base outline-none transition focus:ring-2 disabled:opacity-60"
              style={{
                backgroundColor: '#0D1F15',
                border: '1px solid #1E5C35',
                color: '#edf1ee',
              }}
            />
          </div>

          {error && (
            <div
              role="alert"
              className="rounded-lg px-4 py-3 text-sm"
              style={{
                backgroundColor: 'rgba(220, 38, 38, 0.12)',
                border: '1px solid rgba(220, 38, 38, 0.45)',
                color: '#fecaca',
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-base font-semibold transition disabled:opacity-70 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#2ABFA0', color: '#0D1F15' }}
          >
            {loading && (
              <svg
                className="animate-spin"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                  opacity="0.25"
                />
                <path
                  d="M22 12a10 10 0 0 1-10 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            )}
            {loading ? 'Connecting…' : 'Continue to onboarding'}
          </button>
        </form>

        <p className="mt-6 text-xs leading-relaxed" style={{ color: '#8BAF96' }}>
          Charm Payments is a registered ISO/MSP. Payment processing services are provided through
          our sponsor bank and acquiring partners.
        </p>
      </div>
    </main>
  );
}

async function safeReadError(res: Response): Promise<string | null> {
  try {
    const data = await res.json();
    if (typeof data?.error === 'string') return data.error;
    if (typeof data?.message === 'string') return data.message;
    return null;
  } catch {
    return null;
  }
}
