import type { Metadata } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], display: "swap", variable: "--font-fraunces", axes: ["SOFT", "WONK", "opsz"] });
const interTight = Inter_Tight({ subsets: ["latin"], display: "swap", variable: "--font-inter-tight" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], display: "swap", weight: ["400", "500"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Web apps & AI agents for business`, template: `%s — ${site.name}` },
  description: site.description,
  keywords: ["software developer Australia","AI agent developer","custom web application development","after hours AI reception","knowledge management software","Next.js developer","SaaS for small business"],
  authors: [{ name: site.principal }],
  creator: site.principal,
  openGraph: { type: "website", locale: "en_AU", url: site.url, siteName: site.name, title: `${site.name} — Web apps & AI agents for business`, description: site.description },
  twitter: { card: "summary_large_image", title: `${site.name} — Web apps & AI agents for business`, description: site.description },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "ProfessionalService", name: site.name,
  description: site.description, url: site.url, email: site.email,
  founder: { "@type": "Person", name: site.principal, jobTitle: site.role },
  areaServed: [{ "@type": "Country", name: "Australia" }, "Worldwide"],
  address: { "@type": "PostalAddress", addressCountry: "AU" },
  knowsAbout: ["AI agents","Web application development","Knowledge management","Business automation"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${fraunces.variable} ${interTight.variable} ${jetbrains.variable}`}>
      <body className="grain-layer min-h-screen">
        <a href="#main" className="label sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-ink focus:px-4 focus:py-3 focus:text-paper">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <a
          href="https://wa.me/61413063463?text=Hi%2C%20I%27d%20like%20to%20talk%20about%20a%20software%20project."
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Chat with Meehan Software Development on WhatsApp"
          className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 sm:right-7 sm:bottom-7"
        >
          <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 fill-current">
            <path d="M16.04 3C9.43 3 4.06 8.32 4.06 14.88c0 2.32.68 4.58 1.96 6.51L4 28.78l7.59-1.99a12.05 12.05 0 0 0 4.45.85h.01c6.6 0 11.98-5.32 11.98-11.88C28.03 9.2 22.65 3 16.04 3Zm0 22.64h-.01a9.98 9.98 0 0 1-5.08-1.39l-.36-.21-4.5 1.18 1.2-4.36-.23-.36a9.82 9.82 0 0 1-1.52-5.25c0-5.47 4.49-9.92 10.02-9.92 5.52 0 10.01 4.45 10.01 9.92 0 5.47-4.49 10.39-9.53 10.39Zm5.49-7.43c-.3-.15-1.78-.87-2.06-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.46-2.42-1.48-.89-.79-1.5-1.77-1.67-2.07-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.68-1.62-.93-2.22-.25-.59-.5-.5-.68-.51h-.58c-.2 0-.53.07-.8.37-.28.3-1.05 1.02-1.05 2.49s1.08 2.89 1.23 3.09c.15.2 2.12 3.2 5.13 4.49.72.31 1.28.49 1.72.63.72.23 1.37.2 1.89.12.58-.09 1.78-.72 2.03-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z" />
          </svg>
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}