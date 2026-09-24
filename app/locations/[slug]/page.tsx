import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { pageMetadata } from "@/data/metadata";
import { assets, locations, projects } from "@/data/site";

type LocationSlug = keyof typeof locations;
export function generateStaticParams() {
  return Object.keys(locations).map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = locations[slug as LocationSlug];
  if (!location) return {};
  return pageMetadata(
    `Custom Home Builder in ${location.name}, NC | Russin Homes`,
    `Explore Russin Homes custom building in ${location.name}, North Carolina, with direct builder involvement from Jeremy Russin.`,
    `/locations/${slug}`,
  );
}
export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locations[slug as LocationSlug];
  if (!location) notFound();
  const local = projects.filter(
    (project) =>
      project.city?.toLowerCase().startsWith(location.name.toLowerCase()) &&
      project.category !== "presale" &&
      project.published !== false,
  );
  const localHomesites = projects.filter(
    (project) =>
      project.category === "presale" &&
      project.city?.toLowerCase().startsWith(location.name.toLowerCase()),
  );
  return (
    <main>
      <PageHero
        eyebrow={location.eyebrow}
        title={location.title}
        copy={location.copy}
        imageSrc={location.image}
        imageAlt={`Russin Homes project serving ${location.name}, North Carolina`}
      />
      <div className="crumb-wrap">
        <Breadcrumb
          visuallyHidden
          items={[{ label: "Home", href: "/" }, { label: location.name }]}
        />
      </div>
      <section className="story section">
        <div>
          <p className="eyebrow">Building in {location.name}</p>
          <h2>A focused approach to place and project.</h2>
        </div>
        <div>
          <p>{location.detail}</p>
          <div className="button-row">
            <Link className="button button-dark" href="/opportunities">
              Explore opportunities
            </Link>
            <Link className="text-link" href="/contact">
              Discuss a potential build <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
      </section>
      {local.length ? (
        <section className="section section-rule">
          <div className="section-heading">
            <p className="eyebrow">Projects in {location.name}</p>
            <h2>Current and selected work.</h2>
          </div>
          <div className="project-grid">
            {local.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      ) : (
        <section className="photo-break">
          <div className="photo-break-image">
            <Image
              src={assets.interiorOne}
              alt={`Interior detail from a Russin Homes project serving ${location.name}`}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="eyebrow">Considering {location.name}?</p>
            <h2>Bring us the site, the questions, and the timing.</h2>
            <Link className="text-link" href="/contact">
              Start the conversation <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </section>
      )}
      {localHomesites.length > 0 && (
        <section className="section section-rule">
          <div className="section-heading">
            <p className="eyebrow">Presale opportunities</p>
            <h2>{location.name} homesites to discuss.</h2>
          </div>
          <div className="project-grid two">
            {localHomesites.map((homesite) => (
              <ProjectCard key={homesite.slug} project={homesite} />
            ))}
          </div>
        </section>
      )}
      <FinalCTA />
    </main>
  );
}
