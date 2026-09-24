import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Credentials } from "@/components/Credentials";
import { StructuredData } from "@/components/StructuredData";
import { pageMetadata } from "@/data/metadata";
import { assets, site } from "@/data/site";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = pageMetadata(
  "Meet Jeremy Russin | Triangle Custom Home Builder | Russin Homes",
  "Meet Jeremy Russin, a Triangle homebuilder since 2004. Learn about the family-owned Russin Homes business serving Youngsville, Wake Forest, and Raleigh, NC.",
  "/about",
);
export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Russin Homes"
        title="Meet Jeremy Russin."
        copy="A local, family owned business with 20 years of experience in residential new home construction."
        imageSrc={assets.detailTwo}
        imageAlt="Craft detail in a Russin Homes residence"
      />
      <div className="crumb-wrap">
        <Breadcrumb visuallyHidden items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      </div>
      <section className="about-intro section" aria-label="About Jeremy Russin">
        <div className="about-intro-copy">
          <p>
            For over 20 years, Russin Homes has built high quality homes across the Triangle. As a
            local, family owned business, we are known for honest communication, lasting
            relationships, and doing things the right way. When you choose Russin Homes, you get
            more than an award winning builder. You gain a trusted partner committed to bringing
            your vision to life.
          </p>
          <p>
            Jeremy Russin is the builder behind Russin Homes, a locally owned, family-owned custom
            homebuilding business serving Youngsville, Wake Forest, and Raleigh, North Carolina.
          </p>
          <p>
            He has been building new homes in the Triangle and surrounding areas since 2004. With
            more than 20 years of residential construction experience and multiple Parade of Homes
            awards, Jeremy brings a background in both construction and purchasing to his work.
          </p>
        </div>
        <figure className="about-portrait">
          <Image
            src={assets.aboutPortrait}
            alt="Jeremy Russin and his wife, Patty, at the beach."
            width={516}
            height={728}
            sizes="(max-width: 700px) calc(100vw - 44px), 380px"
            priority
          />
          <figcaption>Jeremy and Patty Russin.</figcaption>
        </figure>
      </section>
      <section className="about-sections section">
        <article>
          <p className="eyebrow">Experience</p>
          <h2>Building experience. Practical perspective.</h2>
          <p>
            A home takes shape through decisions about its plan, materials, and budget.
            Jeremy&apos;s construction and purchasing background gives him experience with both the
            building work and the decisions behind it. That perspective informs his approach to
            creating a home while keeping the project budget in view.
          </p>
          <p>
            Explore the <Link href="/portfolio">Russin Homes portfolio</Link> to see completed
            projects and featured homes. Each project gallery offers a closer look at that
            home&apos;s spaces and details.
          </p>
        </article>
        <article>
          <p className="eyebrow">Family owned</p>
          <h2>A family-owned business with a personal story.</h2>
          <p>
            Outside of building homes, Jeremy is a husband and father. He and his wife, Patty, have
            been married for 24 years, and he is the proud father of their daughter, Ellie, and son,
            Henry.
          </p>
          <p>
            That is part of the story behind Russin Homes: a local builder with a career rooted in
            the Triangle and a family life of his own.
          </p>
        </article>
      </section>
      <Credentials />
      <section className="about-contact">
        <p className="eyebrow">Start a conversation</p>
        <h2>Considering a home in the Triangle?</h2>
        <p>
          Whether you are exploring a Russin Homes property or thinking about a custom home in
          Youngsville, Wake Forest, or Raleigh, start with a conversation with Jeremy. Share where
          you are looking, what matters most to you in a home, and your preferred timing.
        </p>
        <div className="button-row">
          <Link className="button button-light" href="/contact">
            Talk with Jeremy
          </Link>
          <Link className="button button-ghost" href="/opportunities">
            Explore homes and homesites
          </Link>
        </div>
      </section>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": `${site.url}/about#aboutpage`,
          url: `${site.url}/about`,
          name: "Meet Jeremy Russin",
          isPartOf: { "@id": `${site.url}/#website` },
          about: {
            "@type": "Person",
            "@id": `${site.url}/about#jeremy-russin`,
            name: "Jeremy Russin",
            jobTitle: "Builder",
            image: `${site.url}${assets.aboutPortrait}`,
            description:
              "Triangle homebuilder with more than 20 years of residential construction experience.",
            worksFor: { "@id": `${site.url}/#business` },
          },
        }}
      />
    </main>
  );
}
