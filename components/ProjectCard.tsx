import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/site";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { PropertyMarks } from "./PropertyMarks";
export function ProjectCard({
  project,
  paradeDetails,
}: {
  project: Project;
  paradeDetails?: React.ReactNode;
}) {
  const href = `${project.category === "presale" ? "/opportunities" : "/portfolio"}/${project.slug}`;
  const specs = project.bedrooms && project.bathrooms && project.squareFeet;
  // The name gets its own line only when the address is the heading.
  const homeName = project.address ? project.planName : undefined;
  return (
    <article className="project-card">
      <Link href={href} className="project-image">
        {project.heroImage ? (
          <Image
            src={project.heroImage}
            alt={
              project.imageAlt || project.address || project.planName || "Russin Homes residence"
            }
            fill
            sizes="(max-width:700px) 100vw,(max-width:1100px) 50vw,33vw"
          />
        ) : (
          <MediaPlaceholder label={project.imageAlt} />
        )}
        <PropertyMarks project={project} />
      </Link>
      <div className="project-card-copy">
        <p className="eyebrow">
          {project.community} · {project.lot}
        </p>
        {/* Fixed-height slot, kept even when empty, so named and unnamed homes align. */}
        <p className="card-plan-name" aria-hidden={homeName ? undefined : true}>
          {homeName}
        </p>
        <h3>
          <Link href={href}>{project.address || project.planName}</Link>
        </h3>
        {specs ? (
          <ul className="card-specs">
            <li>{project.bedrooms} beds</li>
            <li>{project.squareFeet} sq ft</li>
            <li>{project.bathrooms} baths</li>
          </ul>
        ) : (
          // Same height as the spec row, invisible, so prices still line up.
          <div className="card-specs card-specs-reserved" aria-hidden="true">
            &nbsp;
          </div>
        )}
        {paradeDetails}
        {project.price && (
          <div className="card-price">
            <strong>
              {project.priceLabel} {project.price}
            </strong>
            <Link
              href={`/contact?property=${encodeURIComponent(project.address || project.planName || "Property")}`}
            >
              Inquire
            </Link>
          </div>
        )}
        {project.category === "completed" && (
          <Link className="text-link" href={href}>
            View project
          </Link>
        )}
      </div>
    </article>
  );
}
