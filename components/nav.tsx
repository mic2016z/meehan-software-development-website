"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/mark";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

const links = [
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-md">
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between">
          <Link href="/" aria-label={`${site.name} — home`} className="shrink-0">
            <Wordmark />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
            {links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`label transition-colors ${
                    active ? "text-ink" : "text-ink-3 hover:text-ink"
                  }`}
                >
                  {active ? <span className="text-signal">/ </span> : null}
                  {link.label}
                </Link>
              );
            })}
            <a
              href={`mailto:${site.email}`}
              className="label bg-ink px-5 py-3 text-paper transition-colors hover:bg-signal"
            >
              Start a project
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="label -mr-2 flex items-center gap-2 px-2 py-3 text-ink md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-rule bg-paper md:hidden">
          <Container>
            <nav aria-label="Primary mobile" className="flex flex-col py-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="display border-b border-rule py-4 text-2xl last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`mailto:${site.email}`}
                className="label mt-4 mb-4 bg-ink px-5 py-4 text-center text-paper"
              >
                Start a project
              </a>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
