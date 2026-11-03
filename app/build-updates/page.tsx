import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/FinalCTA";
import { pageMetadata } from "@/data/metadata";
import { assets } from "@/data/site";
import { Breadcrumb } from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = pageMetadata(
  "Home & Project Updates | Russin Homes",
  "Russin Homes news: Parade of Homes awards, new photography, and virtual walkthroughs of homes and presale homesites in Youngsville and Wake Forest.",
  "/build-updates",
);
export default function UpdatesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Build Updates"
        title="The latest from Russin Homes."
        copy="The latest news from Russin Homes: awards, new photography, and new ways to walk a home before you visit. For current availability or construction timing, contact Jeremy directly."
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
            <p className="eyebrow">October 2026 · Silverleaf</p>
            <h2>Sitting Pretty wins Bronze</h2>
            <p>
              1123 Dovefield Lane won a Bronze award in Category 18, $960,000 to $1,100,000, at the
              2026 Parade of Homes from the Home Builders Association of Raleigh-Wake County. It is
              Russin Homes&apos; fifth year of Parade recognition, and the home is move-in ready.
            </p>
            <Link className="text-link" href="/parade-of-homes">
              See the award
            </Link>
          </div>
        </article>
        <article>
          <div />
          <div>
            <p className="eyebrow">October 2026 · Hidden Lake</p>
            <h2>Walk Hidden Lake 75 in 360</h2>
            <p>
              The McMillan Design 360 virtual walkthrough of the proposed plan at 163 Forest Bridge
              Road is now on its page, alongside eight renderings. Walk the home before construction
              starts.
            </p>
            <Link className="text-link" href="/opportunities/163-forest-bridge-road">
              Take the walkthrough
            </Link>
          </div>
        </article>
        <article>
          <div />
          <div>
            <p className="eyebrow">October 2026 · Silverleaf</p>
            <h2>1121 Dovefield Lane photography</h2>
            <p>
              Professional photography of For-Evergreen, our 2026 Franklin County Parade of Homes
              entry, is now on its page, along with a video walkthrough.
            </p>
            <Link className="text-link" href="/portfolio/1121-dovefield-lane">
              View the property
            </Link>
          </div>
        </article>
        <article>
          <div />
          <div>
            <p className="eyebrow">East Woods of Patterson</p>
            <h2>205 Red Cardinal Court walkthrough</h2>
            <p>
              Watch the walkthrough of The Patricia Marie, the 2025 Parade of Homes Silver and Best
              Kitchen winner and the home on the cover of the 2026 Franklin County Parade of Homes
              magazine.
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
