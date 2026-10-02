export const site = {
  name: "Meehan Software Development",
  shortName: "Meehan Software Dev",
  principal: "Michael Meehan",
  role: "Full-stack web app & AI agent developer",
  email: "meehansoftwaredec555@gmail.com",
  location: "Australia",
  locationLong: "Based in Australia. Working remotely with clients anywhere.",
  url: "https://meehan-software-development.vercel.app",
  github: "https://github.com/mic2016z",
  tagline:
    "Software studio building web apps and AI agents for small and mid-sized businesses.",
  description:
    "Meehan Software Development is an Australian software studio run by Michael Meehan, building custom web apps, after-hours AI reception, knowledge management and approval-gated AI agents for small and mid-sized businesses.",
} as const;

export type Service = {
  id: string;
  index: string;
  title: string;
  lede: string;
  body: string;
  detail: string[];
  goodFor: string;
};

export const services: Service[] = [
  {
    id: "ai-reception",
    index: "01",
    title: "After-hours AI reception",
    lede: "Nobody is at the desk at 9pm. Something should still be.",
    body: "An assistant that picks up the enquiries arriving on your website and inbox outside business hours. It answers what it can answer from your own material, asks the qualifying questions you'd ask, captures the contact details, and puts a clean, sorted summary in front of you first thing.",
    detail: [
      "Web chat and email intake, wired to the site you already have",
      "Answers grounded in your services, pricing rules and policies — not invented",
      "Qualifying questions you define, so the notes arrive complete",
      "Booking requests and callback slots pushed into your calendar",
      "Escalation rules: urgent enquiries flagged, everything else queued for morning",
      "A single morning digest instead of a scroll of missed messages",
    ],
    goodFor:
      "Trades, clinics, agencies and services businesses losing enquiries between 5pm and 9am.",
  },
  {
    id: "knowledge",
    index: "02",
    title: "Knowledge management",
    lede: "The answer exists. It's in a PDF nobody can find.",
    body: "Your procedures, quotes, specs, policies and past project notes turned into an internal answer engine your team can actually query in plain English — with every answer citing the document it came from, so it can be checked rather than trusted blindly.",
    detail: [
      "Ingest from the places it already lives: drives, docs, spreadsheets, PDFs, email",
      "Plain-English search across the lot, not keyword matching",
      "Every answer footnoted to its source document and section",
      "Permissions respected — people see what they're allowed to see",
      "Gap reporting: what staff ask that your documentation can't answer",
      "Stays current as documents change, without a re-build each time",
    ],
    goodFor:
      "Teams where onboarding is slow and the same questions get asked every week.",
  },
  {
    id: "web-apps",
    index: "03",
    title: "Custom web apps",
    lede: "The spreadsheet worked until it didn't.",
    body: "Purpose-built software for the part of your operation that no off-the-shelf product fits: client portals, quoting and booking tools, job tracking, internal dashboards, admin systems. Built properly, owned by you, documented so a future developer can pick it up.",
    detail: [
      "Client and customer portals with real accounts and permissions",
      "Quoting, booking, intake and approval workflows",
      "Internal dashboards and admin tools that replace spreadsheet sprawl",
      "Integrations with the systems you already run",
      "Payments, file handling, notifications, exports and reporting",
      "Handed over with source code, documentation and deployment access",
    ],
    goodFor:
      "Businesses running a critical process on a spreadsheet, an inbox, or four disconnected tools.",
  },
  {
    id: "agents",
    index: "04",
    title: "AI agents with an approval gate",
    lede: "It drafts. It logs. It waits for you.",
    body: "Agents that do the repetitive drafting and record-keeping — follow-ups, quote drafts, replies, CRM updates, report writing — and then stop. Nothing leaves your business until a human has read it and pressed approve. That gate is the design, not a setting to be switched off later.",
    detail: [
      "Drafts replies, quotes, follow-ups and summaries in your own voice and format",
      "Writes records into your CRM, sheet or database as it goes",
      "Approve, edit or discard — from your inbox or a simple review queue",
      "Nothing sends, bills or commits without a named human approving it",
      "Full audit trail: what was drafted, what was changed, who approved it, when",
      "Confidence thresholds — low-certainty work is held back and marked",
    ],
    goodFor:
      "Anyone who likes the leverage of automation and does not like the idea of it emailing a client unsupervised.",
  },
];

export const alsoBuilds = [
  "Systems integration between tools you already pay for",
  "Marketing sites and landing pages that load fast and rank",
  "Data cleanup, migration and reporting pipelines",
  "Rescue work on half-finished or inherited codebases",
];

export const process = [
  {
    step: "01",
    title: "A conversation, not a pitch",
    body: "Half an hour on the actual problem: what's manual, what's slipping, what it costs you in a week. If software isn't the answer, I'll say so. Free, no obligation.",
  },
  {
    step: "02",
    title: "A written scope",
    body: "You get the plan in writing — what gets built, what it does, what it doesn't do, the price and the timeline. Fixed scope, fixed price. You decide from a document, not a vibe.",
  },
  {
    step: "03",
    title: "Build in the open",
    body: "Work lands in visible increments on a live staging link. You see it as it comes together and correct course early, while correcting course is still cheap.",
  },
  {
    step: "04",
    title: "Launch and hand over",
    body: "Deployed on your accounts, in your name. Source code, documentation and credentials are yours. No hostage-taking, no proprietary black box you can't leave.",
  },
  {
    step: "05",
    title: "Stay or go",
    body: "Take it in-house, or keep me on for support and iteration. Ongoing support is a choice you make each month, not a lock-in you signed at the start.",
  },
];

export const principles = [
  {
    title: "A human approves before anything sends",
    body: "AI drafts and logs. People decide. Any agent I build that can touch a customer, an invoice or a record stops at a human checkpoint first — and the audit trail shows who cleared it.",
  },
  {
    title: "You own the software",
    body: "Code, infrastructure, accounts and documentation are handed to you. Everything is built on standard, well-documented tools so another developer can take over without a rewrite.",
  },
  {
    title: "Scope in writing, before money",
    body: "Fixed scope and fixed price, agreed in a document before a line is written. If the scope changes, that's a conversation and a new number — not a surprise on an invoice.",
  },
  {
    title: "Boring technology, on purpose",
    body: "TypeScript, Postgres, React. Proven, hireable, unremarkable. The interesting part of your project should be your business logic, not my framework choices.",
  },
  {
    title: "Grounded answers or none",
    body: "AI features answer from your documents and your data, with citations. Where the system doesn't know, it says it doesn't know and routes to a person.",
  },
  {
    title: "One developer, direct",
    body: "You talk to the person writing the code. No account manager relaying your requirements to someone you'll never meet.",
  },
];

export const stack = [
  { group: "Language", items: ["TypeScript", "Python", "SQL"] },
  { group: "Front end", items: ["React", "Next.js", "Tailwind CSS"] },
  { group: "Back end", items: ["Node.js", "PostgreSQL", "REST & webhooks"] },
  { group: "AI", items: ["Claude", "GPT", "RAG & vector search", "Evals"] },
  { group: "Infrastructure", items: ["Vercel", "AWS", "Docker", "GitHub Actions"] },
  { group: "Integrations", items: ["Stripe", "Twilio", "Xero", "Google Workspace"] },
];

export const faqs = [
  {
    q: "What does a project cost?",
    a: "It depends on scope, and you get the number in writing before anything starts. A focused automation or an AI reception setup is a smaller engagement than a full custom application. The scoping conversation is free, and it ends with a fixed price you can say no to.",
  },
  {
    q: "How long does it take?",
    a: "Small, well-defined builds are typically a matter of weeks. Larger applications run longer and get broken into stages so you have something usable before the whole thing is finished. Both the timeline and the stages are in the written scope.",
  },
  {
    q: "Will the AI say something wrong to my customers?",
    a: "That risk is the reason for the approval gate. Customer-facing agents draft; a person approves before it sends. Where an assistant does answer directly, it answers from your approved material and hands over to a human when it hits the edge of what it knows.",
  },
  {
    q: "Do I need to already know what I want built?",
    a: "No. Most people arrive with a problem rather than a specification — 'quotes take too long', 'we lose after-hours calls', 'nobody can find anything'. Turning that into a spec is part of the work.",
  },
  {
    q: "What happens to my data?",
    a: "It stays in systems you own and control. I'll tell you plainly which third-party services a build depends on, what data goes to them and why, before you agree to it. Nothing gets used to train anyone's model.",
  },
  {
    q: "Do you work with businesses outside Australia?",
    a: "Yes. The studio is Australian and remote by default, which makes it a natural fit for AU and NZ clients, and workable anywhere with some overlap in the day.",
  },
];
