import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  copy,
  imageSrc,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <section className="page-hero">
      <Image
        className="page-hero-image"
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
      />
      <div className="page-hero-overlay" />
      <div className="page-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}
