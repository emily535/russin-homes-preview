"use client";
import { useState } from "react";
import { testimonials } from "@/data/site";
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  if (!testimonials.length) return null;
  const t = testimonials[index];
  const paragraphs = t.quote.split("\n\n");
  const selectTestimonial = (nextIndex: number) => {
    setIndex(nextIndex);
    setExpanded(false);
  };
  return (
    <section className="testimonials section">
      <p className="eyebrow">Client stories</p>
      <h2>Built on trust.</h2>
      <blockquote>{t.pullQuote}</blockquote>
      <div className="testimonial-review">
        <p>{paragraphs[0]}</p>
        <div
          id={`testimonial-full-${index}`}
          className="testimonial-review-rest"
          data-expanded={expanded}
        >
          {paragraphs.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
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
