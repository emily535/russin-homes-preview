import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { FinalCTA } from "@/components/FinalCTA";
import { pageMetadata } from "@/data/metadata";
import { assets, portfolioProjects } from "@/data/site";
import { Breadcrumb } from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = pageMetadata(
  "Custom Home Portfolio | Russin Homes",
  "Completed Russin Homes custom builds in Youngsville and Wake Forest, including Parade of Homes winners in East Woods of Patterson and homes in Prescott.",
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
          <p>
            Every home here was built by Russin Homes, with Jeremy Russin directly involved from the
            first conversation through closing. The homes below are in East Woods of Patterson in
            Youngsville and in Prescott in Wake Forest, and three of them won at the Parade of
            Homes: 108 Red Cardinal Court took Silver in 2022, 203 Red Cardinal Court took Bronze in
            2024, and 205 Red Cardinal Court, which closed in November 2026, took Silver and Best
            Kitchen in 2025.
          </p>
          <p>
            Looking for a home you can move into now? Two are{" "}
            <Link className="inline-link" href="/opportunities">
              move-in ready in Youngsville
            </Link>
            , and four{" "}
            <Link className="inline-link" href="/opportunities">
              presale homesites
            </Link>{" "}
            in Hidden Lake and on Thompson Mill Road are open for buyers who want to build.
          </p>
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
