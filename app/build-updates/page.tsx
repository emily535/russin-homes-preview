import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/FinalCTA";
import { pageMetadata } from "@/data/metadata";
import { assets } from "@/data/site";
import { Breadcrumb } from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = pageMetadata(
  "Home & Project Updates | Russin Homes",
  "See supplied updates on Russin Homes photography, proposed designs, and walkthroughs, with links to the relevant homes and homesites.",
  "/build-updates",
);
export default function UpdatesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Build Updates"
        title="The latest from Russin Homes."
        copy="Follow the latest supplied updates on featured homes, new photography, and proposed designs. For current availability or construction timing, contact Jeremy directly."
        imageSrc={assets.detailThree}
        imageAlt="Work in progress on a Russin Homes project"
      />
      <div className="crumb-wrap">
        <Breadcrumb
          visuallyHidden
          items={[{ label: "Home", href: "/" }, { label: "Build Updates" }]}
        />
      </div>
      <section className="section timeline">
        <article>
          <div />
          <div>
            <p className="eyebrow">Silverleaf</p>
            <h2>1121 Dovefield Lane photography</h2>
            <p>
              The home has been staged, and professional photographs are still to be supplied. Its
              property page is updated when the gallery is available.
            </p>
            <Link className="text-link" href="/portfolio/1121-dovefield-lane">
              View the property
            </Link>
          </div>
        </article>
        <article>
          <div />
          <div>
            <p className="eyebrow">Hidden Lake</p>
            <h2>A closer look at Hidden Lake 75</h2>
            <p>
              Five proposed renderings show exterior and interior views for the current design at
              163 Forest Bridge Road.
            </p>
            <Link className="text-link" href="/opportunities#hidden-lake-75-gallery">
              Explore the renderings
            </Link>
          </div>
        </article>
        <article>
          <div />
          <div>
            <p className="eyebrow">East Woods of Patterson</p>
            <h2>205 Red Cardinal Court walkthrough</h2>
            <p>
              Watch the supplied walkthrough alongside the home&apos;s photography and property
              details.
            </p>
            <Link className="text-link" href="/portfolio/205-red-cardinal-court#walkthrough">
              Watch the walkthrough
            </Link>
          </div>
        </article>
      </section>
      <FinalCTA />
    </main>
  );
}
