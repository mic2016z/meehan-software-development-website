import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

/** Full-bleed hairline. The rules are the grid in this design — used liberally. */
export function Rule({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`h-px w-full bg-rule ${className}`} />;
}

export function SectionLabel({
  index,
  children,
  tone = "ink",
}: {
  index?: string;
  children: ReactNode;
  tone?: "ink" | "paper";
}) {
  return (
    <div
      className={`label flex items-baseline gap-3 ${
        tone === "paper" ? "text-paper/55" : "text-ink-3"
      }`}
    >
      {index ? (
        <span className={tone === "paper" ? "text-signal" : "text-signal"}>
          §{index}
        </span>
      ) : null}
      <span>{children}</span>
    </div>
  );
}

type ArrowLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  tone?: "ink" | "paper";
};

export function ArrowLink({
  children,
  className = "",
  tone = "ink",
  ...props
}: ArrowLinkProps) {
  return (
    <Link
      {...props}
      className={`group inline-flex items-center gap-2.5 text-[0.9375rem] font-medium ${
        tone === "paper" ? "text-paper" : "text-ink"
      } ${className}`}
    >
      <span className="border-b border-current/30 pb-0.5 transition-colors group-hover:border-current">
        {children}
      </span>
      <span
        aria-hidden
        className="text-signal transition-transform duration-300 group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </Link>
  );
}

export function ButtonLink({
  children,
  href,
  variant = "solid",
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: "solid" | "outline" | "paper";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[0.9375rem] font-medium transition-colors duration-200";
  const variants = {
    solid: "bg-ink text-paper hover:bg-signal",
    outline: "border border-rule-strong text-ink hover:border-ink hover:bg-ink hover:text-paper",
    paper: "bg-paper text-ink hover:bg-signal hover:text-paper",
  } as const;
  const isExternal = href.startsWith("mailto:") || href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function PageHeader({
  index,
  eyebrow,
  title,
  lede,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  lede?: string;
}) {
  return (
    <header className="border-b border-rule">
      <Container>
        <div className="grid gap-8 pt-16 pb-14 sm:pt-24 sm:pb-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <SectionLabel index={index}>{eyebrow}</SectionLabel>
          </div>
          <div className="lg:col-span-9">
            <h1 className="display text-[2.75rem] leading-[1.02] sm:text-6xl sm:leading-[1] lg:text-[4.5rem]">
              {title}
            </h1>
            {lede ? (
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-2 sm:text-xl">
                {lede}
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </header>
  );
}
