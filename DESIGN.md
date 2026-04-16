# Design System Specification: High-End Fintech Editorial

## 1. Overview & Creative North Star
**The Creative North Star: "The Financial Atelier"**
This design system moves away from the sterile, "template-ready" look of standard SaaS platforms. Instead, it treats every interface like a bespoke editorial layout. We aim for a "Financial Atelier" aesthetic: where the precision of high-speed payment technology meets the warmth and prestige of a private heritage bank.

To break the "standard grid" feel, we employ **Intentional Asymmetry**. Hero sections should feature overlapping elements—such as a data card bleeding off the edge of a container—to create a sense of scale and momentum. This system rejects the rigid constraints of boxed-in layouts in favor of breathing room and tonal depth.

---

## 2. Colors & Tonal Logic
Our palette is rooted in the "Forest Green" and "Cream" pairing to evoke growth and stability, while "Teal" and "Gold" serve as high-performance accents.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section off content. Traditional lines are "noise." Instead, define boundaries through background color shifts. A section should transition from `surface` to `surface-container-low` to signal a change in context. 

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper.
- **Base:** `surface` (#fdf9ed) serves as the desk.
- **Sectioning:** `surface-container-low` (#f7f4e7) creates subtle "wells" for secondary information.
- **Elevation:** `surface-container-lowest` (#ffffff) is used for active, interactive cards to give them a natural "pop" against the cream background.

### The "Glass & Gradient" Rule
To add "soul" to the professional interface:
- **CTAs:** Use a subtle linear gradient from `primary` (#004421) to `primary_container` (#1E5C35) at a 135-degree angle. This prevents buttons from looking "flat."
- **Overlays:** For floating navigation or modals, use `surface` at 80% opacity with a `24px` backdrop-blur. This ensures the UI feels integrated and modern.

---

## 3. Typography
We utilize a pairing of **Manrope** (Display/Headlines) and **Inter** (Body/Labels) to balance editorial sophistication with technical clarity.

| Level | Token | Font | Size | Weight | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Manrope | 3.5rem | 700 | -0.02em |
| **Headline** | `headline-md` | Manrope | 1.75rem | 600 | -0.01em |
| **Title** | `title-md` | Inter | 1.125rem | 500 | 0 |
| **Body** | `body-md` | Inter | 0.875rem | 400 | 0 |
| **Label** | `label-sm` | Inter | 0.6875rem | 600 | 0.05em (Caps) |

**Typography Philosophy:** Use `display-lg` for value propositions. The tight tracking and Manrope’s geometric nature convey authority. Use `label-sm` in all-caps for "eyebrow" text above headlines to establish a clear information hierarchy.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering**, not structural scaffolding.

- **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. The change from #f7f4e7 to #ffffff creates a "soft lift" that is felt rather than seen.
- **Ambient Shadows:** For high-priority floating elements (Modals, Popovers), use a multi-layered shadow: `0px 4px 20px rgba(28, 28, 21, 0.04), 0px 12px 40px rgba(28, 28, 21, 0.06)`. Note the tint: we use the `on-surface` (#1c1c15) color for shadows, never pure black.
- **The "Ghost Border" Fallback:** If a container lacks contrast on certain displays, use `outline_variant` at **15% opacity**. It should be a whisper of a line, not a hard boundary.

---

## 5. Components

### Buttons
- **Primary:** Forest Green gradient with `on-primary` text. Border radius: `md` (0.375rem).
- **Secondary:** `surface-container-highest` background with `primary` text. No border.
- **Tertiary:** Pure text with an underline that appears on hover using the `secondary` (#006b58) color.

### Cards (The "Financial Slate")
**Forbid the use of divider lines.** Separate header and body content using a `1.5rem` vertical spacer or a subtle background shift in the header using `surface-variant`.
- **Corner Radius:** `xl` (0.75rem) for main dashboard containers; `lg` (0.5rem) for nested items.

### Input Fields
- **State:** Default background is `surface-container-low`. 
- **Focus:** Transition background to `surface-container-lowest` and add a `2px` "Ghost Border" using the `secondary` (#006b58) color. 

### Custom Fintech Components
- **Transaction Streams:** Instead of a table with borders, use a list where every second item has a `surface-container-lowest` background. 
- **Status Pills:** Use `secondary_container` for "Success" and `tertiary_fixed` for "Pending." These should have a `full` (9999px) radius and `label-sm` typography.

---

## 6. Do's and Don'ts

### Do
- **Do** use generous whitespace (80px - 120px) between major sections to let the "Cream" palette breathe.
- **Do** use the `Gold` (#C9A96E) color sparingly for high-value data points or "Premium" tier indicators.
- **Do** align icons with the optical center of text, specifically using "Elegant" thin-stroke (1.5px) icon sets.

### Don't
- **Don't** use pure #000000 for text. Use `on-surface` (#1c1c15) to maintain the "Editorial" softness.
- **Don't** use standard `0.25rem` (default) rounding for everything; vary the scale (`xl` for cards, `md` for buttons) to create visual rhythm.
- **Don't** ever use a 100% opaque `outline` color for borders. It breaks the "Financial Atelier" illusion of layered surfaces.