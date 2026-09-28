"use client";
import { useState } from "react";
import { testimonials } from "@/data/site";
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  if (!testimonials.length) return null;
  const t = testimonials[index];
  const paragraphs = t.quote.split("\n\n");
  // Marks wrap the stored text; the data itself stays unquoted for the Review JSON-LD.
  // Standard multi-paragraph style: open every paragraph, close only the last.
  const quoted = (paragraph: string, i: number) =>
    `\u201C${paragraph}${i === paragraphs.length - 1 ? "\u201D" : ""}`;
  const selectTestimonial = (nextIndex: number) => {
    setIndex(nextIndex);
    setExpanded(false);
  };
  return (
    <section className="testimonials section">
      <p className="eyebrow">Client stories</p>
      <h2>Built on trust.</h2>
      <blockquote>{`\u201C${t.pullQuote}\u201D`}</blockquote>
      <div className="testimonial-review">
        <p>{quoted(paragraphs[0], 0)}</p>
        <div
          id={`testimonial-full-${index}`}
          className="testimonial-review-rest"
          data-expanded={expanded}
        >
          {paragraphs.slice(1).map((paragraph, i) => (
            <p key={paragraph}>{quoted(paragraph, i + 1)}</p>
          ))}
        </div>
      </div>
      {paragraphs.length > 1 && (
        <button
          className="testimonial-expand"
          type="button"
          aria-expanded={expanded}
          aria-controls={`testimonial-full-${index}`}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Read the full review"}
        </button>
      )}
      <cite>{t.attribution}</cite>
      <div className="testimonial-controls">
        <button
          type="button"
          onClick={() => selectTestimonial((index + testimonials.length - 1) % testimonials.length)}
          aria-label="Previous testimonial"
        >
          ←
        </button>
        <div>
          {testimonials.map((_, i) => (
            <button
              type="button"
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              aria-pressed={i === index}
              onClick={() => selectTestimonial(i)}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => selectTestimonial((index + 1) % testimonials.length)}
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
    </section>
  );
}
