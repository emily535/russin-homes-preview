import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { AwardMedal } from "@/components/AwardMedal";
import { StructuredData } from "@/components/StructuredData";
import { pageMetadata } from "@/data/metadata";
import { parades, projects, site } from "@/data/site";
export const metadata: Metadata = pageMetadata(
  "Russin Homes at the 2026 Parade of Homes | Youngsville, NC",
  "Tour Russin Homes entries in the 2026 Parade of Homes. Tour dates, featured homes in Youngsville and Wake Forest, and direct contact with builder Jeremy Russin.",
  "/parade-of-homes",
);
export default function ParadePage() {
  const entries = projects.filter((p) =>
    p.awards?.some((a) => a.kind === "entry" && a.year === 2026),
  );
  const events = parades.flatMap((parade) =>
    parade.weekends.map((weekend) => ({
      "@context": "https://schema.org",
      "@type": "Event",
      name: `${parade.name} 2026`,
      startDate: weekend.start,
      endDate: weekend.end,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: parade.name,
        address: { "@type": "PostalAddress", addressRegion: "NC" },
      },
      organizer: { "@type": "Organization", name: "Russin Homes", url: site.url },
    })),
  );
  return (
    <main>
      <section className="parade-hero">
        <Image
          src="/images/russin-homes/curated/02-available-1123-dovefield-lane/01-hero.webp"
          alt="Russin Homes residence entered in the 2026 Parade of Homes"
          fill
          priority
          sizes="100vw"
        />
        <div>
          <p className="eyebrow">2026 Parade of Homes</p>
          <h1>Russin Homes on tour.</h1>
          <p>
            Two Russin Homes entries in the 2026 Parade of Homes, plus recognition across four
            separate years.
          </p>
        </div>
      </section>
      <section className="cover-feature section">
        <div>
          <p className="eyebrow">Recognition</p>
          <h2>On the cover.</h2>
          <p>
            The 2026 Franklin County Parade of Homes magazine features a Russin Homes residence on
            its cover, credited as photo courtesy of Russin Homes.
          </p>
        </div>
        <Image
          src="/images/russin-homes/parade/franklin-county-parade-cover-2026.webp"
          alt="2026 Franklin County Parade of Homes magazine cover featuring a Russin Homes residence"
          width={900}
          height={1165}
        />
      </section>
      <section className="section tour-dates">
        <p className="eyebrow">Plan your visit</p>
        <h2>Tour dates.</h2>
        {parades.map((parade) => (
          <article key={parade.id}>
            <h3>{parade.name}</h3>
            <div>
              {parade.weekends.map((w) => (
                <div key={w.start}>
                  <span>{parade.name}</span>
                  <strong>{w.label}</strong>
                </div>
              ))}
            </div>
          </article>
        ))}
        <p>
          Hours and ticketing are set by the host Home Builders Association. Confirm details before
          you visit.
        </p>
      </section>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Featured homes</p>
          <h2>Our 2026 entries.</h2>
        </div>
        <div className="project-grid">
          {entries.map((p) => {
            const award = p.awards?.find((a) => a.kind === "entry" && a.year === 2026);
            const parade = parades.find((x) => x.id === award?.paradeId);
            return (
              <ProjectCard
                key={p.slug}
                project={p}
                paradeDetails={
                  parade && (
                    <div className="entry-details">
                      <strong>{award?.entryName}</strong>
                      <span>{parade.name}</span>
                      {parade.weekends.map((w) => (
                        <small key={w.start}>{w.label}</small>
                      ))}
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${p.address}, ${p.city}`)}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Get directions
                      </a>
                    </div>
                  )
                }
              />
            );
          })}
        </div>
      </section>
      <section className="award-history section">
        <p className="eyebrow">Parade of Homes</p>
        <h2>A record of recognition.</h2>
        <p>Parade of Homes recognition across four separate years.</p>
        <div className="award-medal-row">
          <AwardMedal year={2020} level="Gold" />
          <AwardMedal year={2022} level="Silver" />
          <AwardMedal year={2024} level="Bronze" />
          <AwardMedal year={2025} level="Silver" />
        </div>
      </section>
      <section className="final-cta">
        <p className="eyebrow">Planning your visit</p>
        <h2>Talk to the builder, not a sales office.</h2>
        <p>
          Jeremy is directly involved in every Russin Homes build. Call before you tour, or ask
          about a homesite while you are there.
        </p>
        <div className="button-row">
          <a className="button button-light" href="tel:+19195207342">
            Call Jeremy
          </a>
          <Link className="button button-ghost" href="/contact">
            Start a Conversation
          </Link>
        </div>
      </section>
      <StructuredData data={events} />
    </main>
  );
}
