// src/lib/stripe.ts
import Stripe from 'stripe'

let _stripe: Stripe | null = null

/** Lazy Stripe singleton — only instantiated on first call inside a handler, never at build time. */
export function getStripe(): Stripe {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set')
  }
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2026-02-25.clover',
    })
  }
  return _stripe
}
