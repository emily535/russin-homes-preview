import { AwardMedal } from "./AwardMedal";
import { AwardShield } from "./AwardShield";
import type { Project } from "@/data/site";
export function PropertyMarks({ project }: { project: Project }) {
  const award = project.awards?.[0];
  return (
    <div className="property-marks">
      {project.status !== "Completed" && <span className="status-banner">{project.status}</span>}
      {award?.kind === "entry" && <AwardShield year={award.year} label="PARADE HOME" />}
      {award?.kind === "award" && award.level && (
        <AwardMedal year={award.year} level={award.level} />
      )}
    </div>
  );
}
