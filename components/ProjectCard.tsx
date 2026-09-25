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
        <h3>
          <Link href={href}>{project.planName || project.address}</Link>
        </h3>
        {project.planName && <p className="card-address">{project.address}</p>}
        {specs && (
          <ul className="card-specs">
            <li>{project.bedrooms} beds</li>
            <li>{project.squareFeet} sq ft</li>
            <li>{project.bathrooms} baths</li>
          </ul>
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
