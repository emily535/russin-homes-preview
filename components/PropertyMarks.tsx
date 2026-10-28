import { AwardMedal } from "./AwardMedal";
import { AwardShield } from "./AwardShield";
import { parades, type Award, type Project } from "@/data/site";
export function awardLabel(award: Award) {
  const parade = parades.find((x) => x.id === award.paradeId);
  return parade ? `${award.year} ${parade.name} ${award.level} award` : undefined;
}
export function PropertyMarks({ project }: { project: Project }) {
  const award = project.awards?.find((a) => a.kind === "award" && a.level);
  // An award supersedes the entry shield for the same year, so a home never shows both.
  const entry = project.awards?.find((a) => a.kind === "entry" && a.year !== award?.year);
  return (
    <div className="property-marks">
      {project.status !== "Completed" && <span className="status-banner">{project.status}</span>}
      {entry && <AwardShield year={entry.year} label="PARADE HOME" />}
      {/* The shield holds the top corner, so a home with both moves its medal to the bottom. */}
      {award?.level && (
        <AwardMedal
          year={award.year}
          level={award.level}
          label={awardLabel(award)}
          className={entry ? "award-corner" : undefined}
        />
      )}
    </div>
  );
}
