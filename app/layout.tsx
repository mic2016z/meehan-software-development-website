import type { Metadata } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Web apps & AI agents for business`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "software developer Australia",
    "AI agent developer",
    "custom web application development",
    "after hours AI reception",
    "knowledge management software",
    "Next.js developer",
    "SaaS for small business",
  ],
  authors: [{ name: site.principal }],
  creator: site.principal,
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Web apps & AI agents for business`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Web apps & AI agents for business`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  founder: { "@type": "Person", name: site.principal, jobTitle: site.role },
  areaServed: [{ "@type": "Country", name: "Australia" }, "Worldwide"],
  address: { "@type": "PostalAddress", addressCountry: "AU" },
  knowsAbout: [
    "AI agents",
    "Web application development",
    "Knowledge management",
    "Business automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      className={`${fraunces.variable} ${interTight.variable} ${jetbrains.variable}`}
    >
      <body className="grain-layer min-h-screen">
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
