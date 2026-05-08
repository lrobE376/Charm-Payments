# Color + Text Audit — 2026-05-06

Read-only audit of every page route. Counts measure the density of legacy vs Atelier signals across the page file and (when present) its tightly-coupled client component.

**Counts summary across `src/`:**
- Atelier signals (`bg-atelier-*`, `font-atelier*`, `tracking-label/spec`, `rounded-atelier*`): **381 occurrences in 25 files** — all in components, **0 in `src/app/` page files** (pages reach Atelier classes only through their imports).
- Legacy signals (`bg-brand-*`, `text-brand-*`, `btn-primary`, `font-display`, `font-sans`, `--paragraph`, `--heading`, `display-lg`, etc.): **775 occurrences in 50 files**.
- Off-palette hardcoded hex codes (#082720, #0c3a30, #0f4a3d, #004421, #C9A96E, #0a1f14, #0f2819, #fdf9ed, #f7f4e7, #1c1c15, #3d3d2e): **88 occurrences in 26 files**.
- `font-display` (DM Serif Display) + `font-sans` (Inter Tight) class usage: **117 occurrences in 21 files**.

---

## 1. Per-page classification table

Legend: 🟢 PURE ATELIER · 🟡 MOSTLY ATELIER · 🟠 MIXED · 🔴 PURE LEGACY · ⚪ NEUTRAL

| Route | Class | Legacy hits | Color summary | Font summary | Sample text |
|---|---|---:|---|---|---|
| `/` | 🟢 PURE ATELIER | 0 | bg-atelier-forest-deep, atelier-cream, atelier-gold, atelier-paper | font-atelierSans + font-atelierSerif + font-atelierMono everywhere | "Your Processor Is Charging More Than You Know." · "§03 WHY WE WIN" · "Stop overpaying today" |
| `/about` | 🔴 PURE LEGACY | 19 | bg-brand-dark hero, text-brand-accent eyebrow, gray text, --paragraph body | font-display titles (DM Serif Display), default sans body (Inter Tight) | "About Us" · "Built in St. Louis. Built for Main Street." · "Charm Payments gives independent merchants a transparent, locally-owned alternative..." |
| `/apply` | 🔴 PURE LEGACY | (form: 8) | wrapped in (auth) layout: bg-brand-light wrapper, white form bg | apply-application-form uses default sans + brand-dark labels | "Apply for a Merchant Account" · standard form fields · "Submit" |
| `/apply/submitted` | 🔴 PURE LEGACY | 4 | brand-accent CheckCircle, gray-600 text, brand-dark links | default font-sans, no font-display | "Application Submitted" · "Thank you. Our underwriting team typically reviews..." |
| `/cards` | 🔴 PURE LEGACY | **89** | brand-dark, brand-accent, brand-card, brand-light all over; #082720/#0c3a30 hero gradient inline | font-display (8 places), default sans, .charm-card utility | "Charm Cards — Digital Business Cards" · "Premium digital business cards with Apple & Google Wallet..." |
| `/charm-defense` | 🟢 PURE ATELIER | 0 | atelier-forest-deep, atelier-gold, atelier-cream, atelier-ink | font-atelierSerif headlines, font-atelierMono labels, font-atelierSans body | "Chargeback defense, included." · "INCLUDED · NO ADD-ON · NO UPCHARGE" · "DELTA · MONTHLY" |
| `/contact` | 🔴 PURE LEGACY | 26 (client) | brand-dark hero, brand-accent accents, gray-* text, lucide icons | font-display headers, default sans body | "Get Approved in 24–48 Hours" · "Contact Us" · "Submit" |
| `/faq` | 🔴 PURE LEGACY | 13 (client) | brand-dark hero, brand-accent eyebrow, gray text | font-display titles, default sans body | "Frequently Asked Questions" · "Pricing & Fees" tab · "What are your processing rates?" |
| `/features` (index) | 🔴 PURE LEGACY | **63** | brand-dark hero, brand-accent eyebrows, brand-light section bg | font-display (18 places), default sans, .charm-card | "Payment Processing Features" · "Every feature included with your Charm Payments merchant account..." · "See All Features" |
| `/features/ach` | 🟢 PURE ATELIER | 0 | atelier-forest-deep hero, atelier-paper sections, atelier-gold accents | font-atelierSerif headlines, font-atelierMono "STEP 01" labels | "Accept bank transfers at a fraction of the cost." · "WHO USES ACH" eyebrow · "Apply Now ↗" |
| `/features/card-present` | 🟢 PURE ATELIER | 0 | atelier-forest-deep, atelier-paper, gold-on-forest inverted tier | full Atelier typography | "Never lose a sale when WiFi goes down." · "MOST POPULAR" badge · "PAX A920 Pro" tier |
| `/features/ecommerce` | 🟢 PURE ATELIER | 0 | atelier-forest-deep, atelier-paper, badged tier cards | full Atelier typography | "Accept online payments with one line of code." · "FOR DEVELOPERS" badge |
| `/features/fraud-protection` | 🟢 PURE ATELIER | 0 | atelier-forest-deep, atelier-paper | full Atelier typography | "Stop fraud before it costs you money." · "Kount® Advanced — $7/mo" |
| `/features/invoicing` | 🔴 PURE LEGACY | **32** + MagicUI | hero gradient `#082720→#0c3a30`, pain section `#0a1f14→#0f2819`, cream `#fdf9ed`, dark `#004421` callout | font-display titles (12 places), `.label-sm`, `.headline-md`, `.title-md`, `.body-md`, SparklesText, BorderBeam | "You're running a business. Not a collections agency." · "Invoices that pay themselves." · trust marquee with **NMI Gateway / First Data**  ⚠️ |
| `/features/qr-codes` | 🟢 PURE ATELIER | 0 | full Atelier | full Atelier typography | "Print it. Display it. Get paid from it." |
| `/features/recurring-billing` | 🟢 PURE ATELIER | 0 | full Atelier | full Atelier typography | "Set it once. Get paid every time." |
| `/features/tap-to-pay` | 🟢 PURE ATELIER | 0 | full Atelier | full Atelier typography | "Your phone is your payment terminal." |
| `/features/text-to-pay` | 🟢 PURE ATELIER | 0 | full Atelier | full Atelier typography | "Send a text. Get paid in 30 seconds." |
| `/features/virtual-terminal` | 🟢 PURE ATELIER | 0 | full Atelier | full Atelier typography | "Accept payments from any browser, anywhere." |
| `/gateway` | 🔴 PURE LEGACY | 34 | brand-dark, brand-accent, lucide icons (Zap/Shield/Globe/BarChart3) | font-display titles, font-sans body | "Gateway & Products" · metadata description: **"Powered by NMI"** ⚠️ · "Built on NMI" |
| `/gateway/features` | 🔴 PURE LEGACY | 16 | brand-dark hero, gray text | font-display + sans | "Gateway Features" · feature grid |
| `/gateway/hardware` | 🔴 PURE LEGACY | 19 | brand-dark hero, brand-card tiles | font-display + sans | "Payment Hardware" · PAX A920 / Lane terminals |
| `/privacy` | ⚪ NEUTRAL | 11 | text-brand-dark headers, .text-paragraph body | inline `font-family: 'Outfit, sans-serif'` style on h1/h2 | "Privacy Policy" · "Last updated: March 2026" — long legal prose |
| `/quote` | 🔴 PURE LEGACY | 7 | bg-brand-dark hero, text-brand-accent eyebrow, gray-700 list | default font-sans, no font-display | "Get a merchant processing quote" · "Rate review" eyebrow · "Share a few numbers — we'll line-item how Charm compares..." |
| `/services` | 🔴 PURE LEGACY | **39** | brand-dark, brand-accent, brand-light, charm-card | font-display (8 places), default sans, lucide-heavy | "Payment Processing Solutions" · "Charm Payments merchant solutions — virtual terminal, invoicing..." |
| `/solutions/beauty` | 🔴 PURE LEGACY | 38 | brand-dark hero gradient, brand-accent eyebrow, brand-light section, charm-card | font-display titles (7 places), default sans body | "Square Charges Salons For Things They'll Never Use." · "Made for Salons" eyebrow |
| `/solutions/ecommerce` | 🔴 PURE LEGACY | 38 | same template | same | shared template |
| `/solutions/high-risk` | 🔴 PURE LEGACY | 5 | brand-dark, but smaller — different page structure | font-display only 1 place (smaller hero?) | "High-Risk Merchant Accounts" |
| `/solutions/mobile` | 🔴 PURE LEGACY | 38 | same shared template | same | "Square charges you the same flat rate on a debit card as a premium rewards card..." |
| `/solutions/restaurants` | 🔴 PURE LEGACY | 38 | same template | same | shared template |
| `/solutions/retail` | 🔴 PURE LEGACY | 38 | same template | same | shared template |
| `/solutions/services` | 🔴 PURE LEGACY | 38 | same template | same | shared template |
| `/terms` | ⚪ NEUTRAL | 13 | text-brand-dark headers, .text-paragraph body | inline `Outfit` font style | "Terms & Conditions" — long legal prose |
| `/unsubscribe` | 🔴 PURE LEGACY | 3 | text-brand-dark links, gray-* body | default font-sans (no font-display) | "Unsubscribe" · "Enter your email address to unsubscribe..." |

**Plus root-level:**
| File | Class | Notes |
|---|---|---|
| `src/app/not-found.tsx` | 🔴 LEGACY | bg-brand-light + brand-dark/20 404 numeral |
| `src/app/error.tsx` | 🔴 LEGACY | bg-brand-light + .btn-primary + .btn-outline |
| `src/app/loading.tsx` | 🔴 LEGACY | bg-brand-light + brand-dark spinner |
| `src/app/(marketing)/loading.tsx` | 🔴 LEGACY | bg-brand-dark hero skeleton |

---

## 2. Inconsistency hotspots

### A. Chrome–body mismatch hotspots
Every 🔴 page in the (marketing) route group is wrapped by **HeaderAtelier (cream-warm + atelier-gold)** and **FooterAtelier (atelier-forest-deep + cream)** but renders body content on the legacy palette. The visual jolt is severe — different fonts (Manrope vs Inter Tight), different greens (#1E5C35 atelier-forest vs #004421 legacy --primary), different golds (#BD9952 atelier-gold vs #C9A96E legacy --gold).

The worst-experienced offenders by traffic + visual mismatch (top 5):

1. **`/cards`** — 89 legacy hits. New chrome → `#082720→#0c3a30` legacy gradient hero on the cards page → `bg-brand-card` cream sections → atelier footer. Three palette eras visible in one page.
2. **`/features` (index)** — 63 legacy hits, target of "See All Features →" CTA from new mega-menu. First impression after the menu click is the legacy palette.
3. **`/services`** — 39 legacy hits, target of "All Solutions →" mega-menu CTA. Same problem as `/features`.
4. **`/gateway`** — 34 legacy hits + active `Powered by NMI` brand-rule violation in metadata.
5. **`/about`** — 19 legacy hits, has brand-rule violation in metadata: "Built on NMI and First Data". Newly surfaced in footer "Quick Links" (Phase 2C-2 menu fix), so traffic increased.

### B. Internal-mix hotspots

**Zero pages classified as 🟠 MIXED at the file level** — the dichotomy is binary. Every page file is either purely Atelier (via template or section composition) or purely legacy.

The exception worth flagging:
- **`/features/invoicing`** is purely legacy in classes/typography but uniquely uses MagicUI (SparklesText, BorderBeam, MagicUI Marquee) — three custom JS libraries that don't exist on any other page. It's not "mixed legacy + atelier" but it IS "legacy + animation bling". The rest of the site has settled on GSAP scroll-trigger; this page is the lone MagicUI surface.

### C. Text-weight inconsistency

Sibling pages render in radically different typography:

| Location A | Location B | Difference |
|---|---|---|
| `/features/ach` headline (Fraunces 36–44px italic accent) | `/features` index headline (DM Serif Display 36px, no italic accent) | Visitors clicking from index → ach page see two different serifs claiming to be the same brand |
| `/features/invoicing` H1 wrapped in `<SparklesText>` (DM Serif Display + animation glitter) | `/features/ach` H1 (clean Fraunces, no animation) | Same product family, two completely different art directions |
| `/charm-defense` uses Fraunces italic accent (`<em className="italic text-atelier-gold">`) | `/about` uses default font-sans bold for emphasis | Same "narrative-driven page" pattern, different typographic systems |
| `/gateway` and `/gateway/features` (DM Serif Display) | linked from new HeaderAtelier `Gateway` mega-menu using Manrope mono uppercase | Header→destination font transition is jarring |

---

## 3. Color drift table (off-palette hex codes — page files only, not orphan components)

| File | Hex | Where it's used | Suggested replacement |
|---|---|---|---|
| `/about/page.tsx` | `#0c3a30` | (referenced via `bg-brand-dark` Tailwind class — see globals.css mapping) | `bg-atelier-forest-deep` (#0F3520) |
| `/cards/page.tsx` | `#082720` | inline hero gradient | `bg-atelier-forest-deep` |
| `/cards/page.tsx` | `#0c3a30` | inline hero gradient stop | `bg-atelier-forest-deep` (drop the gradient — Atelier uses solid forest) |
| `/cards/page.tsx` | `#fdf9ed` | brand-card sections | `bg-atelier-paper` (#FAFAF7) |
| `/contact/contact-page-client.tsx` | `#082720` / `#0c3a30` | inline hero gradient | `bg-atelier-forest-deep` |
| `/faq/faq-page-client.tsx` | `#082720` / `#0c3a30` | inline hero gradient | `bg-atelier-forest-deep` |
| `/features/page.tsx` | `#082720` / `#0c3a30` / `#0f4a3d` | inline hero + final-CTA gradients | `bg-atelier-forest-deep` (solid) |
| `/features/invoicing/page.tsx` | `#082720` / `#0c3a30` | inline hero gradient | `bg-atelier-forest-deep` |
| `/features/invoicing/page.tsx` | `#0a1f14` / `#0f2819` | pain section gradient | `bg-atelier-ink` or `bg-atelier-forest-deep` |
| `/features/invoicing/page.tsx` | `#fdf9ed` | "imagine instead" cream section | `bg-atelier-cream-warm` (#F5F2EA) |
| `/features/invoicing/page.tsx` | `#004421` | dark green callout box | `bg-atelier-forest-deep` |
| `/features/invoicing/page.tsx` | `#C9A96E`, `#E8C99A` | SparklesText colors | `var(--atelier-gold)` (#BD9952) — drop SparklesText entirely on reskin |
| `/features/invoicing/page.tsx` | `#1E5C35` | TrustItem icon color (hard-coded literal hex) | `var(--atelier-forest)` — already matches numerically, just use the var/class |
| `/features/invoicing/page.tsx` | `#1c1c15` / `#3d3d2e` / `#fafaf8` | text/bg colors in comparison table | `text-atelier-ink` / `text-atelier-ink-soft` / `bg-atelier-paper` |
| `/services/page.tsx` | `#082720` / `#0c3a30` | inline hero gradient | `bg-atelier-forest-deep` |
| `/solutions/*/page.tsx` (×7) | `#082720` / `#0c3a30` | inline hero gradient (shared template) | `bg-atelier-forest-deep` |
| `/gateway/page.tsx` | `#0c3a30` | brand-dark via Tailwind | `bg-atelier-forest-deep` |
| `/gateway/features/page.tsx` | (same) | (same) | (same) |
| `/gateway/hardware/page.tsx` | (same) | (same) | (same) |
| `/quote/page.tsx` | `#0c3a30` | brand-dark via Tailwind | `bg-atelier-forest-deep` |
| `globals.css` (legacy palette defs) | `#fdf9ed`, `#f7f4e7`, `#ede9d4`, `#004421`, `#006b58`, `#d4f0e8`, `#fff0c6`, `#1c1c15`, `#3d3d2e`, `#C9A96E` | --surface, --primary, --secondary, --secondary-container, --tertiary-fixed, --on-surface*, --gold tokens, etc. | All legacy CSS vars — keep until pages reskin, then strip in cleanup phase |

**Summary by hex:**
- `#082720` (legacy hero gradient start) — **17 files** (every legacy page with the dark-gradient hero)
- `#0c3a30` (legacy hero gradient end) — **17 files**
- `#0f4a3d` (legacy 3-stop final-CTA gradient) — **6 files**
- `#fdf9ed` (legacy brand-card cream) — multiple
- `#004421` (legacy --primary, ≠ atelier-forest #1E5C35) — multiple
- `#C9A96E` (legacy --gold, ≠ atelier-gold #BD9952) — multiple

---

## 4. Text-style drift table

### Pages using `font-display` (DM Serif Display, legacy) — 117 hits across 21 files

| File | font-display hits |
|---|---|
| `/features/page.tsx` | 18 |
| `/features/invoicing/page.tsx` | 12 |
| `/cards/page.tsx` | 8 |
| `/services/page.tsx` | 8 |
| `/solutions/beauty/page.tsx` | 7 |
| `/solutions/ecommerce/page.tsx` | 7 |
| `/solutions/restaurants/page.tsx` | 7 |
| `/solutions/retail/page.tsx` | 7 |
| `/solutions/services/page.tsx` | 7 |
| `/solutions/mobile/page.tsx` | 7 |
| `/solutions/high-risk/page.tsx` | 1 |
| `/contact/contact-page-client.tsx` | 6 |
| `/faq/faq-page-client.tsx` | 3 |
| `cards-whats-included-section.tsx` | 5 |
| `cards-testimonials-section.tsx` | 3 |
| `cards-faq-section.tsx` | 2 |
| `HeroVisual.tsx` (orphan) | 2 |
| `StatsBar.tsx` (orphan) | 1 |
| `SavingsCalculator.tsx` (orphan) | 1 |
| `app/layout.tsx` | 1 (skip-link, harmless) |
| `globals.css` | 4 (defs) |

**Suggested replacement:** `font-atelierSerif` (Fraunces). The visual difference between DM Serif Display and Fraunces is dramatic — DM Serif Display has high contrast and high stroke variation; Fraunces is more measured and editorial. Side-by-side they don't read as the same brand.

### Pages using legacy text utilities (`.display-lg`, `.headline-md`, `.title-md`, `.body-md`, `.label-sm`)

Active page files:
| File | Notes |
|---|---|
| `/features/invoicing/page.tsx` | Uses `.label-sm` (line 254) for step labels |
| `globals.css` | Definitions — keep until all pages reskin |
| `Navbar.tsx` (orphan) | Uses `.label-sm` |
| `StatsBar.tsx` (orphan) | Uses `.display-lg` |
| `HeroVisual.tsx` (orphan) | Uses `.label-sm` |

**Active impact: just `/features/invoicing`.** Once invoicing reskins (next session), these utilities have no live consumers and can be deleted from `globals.css` along with the orphan components.

### Pages using `font-sans` Tailwind class without `font-atelierSans`

`font-sans` resolves to `Inter Tight, system-ui, sans-serif` via the existing Tailwind config. Pages relying on this default get **Inter Tight**, not Manrope. Every legacy page implicitly hits this.

This is harder to count without a more specific grep, but per the design audit: every 🔴 page renders body text in Inter Tight while every 🟢 page renders in Manrope. The mismatch is the loudest visible inconsistency on the site.

---

## 5. Pages that look correct (🟢 PURE ATELIER reference set)

11 pages — use these as the visual reference for what "right" looks like:

- `/`
- `/charm-defense`
- `/features/ach`
- `/features/card-present`
- `/features/ecommerce`
- `/features/fraud-protection`
- `/features/qr-codes`
- `/features/recurring-billing`
- `/features/tap-to-pay`
- `/features/text-to-pay`
- `/features/virtual-terminal`

---

## 6. Pages that need urgent reskin (🔴 PURE LEGACY, high traffic)

By visibility / impact:

1. **`/features` (index)** — 63 legacy hits, target of mega-menu "See All Features →" CTA. First page visitors see when exploring products from the new nav.
2. **`/services`** — 39 legacy hits, target of "All Solutions →" mega-menu CTA.
3. **`/cards`** — 89 legacy hits (heaviest single page), prominent product, listed in new Footer's "Solutions" column.
4. **`/gateway`** — 34 legacy hits + brand-rule violation ("Powered by NMI" in metadata).
5. **`/gateway/features` and `/gateway/hardware`** — 16 + 19 hits, linked from mega-menu.
6. **`/about`** — 19 legacy hits, brand-rule violation, surfaced in footer Quick Links.
7. **`/contact`** — 26 hits in client component, primary conversion path.
8. **`/quote`** — 7 hits, but every CTA in the redesigned site lands here. High traffic.
9. **`/faq`** — 13 hits in client component.
10. **`/solutions/* (×7)`** — 38 hits each (shared template — single template port reskins all 7).
11. **`/features/invoicing`** — 32 legacy hits + 12 font-display + 17 hex codes + 3 brand-rule violations + MagicUI bling. Needs bespoke reskin (already flagged).

Plus root-level: `not-found.tsx`, `error.tsx`, `loading.tsx`, `(marketing)/loading.tsx` — small files but visible during error/transition states.

---

## 7. Things that surprised me

- **The dichotomy is binary.** No 🟠 MIXED pages exist at the file level. Every page is either fully Atelier (via template/section composition) or fully legacy. The visual mismatch is structural (chrome vs body), not within any page file.
- **All 7 `/solutions/*` pages have identical legacy-class density (38 hits)** — they share a single template pattern. One templated reskin (similar to the feature-template work) should cover all 7.
- **`/solutions/high-risk` is the outlier with only 5 hits** — different page structure, simpler. Worth verifying it isn't using yet a third template.
- **`/cards` is the densest single page** — 89 legacy hits, 8 font-display references, 3 cards-* sub-components, plus inline hex codes. Its reskin will be the largest single-page lift after invoicing.
- **`/features/invoicing` has a hex code `#1E5C35` hardcoded** (the trust-item icon color) that *coincidentally* matches `--atelier-forest`. Numerically correct but stylistically a tell that legacy code drifted toward Atelier values without using the system.
- **Two completely different "dark green" values are in active use site-wide:**
  - Atelier uses `#0F3520` (atelier-forest-deep) for hero/CTA backgrounds and `#1E5C35` (atelier-forest) for accents
  - Legacy uses `#082720→#0c3a30` (a 2-stop gradient) for hero backgrounds and `#004421` (--primary) for accents
  - The legacy gradient (`#082720→#0c3a30`) is **darker** than atelier-forest-deep (#0F3520). On the same page, the legacy hero feels heavier than the new HeaderAtelier strip above it.
- **Two completely different "gold" values are in active use:**
  - `#BD9952` (atelier-gold) — slightly desaturated, more aged-brass
  - `#C9A96E` (legacy --gold/--brand-accent) — brighter, more buttercream
  - Per-page, the gold is consistent (a 🔴 page uses #C9A96E throughout; a 🟢 page uses #BD9952 throughout). Cross-page navigation reveals the drift.
- **Legal pages (`/privacy`, `/terms`) use an inline `font-family: 'Outfit, sans-serif'` style.** Outfit isn't loaded anywhere — the browser falls back to system sans. Effectively renders as system-ui, neither Inter Tight nor Manrope. A third typography on a small-but-visible surface.
- **Tailwind's `font-sans` default = Inter Tight (per `tailwind.config.ts`).** So every page that doesn't explicitly specify `font-atelierSans` falls back to Inter Tight on body text. This is the loudest cross-page mismatch — the body font literally changes between every 🔴 and 🟢 page.
- **`font-display` (DM Serif Display) appears 117 times across 21 files.** Replacing each with `font-atelierSerif` (Fraunces) is mechanical, but the visual rebalancing per-page may need fine-tuning since the two faces have different metrics.
- **The `/solutions/*` pages all open with hostile copy aimed at Square** ("Square charges salons for things they'll never use" etc.) — the voice is sharp and merchant-loyal, distinct from the rest of the site. Reskinning is fine; the copy direction is intentional and worth preserving.
- **`/quote` has only 7 legacy hits**, much lower than its 200+ LOC suggests, because the page is mostly the `<QuoteForm />` component. The form itself has 24 legacy hits — most of the legacy density lives in the form, not the wrapper page. Reskinning `/quote` means reskinning `quote-form.tsx`.
- **`/apply` has 0 legacy hits in the page file** because it's a 5-line wrapper around `apply-application-form.tsx` (8 legacy hits). The auth layout (bg-brand-light) wrapping it is the bigger visual issue than the form itself.
- **`/charm-defense` and `/features/charm-defense` (charm-defense components) account for 4 + 13 + 32 = 49 of the 381 Atelier-class occurrences** — heavy use of the system. The Atelier components are pulling their weight.
