# Charm Payments — Claude Code Context

## Project Identity
- Product: Charm Payments — merchant payment processing
- Stack: Next.js 14 App Router · TypeScript · Tailwind CSS · Supabase · Vercel
- Gateway: NMI white-label with First Data/Fiserv acquiring
- CRM: Salesforce (via Zapier webhooks — Phase 6)
- Repo: github.com/lrobE376/Charm-Payments

## Current Architecture (post Phase 5)
The app is a marketing + lead acquisition surface. No merchant portal, no admin portal.
All merchant management happens in Salesforce.

```
charmpayments.com
  ├── Marketing pages (static, 34 routes)
  ├── /apply (public merchant application form)
  ├── /api/apply (saves to Supabase, fires Zapier webhook)
  ├── /api/quote (rate audit form, Zapier webhook)
  ├── /api/contact (contact form → lead)
  ├── /api/leads (inbound lead capture)
  ├── /api/tickets (inbound support tickets)
  └── /api/webhooks/nmi (NMI approval webhook — HMAC verified)
```

## Folder Structure
src/app/(marketing)/   — public marketing pages
src/app/(auth)/apply/  — merchant application form (public)
src/app/api/           — all API routes
src/components/        — shared components

## Design System (globals.css — NEVER recreate)
--brand-dark: #0c3a30
--brand-accent: #C9A96E
--brand-light: #edf1ee
--brand-card: #fffaeb
Fonts: DM Serif Display (headings) · Inter Tight (body)
Classes: .charm-card .btn-primary .btn-accent .btn-outline
         .section-label .gradient-text .stats-badge .section-ptb

## Coding Rules
- Server components by default
- 'use client' ONLY when hooks/interactivity required
- Never use .reveal on static pages
- No placeholders, no TODOs — complete files only
- Fully typed TypeScript — no implicit any
- Exact file path as comment at top of every file
- Match existing patterns exactly

## Environment Variables
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
NMI_SECURITY_KEY
NMI_PUBLIC_KEY
NEXT_PUBLIC_NMI_TOKENIZATION_KEY
NMI_WEBHOOK_SECRET
OOMA_EXTENSION
OOMA_ACCOUNT_ID
RESEND_API_KEY
NEXT_PUBLIC_SITE_URL
ZAPIER_SALESFORCE_WEBHOOK=https://hooks.zapier.com/hooks/catch/27240665/ujus70m/

## Supabase Tables (active)
- merchant_applications — application form submissions
- quote_requests        — savings analysis leads
- merchants             — approved live merchants (NMI MID)
- leads                 — raw lead capture
- tickets               — inbound support tickets

## Compliance
Every page mentioning payment processing MUST include:
"Charm Payments is a payment facilitator, not a bank.
Payment processing services are provided through our
licensed acquiring bank partner. Merchant funds are
subject to the terms of the Merchant Agreement."

## Business Context
- Owner: Lee Robertson · St. Louis MO
- Chargeback protection: CB911 mandatory on all accounts
