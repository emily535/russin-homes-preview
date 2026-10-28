import Image from "next/image";
import type { RecognitionImage } from "@/data/site";
import { Section } from "./Section";

// Award photos for one property. Renders nothing when the property has none.
export function AwardRecognition({
  images,
  eyebrow,
  heading,
  support,
}: {
  images?: readonly RecognitionImage[];
  eyebrow?: string;
  heading: string;
  support?: string;
}) {
  if (!images?.length) return null;
  return (
    <Section className="section award-recognition">
      <div className="section-heading">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{heading}</h2>
        {support && <p>{support}</p>}
      </div>
      <div className="recognition-grid">
        {images.map((im) => (
          <figure key={im.src}>
            <Image
              src={im.src}
              alt={im.alt}
              width={1200}
              height={1600}
              loading="lazy"
              sizes="(min-width: 768px) 440px, calc(100vw - 44px)"
            />
            <figcaption>{im.caption}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
