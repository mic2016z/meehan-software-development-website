# Contact form delivery

`components/contact-form.tsx` posts a standard HTML form to
`https://formsubmit.co/<site.email>`. The recipient and return URL come from
`lib/site.ts`. No SMTP password or API key is embedded in the browser.

FormSubmit receives the name, email, optional business, selected interests and
message. Its email field supports replying directly to the visitor. Keep the
default CAPTCHA enabled. `_honey` is a hidden spam trap, `_subject` sets the inbox
subject, `_template` requests a table, and `_next` returns successful submissions
to `/contact/thanks`. Do not treat visiting that page as proof of delivery.

## One-time activation

Submit a clearly labelled test enquiry from the live `/contact` page. FormSubmit
sends an activation email to the recipient on first use. The inbox owner must
click the confirmation link (check spam too). Then submit another test and verify
that all fields appear in the received email and Reply targets the visitor.
Changing the recipient requires activating the new address.

The recipient currently follows the user's explicitly requested spelling:
`meehansoftwaredec555@gmail.com`. The original site used `dev555`; do not silently
change the address back without confirmation.

## Deployment

Repository: `mic2016z/meehan-software-development-website`, branch `main`.
Vercel project: `meehan-software-development` in `micks-projects-f8c8f635`.
Production: https://meehan-software-development.vercel.app

Use the authenticated Vercel CLI when available. Verify that a GitHub push creates
a new deployment before assuming automatic deployment is connected. Link to the
existing project before a manual production deployment; do not create a duplicate.
