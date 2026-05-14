// src/app/api/connect/create-account/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'nodejs';

type CreateAccountBody = {
  business_name?: unknown;
  email?: unknown;
};

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const appUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!secretKey) {
    return NextResponse.json(
      { error: 'Stripe secret key is not configured.' },
      { status: 500 },
    );
  }

  if (!appUrl) {
    return NextResponse.json(
      { error: 'NEXT_PUBLIC_SITE_URL is not configured.' },
      { status: 500 },
    );
  }

  let body: CreateAccountBody;
  try {
    body = (await request.json()) as CreateAccountBody;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const businessName =
    typeof body.business_name === 'string' ? body.business_name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';

  if (!businessName || !email) {
    return NextResponse.json(
      { error: 'business_name and email are required.' },
      { status: 400 },
    );
  }

  const stripe = new Stripe(secretKey);

  try {
    const account = await stripe.accounts.create({
      type: 'standard',
      email,
      business_profile: { name: businessName },
    });

    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      type: 'account_onboarding',
      refresh_url: `${appUrl}/onboarding?refresh=true`,
      return_url: `${appUrl}/onboarding/complete`,
    });

    return NextResponse.json({
      onboarding_url: accountLink.url,
      account_id: account.id,
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'Failed to create Stripe account.';
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
