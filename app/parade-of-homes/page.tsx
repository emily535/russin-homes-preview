import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { AwardMedal } from "@/components/AwardMedal";
import { AwardRecognition } from "@/components/AwardRecognition";
import { awardLabel } from "@/components/PropertyMarks";
import { StructuredData } from "@/components/StructuredData";
import { pageMetadata } from "@/data/metadata";
import { PRIVATE_TOURS_ENABLED, parades, projects, site } from "@/data/site";
export const metadata: Metadata = pageMetadata(
  "Russin Homes at the 2026 Parade of Homes | Bronze Award, Youngsville NC",
  "Russin Homes entered two homes in the 2026 Parade of Homes. 1123 Dovefield Lane earned a Bronze award in the Triangle Parade. Both homes are available for private tours with builder Jeremy Russin.",
  "/parade-of-homes",
);
export default function ParadePage() {
  const entries = projects.filter((p) => p.awards?.some((a) => a.year === 2026 && a.paradeId));
  const heroProject = projects.find((p) => p.slug === "1123-dovefield-lane");
  const heroAward = heroProject?.awards?.find((a) => a.kind === "award" && a.year === 2026);
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
          alt="1123 Dovefield Lane, a 2026 Triangle Parade of Homes Bronze award winner by Russin Homes"
          fill
          priority
          sizes="100vw"
        />
        {heroAward?.level && (
          <AwardMedal
            year={heroAward.year}
            level={heroAward.level}
            label={awardLabel(heroAward)}
            className="award-corner"
          />
        )}
        <div>
          <p className="eyebrow">2026 Parade of Homes</p>
          <h1>Recognized again in 2026.</h1>
          <p>
            Two Russin Homes entries in the 2026 Parade of Homes. Sitting Pretty at 1123 Dovefield
            Lane earned a Bronze award in the Triangle Parade of Homes, our fifth year of Parade
            recognition.
          </p>
        </div>
      </section>
      <AwardRecognition
        images={heroProject?.recognitionImages}
        heading="Sitting Pretty, 2026 Bronze."
        support="Recognized by the Home Builders Association of Raleigh-Wake County in the 2026 Triangle Parade of Homes."
      />
      <section className="cover-feature section">
        <div>
          <p className="eyebrow">Recognition</p>
          <h2>On the cover.</h2>
          <p>
            The 2026 Franklin County Parade of Homes magazine features{" "}
            <Link className="inline-link" href="/portfolio/205-red-cardinal-court">
              205 Red Cardinal Court
            </Link>
            , a Russin Homes custom build, on its cover, credited as photo courtesy of Russin Homes.
          </p>
        </div>
        <Image
          src="/images/russin-homes/parade/franklin-county-parade-cover-2026.webp"
          alt="2026 Franklin County Parade of Homes magazine cover featuring a Russin Homes residence"
          width={900}
          height={1165}
        />
      </section>
      <section className="section parade-wrap">
        <p className="eyebrow">The 2026 tour</p>
        <h2>The Parade is over. The homes are still open.</h2>
        <p>
          The 2026 Parade of Homes ran on weekends from October 3 through October 18. Both Russin
          Homes entries are move-in ready, and you can still walk through either one with Jeremy.
        </p>
        <div className="button-row">
          <Link
            className="button button-dark"
            href={PRIVATE_TOURS_ENABLED ? "/private-tour" : "/contact"}
          >
            Request a Private Tour
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Featured homes</p>
          <h2>Our 2026 entries.</h2>
        </div>
        <div className="project-grid">
          {entries.map((p) => {
            const won = p.awards?.find((a) => a.kind === "award" && a.year === 2026);
            const award = won?.paradeId
              ? won
              : p.awards?.find((a) => a.kind === "entry" && a.year === 2026);
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
                      {/* 2026 Parade awards are given within a price category. */}
                      {won?.level && (
                        <span className="entry-award">{won.level} award, price category</span>
                      )}
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
        <p>Parade of Homes recognition across five separate years.</p>
        <div className="award-medal-row">
          <AwardMedal year={2020} level="Gold" />
          <AwardMedal year={2022} level="Silver" />
          <AwardMedal year={2024} level="Bronze" />
          <AwardMedal year={2025} level="Silver" />
          <AwardMedal year={2026} level="Bronze" />
        </div>
      </section>
      <section className="final-cta">
        <p className="eyebrow">Still touring</p>
        <h2>Talk to the builder, not a sales office.</h2>
        <p>
          Jeremy is directly involved in every Russin Homes build. Call to walk through a Parade
          home privately, or ask about a homesite.
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
