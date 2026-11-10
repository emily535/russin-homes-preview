"use client";
import { useState } from "react";
import { opportunities } from "@/data/site";
import { ProjectCard } from "./ProjectCard";
// Status filters appear only when at least one home has that status.
const allFilters = [
  { key: "all", label: "All Opportunities" },
  { key: "move-in", label: "Move-In Ready" },
  { key: "under-contract", label: "Under Contract" },
  { key: "presale", label: "Presale Opportunities" },
  { key: "sold", label: "Sold" },
] as const;
const filters = allFilters.filter(
  (f) => f.key === "all" || opportunities.some((p) => p.statusKey === f.key),
);
export function HomesiteFilters() {
  const [active, setActive] = useState<string>("all");
  const shown = opportunities.filter((p) => active === "all" || p.statusKey === active);
  return (
    <>
      <div className="filter-row" role="group" aria-label="Filter opportunities">
        {filters.map((f) => (
          <button
            type="button"
            key={f.key}
            aria-pressed={active === f.key}
            onClick={() => setActive(f.key)}
          >
            {f.label}{" "}
            <span>
              {opportunities.filter((p) => f.key === "all" || p.statusKey === f.key).length}
            </span>
          </button>
        ))}
      </div>
      <p className="filter-note" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? "opportunity" : "opportunities"}.
      </p>
      <div className="project-grid filtered-projects">
        {shown.map((p) => (
          <ProjectCard project={p} key={p.slug} />
        ))}
      </div>
    </>
  );
}
