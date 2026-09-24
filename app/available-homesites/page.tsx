import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/FinalCTA";
import { HomesiteFilters } from "@/components/HomesiteFilters";
import { pageMetadata } from "@/data/metadata";
import { assets } from "@/data/site";

export const metadata: Metadata = pageMetadata(
  "Available Homes & Homesites | Russin Homes",
  "Explore current Russin Homes projects, presale opportunities, and homesites in Youngsville and the Triangle.",
  "/available-homesites",
);
export default function HomesitesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Available homesites"
        title="A starting point for what comes next."
        copy="Explore current Russin Homes projects and homesite opportunities. Contact us for the latest confirmed status."
        imageSrc={assets.exteriorOne}
        imageAlt="Russin Homes residence in Youngsville"
      />
      <section className="section">
        <HomesiteFilters />
      </section>
      <FinalCTA />
    </main>
  );
}
