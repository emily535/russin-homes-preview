import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Credentials } from "@/components/Credentials";
import { FinalCTA } from "@/components/FinalCTA";
import { HomeHeroVideo } from "@/components/HomeHeroVideo";
import { ProjectCard } from "@/components/ProjectCard";
import { Testimonials } from "@/components/Testimonials";
import { pageMetadata } from "@/data/metadata";
import { assets, HOME_HERO_WORDS, locations, projects } from "@/data/site";

export const metadata: Metadata = pageMetadata(
  "Russin Homes | Custom Homes in Youngsville, Wake Forest & Raleigh",
  "Explore Russin Homes projects, featured homes, and presale homesites in Youngsville and Wake Forest. Talk with Jeremy about a home in the Raleigh area.",
  "/",
);

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <HomeHeroVideo />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="hero-brand">Russin Homes</p>
          <h1 className="stacked-headline">
            {HOME_HERO_WORDS.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </h1>
          <p>Custom homes across Youngsville, Wake Forest, and the surrounding areas.</p>
          <div className="button-row">
            <Link className="button button-light" href="/opportunities">
              View Available Homes
            </Link>
            <Link className="button button-ghost" href="/portfolio">
              Explore Our Portfolio
            </Link>
          </div>
        </div>
        <Link
          className="hero-next"
          href="#opportunities"
          aria-label="Scroll to current opportunities"
        >
          <ArrowDown aria-hidden="true" size={20} />
        </Link>
      </section>
      <section id="opportunities" className="section">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">Current Opportunities</p>
            <h2>Current Opportunities</h2>
          </div>
          <p>
            Three move-in ready homes in Youngsville, plus presale homesites in Youngsville and Wake
            Forest.
          </p>
        </div>
        <div className="project-grid">
          {projects
            .filter((project) => project.category === "available")
            .map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
        </div>
      </section>
      <Testimonials />
      <section className="builder-band">
        <div className="builder-image">
          <Image
            src={assets.detailTwo}
            alt="Detail from a Russin Homes residence"
            fill
            sizes="(max-width: 900px) 100vw, 56vw"
          />
        </div>
        <div className="builder-copy">
          <p className="eyebrow">Direct builder involvement</p>
          <h2>You work with Jeremy.</h2>
          <p>
            A local, family owned business with 20 years of experience in residential new home
            construction.
          </p>
          <Link className="text-link" href="/about">
            Meet Jeremy <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Homes with a clear point of view.</h2>
        </div>
        <div className="masonry">
          <div className="wide">
            <Image
              src={assets.exteriorOne}
              alt="Russin Homes exterior project"
              fill
              sizes="(max-width: 600px) 100vw, 60vw"
            />
          </div>
          <div>
            <Image
              src={assets.interiorOne}
              alt="Interior detail in a Russin Homes project"
              fill
              sizes="(max-width: 600px) 100vw, 40vw"
            />
          </div>
          <div>
            <Image
              src={assets.exteriorThree}
              alt="Completed Russin Homes residence"
              fill
              sizes="(max-width: 600px) 100vw, 40vw"
            />
          </div>
        </div>
        <Link className="button button-dark" href="/portfolio">
          Explore the portfolio
        </Link>
      </section>
      <section className="locations-band">
        <div className="section-heading">
          <p className="eyebrow">Where we build</p>
          <h2>Local experience across the Triangle.</h2>
        </div>
        <div className="location-list">
          {Object.entries(locations).map(([slug, location], index) => (
            <Link href={`/locations/${slug}`} key={slug}>
              <span>0{index + 1}</span>
              <h3>{location.name}</h3>
              <p>{location.eyebrow}</p>
              <ArrowRight aria-hidden="true" size={20} />
            </Link>
          ))}
        </div>
      </section>
      <Credentials />
      <section className="section process">
        <div className="section-heading">
          <p className="eyebrow">The building process</p>
          <h2>Clear steps. Direct answers.</h2>
        </div>
        <ol>
          {[
            [
              "01",
              "Conversation",
              "We start with the site, the goals, the timing, and whether the project is the right fit.",
            ],
            ["02", "Planning", "Decisions are organized early so the work ahead is understood."],
            [
              "03",
              "Construction",
              "Jeremy stays directly involved as plans become a working home.",
            ],
            ["04", "Completion", "Final details are reviewed together before handoff."],
          ].map(([n, t, c]) => (
            <li key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{c}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="updates-preview">
        <div>
          <p className="eyebrow">From the field</p>
          <h2>Build Updates</h2>
          <p>Supplied updates on featured homes, new photography, and proposed designs.</p>
          <Link className="text-link" href="/build-updates">
            Follow current work <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
        <div className="updates-image">
          <Image
            src={assets.detailThree}
            alt="Construction detail from a Russin Homes project"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
