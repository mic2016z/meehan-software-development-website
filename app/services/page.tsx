import type { Metadata } from "next";
import { ButtonLink, Container, PageHeader, Rule, SectionLabel } from "@/components/ui";
import { alsoBuilds, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "After-hours AI reception, knowledge management, custom web apps, and AI agents that draft and log but wait for human approval before sending.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        index="01"
        eyebrow="Services"
        title={
          <>
            Four ways to stop doing it
            <br />
            <span className="text-signal italic">by hand.</span>
          </>
        }
        lede="Every one of these starts from the same place: a repetitive, error-prone or after-hours part of your business that a person is currently absorbing. Here's what each one actually involves."
      />

      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`scroll-mt-24 border-b border-rule ${
            i % 2 === 1 ? "bg-paper-2" : ""
          }`}
        >
          <Container>
            <div className="grid gap-10 py-16 sm:py-24 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <SectionLabel index={service.index}>{service.title}</SectionLabel>
                <h2 className="display mt-7 text-3xl leading-[1.05] sm:text-[2.75rem]">
                  {service.lede}
                </h2>
                <div className="mt-8 border-l-2 border-signal pl-5">
                  <p className="label text-ink-4">Usually a fit for</p>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-2">
                    {service.goodFor}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <p className="text-lg leading-relaxed text-ink-2 sm:text-xl">
                  {service.body}
                </p>

                <h3 className="label mt-12 text-ink-4">What&rsquo;s in it</h3>
                <ul className="mt-5 border-t border-rule">
                  {service.detail.map((item) => (
                    <li
                      key={item}
                      className="flex gap-5 border-b border-rule py-4 text-[0.9375rem] leading-relaxed text-ink-2"
                    >
                      <span aria-hidden className="pt-0.5 text-signal">
                        &#8594;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* ── Also ─────────────────────────────────────────────── */}
      <section className="border-b border-rule">
        <Container>
          <div className="grid gap-10 py-16 sm:py-24 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel index="05">Also</SectionLabel>
              <h2 className="display mt-7 text-3xl leading-[1.05] sm:text-[2.5rem]">
                And the work that doesn&rsquo;t need a heading of its own.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ul className="border-t border-rule">
                {alsoBuilds.map((item) => (
                  <li
                    key={item}
                    className="border-b border-rule py-5 text-lg leading-relaxed text-ink-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[0.9375rem] leading-relaxed text-ink-3">
                If your problem is software-shaped and doesn&rsquo;t appear anywhere on
                this page, ask anyway. The worst outcome is a pointer to someone better
                suited.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Rule />

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section>
        <Container>
          <div className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel index="06">Next</SectionLabel>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="display text-4xl leading-[1.03] sm:text-5xl">
                Not sure which one you need?
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-2">
                That&rsquo;s normal, and it&rsquo;s the easiest part to sort out. Describe
                the problem in whatever words you use for it internally and we&rsquo;ll
                work out the shape of it together.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/contact">Start a project</ButtonLink>
                <ButtonLink href={`mailto:${site.email}`} variant="outline">
                  Email directly
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
