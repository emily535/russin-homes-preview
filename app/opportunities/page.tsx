import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/FinalCTA";
import { HomesiteFilters } from "@/components/HomesiteFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { pageMetadata } from "@/data/metadata";
import { assets } from "@/data/site";
import { Breadcrumb } from "@/components/Breadcrumb";
export const metadata: Metadata = pageMetadata(
  "Homes for Sale & Presale Opportunities | Russin Homes",
  "Compare three move-in ready homes and four presale opportunities in Youngsville and Wake Forest.",
  "/opportunities",
);
export default function OpportunitiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Current Opportunities"
        title="Homes and homesites to explore."
        copy="Three move-in ready homes in Youngsville, plus presale homesites in Youngsville and Wake Forest."
        imageSrc={assets.exteriorOne}
        imageAlt="Russin Homes residence in Youngsville"
      />
      <div className="crumb-wrap">
        <Breadcrumb
          visuallyHidden
          items={[{ label: "Home", href: "/" }, { label: "Opportunities" }]}
        />
      </div>
      <section className="section">
        <SectionHeader
          eyebrow="Current Opportunities"
          support="Homes and homesites to explore."
          emphasis="label"
        />
        <HomesiteFilters />
      </section>
      <section className="opportunity-groups section">
        <article>
          <h2>Come home to Hidden Lake.</h2>
          <p>
            Two stunning presale opportunities. One beautiful community. And the opportunity to make
            your dream home a reality.
          </p>
        </article>
        <article>
          <h2>Thompson Mill</h2>
          <p>Two exceptional homes. Created with a purpose. Designed for life.</p>
        </article>
      </section>
      <FinalCTA />
    </main>
  );
}
