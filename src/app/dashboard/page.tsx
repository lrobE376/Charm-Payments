// src/app/dashboard/page.tsx
'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

type Requirements = {
  currently_due: string[];
  eventually_due: string[];
  past_due: string[];
  disabled_reason: string | null;
};

type StripeAccount = {
  charges_enabled: boolean;
  payouts_enabled: boolean;
  details_submitted: boolean;
  requirements: Requirements;
};

type FetchState =
  | { kind: 'idle' }
  | { kind: 'loading' }
  | { kind: 'no-account' }
  | { kind: 'ready'; account: StripeAccount }
  | { kind: 'error'; message: string };

const STORAGE_KEY = 'charm_account_id';
const CONNECTED_AT_KEY = 'charm_account_connected_at';

export default function DashboardPage() {
  const [accountId, setAccountId] = useState<string | null>(null);
  const [connectedAt, setConnectedAt] = useState<string | null>(null);
  const [state, setState] = useState<FetchState>({ kind: 'idle' });
  const [linking, setLinking] = useState(false);
  const [linkError, setLinkError] = useState<string | null>(null);

  useEffect(() => {
    const storedId =
      typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
    const storedConnectedAt =
      typeof window !== 'undefined'
        ? window.localStorage.getItem(CONNECTED_AT_KEY)
        : null;

    setAccountId(storedId);
    setConnectedAt(storedConnectedAt);

    if (!storedId) {
      setState({ kind: 'no-account' });
      return;
    }

    let cancelled = false;
    setState({ kind: 'loading' });

    (async () => {
      try {
        const res = await fetch(
          `/api/connect/account-status?account_id=${encodeURIComponent(storedId)}`,
          { method: 'GET', cache: 'no-store' },
        );
        if (!res.ok) {
          throw new Error(`Account status request failed (${res.status}).`);
        }
        const data = await res.json();
        const account = data?.stripe_account as StripeAccount | undefined;
        if (!account) {
          throw new Error('Account status response is missing stripe_account.');
        }
        if (!cancelled) setState({ kind: 'ready', account });
      } catch (err) {
        if (cancelled) return;
        setState({
          kind: 'error',
          message: err instanceof Error ? err.message : 'Could not load account status.',
        });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  async function handleCompleteSetup() {
    if (!accountId) return;
    setLinking(true);
    setLinkError(null);
    try {
      const res = await fetch('/api/connect/account-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ account_id: accountId }),
      });
      if (!res.ok) {
        throw new Error(`Account link request failed (${res.status}).`);
      }
      const data = await res.json();
      const url = data?.url ?? data?.onboarding_url;
      if (!url) throw new Error('Missing url in account-link response.');
      window.location.href = url;
    } catch (err) {
      setLinkError(
        err instanceof Error ? err.message : 'Could not resume onboarding.',
      );
      setLinking(false);
    }
  }

  const connectedDateLabel = useMemo(() => {
    if (!connectedAt) return null;
    const parsed = new Date(connectedAt);
    if (Number.isNaN(parsed.getTime())) return null;
    return parsed.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }, [connectedAt]);

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0D1F15' }}>
      <header
        className="border-b"
        style={{ borderColor: '#1E5C35', backgroundColor: '#0D1F15' }}
      >
        <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">
            <span style={{ color: '#C9A96E' }}>Charm</span>{' '}
            <span style={{ color: '#2ABFA0' }}>Connect</span>
          </div>
          <Link
            href="/"
            className="text-sm transition hover:opacity-80"
            style={{ color: '#8BAF96' }}
          >
            Back to site
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-10 space-y-8">
        <div>
          <h1
            className="text-3xl sm:text-4xl font-semibold tracking-tight"
            style={{ color: '#edf1ee' }}
          >
            Merchant dashboard
          </h1>
          <p className="mt-2 text-sm" style={{ color: '#8BAF96' }}>
            Live snapshot of your Charm Payments processing account.
          </p>
        </div>

        {state.kind === 'loading' && <LoadingState />}

        {state.kind === 'no-account' && <NoAccountState />}

        {state.kind === 'error' && <ErrorState message={state.message} />}

        {state.kind === 'ready' && (
          <DashboardBody
            account={state.account}
            accountId={accountId}
            connectedDateLabel={connectedDateLabel}
            onCompleteSetup={handleCompleteSetup}
            linking={linking}
            linkError={linkError}
          />
        )}
      </section>
    </main>
  );
}

function DashboardBody({
  account,
  accountId,
  connectedDateLabel,
  onCompleteSetup,
  linking,
  linkError,
}: {
  account: StripeAccount;
  accountId: string | null;
  connectedDateLabel: string | null;
  onCompleteSetup: () => void;
  linking: boolean;
  linkError: string | null;
}) {
  return (
    <>
      {!account.charges_enabled && (
        <CompleteSetupBanner
          onClick={onCompleteSetup}
          linking={linking}
          linkError={linkError}
          requirementsCount={account.requirements.currently_due.length}
        />
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatusCard
          label="Charges"
          enabled={account.charges_enabled}
          enabledHint="Accepting payments"
          disabledHint="Not yet able to accept payments"
        />
        <StatusCard
          label="Payouts"
          enabled={account.payouts_enabled}
          enabledHint="Funds settling to your bank"
          disabledHint="Payouts on hold"
        />
        <StatusCard
          label="Verification"
          enabled={account.details_submitted}
          enabledHint="Details submitted"
          disabledHint="Verification incomplete"
        />
      </div>

      <AccountDetails accountId={accountId} connectedDateLabel={connectedDateLabel} />

      {account.requirements.currently_due.length > 0 && (
        <RequirementsList items={account.requirements.currently_due} />
      )}
    </>
  );
}

function StatusCard({
  label,
  enabled,
  enabledHint,
  disabledHint,
}: {
  label: string;
  enabled: boolean;
  enabledHint: string;
  disabledHint: string;
}) {
  return (
    <article
      className="rounded-2xl p-6"
      style={{ backgroundColor: '#132A1C', border: '1px solid #1E5C35' }}
    >
      <div className="flex items-center justify-between">
        <p
          className="text-xs font-medium uppercase tracking-[0.18em]"
          style={{ color: '#8BAF96' }}
        >
          {label}
        </p>
        <StatusBadge enabled={enabled} />
      </div>
      <p
        className="mt-4 text-2xl font-semibold"
        style={{ color: enabled ? '#2ABFA0' : '#C9A96E' }}
      >
        {enabled ? 'Enabled' : 'Disabled'}
      </p>
      <p className="mt-1 text-sm" style={{ color: '#8BAF96' }}>
        {enabled ? enabledHint : disabledHint}
      </p>
    </article>
  );
}

function StatusBadge({ enabled }: { enabled: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium"
      style={{
        backgroundColor: enabled ? 'rgba(42, 191, 160, 0.14)' : 'rgba(201, 169, 110, 0.14)',
        color: enabled ? '#2ABFA0' : '#C9A96E',
        border: `1px solid ${enabled ? '#2ABFA0' : '#C9A96E'}`,
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: enabled ? '#2ABFA0' : '#C9A96E' }}
      />
      {enabled ? 'Live' : 'Pending'}
    </span>
  );
}

function CompleteSetupBanner({
  onClick,
  linking,
  linkError,
  requirementsCount,
}: {
  onClick: () => void;
  linking: boolean;
  linkError: string | null;
  requirementsCount: number;
}) {
  return (
    <div
      className="rounded-2xl p-5 sm:p-6"
      style={{
        backgroundColor: 'rgba(201, 169, 110, 0.10)',
        border: '1px solid #C9A96E',
      }}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold" style={{ color: '#C9A96E' }}>
            Finish onboarding to start accepting payments
          </p>
          <p className="mt-1 text-sm" style={{ color: '#8BAF96' }}>
            {requirementsCount > 0
              ? `Stripe needs ${requirementsCount} more ${
                  requirementsCount === 1 ? 'item' : 'items'
                } before charges can be enabled.`
              : 'Your account is not yet enabled for charges. Continue setup to unlock payments.'}
          </p>
          {linkError && (
            <p className="mt-2 text-xs" style={{ color: '#fecaca' }}>
              {linkError}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={onClick}
          disabled={linking}
          className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition disabled:opacity-70 disabled:cursor-not-allowed"
          style={{ backgroundColor: '#C9A96E', color: '#0D1F15' }}
        >
          {linking && (
            <svg
              className="animate-spin"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" stroke="#0D1F15" strokeWidth="3" opacity="0.25" />
              <path
                d="M22 12a10 10 0 0 1-10 10"
                stroke="#0D1F15"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          )}
          {linking ? 'Opening…' : 'Complete Setup'}
        </button>
      </div>
    </div>
  );
}

function AccountDetails({
  accountId,
  connectedDateLabel,
}: {
  accountId: string | null;
  connectedDateLabel: string | null;
}) {
  return (
    <article
      className="rounded-2xl p-6"
      style={{ backgroundColor: '#132A1C', border: '1px solid #1E5C35' }}
    >
      <h2
        className="text-xs font-medium uppercase tracking-[0.18em]"
        style={{ color: '#8BAF96' }}
      >
        Account details
      </h2>
      <dl className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <dt className="text-xs" style={{ color: '#8BAF96' }}>
            Stripe account ID
          </dt>
          <dd
            className="mt-1 font-mono text-sm break-all"
            style={{ color: '#edf1ee' }}
          >
            {accountId ?? '—'}
          </dd>
        </div>
        <div>
          <dt className="text-xs" style={{ color: '#8BAF96' }}>
            Connected on
          </dt>
          <dd className="mt-1 text-sm" style={{ color: '#edf1ee' }}>
            {connectedDateLabel ?? 'Not recorded'}
          </dd>
        </div>
      </dl>
    </article>
  );
}

function RequirementsList({ items }: { items: string[] }) {
  return (
    <article
      className="rounded-2xl p-6"
      style={{ backgroundColor: '#132A1C', border: '1px solid #1E5C35' }}
    >
      <h2
        className="text-xs font-medium uppercase tracking-[0.18em]"
        style={{ color: '#8BAF96' }}
      >
        Outstanding requirements
      </h2>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm"
            style={{ color: '#edf1ee' }}
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: '#C9A96E' }}
            />
            <span className="font-mono">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function LoadingState() {
  return (
    <div
      className="rounded-2xl p-10 flex flex-col items-center gap-4"
      style={{ backgroundColor: '#132A1C', border: '1px solid #1E5C35' }}
    >
      <svg
        className="animate-spin"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" stroke="#2ABFA0" strokeWidth="3" opacity="0.25" />
        <path
          d="M22 12a10 10 0 0 1-10 10"
          stroke="#2ABFA0"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <p className="text-sm" style={{ color: '#8BAF96' }}>
        Loading your account status…
      </p>
    </div>
  );
}

function NoAccountState() {
  return (
    <div
      className="rounded-2xl p-10 text-center"
      style={{ backgroundColor: '#132A1C', border: '1px solid #1E5C35' }}
    >
      <h2 className="text-xl font-semibold" style={{ color: '#C9A96E' }}>
        No connected account
      </h2>
      <p className="mt-2 text-sm" style={{ color: '#8BAF96' }}>
        We couldn&apos;t find a Charm account in this browser. Start onboarding to connect one.
      </p>
      <Link
        href="/onboarding"
        className="mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition"
        style={{ backgroundColor: '#2ABFA0', color: '#0D1F15' }}
      >
        Begin onboarding
      </Link>
    </div>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <div
      className="rounded-2xl p-8"
      style={{
        backgroundColor: 'rgba(220, 38, 38, 0.10)',
        border: '1px solid rgba(220, 38, 38, 0.45)',
      }}
    >
      <p className="text-sm font-semibold" style={{ color: '#fecaca' }}>
        Could not load account status
      </p>
      <p className="mt-1 text-sm" style={{ color: '#fecaca' }}>
        {message}
      </p>
      <Link
        href="/onboarding"
        className="mt-4 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition"
        style={{ backgroundColor: '#2ABFA0', color: '#0D1F15' }}
      >
        Restart onboarding
      </Link>
    </div>
  );
}
