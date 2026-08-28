import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Container, PageHeader, SectionLabel } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a project with ${site.name}. Email ${site.email} — the first conversation is free and ends with a written scope and a fixed price.`,
};

const expectations = [
  {
    step: "01",
    title: "You send the problem",
    body: "In your own words. No brief, no specification, no technical vocabulary required.",
  },
  {
    step: "02",
    title: "I reply within one business day",
    body: "With either some clarifying questions or a time to talk. If it isn't something I should take on, I'll tell you that instead of stringing it out.",
  },
  {
    step: "03",
    title: "A half-hour conversation",
    body: "Free. About your operation, not my tech stack. Enough for both of us to tell whether there's a project here.",
  },
  {
    step: "04",
    title: "A written scope and a price",
    body: "What gets built, what it does, what it excludes, when it lands, what it costs. You decide from a document.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        index="04"
        eyebrow="Contact"
        title={
          <>
            Start with the problem.
            <br />
            <span className="text-signal italic">We&rsquo;ll get to the software.</span>
          </>
        }
        lede="The first conversation costs nothing and carries no obligation. Worst case you get a straight answer about whether custom software is worth it for you."
      />

      <section className="border-b border-rule">
        <Container>
          <div className="grid gap-14 py-16 sm:py-24 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionLabel index="01">Direct</SectionLabel>
              <a
                href={`mailto:${site.email}`}
                className="display mt-7 block text-2xl leading-tight break-words text-ink transition-colors hover:text-signal sm:text-3xl"
              >
                {site.email}
              </a>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-3">
                Email is the fastest route and the one I check. Replies within one
                business day, Australian time.
              </p>

              <dl className="mt-10 border-t border-rule">
                {[
                  { k: "Based", v: site.location },
                  { k: "Clients", v: "Australia and remote, worldwide" },
                  { k: "Hours", v: "Australian business hours, async friendly" },
                  { k: "Availability", v: "Taking on new projects" },
                ].map((row) => (
                  <div key={row.k} className="border-b border-rule py-4">
                    <dt className="label text-ink-4">{row.k}</dt>
                    <dd className="mt-2 text-[0.9375rem] text-ink-2">{row.v}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-8 text-[0.8125rem] leading-relaxed text-ink-3">
                No phone line published &mdash; a one-person studio answers email better
                than it answers a phone. Happy to jump on a call once we&rsquo;ve
                swapped a message or two.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <SectionLabel index="02">Or fill this in</SectionLabel>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper-2">
        <Container>
          <div className="grid gap-10 pt-16 pb-8 sm:pt-24 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel index="03">What happens next</SectionLabel>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="display text-3xl leading-[1.08] sm:text-[2.5rem]">
                No sales sequence. Four steps, then a decision.
              </h2>
            </div>
          </div>

          <div className="grid gap-px border-t border-rule bg-[var(--color-rule)] pb-0 sm:grid-cols-2 lg:grid-cols-4">
            {expectations.map((item) => (
              <div key={item.step} className="bg-paper-2 px-0 py-9 sm:px-6">
                <p className="display text-signal text-4xl">{item.step}</p>
                <h3 className="mt-5 text-[1.0625rem] leading-snug font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-ink-3">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <div className="h-16 sm:h-24" />
        </Container>
      </section>
    </>
  );
}
