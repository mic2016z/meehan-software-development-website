import type { Metadata } from "next";
import { ButtonLink, Container, PageHeader, SectionLabel } from "@/components/ui";
import { faqs, principles, process, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Fixed scope in writing, work delivered in visible increments, a human approval gate on anything AI-driven, and full ownership handed to you at the end.",
};

export default function ApproachPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <PageHeader
        index="02"
        eyebrow="Approach"
        title={
          <>
            A fixed price, a written scope,
            <br />
            <span className="text-signal italic">and no surprises on the invoice.</span>
          </>
        }
        lede="Custom software has a reputation for open-ended budgets and vanishing timelines. Most of that comes from vague scope and slow feedback. Here's how this studio avoids both."
      />

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <Container>
          <div className="grid gap-10 pt-16 pb-6 sm:pt-24 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel index="01">The process</SectionLabel>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="display text-3xl leading-[1.08] sm:text-[2.5rem]">
                Five steps, start to handover.
              </h2>
            </div>
          </div>
        </Container>

        <div>
          {process.map((step) => (
            <div key={step.step} className="border-t border-rule">
              <Container>
                <div className="grid gap-5 py-10 sm:py-12 lg:grid-cols-12 lg:gap-12">
                  <div className="display text-signal text-5xl leading-none lg:col-span-4">
                    {step.step}
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6">
                    <h3 className="display text-2xl leading-tight sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-2">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Container>
            </div>
          ))}
        </div>
      </section>

      {/* ── Principles ───────────────────────────────────────── */}
      <section className="bg-ink text-paper">
        <Container>
          <div className="grid gap-10 pt-20 pb-10 sm:pt-28 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel index="02" tone="paper">
                Non-negotiables
              </SectionLabel>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="display text-3xl leading-[1.05] sm:text-[2.75rem]">
                Six rules I don&rsquo;t bend, including for money.
              </h2>
            </div>
          </div>

          <div className="grid gap-x-12 gap-y-10 pb-24 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle.title} className="border-t border-paper/20 pt-5">
                <h3 className="text-[1.0625rem] leading-snug font-medium text-paper">
                  {principle.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-paper/65">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <Container>
          <div className="grid gap-10 pt-16 pb-8 sm:pt-24 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel index="03">Questions</SectionLabel>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="display text-3xl leading-[1.08] sm:text-[2.5rem]">
                The ones that come up first.
              </h2>
            </div>
          </div>
        </Container>

        <div className="border-t border-rule">
          {faqs.map((faq) => (
            <details key={faq.q} className="group border-b border-rule">
              <Container>
                <summary className="flex cursor-pointer list-none items-start gap-6 py-7 [&::-webkit-details-marker]:hidden lg:grid lg:grid-cols-12 lg:gap-12">
                  <span
                    aria-hidden
                    className="label inline-block shrink-0 pt-1.5 text-signal transition-transform duration-300 group-open:rotate-45 lg:col-span-4"
                  >
                    +
                  </span>
                  <span className="display text-xl leading-snug sm:text-2xl lg:col-span-7 lg:col-start-6">
                    {faq.q}
                  </span>
                </summary>
                <div className="lg:grid lg:grid-cols-12 lg:gap-12">
                  <p className="max-w-2xl pb-8 text-lg leading-relaxed text-ink-2 lg:col-span-7 lg:col-start-6">
                    {faq.a}
                  </p>
                </div>
              </Container>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section>
        <Container>
          <div className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel index="04">Next</SectionLabel>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="display text-4xl leading-[1.03] sm:text-5xl">
                Still have a question that isn&rsquo;t up there?
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-2">
                Ask it directly. You&rsquo;ll get a straight answer from the person who
                would be doing the work.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/contact">Get in touch</ButtonLink>
                <ButtonLink href={`mailto:${site.email}`} variant="outline">
                  {site.email}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
