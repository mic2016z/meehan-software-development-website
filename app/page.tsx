import Link from "next/link";
import { ApprovalDemo } from "@/components/approval-demo";
import { Marquee } from "@/components/marquee";
import { Transcript } from "@/components/transcript";
import { ArrowLink, ButtonLink, Container, Rule, SectionLabel } from "@/components/ui";
import { process, services, site, stack } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <Container>
          <div className="grid gap-12 pt-14 pb-16 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:pt-24 lg:pb-24">
            <div className="lg:col-span-3">
              <div className="space-y-6">
                <SectionLabel index="00">Studio</SectionLabel>
                <p className="max-w-[22rem] text-[0.9375rem] leading-relaxed text-ink-2">
                  {site.principal} &mdash; full-stack web app and AI agent developer.
                  Working with small and mid-sized businesses across Australia and
                  remotely.
                </p>
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
                  </span>
                  <span className="label text-ink-2">Taking on new projects</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-9">
              <h1 className="display text-[2.5rem] leading-[1.02] sm:text-6xl sm:leading-[1] lg:text-[4.75rem] xl:text-[5.25rem]">
                Your business doesn&rsquo;t stop at 5pm.
                <br className="hidden sm:block" />{" "}
                <span className="text-signal italic">Your software shouldn&rsquo;t either.</span>
              </h1>

              <div className="mt-10 grid gap-8 lg:grid-cols-12">
                <p className="text-lg leading-relaxed text-ink-2 sm:text-xl lg:col-span-7">
                  I build custom web applications and AI agents for businesses that need
                  the leverage of automation without handing over the wheel. After-hours
                  reception that captures the enquiry. Knowledge your team can actually
                  find. Agents that draft and log &mdash; then wait for a person to
                  approve before anything sends.
                </p>
                <div className="lg:col-span-5 lg:pt-1">
                  <div className="flex flex-wrap gap-3">
                    <ButtonLink href="/contact">Start a project</ButtonLink>
                    <ButtonLink href="/services" variant="outline">
                      What I build
                    </ButtonLink>
                  </div>
                  <p className="mt-5 text-[0.8125rem] leading-relaxed text-ink-3">
                    First conversation is free and ends with a written scope and a fixed
                    price &mdash; or an honest &ldquo;you don&rsquo;t need this&rdquo;.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Marquee />

      {/* ── Services index ───────────────────────────────────── */}
      <section className="border-b border-rule">
        <Container>
          <div className="grid gap-10 pt-16 pb-10 sm:pt-24 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <SectionLabel index="01">What I build</SectionLabel>
            </div>
            <div className="lg:col-span-9">
              <h2 className="display max-w-3xl text-3xl leading-[1.08] sm:text-5xl">
                Four things, done properly, instead of a menu of everything.
              </h2>
            </div>
          </div>
        </Container>

        <Rule />

        <ul>
          {services.map((service) => (
            <li key={service.id} className="border-b border-rule last:border-0">
              <Link
                href={`/services#${service.id}`}
                className="group block transition-colors duration-300 hover:bg-paper-2"
              >
                <Container>
                  <div className="grid items-baseline gap-4 py-8 sm:py-11 lg:grid-cols-12 lg:gap-8">
                    <div className="label text-signal lg:col-span-3">
                      &sect;{service.index}
                    </div>
                    <div className="lg:col-span-5">
                      <h3 className="display text-2xl leading-tight sm:text-[2.125rem]">
                        {service.title}
                      </h3>
                    </div>
                    <div className="flex items-baseline justify-between gap-8 lg:col-span-4">
                      <p className="max-w-sm text-[0.9375rem] leading-relaxed text-ink-3">
                        {service.lede}
                      </p>
                      <span
                        aria-hidden
                        className="hidden shrink-0 text-signal transition-transform duration-300 group-hover:translate-x-1.5 sm:block"
                      >
                        &rarr;
                      </span>
                    </div>
                  </div>
                </Container>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Approval gate ────────────────────────────────────── */}
      <section className="bg-ink text-paper">
        <Container>
          <div className="grid gap-14 py-20 sm:py-28 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionLabel index="02" tone="paper">
                The approval gate
              </SectionLabel>
              <h2 className="display mt-8 text-3xl leading-[1.05] sm:text-5xl">
                It drafts. It logs.
                <br />
                <span className="text-signal italic">Then it stops.</span>
              </h2>
              <div className="mt-8 max-w-lg space-y-5 text-lg leading-relaxed text-paper/75">
                <p>
                  Most of the fear about AI in a business is really one specific fear:
                  that it will say something to a customer that you would never have
                  said, and you&rsquo;ll find out afterwards.
                </p>
                <p>
                  So the agents I build don&rsquo;t send. They prepare &mdash; the reply,
                  the quote, the follow-up, the record &mdash; and then they queue it for
                  a human. Approve, edit, or discard. Every decision is logged with a
                  name and a timestamp.
                </p>
                <p className="text-paper">
                  You keep the speed of automation and the last word stays yours.
                </p>
              </div>
              <div className="mt-9">
                <ArrowLink href="/approach" tone="paper">
                  How I work
                </ArrowLink>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ApprovalDemo />
            </div>
          </div>
        </Container>
      </section>

      {/* ── After-hours reception ────────────────────────────── */}
      <section className="border-b border-rule">
        <Container>
          <div className="grid gap-14 py-20 sm:py-28 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <Transcript />
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <SectionLabel index="03">After-hours reception</SectionLabel>
              <h2 className="display mt-8 text-3xl leading-[1.05] sm:text-5xl">
                The enquiry that arrives at 10pm is still an enquiry.
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-2">
                <p>
                  Someone finds you late, has a question, and either gets an answer or
                  goes back to the search results. A voicemail box is not an answer.
                </p>
                <p>
                  An AI reception picks up, answers what your own material can support,
                  asks the questions you&rsquo;d ask, and captures the details. It
                  doesn&rsquo;t invent prices, promise dates, or bluff. When it reaches
                  the edge of what it knows, it says so and books the human.
                </p>
                <p>
                  You wake up to a sorted list instead of six missed calls and no context.
                </p>
              </div>
              <div className="mt-9">
                <ArrowLink href="/services#ai-reception">
                  More on AI reception
                </ArrowLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="border-b border-rule bg-paper-2">
        <Container>
          <div className="grid gap-10 pt-16 pb-12 sm:pt-24 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <SectionLabel index="04">How it goes</SectionLabel>
            </div>
            <div className="lg:col-span-9">
              <h2 className="display max-w-3xl text-3xl leading-[1.08] sm:text-5xl">
                No discovery phase that bills for six weeks and produces a slide deck.
              </h2>
            </div>
          </div>

          <div className="grid gap-px border-t border-rule bg-[var(--color-rule)] pb-0 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <div key={step.step} className="bg-paper-2 px-0 py-8 sm:px-6">
                <p className="display text-signal text-4xl">{step.step}</p>
                <h3 className="mt-5 text-[1.0625rem] leading-snug font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-ink-3">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Stack ────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <Container>
          <div className="grid gap-10 py-16 sm:py-24 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <SectionLabel index="05">Built with</SectionLabel>
              <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-ink-3">
                Deliberately unexciting tools. Widely used, well documented, and easy for
                the next developer to pick up &mdash; including one who isn&rsquo;t me.
              </p>
            </div>
            <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
              {stack.map((group) => (
                <div key={group.group} className="border-t border-rule pt-4">
                  <h3 className="label text-ink-4">{group.group}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-[0.9375rem] text-ink-2">
                        {item}
                      </li>
                    ))}
                  </ul>
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
            <div className="lg:col-span-3">
              <SectionLabel index="06">Next</SectionLabel>
            </div>
            <div className="lg:col-span-9">
              <h2 className="display max-w-3xl text-4xl leading-[1.03] sm:text-6xl">
                Tell me the boring part of your week.
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-2">
                Half an hour, no charge, no pitch deck. If there&rsquo;s something worth
                building you&rsquo;ll get a written scope and a fixed price. If there
                isn&rsquo;t, you&rsquo;ll get told that instead.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink href="/contact">Start a project</ButtonLink>
                <ButtonLink href={`mailto:${site.email}`} variant="outline">
                  {site.email}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
