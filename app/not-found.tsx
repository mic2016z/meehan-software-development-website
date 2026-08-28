import { ButtonLink, Container, SectionLabel } from "@/components/ui";

export default function NotFound() {
  return (
    <section>
      <Container>
        <div className="grid gap-10 py-24 sm:py-36 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="404">Not found</SectionLabel>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <h1 className="display text-4xl leading-[1.03] sm:text-6xl">
              That page isn&rsquo;t here.
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink-2">
              Either it moved or the link was wrong. Neither is your problem &mdash; try
              the services index, or just send an email.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/">Back to the start</ButtonLink>
              <ButtonLink href="/services" variant="outline">
                Services
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
