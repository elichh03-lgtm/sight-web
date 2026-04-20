# Sight — marketing site

Three-page marketing site for Sight, a Boulder-based Generative Engine Optimization (GEO) agency.

- `/` — Home (hero, problem, framework, pricing, CTA)
- `/audit` — Audit landing with lead form → `POST /api/lead`
- `/contact` — Contact info + form → `POST /api/contact`

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Inter via `next/font`
- Lucide icons
- Framer Motion for entrance + hover animations
- Zod for request validation

## Run

```bash
npm install
npm run dev          # http://localhost:3000
```

To use the existing parent `launch.json` config:

```bash
npm run dev -- --port 3100   # http://localhost:3100
```

## Build

```bash
npm run build
npm start
```

## Backend

Form submissions are validated server-side with Zod and appended as JSON records to `data/leads.json` and `data/contacts.json`. The `data/` directory is auto-created on first write and is gitignored.

Each route also includes:

- An invisible honeypot field (`hp`) — submissions with content are silently dropped.
- An in-memory rate limit (5 req/min per IP).
- Per-field validation errors returned as `{ fieldErrors: { email: "..." } }` for inline display.

To wire email delivery later, swap the `console.log` in `app/api/lead/route.ts` and `app/api/contact/route.ts` for a Resend / SMTP call.

## Project layout

```
app/
  layout.tsx, globals.css, page.tsx
  audit/page.tsx
  contact/page.tsx
  api/
    lead/route.ts
    contact/route.ts
components/
  SiteHeader.tsx, SiteFooter.tsx
  MockChat.tsx
  Reveal.tsx        # scroll-reveal + stagger primitives
  Field.tsx         # accessible input wrapper
  AuditForm.tsx, ContactForm.tsx
lib/
  schemas.ts        # Zod schemas
  store.ts          # JSON append + rate limit
data/               # auto-created, gitignored
```

## Accessibility

- Skip-to-main link, semantic headings, all inputs have `<label for>`.
- Focus rings visible (2px violet, offset 2px).
- Errors announced via `role="alert"`; first invalid field is auto-focused on submit.
- All animations respect `prefers-reduced-motion`.
- Color contrast: navy `#0A2540` on white = ~14:1 (AAA); violet `#635BFF` reserved for buttons + large UI accents.
