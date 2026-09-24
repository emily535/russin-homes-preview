"use client";
import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/site";
export function KeyFeatures({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const items = project.highlights || [];
  if (items.length < 3) return null;
  return (
    <section className="section key-features">
      <div className="section-heading">
        <p className="eyebrow">
          {project.category === "completed" ? "Project features" : "Key features"}
        </p>
        <h2>
          {project.category === "completed"
            ? "What went into this home."
            : "Details worth a closer look."}
        </h2>
      </div>
      <div className="feature-grid">
        {items.slice(0, open ? items.length : 8).map((x) => (
          <article key={x.label}>
            <i />
            <h3>{x.label}</h3>
            {x.detail && <p>{x.detail}</p>}
          </article>
        ))}
      </div>
      {items.length > 8 && (
        <button
          className="text-button"
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Show fewer features" : "Show all features"}
        </button>
      )}
      {project.closingLine && <p className="closing-line">{project.closingLine}</p>}
    </section>
  );
}
export function PropertyGallery({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  if (!project.gallery.length) return null;
  const images = open ? project.gallery : project.gallery.slice(0, 12);
  return (
    <section className="section gallery">
      <div className="section-heading">
        <p className="eyebrow">Gallery</p>
        <h2>A closer look.</h2>
      </div>
      <div className="gallery-grid">
        {images.map((im, i) => (
          <figure key={im.src}>
            <Image
              src={im.src}
              alt={im.alt}
              width={2048}
              height={1368}
              priority={i === 0}
              sizes="(max-width:700px) 100vw,50vw"
            />
            <figcaption>{im.caption}</figcaption>
          </figure>
        ))}
      </div>
      {project.gallery.length > 12 && (
        <button
          className="button button-dark"
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Show fewer photos" : `View all ${project.gallery.length} photos`}
        </button>
      )}
    </section>
  );
}
export function VideoLightbox({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  if (!project.videoUrl) return null;
  const id = project.videoUrl.split("/").pop()?.split("?")[0];
  return (
    <section className="section video-tour">
      <div className="section-heading">
        <p className="eyebrow">
          {project.videoPlacement === "project-tour" ? "Project tour" : "Walkthrough"}
        </p>
        <h2>See the home in motion.</h2>
      </div>
      <button
        className="video-poster"
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Play ${project.videoTitle}`}
      >
        <span>▶</span>
        <b>Play video tour</b>
      </button>
      {open && (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={project.videoTitle}
        >
          <button type="button" onClick={() => setOpen(false)} aria-label="Close video">
            ×
          </button>
          <div className="portrait-video">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&playsinline=1`}
              title={project.videoTitle}
              allow="encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
