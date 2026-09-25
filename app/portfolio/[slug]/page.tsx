import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FinalCTA } from "@/components/FinalCTA";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { KeyFeatures, PropertyGallery, VideoLightbox } from "@/components/PropertyDetails";
import { PropertyMarks } from "@/components/PropertyMarks";
import { StructuredData } from "@/components/StructuredData";
import { pageMetadata } from "@/data/metadata";
import { PRIVATE_TOURS_ENABLED, publishedProjects, site } from "@/data/site";
export function generateStaticParams() {
  return publishedProjects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = publishedProjects.find((x) => x.slug === slug);
  if (!p) return {};
  const title =
    p.category === "presale"
      ? `${p.planName || p.address}, ${(p.city || "").split(",")[0]} NC | Russin Homes Presale`
      : `${p.address || p.planName} | Russin Homes`;
  const description =
    p.category === "presale"
      ? `Presale opportunity at ${p.address} in ${(p.city || "").split(",")[0]}, North Carolina. Talk with builder Jeremy Russin about plans, pricing, and availability.`
      : p.intro;
  const basePath = p.category === "presale" ? "/opportunities" : "/portfolio";
  return pageMetadata(title, description, `${basePath}/${slug}`, p.metadataImage || p.heroImage);
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = publishedProjects.find((x) => x.slug === slug);
  if (!p) notFound();
  const title = p.planName || p.address || `${p.community} ${p.lot}`;
  const facts = [
    p.bedrooms && ["Bedrooms", p.bedrooms],
    p.bathrooms && ["Bathrooms", p.bathrooms],
    p.squareFeet && ["Approx. sq ft", p.squareFeet],
    p.garage && ["Garage", p.garage],
    p.acreage && ["Lot size", p.acreage],
  ].filter(Boolean) as string[][];
  const showInquiry = p.category !== "completed";
  const showTour = PRIVATE_TOURS_ENABLED && p.category !== "completed";
  return (
    <main>
      <section className={`project-detail-hero ${!p.heroImage ? "missing-media" : ""}`}>
        {p.heroImage ? (
          <Image src={p.heroImage} alt={p.imageAlt || title} fill priority sizes="100vw" />
        ) : (
          <MediaPlaceholder label={p.imageAlt} large />
        )}
        <div className="project-hero-overlay" />
        <PropertyMarks project={p} />
      </section>
      <div className="detail-breadcrumb">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            {
              label: p.category === "presale" ? "Opportunities" : "Portfolio",
              href: p.category === "presale" ? "/opportunities" : "/portfolio",
            },
            { label: title },
          ]}
        />
      </div>
      <section className="property-intro section">
        <p className="eyebrow">{p.status}</p>
        <h1>{title}</h1>
        {p.planName && <p className="property-address">{p.address}</p>}
        {p.awardLine && <p className="property-award">{p.awardLine}</p>}
        <p>
          {p.community} · {p.lot}
        </p>
        <h2>{p.intro}</h2>
      </section>
      <section className="glance section">
        <div>
          <p className="eyebrow">Home at a glance</p>
          <h2>{p.completed ? `Completed ${p.completed}` : `${p.priceLabel} ${p.price}`}</h2>
          <p>
            {p.address}
            {p.city ? `, ${p.city}` : ""}
          </p>
        </div>
        <dl>
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>
                {value}
                {label === "Approx. sq ft" ? " sq ft" : ""}
              </dd>
            </div>
          ))}
        </dl>
        {p.tags && (
          <ul className="property-tags">
            {p.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
      </section>
      {p.description && (
        <section className="property-description section">
          <p className="eyebrow">About this home</p>
          <h2>A home designed for real life.</h2>
          {p.description.split("\n\n").map((x) => (
            <p key={x}>{x}</p>
          ))}
        </section>
      )}
      {(showInquiry || showTour) && (
        <div className="section inquiry-position button-row">
          {showInquiry && (
            <Link
              className="button button-dark"
              href={`/contact?property=${encodeURIComponent(p.address || title)}`}
            >
              Inquire about this property
            </Link>
          )}
          {showTour && (
            <Link
              className="button button-ghost-dark"
              href={`/private-tour?property=${encodeURIComponent(p.address || title)}`}
            >
              Request a private tour
            </Link>
          )}
        </div>
      )}
      {p.category === "presale" && (
        <section className="presale-note section">
          <p>
            Illustrations show a proposed design. Confirm all details and inclusions with Jeremy.
            Pictured pools, furnishings, finishes, and landscaping are not established as included.
          </p>
        </section>
      )}
      {(p.community === "Hidden Lake" || p.community === "Thompson Mill") && (
        <section className="community-tagline section">
          <h2>{p.intro}</h2>
          {p.community === "Hidden Lake" && (
            <p>
              Two stunning presale opportunities. One beautiful community. And the opportunity to
              make your dream home a reality.
            </p>
          )}
        </section>
      )}
      <KeyFeatures project={p} />
      <PropertyGallery project={p} />
      {p.tourUrl && (
        <section className="tour-band">
          <div>
            <p className="eyebrow">Unbranded 3D tour</p>
            <h2>Explore {title} virtually.</h2>
          </div>
          <a className="button button-light" href={p.tourUrl} target="_blank" rel="noreferrer">
            Open 3D tour
          </a>
        </section>
      )}
      <VideoLightbox project={p} />
      <section className="contact-pair section">
        {p.listingAgent && (
          <article>
            <p className="eyebrow">Listing Contact</p>
            <h2>{p.listingAgent.name}</h2>
            <p>{p.listingAgent.company}</p>
            <a href={`tel:${p.listingAgent.phoneHref}`}>{p.listingAgent.phone}</a>
          </article>
        )}
        <article>
          <p className="eyebrow">Builder Contact</p>
          <h2>Jeremy Russin</h2>
          <p>Russin Homes</p>
          <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
        </article>
      </section>
      <FinalCTA />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "SingleFamilyResidence",
          name: title,
          address: p.address,
          description: p.intro,
          url: `${site.url}${p.category === "presale" ? "/opportunities" : "/portfolio"}/${p.slug}`,
        }}
      />
    </main>
  );
}
