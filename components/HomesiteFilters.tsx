"use client";
import { useState } from "react";
import { opportunities } from "@/data/site";
import { ProjectCard } from "./ProjectCard";
const filters = [
  { key: "all", label: "All Opportunities" },
  { key: "move-in", label: "Move-In Ready" },
  { key: "presale", label: "Presale Opportunities" },
] as const;
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
