# Charm Payments — Pre-Redesign-Merge Inventory

**Date:** 2026-05-05
**Backup branch:** `backup/pre-redesign-merge-2026-05-05` → `482d2f2`
**Repo:** `C:\Users\User1\Documents\charm-payments`
**Comparison repo:** `C:\Users\User1\dev\charm-payments-marketing` (the redesign)

This document is a read-only inventory of the OLD codebase as of 2026-05-05, captured before any merge or wipe. Use it to plan a cherry-pick migration of the new design system into this repo, or vice versa.

---

## 1. Route map (38 routes)

All routes are **server components** (no `"use client"` at any `page.tsx`). Layouts are also server-side; client interactivity lives inside imported components.

### Marketing routes (group `(marketing)` — 33)

| Route | File | LOC |
| --- | --- | --: |
| `/` | `src/app/(marketing)/page.tsx` | 775 |
| `/about` | `src/app/(marketing)/about/page.tsx` | 227 |
| `/cards` | `src/app/(marketing)/cards/page.tsx` | 630 |
| `/charm-cards` | `src/app/(marketing)/charm-cards/page.tsx` | 1 |
| `/charm-cards/apply` | `src/app/(marketing)/charm-cards/apply/page.tsx` | 5 |
| `/charm-cards/login` | `src/app/(marketing)/charm-cards/login/page.tsx` | 5 |
| `/contact` | `src/app/(marketing)/contact/page.tsx` | 12 |
| `/faq` | `src/app/(marketing)/faq/page.tsx` | 12 |
| `/features` | `src/app/(marketing)/features/page.tsx` | 392 |
| `/features/ach` | `src/app/(marketing)/features/ach/page.tsx` | 226 |
| `/features/card-present` | `src/app/(marketing)/features/card-present/page.tsx` | 261 |
| `/features/ecommerce` | `src/app/(marketing)/features/ecommerce/page.tsx` | 236 |
| `/features/fraud-protection` | `src/app/(marketing)/features/fraud-protection/page.tsx` | 235 |
| `/features/invoicing` | `src/app/(marketing)/features/invoicing/page.tsx` | 382 |
| `/features/qr-codes` | `src/app/(marketing)/features/qr-codes/page.tsx` | 232 |
| `/features/recurring-billing` | `src/app/(marketing)/features/recurring-billing/page.tsx` | 234 |
| `/features/tap-to-pay` | `src/app/(marketing)/features/tap-to-pay/page.tsx` | 228 |
| `/features/text-to-pay` | `src/app/(marketing)/features/text-to-pay/page.tsx` | 232 |
| `/features/virtual-terminal` | `src/app/(marketing)/features/virtual-terminal/page.tsx` | 229 |
| `/gateway` | `src/app/(marketing)/gateway/page.tsx` | 240 |
| `/gateway/features` | `src/app/(marketing)/gateway/features/page.tsx` | 142 |
| `/gateway/hardware` | `src/app/(marketing)/gateway/hardware/page.tsx` | 214 |
| `/pricing` | `src/app/(marketing)/pricing/page.tsx` | 295 |
| `/privacy` | `src/app/(marketing)/privacy/page.tsx` | 55 |
| `/quote` | `src/app/(marketing)/quote/page.tsx` | 56 |
| `/services` | `src/app/(marketing)/services/page.tsx` | 385 |
| `/solutions/beauty` | `src/app/(marketing)/solutions/beauty/page.tsx` | 254 |
| `/solutions/ecommerce` | `src/app/(marketing)/solutions/ecommerce/page.tsx` | 251 |
| `/solutions/high-risk` | `src/app/(marketing)/solutions/high-risk/page.tsx` | 30 |
| `/solutions/mobile` | `src/app/(marketing)/solutions/mobile/page.tsx` | 251 |
| `/solutions/restaurants` | `src/app/(marketing)/solutions/restaurants/page.tsx` | 251 |
| `/solutions/retail` | `src/app/(marketing)/solutions/retail/page.tsx` | 251 |
| `/solutions/services` | `src/app/(marketing)/solutions/services/page.tsx` | 251 |
| `/terms` | `src/app/(marketing)/terms/page.tsx` | 59 |
| `/unsubscribe` | `src/app/(marketing)/unsubscribe/page.tsx` | 90 |
| `/wallet` | `src/app/(marketing)/wallet/page.tsx` | 255 |

### Auth routes (group `(auth)` — 2)

| Route | File | LOC |
| --- | --- | --: |
| `/apply` | `src/app/(auth)/apply/page.tsx` | 5 (delegates to client form) |
| `/apply/submitted` | `src/app/(auth)/apply/submitted/page.tsx` | 38 |

### Layouts (4)

- `src/app/layout.tsx` — root
- `src/app/(marketing)/layout.tsx`
- `src/app/(auth)/layout.tsx`
- `src/app/(auth)/apply/layout.tsx`

### API routes (9)

- `src/app/api/apply/route.ts` — application form intake
- `src/app/api/contact/route.ts` — contact form intake
- `src/app/api/integrations/nmi/route.ts` — NMI integration
- `src/app/api/integrations/ooma/route.ts` — Ooma phone integration
- `src/app/api/leads/route.ts` — generic lead capture
- `src/app/api/quote/route.ts` — quote form intake
- `src/app/api/quote/upload/route.ts` — statement file upload
- `src/app/api/tickets/route.ts` — support tickets
- `src/app/api/webhooks/nmi/route.ts` — NMI webhook (HMAC verified per CLAUDE.md)

---

## 2. Components (32 files, 3,315 LOC)

| File | LOC | Notes |
| --- | --: | --- |
| `src/components/ScrollReveal.tsx` | 8 | `'use client'` — wraps `useScrollReveal` hook |
| `src/components/conversion/OfferStrip.tsx` | 24 | Thin top promo bar above main nav |
| `src/components/conversion/PrimaryCTA.tsx` | 105 | Reusable primary CTA block |
| `src/components/conversion/ProofSection.tsx` | 77 | Proof grid with lucide icons |
| `src/components/conversion/SavingsCalculator.tsx` | 79 | `'use client'` — interactive savings calculator |
| `src/components/conversion/SocialProofStrip.tsx` | 40 | Social proof + St. Louis location strip |
| `src/components/conversion/StatsBar.tsx` | 132 | Animated stats bar — IntersectionObserver + rAF count-up (zero deps) |
| `src/components/conversion/TrustBar.tsx` | 36 | Payment-brand trust signals strip |
| `src/components/forms/apply-application-form.tsx` | 360 | `'use client'` — multi-step merchant application |
| `src/components/forms/quote-form.tsx` | 542 | `'use client'` — instant quote / rate-audit form (largest file) |
| `src/components/marketing/CardsNfcDemo.tsx` | 132 | `'use client'` — NFC demo on `/cards` |
| `src/components/marketing/CardsStickyCta.tsx` | 55 | `'use client'` — sticky CTA on `/cards` |
| `src/components/marketing/Footer.tsx` | 123 | Marketing footer |
| `src/components/marketing/Navbar.tsx` | 512 | `'use client'` — main navbar with dropdowns |
| `src/components/marketing/cards-faq-section.tsx` | 40 | FAQ accordion data + section |
| `src/components/marketing/cards-testimonials-section.tsx` | 64 | Testimonial cards |
| `src/components/marketing/cards-whats-included-section.tsx` | 81 | What's-included grid for `/cards` |
| `src/components/support/support-ticket-form.tsx` | 97 | `'use client'` — support ticket form |
| `src/components/ui/Badge.tsx` | 54 | Generic badge |
| `src/components/ui/Button.tsx` | 54 | `'use client'` — generic button |
| `src/components/ui/FadeIn.tsx` | 35 | `'use client'` — fade-in wrapper |
| `src/components/ui/FloatingCard.tsx` | 27 | `'use client'` — floating card with hover |
| `src/components/ui/HeroVisual.tsx` | 119 | Hero right-panel: image + 3 bleeding data cards with mouse-tilt |
| `src/components/ui/Input.tsx` | 48 | Generic input + forwardRef |
| `src/components/ui/StatCard.tsx` | 43 | Stat card with lucide icon |
| `src/components/magicui/animated-gradient-text.tsx` | 37 | `'use client'` — **UNUSED** in routes |
| `src/components/magicui/animated-list.tsx` | 54 | `'use client'` — **UNUSED** in routes |
| `src/components/magicui/bento-grid.tsx` | 71 | **UNUSED** in routes |
| `src/components/magicui/border-beam.tsx` | 58 | Used in `/features/invoicing` (page + WaitlistForm) |
| `src/components/magicui/marquee.tsx` | 61 | `'use client'` — used in `/features/invoicing` |
| `src/components/magicui/number-ticker.tsx` | 55 | `'use client'` — **UNUSED** in routes |
| `src/components/magicui/sparkles-text.tsx` | 92 | `'use client'` — used in `/features/invoicing` |

---

## 3. Dependency diff vs redesign

### OLD has, NEW does NOT (this is what gets lost in a wipe-and-replace)

| Package | Purpose | Where used |
| --- | --- | --- |
| `@hookform/resolvers` | Zod resolver for react-hook-form | All forms |
| `@radix-ui/react-slot` | Radix primitive for `Slot` patterns | Buttons / asChild |
| `@supabase/ssr` | Supabase SSR helpers | API routes (data persistence) |
| `@supabase/supabase-js` | Supabase client | API routes |
| `lucide-react` | Icon library | Used in nearly every component |
| `react-dropzone` | File-drop zone | Quote form (statement upload) |
| `react-hook-form` | Form state | All forms |
| `recharts` | Charting | Likely savings / pricing visualization (verify before drop) |
| `sonner` | Toast notifications | Form submissions |
| `zod` | Schema validation | Form validation + API route input |

### NEW has, OLD does NOT

| Package | Purpose |
| --- | --- |
| `gsap` | Animation engine for the redesign's typewriter + StoryArrow + count-ups |

### Framework drift

- **Next.js**: 14.2.35 (old) → 15.0.4 (new)
- **React**: 18 (old) → 19 (new)
- **eslint-config-next**: 14.2.35 → 15.0.4
- **@types/react**: 18 → 19

A merge requires either upgrading the old repo to Next 15 / React 19 or downgrading the new repo. Next 15 + React 19 are stable; upgrading old is the standard path.

---

## 4. Feature pages worth preserving

The redesign repo currently only has `/` and `/charm-defense`. Every other route in the OLD codebase is unique content. The substantive ones:

### Tier 1 — definitely preserve (rich, recent, distinct copy)

- **`/features/invoicing`** (382 LOC) — consultant-pain narrative, MagicUI-decorated. This is the page Lee specifically called out. Imports: `SparklesText`, `BorderBeam`, `Marquee` from MagicUI; `WaitlistForm` (in-folder client component).
- **`/`** marketing (775 LOC) — current homepage. The redesign supersedes this, so likely **REPLACE** rather than preserve. But mine for any one-off copy not yet in the new homepage.
- **`/cards`** (630 LOC) — Charm Cards product page. Substantial, no NEW counterpart yet.
- **`/services`** (385 LOC) and **`/features`** index (392 LOC) — overview pages.
- **`/pricing`** (295 LOC) — substantial pricing page; new repo has no pricing page.

### Tier 2 — feature deep-dives (~230 LOC each, similar template)

`/features/{ach, card-present, ecommerce, fraud-protection, qr-codes, recurring-billing, tap-to-pay, text-to-pay, virtual-terminal}` — 9 pages, all 226–261 LOC, all share a similar template. Worth preserving as content but they need a unified template treatment in the new design system.

### Tier 3 — vertical "solutions" pages (251 LOC each)

`/solutions/{beauty, ecommerce, mobile, restaurants, retail, services}` — 6 pages, identical 251 LOC. Same template per vertical. `/solutions/high-risk` is a 30-LOC stub.

### Tier 4 — supporting pages

`/about` (227), `/wallet` (255), `/gateway` + `/gateway/features` + `/gateway/hardware` (240+142+214), `/pricing` (295). Each unique.

### Tier 5 — small / boilerplate

`/contact` (12), `/faq` (12), `/quote` (56) — these are mostly form-shells delegating to client components. `/privacy` (55), `/terms` (59), `/unsubscribe` (90), `/apply/submitted` (38).

### Stubs / 1–5 LOC

`/charm-cards` (1), `/charm-cards/apply` (5), `/charm-cards/login` (5), `/apply` (5), `/solutions/high-risk` (30 — slim).

---

## 5. Design tokens / theme

### OLD palette (`tailwind.config.ts` + `src/app/globals.css`)

CSS variables in `globals.css`:

```
--surface:                  #fdf9ed   /* base — the desk */
--surface-container-low:    #f7f4e7   /* section wells */
--surface-container-lowest: #ffffff
--surface-variant:          #ede9d4
--primary:            #004421   /* Forest Green — gradient start */
--primary-container:  #1E5C35   /* gradient end (matches NEW atelier-forest) */
--secondary:          #006b58   /* Teal */
--gold:               #C9A96E   /* (matches NEW atelier-gold pre-bump) */
--brand-dark:   #004421
--brand-accent: #C9A96E
--brand-light:  #f7f4e7
--brand-card:   #fdf9ed
--font-display: 'Manrope'
--font-body:    'Inter'
```

Tailwind `theme.extend.colors`:

```
brand: { dark: '#0c3a30', accent: '#C9A96E', light: '#edf1ee', card: '#fffaeb', gold: '#C9A96E', kahiki: '#2ABFA0' }
sales: { navy: '#0E1A12', green: '#22c55e' }   // homepage variant palette
```

`fontFamily`: `Inter Tight` (sans), `DM Serif Display` (display).
`boxShadow`: `brand-sm/md/lg`, `sales-glow`, `sales-glow-lg`.
`keyframes`: `gradient`, `magicui-marquee` (h+v), `sparkle`.
`animation`: `gradient`, `magicui-marquee`, `magicui-marquee-vertical`, `sparkle`.

### NEW palette (`app/styles/tokens.css` + `tailwind.config.ts`)

```
--atelier-forest:      #1E5C35
--atelier-forest-deep: #0F3520
--atelier-cream:       #EDEADE
--atelier-cream-warm:  #F5F2EA
--atelier-gold:        #BD9952   (recently bumped from #C9A96E)
--atelier-teal:        #2ABFA0
--atelier-ink:         #1A1A1A
--atelier-paper:       #FAFAF7
```

Fonts: Manrope (sans), Fraunces (serif), JetBrains Mono (mono).

### Overlap and conflict map

- **Forest** colors line up: OLD `--primary-container: #1E5C35` ≡ NEW `--atelier-forest`. Migration is a simple alias.
- **Gold** is `#C9A96E` in both, but NEW just bumped to `#BD9952` for visibility. Pick one canonical value before merging.
- **Ink**: OLD has `--on-surface: #1c1c15`, NEW uses `#1A1A1A`. Trivial.
- **Cream/surface** values differ slightly (OLD `#fdf9ed` vs NEW `#EDEADE` / `#F5F2EA`). Both are warm off-whites. Decide one.
- **Fonts**: OLD = Inter Tight + DM Serif Display, NEW = Manrope + Fraunces + JetBrains Mono. NEW has a serif change (DM Serif Display is more dramatic; Fraunces is more variable / editorial).
- **Custom `.btn-primary` / `.btn-accent` / `.charm-card`** classes per CLAUDE.md exist in OLD `globals.css` (referenced in WaitlistForm) — these don't exist in NEW. Cherry-picking pages will require rewriting these utilities or porting them.

---

## 6. MagicUI inventory

MagicUI components live in `src/components/magicui/`. **Only 3 of 7 are actually imported anywhere in routes**, and all 3 imports are inside `/features/invoicing`.

| Component | LOC | Used in | Redesign equivalent |
| --- | --: | --- | --- |
| `border-beam.tsx` | 58 | `/features/invoicing/page.tsx`, `/features/invoicing/WaitlistForm.tsx` | None — distinct effect, would need to port if invoicing page is preserved as-is |
| `sparkles-text.tsx` | 92 | `/features/invoicing/page.tsx` | None — `EyebrowTag` covers similar visual role differently |
| `marquee.tsx` | 61 | `/features/invoicing/page.tsx` | NEW has its own `Marquee.tsx` (CSS keyframes, no JS) — likely supersedes |
| `animated-gradient-text.tsx` | 37 | **UNUSED** | NEW has no exact equivalent; previously kept "for future use" per git log |
| `animated-list.tsx` | 54 | **UNUSED** | None |
| `bento-grid.tsx` | 71 | **UNUSED** | None |
| `number-ticker.tsx` | 55 | **UNUSED** | NEW has GSAP count-ups in `StatsRow` / `DefenseHero` / `DefenseNumbers` — supersedes |

**Net:** safe to drop animated-gradient-text, animated-list, bento-grid, number-ticker without porting. Need to decide on border-beam + sparkles-text + marquee handling tied to the future of `/features/invoicing`.

---

## 7. Vercel link

- No `vercel.json` in repo.
- No `.vercel/` directory in working tree (it's gitignored implicitly).
- Git remote: `origin → https://github.com/lrobE376/Charm-Payments.git`.
- Per CLAUDE.md: this repo is what powers `charmpayments.com` via Vercel's GitHub integration. Auto-deploys on push to `main`.

The redesign repo is unlinked locally as well (no `.vercel/`). The user's plan was to deploy the redesign as a new Vercel project (`charm-payments-marketing`), keeping the existing `charm-payments` project untouched. That deploy step has not yet been executed.

---

## 8. One-page summary

**Stats**

- **38 routes** total: 33 marketing, 2 auth (`/apply`, `/apply/submitted`), 9 API, 4 layouts.
- **32 components**, ~3,315 LOC. Largest: quote-form (542), Navbar (512), apply-form (360).
- **15 production deps + 8 dev deps** in OLD repo.
- **8 prod + 7 dev** in NEW repo. NEW is leaner because it's marketing-only.

**Pages worth preserving (Lee's call: `/features/invoicing` confirmed)**

- Tier 1 must-keep: `/features/invoicing` (382 LOC, MagicUI-decorated, consultant pain copy).
- Tier 2 high-value: `/cards` (Charm Cards, 630 LOC), `/wallet`, `/pricing`, `/services`, `/features` index, `/about`.
- Tier 3 systematic: 9 feature deep-dives + 7 solution verticals share templates — preserve content, re-skin under NEW design system.
- Tier 4 boilerplate: `/privacy`, `/terms`, `/unsubscribe`, `/apply/submitted`. Trivial to copy.

**What's in OLD but missing from NEW (gap analysis)**

1. **All forms** (apply, quote, contact, support tickets) and their dependencies (`react-hook-form`, `zod`, `@hookform/resolvers`, `react-dropzone`, `sonner`).
2. **All API routes** (`/api/apply`, `/api/quote`, `/api/contact`, `/api/leads`, `/api/tickets`, `/api/webhooks/nmi`, plus integrations).
3. **Supabase wiring** for persisting form submissions.
4. **35 marketing pages** beyond `/` and `/charm-defense`.
5. **`lucide-react` icon library** — used in dozens of places.
6. **Custom utility classes** from CLAUDE.md (`charm-card`, `btn-primary`, `btn-accent`, `section-label`, `gradient-text`, `stats-badge`, `section-ptb`).
7. **MagicUI** as content (BorderBeam, SparklesText, Marquee).

**Where NEW supersedes OLD**

1. Header / Footer — NEW versions follow brand rules (no NMI / First Data mentions, locked tagline, sticky scroll behavior).
2. Hero — NEW has dark forest typewriter; OLD has a different hero direction.
3. Homepage section system (StatsRow, WhyWeWin specimen comparison, WhatChanges 6-card grid, HowItWorks numerals + StoryArrow, StLouisBuilt documentary plate, MerchantReviews verified cards, StopOverpaying ink + footnotes) — full rebuild.
4. Card hover treatment (SpecCard: forest-tinted shadow lift, accent bar, L-corner mark, FIG label hover, dot rotate). The OLD repo has nothing like this.
5. EyebrowTag, SpecStrip, StoryArrow shared design components.
6. Reduced-motion CSS reset, focus-visible ring system, ADA contrast pass, semantic landmarks, skip-to-content link.
7. Charm Defense entire product page exists only in NEW.

**Migration risks**

1. **Style collision**: OLD `--primary-container: #1E5C35` and NEW `--atelier-forest: #1E5C35` are the same value but different variable names. Bringing both global stylesheets into one tree without aliasing will produce duplicate variables — a code smell, not a break.
2. **`.btn-primary` / `.btn-accent` / `charm-card` classes** are referenced inside the OLD WaitlistForm and likely other components. NEW has no such utility classes; merging requires re-implementing them or rewriting the consumers.
3. **Next 14 → 15 + React 18 → 19** upgrade: `react-hook-form`, `framer-motion`, `recharts` should all be compatible with React 19, but verify `framer-motion@12` (OLD) vs `@11` (NEW) — settle on one.
4. **`lucide-react`** is everywhere in OLD. NEW has none. Bringing all OLD pages over without it = mass icon rewrite. Easier to add the dep.
5. **Supabase env vars** must follow the page (CLAUDE.md lists them). If forms come over, env wiring comes too.
6. **Compliance footer** rule from CLAUDE.md ("Charm Payments is a payment facilitator…") — NEW handles this in `StopOverpaying` footnotes; OLD has it in marketing/Footer. Don't double up.
7. **Brand-rule violations in OLD copy**: existing OLD repo names "NMI", "First Data" in footer + multiple pages. NEW repo strips these per locked rules. Any cherry-picked content needs scrubbing.

**Estimated effort for Strategy 2 (cherry-pick into OLD)**

The work isn't migrating files — it's reskinning. Plan in three phases:

- **Phase A — System install (4–6 hours)**: copy `tokens.css`, `tailwind.config.ts` extensions, all NEW components in `app/components/` (SpecCard, EyebrowTag, SpecStrip, StoryArrow, sections/*), the redesigned Header/Footer, `cn()` helper, and `lib/motion.ts` into the OLD repo. Resolve variable-name collisions, alias old `--primary-container` → `--atelier-forest`. Add `gsap`, swap `framer-motion` versions, upgrade Next/React.
- **Phase B — Page reskin (8–12 hours)**: replace OLD `/` with NEW homepage; add `/charm-defense`. Re-skin the 9 feature pages + 7 solution pages onto a shared NEW template. Re-skin `/cards`, `/wallet`, `/pricing`, `/services`, `/features`, `/about`. Preserve `/features/invoicing` as the editorial outlier — possibly keep MagicUI deps just for that page.
- **Phase C — QA + brand-rule pass (3–4 hours)**: scrub all NEW pages for "NMI" / "First Data" / EIN / registered-agent address per CLAUDE.md rules. Add reduced-motion + focus-visible to migrated forms. Build, test, deploy preview.

**Total: ~15–22 hours focused work, or 2–3 days at a steady pace.**

Strategy 1 (wipe and replace) would be faster (~4–6 hours) but loses 35 marketing pages worth of copy + all forms + all API routes + Supabase + Salesforce/Zapier wiring per CLAUDE.md. Not recommended unless those are truly being abandoned.

**Surprises worth flagging**

1. **MagicUI is 70% dead code.** 4 of 7 components are installed but never imported by any route. Only `/features/invoicing` uses any MagicUI. If invoicing is dropped, MagicUI can leave entirely.
2. **All `page.tsx` files are server components.** Every interactive element is in a child `'use client'` component. This is a clean separation — easy to migrate.
3. **The 7 solution-vertical pages and 9 feature deep-dives are template-driven** (each ~230–251 LOC, near-identical structure). A single shared template component in the NEW system could collapse 16 files into 2 (template + data array). Big simplification opportunity post-migration.
4. **The OLD `/` homepage is 775 LOC** — about 1.7× the size of the NEW homepage's section components combined. Lots of legacy content to mine for copy before discarding.
5. **`recharts`** is installed but I didn't see it imported in any obvious location during the scan. Worth a focused grep before deciding to drop.
6. **Auth route group `(auth)`** has only `/apply` and `/apply/submitted`. There's no real authenticated portal — the group naming is aspirational.
