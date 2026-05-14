// src/app/api/connect/account-link/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'nodejs';

type AccountLinkBody = {
  account_id?: unknown;
};

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!secretKey) {
    return NextResponse.json(
      { error: 'Stripe secret key is not configured.' },
      { status: 500 },
    );
  }

  if (!siteUrl) {
    return NextResponse.json(
      { error: 'NEXT_PUBLIC_SITE_URL is not configured.' },
      { status: 500 },
    );
  }

  let body: AccountLinkBody;
  try {
    body = (await request.json()) as AccountLinkBody;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const accountId =
    typeof body.account_id === 'string' ? body.account_id.trim() : '';

  if (!accountId) {
    return NextResponse.json(
      { error: 'account_id is required.' },
      { status: 400 },
    );
  }

  const stripe = new Stripe(secretKey);

  try {
    const accountLink = await stripe.accountLinks.create({
      account: accountId,
      type: 'account_onboarding',
      refresh_url: `${siteUrl}/onboarding?refresh=true`,
      return_url: `${siteUrl}/onboarding/complete`,
    });

    return NextResponse.json({ url: accountLink.url });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'Failed to create Stripe account link.';
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
