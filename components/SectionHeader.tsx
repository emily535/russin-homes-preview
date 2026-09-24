import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  heading,
  support,
  emphasis = "heading",
  level = "h2",
  className = "",
}: {
  eyebrow: ReactNode;
  heading?: ReactNode;
  support?: ReactNode;
  emphasis?: "heading" | "label";
  level?: "h1" | "h2";
  className?: string;
}) {
  const Heading = level;
  return (
    <div
      className={`section-header section-heading ${emphasis === "label" ? "label-led" : ""} ${className}`.trim()}
    >
      <p className="section-header-label">{eyebrow}</p>
      {heading && <Heading>{heading}</Heading>}
      {support && <p className="section-header-support">{support}</p>}
    </div>
  );
}
