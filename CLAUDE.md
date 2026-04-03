# Charm Payments — Claude Code Context

## Project Identity
- Product: Charm Payments — merchant payment processing
- Stack: Next.js 14 App Router · TypeScript · Tailwind CSS · Supabase · Vercel
- Gateway: NMI white-label with First Data/Fiserv acquiring
- Repo: github.com/lrobE376/Charm-Payments

## Folder Structure
src/app/(marketing)/   — public marketing pages
src/app/(auth)/        — apply, login, submitted pages
src/app/(dashboard)/   — merchant portal
src/app/api/           — all API routes
src/components/        — shared components

## Design System (globals.css — NEVER recreate)
--brand-dark: #0c3a30
--brand-accent: #9edd05
--brand-light: #edf1ee
--brand-card: #fffaeb
Fonts: Outfit (headings) · Inter Tight (body)
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
PIPEDRIVE_API_TOKEN
PIPEDRIVE_QUOTE_STAGE_ID=2

## Supabase Tables
- merchant_applications — application form submissions
- quote_requests        — savings analysis leads
- merchants             — approved live merchants
- transactions          — payment records
- payouts               — settlement records
- disputes              — chargeback tracking

## Compliance
Every page mentioning payment processing MUST include:
"Charm Payments is a payment facilitator, not a bank.
Payment processing services are provided through our
licensed acquiring bank partner. Merchant funds are
subject to the terms of the Merchant Agreement."

## Business Context
- Owner: Lee Robertson · St. Louis MO
- CRM: Pipedrive
- Chargeback protection: CB911 mandatory on all accounts
