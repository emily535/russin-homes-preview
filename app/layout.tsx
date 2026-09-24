import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { MotionSystem } from "@/components/MotionSystem";
import { assets, site, testimonials } from "@/data/site";
import { isPublicProductionDeploy } from "@/data/metadata";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Russin Homes", template: "%s" },
  description:
    "Award winning custom home builder serving Youngsville, Wake Forest, and the surrounding areas.",
  openGraph: {
    siteName: site.name,
    type: "website",
    images: [{ url: assets.hero, alt: "Russin Homes custom residence" }],
  },
  // Safety gate: indexing requires both Netlify's production context and the
  // exact public hostname. A preview can never become indexable by context alone.
  robots: isPublicProductionDeploy()
    ? { index: true, follow: true }
    : { index: false, follow: false, noarchive: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      "@id": `${site.url}/#business`,
      telephone: site.phone,
      email: site.email,
      logo: `${site.url}${assets.logo}`,
      sameAs: site.social.map(({ href }) => href),
      founder: { "@type": "Person", name: "Jeremy Russin", jobTitle: "Founder and Builder" },
      areaServed: site.markets.map((name) => ({ "@type": "City", name })),
      review: testimonials.map(({ attribution, quote }) => ({
        "@type": "Review",
        author: { "@type": "Person", name: attribution },
        reviewBody: quote,
        itemReviewed: { "@id": `${site.url}/#business` },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      publisher: { "@id": `${site.url}/#business` },
    },
  ];
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
        <MotionSystem />
        <StructuredData data={schema} />
      </body>
    </html>
  );
}
