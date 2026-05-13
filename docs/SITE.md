# Elarion Studios — Site Documentation

## Overview

**elarionstudios.org** is the public marketing and studio website for Elarion Studios, a digital product company building calm, intelligent tools for personal growth and intentional living. The site's primary job is to introduce the studio and showcase **Luren**, the flagship app — a personal alignment system coming to Android and iOS.

The site is pre-launch. There are no sign-up flows, paywalls, or dashboards. It is a marketing and identity surface that will evolve as the product ships.

---

## Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 16 (App Router) | File-based routing under `app/` |
| Styling | Tailwind CSS v4 | `@theme inline` for design tokens — no `tailwind.config.ts` |
| Animation | Framer Motion v12 | See animation notes below |
| Fonts | Google Fonts via `next/font` | Poppins (body) + Playfair Display (headings) |
| Deployment | Vercel | Auto-deploys on push to `master` |
| Domain | elarionstudios.org | DNS managed via Squarespace; Vercel handles SSL |
| Repo | GitHub | github.com/GiovanniVEstrada/elarion-studios-web |

---

## Design System

### Color Tokens (`app/globals.css`)

All colors are defined via Tailwind v4's `@theme inline` block and are available as `text-*`, `bg-*`, `border-*` classes.

| Token | Hex | Use |
|---|---|---|
| `luren-surface` | `#06131f` | Page background |
| `luren-panel` | `#0a2030` | Card / glass panel backgrounds |
| `luren-cyan` | `#74d8ff` | Primary accent, links, highlights |
| `luren-teal` | `#4ecdc4` | Secondary accent |
| `luren-mint` | `#7ef0d3` | Tertiary accent |
| `luren-purple` | `#b58cff` | Journal / creative accent |
| `luren-heading` | `#ecf9ff` | Heading text |
| `luren-body` | `#b6d0da` | Body text |
| `luren-muted` | `#8ca8b3` | Labels, captions, subdued text |

### Typography

- **Body / UI text:** Poppins — weights 300 (light), 400, 500, 600, 700 — accessed via `font-sans`
- **Headings:** Playfair Display italic — accessed via `font-heading italic`
- **Label style:** `text-xs font-semibold uppercase tracking-[0.22em] text-luren-muted`

### Orbs

Ambient glowing background blobs. Defined via `.orb` class in `globals.css` (absolute position, `border-radius: 9999px`, `filter: blur(90px)`). Three named keyframe animations: `float-a`, `float-b`, `float-c`. All orb animations are disabled automatically when the OS has "Reduce Motion" enabled.

---

## Animation System (`lib/motion.ts`)

**Critical:** Framer Motion v12 has a TypeScript breaking change — the `ease` prop no longer accepts string values like `"easeOut"`. It requires a cubic bezier array.

The shared ease constant is:
```ts
export const ease = [0.22, 1, 0.36, 1] as const;
```

Import and use it everywhere:
```tsx
import { ease } from "@/lib/motion";
// ...
transition={{ duration: 0.7, ease }}
```

Never pass `ease: "easeOut"` or similar strings — TypeScript will error at build time.

The `useReducedMotion()` hook from Framer Motion is used in animated components to disable motion for users who have "Reduce Motion" enabled.

---

## Site Architecture

```
elarionstudios.org/
├── /               → Studio homepage
├── /luren          → Luren product page (flagship)
├── /apps           → All products grid
├── /about          → Studio info & philosophy
├── /contact        → Contact categories (mailto links)
└── /privacy        → Privacy policy
```

### Pages in detail

#### `/` — Studio Homepage (`app/page.tsx`)
Introduces the studio as a whole. Sections in order:
1. **StudioHero** — Full-viewport hero with CTA to `/luren` and `/apps`
2. **FeaturedProduct** — Luren spotlight with features and status badge
3. **FutureApps** — Grid of all 4 products from `lib/products.ts`
4. **StudioMission** — Philosophy paragraph linking to `/about`
5. **Footer**

#### `/luren` — Luren Product Page (`app/luren/page.tsx`)
The primary pre-launch landing page for the app. Sections:
1. **LurenHero** — Full-viewport hero with App Store + Google Play CTA buttons, 3 animated orbs
2. **LurenFeatures** — 5 glass cards (Tide, Journal, Actions, Reflect, Calendar)
3. **AppPreview** — Interactive screenshot carousel (see below)
4. **Footer**

#### `/apps` — Products Grid (`app/apps/page.tsx`)
Lists all products from `lib/products.ts` as `ProductCard` components in a 2-column grid.

#### `/about` — About (`app/about/page.tsx`)
Static page covering Elarion Studios' values and mission.

#### `/contact` — Contact (`app/contact/page.tsx`)
Four mailto-link cards (General, Early Access, Press & Media, Business) all routing to `contact@elarionstudios.com` with pre-filled subject lines.

#### `/privacy` — Privacy Policy (`app/privacy/page.tsx`)
Full 9-section privacy policy covering data collection, usage, storage, user rights, and contact.

---

## Component Inventory

### Navigation (`components/navigation/`)

**`Navbar.tsx`** — `"use client"`. Fixed to top of every page via `app/layout.tsx`. Features:
- Glassmorphism style: `backdrop-filter: blur(18px)`, semi-transparent dark background
- `usePathname()` for active link highlighting (active = `text-luren-cyan`)
- Links: Home, Luren, Apps, About, Contact
- Desktop CTA: "Explore Luren" pill button
- Mobile: hamburger toggle with AnimatePresence dropdown

### Sections (`components/sections/`)

| Component | Used on | Description |
|---|---|---|
| `StudioHero.tsx` | `/` | Full-viewport studio hero, dual CTAs, 3 floating orbs |
| `FeaturedProduct.tsx` | `/` | Luren spotlight with feature bullets and status badge |
| `FutureApps.tsx` | `/` | 4-card product grid (data from `lib/products.ts`) |
| `StudioMission.tsx` | `/` | Philosophy section, links to `/about` |
| `LurenHero.tsx` | `/luren` | Full-viewport Luren hero; two store CTA buttons |
| `LurenFeatures.tsx` | `/luren` | 5 glass cards with scroll-stagger animation |
| `AppPreview.tsx` | `/luren` | Screenshot carousel (see below) |
| `AboutStudio.tsx` | `/about` | Studio identity and values |
| `Footer.tsx` | All pages | Copyright + Privacy Policy + Contact links |

### UI Primitives (`components/ui/`)

| Component | Description |
|---|---|
| `OrbBackground.tsx` | Server component; renders an array of orb configs as positioned `div`s |
| `GlassCard.tsx` | Reusable glassmorphism card panel |
| `ProductCard.tsx` | `"use client"`. Status-aware product card using `lib/products.ts` types |
| `CTAButton.tsx` | `variant="primary" | "ghost"` Link-based button |

---

## App Preview Component (`components/sections/AppPreview.tsx`)

The most interactive component on the site. Two layouts depending on screen size:

**Mobile (`sm:hidden`):** Single-phone carousel
- AnimatePresence with swoop animation (x/y/rotate/scale enter+exit)
- Auto-advances every 3200ms
- Swipeable via Framer Motion `drag="x"` — swipe threshold: 60px offset or 400px/s velocity
- Pauses auto-advance for 5 seconds on swipe or dot tap, then resumes
- Dot indicators at bottom; clicking a dot also pauses+resumes

**Desktop (`hidden sm:flex`):** Three phones side by side
- Left: −6° rotation, 0.92 scale
- Center: 0° rotation, 1.0 scale (foreground)
- Right: +6° rotation, 0.92 scale
- Each animates in on scroll via `whileInView`

**Screens (in order):**
1. Tide — `tideUI.png` — Today view with weekly energy wave and task list
2. Insights — `insightsUI.png` — Mood chart, avg mood, reflections stats
3. Journal — `journalUI.png` — Reflect log with dated entries

Screenshots live in `public/screenshots/`. The `PhoneShell` component renders the image if present, or a gradient placeholder if not. `objectPosition: "top"` ensures the app header is always visible.

---

## Data Layer (`lib/products.ts`)

Single source of truth for all product data. Adding an entry here automatically propagates to the `/apps` page, the FutureApps section on the homepage, and ProductCard rendering.

```ts
interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: "active" | "in-development" | "concept" | "future";
  href?: string;        // internal link (e.g. "/luren") — omit for unlaunched
  accentColor: string;  // hex, used for card glow and accent
}
```

**Status labels** (from `statusConfig`):
- `active` → "Coming to Android & iOS" (cyan)
- `in-development` → "In Development" (teal)
- `concept` → "Concept" (purple)
- `future` → "Coming Soon" (muted)

**Current products:**
1. Luren — active — `/luren`
2. Creative Systems — in-development
3. Shared Life Planning — future
4. Reflection Tools — future

---

## Content Update Guide

### Swap a screenshot
Replace the file in `public/screenshots/` with the same filename. No code changes needed.

### Update carousel screen order or labels
Edit the `screens` array at the top of `components/sections/AppPreview.tsx`.

### Update copy (hero, features, etc.)
All text is inline in the component files. The Luren hero copy is in `LurenHero.tsx`. Feature descriptions are in `LurenFeatures.tsx`.

### Add a new product
Add an entry to the `products` array in `lib/products.ts`. It will appear automatically on `/apps` and the FutureApps section. To give it a dedicated page, create `app/<slug>/page.tsx`.

### Update store button links
When the App Store and Google Play listings go live, update the two `href="#"` links in `components/sections/LurenHero.tsx` (lines ~81 and ~92).

### Add an OG image per page
Place an `opengraph-image.tsx` (generated) or `opengraph-image.png` (static) inside any route folder. The root `app/opengraph-image.tsx` covers all pages as a fallback.

---

## Deployment

**Trigger:** Push to `master` branch on GitHub  
**Pipeline:** Vercel detects the push, runs `next build`, deploys to CDN edge  
**Domain:** `elarionstudios.org` — A record points to Vercel's IP; CNAME for `www`  
**DNS host:** Squarespace (Google Workspace email records preserved)  
**Build time:** ~60–90 seconds from push to live

To deploy: commit your changes and push to `master`. No manual steps required.

---

## Pre-Launch Checklist

- [ ] Update App Store button link in `LurenHero.tsx` when listing is live
- [ ] Update Google Play button link in `LurenHero.tsx` when listing is live
- [ ] Remove "Final UI subject to change." disclaimer in `AppPreview.tsx`
- [ ] Review and finalize Privacy Policy text before store submission
- [ ] Add per-page OG images for `/luren` and `/apps` for better social sharing
- [ ] Add `favicon.ico` and `apple-touch-icon.png` to `app/` for home screen installs
- [ ] Consider adding an email waitlist capture before launch
