import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrivateTourForm } from "@/components/PrivateTourForm";
import { pageMetadata } from "@/data/metadata";
import { PRIVATE_TOURS_ENABLED, publishedProjects } from "@/data/site";

export const metadata: Metadata = pageMetadata(
  "Request a Private Tour | Russin Homes",
  "Request a private tour of a Russin Homes property with Jeremy Russin.",
  "/private-tour",
);

export default async function PrivateTourPage({
  searchParams,
}: {
  searchParams: Promise<{ property?: string }>;
}) {
  if (!PRIVATE_TOURS_ENABLED) notFound();
  const requested = (await searchParams).property || "";
  const property = publishedProjects.find((project) => project.address === requested);
  const propertyName = property?.address || requested || "Russin Homes property";
  return (
    <main className="tour-request-page">
      <section className="tour-request-intro section">
        <p className="eyebrow">Private tours</p>
        <h1>Request a private tour.</h1>
        <p>
          Tell us what works for you. Jeremy personally follows up to discuss the property and
          arrange the next step.
        </p>
      </section>
      <section className="section tour-request-form-wrap">
        <PrivateTourForm property={propertyName} />
      </section>
    </main>
  );
}
