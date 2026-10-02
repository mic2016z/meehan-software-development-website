# Meehan Software Development

Marketing website using Next.js 15, React 19, TypeScript and Tailwind CSS 4, hosted on Vercel.

- **[docs/CONTACT.md](docs/CONTACT.md)** — read before changing the contact form or recipient.
- Copy and contact constants live in `lib/site.ts`; use them across pages and metadata.

Footguns that fail silently:

1. FormSubmit requires inbox activation for each recipient before enquiries are delivered.
2. A successful build or submission redirect does not prove email delivery; confirm a received test enquiry.
3. Keep FormSubmit CAPTCHA enabled and `_honey` empty. Never replace sending with a mailto success message.

Before calling work done: `npm run typecheck`, `npm run build`, and verify the production form and received email when inbox access is available.
