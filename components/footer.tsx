import Link from "next/link";
import { Mark } from "@/components/mark";
import { Container, Rule } from "@/components/ui";
import { services, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <Container>
        <div className="grid gap-12 pt-20 pb-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Mark className="h-8 w-8 text-paper [&_path]:stroke-[var(--color-ink)]" />
            <p className="display mt-7 max-w-md text-3xl leading-[1.1] sm:text-4xl">
              Let&rsquo;s talk about the part of your week that shouldn&rsquo;t be manual.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-block border-b border-signal pb-1 text-lg text-paper transition-colors hover:text-signal sm:text-xl"
            >
              {site.email}
            </a>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h2 className="label text-paper/45">Services</h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-[0.9375rem] text-paper/75 transition-colors hover:text-paper"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="label text-paper/45">Studio</h2>
            <ul className="mt-5 space-y-3">
              {[
                { href: "/approach", label: "Approach" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.9375rem] text-paper/75 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.github}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="text-[0.9375rem] text-paper/75 transition-colors hover:text-paper"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="label text-paper/45">Where</h2>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-paper/75">
              {site.location}
              <br />
              Remote, worldwide
            </p>
          </div>
        </div>

        <Rule className="bg-paper/15" />

        <div className="label flex flex-col gap-3 py-7 text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}
          </p>
          <p>{site.principal} &middot; {site.role}</p>
        </div>
      </Container>
    </footer>
  );
}
