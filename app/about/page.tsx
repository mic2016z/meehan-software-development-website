import type { Metadata } from "next";
import { ButtonLink, Container, PageHeader, SectionLabel } from "@/components/ui";
import { site, stack } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meehan Software Development is a one-person Australian software studio run by Michael Meehan, building web applications and AI agents for small and mid-sized businesses.",
};

const engagements = [
  {
    name: "Project",
    price: "Fixed scope, fixed price",
    body: "A defined build with an agreed deliverable, timeline and number. The default, and the right choice for most first engagements.",
  },
  {
    name: "Retainer",
    price: "Monthly, cancel any time",
    body: "Ongoing support, iteration and small feature work once something is live. Month to month — there's no annual lock-in to sign.",
  },
  {
    name: "Advisory",
    price: "Hourly, short",
    body: "A second opinion before you commit: reviewing a build proposal, sanity-checking an AI plan, or auditing an inherited codebase.",
  },
];

const workingWith = [
  {
    label: "Time zone",
    value:
      "Australian hours, with overlap available for teams elsewhere. Async by default — you won't be dragged into standups.",
  },
  {
    label: "Contact",
    value:
      "Email for anything substantive, so decisions stay written down and searchable. Calls when a call is genuinely faster.",
  },
  {
    label: "Visibility",
    value:
      "A live staging link from early on, plus a short written update at each increment. You never have to ask how it's going.",
  },
  {
    label: "Scale",
    value:
      "One developer, working on a small number of projects at a time. That's a limit on volume, and the reason nothing gets subcontracted out.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="03"
        eyebrow="About"
        title={
          <>
            One developer,
            <br />
            <span className="text-signal italic">answering their own email.</span>
          </>
        }
      />

      {/* ── Intro ────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <Container>
          <div className="grid gap-10 py-16 sm:py-24 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionLabel index="01">The studio</SectionLabel>
              <dl className="mt-8 space-y-5">
                {[
                  { k: "Principal", v: site.principal },
                  { k: "Discipline", v: site.role },
                  { k: "Based", v: site.location },
                  { k: "Works", v: "Remote, worldwide" },
                ].map((row) => (
                  <div key={row.k} className="border-t border-rule pt-3">
                    <dt className="label text-ink-4">{row.k}</dt>
                    <dd className="mt-2 text-[0.9375rem] text-ink-2">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="space-y-6 text-lg leading-relaxed text-ink-2 sm:text-xl">
                <p className="display text-2xl leading-[1.3] text-ink sm:text-3xl">
                  Meehan Software Development is a one-person studio. When you hire it,
                  you get me &mdash; Michael Meehan &mdash; writing the code, answering
                  the questions and carrying the consequences.
                </p>
                <p>
                  I build full-stack web applications and the AI systems that sit inside
                  them. That means both halves of the job: the database, the API, the
                  interface a person actually uses, and the agent quietly working behind
                  it. Businesses rarely need one without the other, and handing those
                  parts to different people is where most of the cost and confusion
                  comes from.
                </p>
                <p>
                  Most of my work starts with a business that has outgrown its
                  workarounds &mdash; the shared spreadsheet, the inbox used as a task
                  list, the four tools that don&rsquo;t talk to each other, the enquiries
                  that arrive after everyone has gone home. None of that needs a
                  platform migration. It needs a well-made piece of software aimed
                  precisely at the problem.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── The AI position ──────────────────────────────────── */}
      <section className="bg-ink text-paper">
        <Container>
          <div className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionLabel index="02" tone="paper">
                On AI
              </SectionLabel>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="display text-3xl leading-[1.05] sm:text-[2.75rem]">
                I&rsquo;m enthusiastic about the tools and sceptical about the promises.
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-paper/75">
                <p>
                  Language models are genuinely good at a narrow set of things: reading
                  a lot of text quickly, drafting in a consistent voice, extracting
                  structure out of mess, and answering questions when they&rsquo;re given
                  the source material to answer from.
                </p>
                <p>
                  They are not good at being trusted unsupervised with your customers,
                  your invoices or your reputation. Anyone selling you an agent that runs
                  your business while you sleep is selling you a risk you can&rsquo;t see
                  yet.
                </p>
                <p className="text-paper">
                  So I build for the useful half and design around the rest. Ground the
                  answers in your documents. Cite the source. Say &ldquo;I don&rsquo;t
                  know&rdquo; and pass it to a person. And put a human approval gate in
                  front of anything that leaves the building.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Engagements ──────────────────────────────────────── */}
      <section className="border-b border-rule">
        <Container>
          <div className="grid gap-10 pt-16 pb-10 sm:pt-24 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel index="03">Engagements</SectionLabel>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="display text-3xl leading-[1.08] sm:text-[2.5rem]">
                Three ways to work together.
              </h2>
            </div>
          </div>

          <div className="grid gap-px border-t border-rule bg-[var(--color-rule)] md:grid-cols-3">
            {engagements.map((item) => (
              <div key={item.name} className="bg-paper px-0 py-9 sm:px-6">
                <h3 className="display text-2xl">{item.name}</h3>
                <p className="label mt-3 text-signal">{item.price}</p>
                <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-2">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Working with me ──────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <Container>
          <div className="grid gap-10 py-16 sm:py-24 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionLabel index="04">Practicalities</SectionLabel>
              <h2 className="display mt-7 text-3xl leading-[1.05] sm:text-[2.5rem]">
                What it&rsquo;s like on your end.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <dl className="border-t border-rule">
                {workingWith.map((row) => (
                  <div
                    key={row.label}
                    className="grid gap-2 border-b border-rule py-5 sm:grid-cols-4 sm:gap-6"
                  >
                    <dt className="label pt-1.5 text-ink-4">{row.label}</dt>
                    <dd className="text-[0.9375rem] leading-relaxed text-ink-2 sm:col-span-3">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Stack ────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <Container>
          <div className="grid gap-10 py-16 sm:py-24 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel index="05">Toolkit</SectionLabel>
              <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-ink-3">
                What I reach for by default. The list is short on purpose &mdash; depth
                in a few proven tools beats a logo wall.
              </p>
            </div>
            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:col-span-7 lg:col-start-6 lg:grid-cols-2">
              {stack.map((group) => (
                <div key={group.group} className="border-t border-rule pt-4">
                  <h3 className="label text-ink-4">{group.group}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-2">
                    {group.items.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section>
        <Container>
          <div className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel index="06">Next</SectionLabel>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="display text-4xl leading-[1.03] sm:text-5xl">
                If that sounds like the right fit, say hello.
              </h2>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/contact">Start a project</ButtonLink>
                <ButtonLink href="/services" variant="outline">
                  See the services
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
