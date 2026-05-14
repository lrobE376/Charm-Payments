// src/app/onboarding/complete/page.tsx
'use client';

import { useEffect, useState } from 'react';

type Status = 'loading' | 'success' | 'incomplete' | 'error';

export default function OnboardingCompletePage() {
  const [status, setStatus] = useState<Status>('loading');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [linking, setLinking] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let redirectTimer: ReturnType<typeof setTimeout> | undefined;

    async function check() {
      try {
        const res = await fetch('/api/connect/account-status', {
          method: 'GET',
          cache: 'no-store',
        });

        if (!res.ok) {
          throw new Error(`Account status request failed (${res.status}).`);
        }

        const data = await res.json();
        if (cancelled) return;

        if (data?.stripe_account?.charges_enabled === true) {
          setStatus('success');
          redirectTimer = setTimeout(() => {
            window.location.href = '/dashboard';
          }, 2000);
        } else {
          setStatus('incomplete');
        }
      } catch (err) {
        if (cancelled) return;
        setErrorMessage(
          err instanceof Error ? err.message : 'Could not check your account status.',
        );
        setStatus('error');
      }
    }

    check();

    return () => {
      cancelled = true;
      if (redirectTimer) clearTimeout(redirectTimer);
    };
  }, []);

  async function handleCompleteSetup() {
    setLinking(true);
    setErrorMessage(null);
    try {
      const res = await fetch('/api/connect/account-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });

      if (!res.ok) {
        throw new Error(`Account link request failed (${res.status}).`);
      }

      const data = await res.json();
      const url = data?.url ?? data?.onboarding_url;
      if (!url) {
        throw new Error('Missing url in account-link response.');
      }
      window.location.href = url;
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : 'Could not resume onboarding.',
      );
      setLinking(false);
    }
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-16"
      style={{ backgroundColor: '#0D1F15' }}
    >
      <div
        className="w-full max-w-md rounded-2xl p-8 shadow-2xl text-center"
        style={{ backgroundColor: '#132A1C', border: '1px solid #1E5C35' }}
      >
        {status === 'loading' && <LoadingView />}
        {status === 'success' && <SuccessView />}
        {status === 'incomplete' && (
          <IncompleteView
            onContinue={handleCompleteSetup}
            linking={linking}
            errorMessage={errorMessage}
          />
        )}
        {status === 'error' && <ErrorView message={errorMessage} />}
      </div>
    </main>
  );
}

function LoadingView() {
  return (
    <div className="flex flex-col items-center gap-4 py-6">
      <Spinner color="#2ABFA0" size={36} />
      <p className="text-sm" style={{ color: '#8BAF96' }}>
        Checking your onboarding status…
      </p>
    </div>
  );
}

function SuccessView() {
  return (
    <div className="flex flex-col items-center gap-4">
      <CheckIcon />
      <h1 className="text-2xl font-semibold" style={{ color: '#C9A96E' }}>
        You&apos;re all set
      </h1>
      <p className="text-sm" style={{ color: '#8BAF96' }}>
        Your Charm Payments account is approved and ready to accept payments. Redirecting you to
        your dashboard…
      </p>
      <a
        href="/dashboard"
        className="text-sm underline-offset-4 hover:underline"
        style={{ color: '#2ABFA0' }}
      >
        Go to dashboard now
      </a>
    </div>
  );
}

function IncompleteView({
  onContinue,
  linking,
  errorMessage,
}: {
  onContinue: () => void;
  linking: boolean;
  errorMessage: string | null;
}) {
  return (
    <div className="flex flex-col items-center gap-5">
      <ClockIcon />
      <div>
        <h1 className="text-2xl font-semibold mb-2" style={{ color: '#C9A96E' }}>
          Almost there
        </h1>
        <p className="text-sm" style={{ color: '#8BAF96' }}>
          We still need a few more details before we can finish activating your account.
        </p>
      </div>

      {errorMessage && (
        <div
          role="alert"
          className="w-full rounded-lg px-4 py-3 text-sm"
          style={{
            backgroundColor: 'rgba(220, 38, 38, 0.12)',
            border: '1px solid rgba(220, 38, 38, 0.45)',
            color: '#fecaca',
          }}
        >
          {errorMessage}
        </div>
      )}

      <button
        type="button"
        onClick={onContinue}
        disabled={linking}
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-base font-semibold transition disabled:opacity-70 disabled:cursor-not-allowed"
        style={{ backgroundColor: '#2ABFA0', color: '#0D1F15' }}
      >
        {linking && <Spinner color="#0D1F15" size={18} />}
        {linking ? 'Opening…' : 'Complete Setup'}
      </button>
    </div>
  );
}

function ErrorView({ message }: { message: string | null }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <AlertIcon />
      <h1 className="text-2xl font-semibold" style={{ color: '#C9A96E' }}>
        Something went wrong
      </h1>
      <p className="text-sm" style={{ color: '#8BAF96' }}>
        {message ?? 'We could not load your onboarding status.'}
      </p>
      <a
        href="/dashboard"
        className="inline-flex items-center justify-center rounded-lg px-4 py-3 text-base font-semibold transition"
        style={{ backgroundColor: '#2ABFA0', color: '#0D1F15' }}
      >
        Go to dashboard
      </a>
    </div>
  );
}

function Spinner({ color, size }: { color: string; size: number }) {
  return (
    <svg
      className="animate-spin"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="3" opacity="0.25" />
      <path
        d="M22 12a10 10 0 0 1-10 10"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <div
      className="flex items-center justify-center rounded-full"
      style={{
        width: 56,
        height: 56,
        backgroundColor: 'rgba(42, 191, 160, 0.15)',
        border: '1px solid #2ABFA0',
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 12.5l4.5 4.5L19 7"
          stroke="#2ABFA0"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ClockIcon() {
  return (
    <div
      className="flex items-center justify-center rounded-full"
      style={{
        width: 56,
        height: 56,
        backgroundColor: 'rgba(201, 169, 110, 0.15)',
        border: '1px solid #C9A96E',
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="#C9A96E" strokeWidth="2" />
        <path
          d="M12 7v5l3 2"
          stroke="#C9A96E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function AlertIcon() {
  return (
    <div
      className="flex items-center justify-center rounded-full"
      style={{
        width: 56,
        height: 56,
        backgroundColor: 'rgba(220, 38, 38, 0.12)',
        border: '1px solid rgba(220, 38, 38, 0.6)',
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 8v5"
          stroke="#fecaca"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="16.5" r="1.25" fill="#fecaca" />
        <path
          d="M10.3 3.86 2.82 17a2 2 0 0 0 1.71 3h14.94a2 2 0 0 0 1.71-3L13.7 3.86a2 2 0 0 0-3.4 0Z"
          stroke="#fecaca"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
