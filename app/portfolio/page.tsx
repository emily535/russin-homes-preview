import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { FinalCTA } from "@/components/FinalCTA";
import { pageMetadata } from "@/data/metadata";
import { assets, portfolioProjects } from "@/data/site";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = pageMetadata(
  "Custom Home Portfolio | Russin Homes",
  "Explore selected custom residences and current projects from Russin Homes in the Triangle, North Carolina.",
  "/portfolio",
);
export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        eyebrow="Portfolio"
        title="Built with intention. Meant for real life."
        copy="Available homes and completed Russin Homes projects across Youngsville, Wake Forest, and the surrounding areas."
        imageSrc={assets.exteriorThree}
        imageAlt="Completed Russin Homes custom residence"
      />
      <div className="crumb-wrap">
        <Breadcrumb visuallyHidden items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />
      </div>
      <section className="section">
        <div className="section-heading">
          <h2>Featured homes and completed work</h2>
        </div>
        <div className="project-grid">
          {portfolioProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
