import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { StructuredData } from "./StructuredData";
import { site } from "@/data/site";

export type Crumb = { label: string; href?: string };

export function Breadcrumb({
  items,
  visuallyHidden = false,
}: {
  items: Crumb[];
  visuallyHidden?: boolean;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${site.url}${item.href}` : undefined,
    })),
  };
  return (
    <>
      <nav className={`breadcrumb${visuallyHidden ? " sr-only" : ""}`} aria-label="Breadcrumb">
        {items.map((item, index) => (
          <span key={item.label}>
            {index > 0 && <ChevronRight aria-hidden="true" size={13} />}
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          </span>
        ))}
      </nav>
      <StructuredData data={schema} />
    </>
  );
}
