// src/app/api/connect/account-status/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json(
      { error: 'Stripe secret key is not configured.' },
      { status: 500 },
    );
  }

  const { searchParams } = new URL(request.url);
  const accountId = searchParams.get('account_id')?.trim();

  if (!accountId) {
    return NextResponse.json(
      { error: 'account_id query parameter is required.' },
      { status: 400 },
    );
  }

  const stripe = new Stripe(secretKey);

  try {
    const account = await stripe.accounts.retrieve(accountId);

    return NextResponse.json({
      stripe_account: {
        charges_enabled: account.charges_enabled,
        payouts_enabled: account.payouts_enabled,
        details_submitted: account.details_submitted,
        requirements: {
          currently_due: account.requirements?.currently_due ?? [],
          eventually_due: account.requirements?.eventually_due ?? [],
          past_due: account.requirements?.past_due ?? [],
          disabled_reason: account.requirements?.disabled_reason ?? null,
        },
      },
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'Failed to retrieve Stripe account.';
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
