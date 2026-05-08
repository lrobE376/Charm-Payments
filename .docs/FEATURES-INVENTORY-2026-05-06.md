# Features Pages Inventory — 2026-05-06

Read-only audit of all `src/app/(marketing)/features/*/page.tsx` deep-dive pages.

**Confirmed count: 10 pages** (the earlier "9" in the design audit miscounted — `card-present` was missed).

| # | Slug | LOC |
|---|---|---|
| 1 | ach | 226 |
| 2 | card-present | 261 |
| 3 | ecommerce | 236 |
| 4 | fraud-protection | 235 |
| 5 | invoicing | 382 |
| 6 | qr-codes | 232 |
| 7 | recurring-billing | 234 |
| 8 | tap-to-pay | 228 |
| 9 | text-to-pay | 232 |
| 10 | virtual-terminal | 229 |

Total LOC: 2,495.

---

## Per-page inventory

### 1. /features/ach (226 LOC)

- **Imports**: lucide `ArrowRight, Briefcase, Building2, CheckCircle, Home, Truck` (6 icons)
- **Hero eyebrow**: `ACH & eCHECK PROCESSING`
- **Hero headline**: `Accept Bank Transfers\nat a Fraction of the Cost`
- **Hero subhead**: ACH and eCheck processing lets you collect payments directly from customer bank accounts...
- **Hero stat pills (4)**: `$0.50 per transaction`, `$5/mo`, `B2B Ready`, `Recurring Supported`
- **Hero CTAs**: `Apply for Your Merchant Account → /apply`, `Get a Quote → /quote`
- **Sections (5)**:
  1. Hero (dark gradient)
  2. "HOW IT WORKS" / `Direct Bank Payments For Any Transaction` — 3-step icon row (Building2 → ArrowRight → CheckCircle) + 2-column checklist (10 items: 5 features + 5 fee items)
  3. "BEST FOR HIGH-TICKET TRANSACTIONS" / `Save Thousands on High-Value Payments` — 4 industry cards (B2B Payments, Real Estate & Property, Professional Services, Wholesale & Distribution)
  4. "COMMON QUESTIONS" / `ACH & eCheck FAQ` — 6 FAQ items
  5. Final CTA (dark gradient) — `Stop Paying Card Fees on High-Ticket Sales.` + 2 CTAs + disclaimer
- **Disclaimer**: standard "payment facilitator" disclaimer
- **Brand violations**: none
- **Unique**: nothing notable

### 2. /features/card-present (261 LOC)

- **Imports**: lucide `ArrowRight, Building2, CheckCircle, CreditCard, Dumbbell, Scissors, Smartphone, Store, Utensils` (9 icons)
- **Hero eyebrow**: `CARD PRESENT TERMINALS`
- **Hero headline**: `Never Lose a Sale\nWhen WiFi Goes Down`
- **Hero subhead**: terminals run on WiFi with automatic 4G cellular backup...
- **Hero stat pills (4)**: `WiFi + 4G Cellular Backup`, `$8/mo per device`, **`NMI Certified`** ⚠️, `Next-Day Funding`
- **Hero CTAs**: `Apply for Your Merchant Account → /apply`, `Ask About Free Terminal → /contact`
- **Sections (5)**:
  1. Hero
  2. "HARDWARE" / `The Right Terminal For Every Business` — **3 hardware-tier cards** (PAX A920 Pro $8/mo, iProcess Mobile Reader $2.50/mo, Free Terminal Program $0 upfront), each with feature checklist + "Best for" line + per-card CTA
  3. "BUILT FOR YOUR INDUSTRY" / `Works in Every St. Louis Business Type` — 4 industry cards (Retail Stores, Restaurants & Cafes, Salons & Barbershops, Gyms & Studios)
  4. FAQ — 6 items
  5. Final CTA — `Professional Terminals With Cellular Backup.`
- **Brand violations**: stat pill `NMI Certified` (line 49)
- **Unique**: section 2 is **3-tier hardware comparison** instead of 3-step icon row; per-card CTAs

### 3. /features/ecommerce (236 LOC)

- **Imports**: lucide `ArrowRight, BookOpen, Calendar, CheckCircle, Code, Globe, Package, RefreshCw, ShoppingCart` (9)
- **Hero eyebrow**: `E-COMMERCE GATEWAY`
- **Hero headline**: `Accept Online Payments\nWith One Line of Code`
- **Hero stat pills (4)**: `125+ Cart Integrations`, `Collect.js`, `Hosted Checkout`, `Apple Pay & Google Pay`
- **Hero CTAs**: Apply, Get a Quote
- **Sections (5)**:
  1. Hero
  2. "INTEGRATION OPTIONS" / `Three Ways to Connect Your Online Store` — **3 option cards** with badges (Collect.js / Recommended for developers, 125+ Cart Plugins / Easiest setup, Hosted Payment Page / No coding required) + 2-column checklist (10 items)
  3. "BUILT FOR ONLINE SELLERS" — 4 use-case cards (Product Stores, Digital Downloads, Booking & Appointments, Subscription Businesses)
  4. FAQ — 6 items
  5. Final CTA
- **Brand violations**: none
- **Unique**: section 2 has **badge labels** on each option card

### 4. /features/fraud-protection (235 LOC)

- **Imports**: lucide `ArrowRight, Building2, CheckCircle, Globe, Lock, Shield, ShoppingCart, Utensils, Zap` (9)
- **Hero eyebrow**: `FRAUD PROTECTION`
- **Hero headline**: `Stop Fraud Before It\nCosts You Money`
- **Hero stat pills (4)**: `Included Free`, `AI-Powered`, `Kount Advanced Available`, `Real-Time Screening`
- **Hero CTAs**: Apply, Get a Quote
- **Sections (5)**:
  1. Hero
  2. "LAYERS OF PROTECTION" / `Multiple Lines of Defense On Every Transaction` — **3 protection-tier cards** (Basic Free / Kount® Advanced $7+$0.07/txn / Payer Authentication $9+$0.09/txn), each with feature checklist
  3. "WHO NEEDS ADVANCED PROTECTION" — 4 industry cards
  4. FAQ — 6 items
  5. Final CTA
- **Brand violations**: none (Kount is a partner but unflagged)
- **Unique**: section 2 is **3-tier pricing comparison** like card-present

### 5. /features/invoicing (382 LOC) ⚠️ OUTLIER

- **Imports**: lucide (15 icons), MagicUI `SparklesText`, `BorderBeam`, `Marquee`, plus `WaitlistForm` (local)
- **Hero eyebrow**: `FOR CONSULTANTS AND FREELANCERS`
- **Hero headline**: `You're running a business. Not a collections agency.` — wrapped in **`<SparklesText>`** with custom colors
- **Hero subhead**: Send a professional invoice. Get paid the next business day...
- **Hero stat pills**: NONE (different from other 9)
- **Hero CTAs**: `Reserve Your Spot in Beta → #waitlist` (wrapped in **BorderBeam**), `Already a Charm merchant? Learn more → /contact`
- **Hero subline**: "Free for Charm merchants · Beta launching Q2 2026 · Only 100 spots"
- **Sections (8)**:
  1. Hero (dark gradient + SparklesText + BorderBeam)
  2. "IF THIS SOUNDS FAMILIAR" / `You know the feeling.` — **4 pain cards** (The 30-day silence, "I thought I paid that", The weekend spreadsheet, The PayPal shame) on dark gradient with white cards
  3. "IMAGINE INSTEAD" / `Invoices that pay themselves.` — **3 turn-blocks** on cream-warm radial-glow background
  4. "HOW IT WORKS" / `From finished work to paid. Four clicks.` — **4-step numbered list** with large `01`–`04` numerals
  5. "THE REAL COST OF WHAT YOU'RE USING NOW" — **8-row comparison table** (Feature / Current Setup / Charm Invoicing) + green callout box about $400–$800 annual savings
  6. "BUILT ON REAL INFRASTRUCTURE" — **MagicUI Marquee** with 3 trust badges: **`NMI Gateway`** ⚠️, **`First Data / Fiserv`** ⚠️, `Charm Holdings LLC`
  7. FAQ — **8 items** (vs 6 on others), conversational tone
  8. Final CTA `id="waitlist"` — wraps `<WaitlistForm cta="Reserve Your Spot" />` instead of standard 2-CTA layout; **different disclaimer** referencing "Fiserv/First Data Merchant Services"
- **Brand violations**:
  - `pageDisclaimer` (line 32-37): "Charm Payments is a registered ISO/Agent of **Fiserv/First Data** Merchant Services"
  - trustItems (lines 144-148): `{ name: 'NMI Gateway', subtitle: 'Processing $3B+ annually' }` and `{ name: 'First Data / Fiserv', subtitle: '40+ years of acquiring' }`
  - section-label "BUILT ON REAL INFRASTRUCTURE" + body copy "the same infrastructure used by major payment processors worldwide" telegraphs partner branding
- **Unique**: SparklesText hero, BorderBeam CTA, MagicUI Marquee trust strip, 8-row comparison table, beta-waitlist final CTA, 4-step section instead of 3, narrative pain→turn structure

### 6. /features/qr-codes (232 LOC)

- **Imports**: lucide `ArrowRight, CheckCircle, Globe, Music, QrCode, Smartphone, Store, Utensils` (8)
- **Hero eyebrow**: `QR CODE PAYMENTS`
- **Hero headline**: `Print It. Display It.\nGet Paid From It.`
- **Hero stat pills (4)**: `Included Free`, `Any Device`, `No App Required`, `Instant Generation`
- **Hero CTAs**: Apply, Get a Quote
- **Sections (5)**: standard skeleton — Hero / How It Works (3-step QrCode → Smartphone → CheckCircle) + 2-col checklist / Where to Use It (4 cards) / FAQ (6) / Final CTA
- **Brand violations**: none
- **Unique**: nothing

### 7. /features/recurring-billing (234 LOC)

- **Imports**: lucide `ArrowRight, BookOpen, Briefcase, Calendar, CheckCircle, Dumbbell, RefreshCw, Shield, UserPlus` (9)
- **Hero eyebrow**: `RECURRING BILLING`
- **Hero headline**: `Set It Once.\nGet Paid Every Time.`
- **Hero stat pills (4)**: `Included in All Plans`, `Any Schedule`, `Auto Retry on Failure`, `Customer Vault`
- **Sections (5)**: standard skeleton
- **Brand violations**: none

### 8. /features/tap-to-pay (228 LOC)

- **Imports**: lucide `ArrowRight, CheckCircle, DollarSign, Download, Heart, Scissors, Truck, Wrench, Zap` (9)
- **Hero eyebrow**: `TAP TO PAY`
- **Hero headline**: `Your Phone Is Your\nPayment Terminal`
- **Hero stat pills (4)**: `$0/mo`, `iPhone & Android`, `No Hardware`, `$0.10 per tap`
- **Sections (5)**: standard skeleton
- **Brand violations**: none

### 9. /features/text-to-pay (232 LOC)

- **Imports**: lucide `ArrowRight, Car, CheckCircle, DollarSign, MessageSquare, Package, Scissors, Smartphone, Stethoscope` (9)
- **Hero eyebrow**: `TEXT TO PAY`
- **Hero headline**: `Send a Text.\nGet Paid in 30 Seconds.`
- **Hero stat pills (4)**: `$5/mo`, `Any Phone`, `$0.18 per txn`, **`Powered by Authvia TXT2Pay`** ⚠️
- **Sections (5)**: standard skeleton
- **Brand violations**: stat pill names partner `Authvia` (not in your original brand-rule list, but a third-party partner — flagging for your call)

### 10. /features/virtual-terminal (229 LOC)

- **Imports**: lucide `ArrowRight, Building2, CheckCircle, Home, KeyRound, LogIn, Mail, Phone` (8)
- **Hero eyebrow**: `VIRTUAL TERMINAL`
- **Hero headline**: `Accept Payments From\nAny Browser, Anywhere`
- **Hero stat pills**: only **3** (`No Hardware Required`, `Works on Any Device`, `Visa MC Amex Discover`) — only page with 3 not 4
- **Sections (5)**: standard skeleton
- **Brand violations**: none

---

## Section comparison table

| Feature | Sections | Hero pills | Section 2 type | Has 4-card industry grid | Has FAQ | FAQ count | Has comparison table | Has stats | Has MagicUI | Has unique element | LOC |
|---|---|---|---|---|---|---|---|---|---|---|---|
| ach | 5 | 4 | 3-step icon + 2-col checklist | yes | yes | 6 | no | no | no | — | 226 |
| card-present | 5 | 4 | **3 hardware-tier cards w/ prices** | yes | yes | 6 | no | no | no | per-card CTAs | 261 |
| ecommerce | 5 | 4 | **3 integration options w/ badges** + 2-col checklist | yes | yes | 6 | no | no | no | option badges | 236 |
| fraud-protection | 5 | 4 | **3 protection tiers w/ prices** | yes | yes | 6 | no | no | no | — | 235 |
| **invoicing** | **8** | **0** | **4 pain cards** | **no** | yes | **8** | **yes (8-row)** | **savings callout** | **yes (Sparkles + BorderBeam + Marquee)** | **WaitlistForm, 4-step numerals, narrative pain→turn** | **382** |
| qr-codes | 5 | 4 | 3-step icon + 2-col checklist | yes | yes | 6 | no | no | no | — | 232 |
| recurring-billing | 5 | 4 | 3-step icon + 2-col checklist | yes | yes | 6 | no | no | no | — | 234 |
| tap-to-pay | 5 | 4 | 3-step icon + 2-col checklist | yes | yes | 6 | no | no | no | — | 228 |
| text-to-pay | 5 | 4 | 3-step icon + 2-col checklist | yes | yes | 6 | no | no | no | — | 232 |
| virtual-terminal | 5 | **3** | 3-step icon + 2-col checklist | yes | yes | 6 | no | no | no | — | 229 |

---

## Pattern analysis

**Are they templated or hand-rolled?** Hand-rolled. Each page is its own self-contained `page.tsx`, no shared template file or component. But the **9 non-invoicing pages** share an essentially identical scaffold:
- Same dark gradient hero (`linear-gradient(135deg, #082720 0%, #0c3a30 100%)`)
- Same `section-label` eyebrow
- Same `font-display` headline + `text-white/75` subhead
- Same `stats-badge` pill row
- Same `btn-accent` + `btn-outline` CTA pair
- Same Section 2 structure (3 elements + 2-column checklist of ~10 items)
- Same Section 3 structure (4 industry cards on `bg-brand-light`)
- Same FAQ component (`<FaqItem>` defined inline in each file with identical implementation)
- Same final CTA section pattern with disclaimer

The `<FaqItem>` component is **literally copy-pasted into each of the 10 files** with byte-identical implementation. Same for the `disclaimer` const. ~25 lines of duplicate code per file × 10 = ~250 lines of pure duplication.

**Section 2 has 3 sub-variants:**
- 6 pages use **3-step icon row** + 2-col feature/spec checklist (ach, qr-codes, recurring-billing, tap-to-pay, text-to-pay, virtual-terminal)
- 1 page uses **3 hardware-tier cards** with prices and per-card CTAs (card-present)
- 1 page uses **3 integration-option cards** with category badges (ecommerce)
- 1 page uses **3 protection-tier cards** with prices (fraud-protection)
- 1 page replaces section 2 with a **pain narrative** (invoicing)

**Most similar pages:** ach, qr-codes, recurring-billing, tap-to-pay, text-to-pay, virtual-terminal — pure cookie-cutter. These 6 are template-trivial.

**Most different from average:** invoicing — entirely different structure (8 sections, MagicUI bling, narrative format, beta waitlist). Will fight any unified template hardest.

**Mid-difficulty:** card-present, ecommerce, fraud-protection — same 5-section skeleton but section 2 is "3 priced/badged tier cards" instead of generic "3 icon steps." Template needs an optional "tier-cards" variant.

---

## Brand-rule violations

| File | Line | Severity | Quote |
|---|---|---|---|
| `card-present/page.tsx` | 49 | LOW | stat-badge text: `NMI Certified` |
| `text-to-pay/page.tsx` | 50 | LOW | stat-badge text: `Powered by Authvia TXT2Pay` (Authvia is a partner, not in your original list — flagging) |
| `invoicing/page.tsx` | 32–37 | **HIGH** | `pageDisclaimer`: `"Charm Payments is a registered ISO/Agent of Fiserv/First Data Merchant Services. Processing services are subject to merchant approval and compliance with applicable regulations."` |
| `invoicing/page.tsx` | 145 | **HIGH** | trustItems: `{ name: 'NMI Gateway', subtitle: 'Processing $3B+ annually' }` |
| `invoicing/page.tsx` | 146 | **HIGH** | trustItems: `{ name: 'First Data / Fiserv', subtitle: '40+ years of acquiring' }` |
| `invoicing/page.tsx` | 195, 304-308 | MEDIUM | section-label `"BUILT ON REAL INFRASTRUCTURE"` + body copy `"runs on the same infrastructure used by major payment processors worldwide"` — telegraphs partner-branding-by-implication |

The invoicing page rendering currently produces the partner names visibly in the production marketing surface — confirmed by Playwright-style HTML grep in earlier audit (rendered as `NMI Gateway` and `First Data / Fiserv` text in a marquee).

---

## Suggested data shape (TypeScript sketch)

```typescript
type FeaturePage = {
  slug: string                    // 'ach', 'tap-to-pay', etc.
  hero: {
    eyebrow: string               // "ACH & eCHECK PROCESSING"
    headline: string              // "Accept Bank Transfers\nat a Fraction of the Cost"
    subhead: string
    pills: string[]               // 3-4 stat pills; empty array = none rendered
    primaryCta?: { label: string; href: string }    // default: Apply Now → /apply
    secondaryCta?: { label: string; href: string }  // default: Get a Quote → /quote
  }
  body:
    | { kind: 'how-it-works'
        steps: { title: string; body: string }[]   // 3 steps; icons replaced by Atelier numerals
        checklists?: [string[], string[]]          // optional 2-col 5+5 list
      }
    | { kind: 'tier-cards'
        tiers: {
          label?: string                            // "MOST POPULAR" badge
          title: string
          price?: string                            // "$8/mo per device"
          description: string
          features: string[]                        // checklist
          bestFor?: string                          // "Best for: Retail, restaurants..."
          cta?: { label: string; href: string }
          variant?: 'default' | 'highlight' | 'invert'  // for the dark "Free Terminal" tier
        }[]                                         // 3 tiers
      }
  industries: {                                     // section 3 — universal across 9 of 10
    eyebrow: string                                 // "BUILT FOR..." / "PERFECT FOR" / etc.
    headline: string
    cards: { title: string; description: string }[] // exactly 4
  }
  faq: { q: string; a: string }[]                   // 6-8 items
  finalCta: {
    eyebrow: string
    headline: string
    subhead: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
  }
  // disclaimer is universal — hardcoded in template, not per-page data
}
```

For invoicing specifically, treat as a **separate template** (or a dedicated component file) since it doesn't fit. It's a beta-waitlist landing page disguised as a feature page.

---

## Design implications

### Required sections (all 9 standard pages)
- **Hero** with eyebrow + headline + subhead + 0–4 stat pills + 2 CTAs
- **Section 2 — variant block** (one of: how-it-works steps, tier-cards)
- **Section 3 — industry-fit grid** (4 cards, identical pattern across all 9)
- **FAQ** (6 items, accordion)
- **Final CTA** (mirrors hero pattern, adds disclaimer)

### Optional fields
- 4th hero pill (virtual-terminal has 3, others 4 — make pills array variable-length)
- 2-column checklist after section 2 (6 of 9 standard pages have it; tier-cards-style pages don't)
- `bestFor` line on tier-cards
- Per-tier CTA on tier-cards

### Sections that won't fit the template
- **Invoicing's pain → turn → 4-step → table → marquee → 8-FAQ → waitlist** structure. Don't bend the template to accommodate — give it its own dedicated layout. After brand-scrubbing, it could become a much-shorter standard page (drop pain/turn/marquee, keep table, swap WaitlistForm for standard CTAs), but that's a content edit + rewrite, not a templating exercise.

### Atelier component reuse
- Hero → matches **DefenseHero** pattern (forest bg, gold pill, eyebrow + serif headline + sans subhead). Direct port.
- 3-step "how it works" → matches **HowItWorks** section already in homepage (numbered cells + StoryArrow on desktop). Reuse SHELL.
- Tier-cards → **SpecCard** with `variant="default"` and a price slot we'd add (or a dedicated `<TierCard>` primitive in `components/atelier/`).
- 4-card industry grid → **SpecCard** with `title` + `description`. Direct fit.
- FAQ → currently uses `<details>` native. New Atelier version: same native `<details>` with mono labels + tracking-label headings. Small primitive.
- Final CTA → matches the homepage's **StopOverpaying** section pattern (dark ink bg with gold accent line, 2 CTAs, footnote band). Reuse.

### Recommended template file structure
```
src/components/atelier/feature-template/
  FeatureTemplate.tsx        # main page component, takes FeaturePage data
  FeatureHero.tsx            # hero with optional pills
  FeatureHowItWorks.tsx      # 3-step variant (with checklists)
  FeatureTierCards.tsx       # 3-tier variant (with optional prices, badges, CTAs)
  FeatureIndustries.tsx      # 4-card grid
  FeatureFaq.tsx             # accordion (6+ items)
  FeatureFinalCta.tsx        # closing CTA + disclaimer
src/lib/features/data.ts     # 9 feature data records
```

Each `app/(marketing)/features/<slug>/page.tsx` then becomes ~10 LOC:
```typescript
import { FeatureTemplate } from '@/components/atelier/feature-template/FeatureTemplate'
import { features } from '@/lib/features/data'
export const metadata = features.ach.metadata
export default function Page() { return <FeatureTemplate data={features.ach} /> }
```

That collapses ~2,100 LOC of duplicated scaffolding into **~600 LOC of template + ~900 LOC of data** = ~1,500 LOC total, plus invoicing in its own bespoke ~300 LOC.
