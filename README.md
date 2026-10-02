# Meehan Software Development — studio website

Marketing site for **Meehan Software Development**, the software studio of Michael Meehan
— a full-stack web app and AI agent developer working with small and mid-sized
businesses in Australia and remotely.

**Live:** https://meehan-software-development.vercel.app

## What it covers

- **After-hours AI reception** — assistants that handle enquiries arriving outside
  business hours and hand over a sorted summary in the morning.
- **Knowledge management** — internal answer engines built on a business's own
  documents, with citations back to the source.
- **Custom web apps** — portals, quoting and booking tools, dashboards, admin systems.
- **AI agents with an approval gate** — agents that draft and log, then wait for a human
  to approve before anything sends.

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4, configured in CSS via `@theme` |
| Fonts | Fraunces (display), Inter Tight (UI), JetBrains Mono (labels) — self-hosted by `next/font` |
| Hosting | Vercel |

The site renders statically. The contact form posts to FormSubmit over HTTPS, which
emails enquiries to the address in `lib/site.ts`. FormSubmit processes the visitor's
name, email, optional business, selected services and message. There is no local database.
See [docs/CONTACT.md](docs/CONTACT.md) for activation and delivery checks.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm start          # serve the production build
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
```

Requires Node 18.18+ (built and deployed on Node 20).

## Project layout

```
app/
  layout.tsx            Root layout: fonts, metadata, JSON-LD, nav, footer
  page.tsx              Home
  services/page.tsx     The four services in detail
  approach/page.tsx     Process, non-negotiables, FAQ (+ FAQPage JSON-LD)
  about/page.tsx        The studio, position on AI, engagement models
  contact/page.tsx      Contact details and the email submission form
  not-found.tsx         404
  globals.css           Design tokens and base styles (Tailwind v4 @theme)
  icon.tsx              Generated favicon
  opengraph-image.tsx   Generated 1200×630 social card
  sitemap.ts robots.ts  SEO routes
components/
  nav.tsx footer.tsx    Chrome
  ui.tsx                Container, Rule, SectionLabel, ArrowLink, ButtonLink, PageHeader
  mark.tsx              Logo mark and wordmark
  approval-demo.tsx     Interactive illustration of the human approval gate
  transcript.tsx        Illustration of an after-hours intake conversation
  contact-form.tsx      FormSubmit email form
  marquee.tsx           Capability ticker
lib/
  site.ts               All copy and site constants — single source of truth
```

## Editing content

Nearly all copy lives in [`lib/site.ts`](lib/site.ts): services, process steps,
principles, stack, FAQs, and contact details. Change it there and it updates across every
page, the footer, the navigation and the structured data.

Design tokens (colour, type, spacing) live in the `@theme` block at the top of
[`app/globals.css`](app/globals.css).

## A note on the sample content

The approval-gate panel and the after-hours transcript are **illustrations of how the
systems behave**. They use invented sample content and are labelled as such on the page.
The site carries no client names, logos, testimonials, ratings or performance metrics,
because there are none to report yet — and inventing them would contradict the thing the
studio actually sells.

## Deployment

Pushed to `main` on GitHub and deployed on Vercel. If the GitHub integration is
connected, every push to `main` ships to production; otherwise:

```bash
vercel --prod
```

## Contact

meehansoftwaredec555@gmail.com

## Licence

Copyright © Meehan Software Development. All rights reserved. The source is public for
reference; the branding and written copy are not licensed for reuse.
