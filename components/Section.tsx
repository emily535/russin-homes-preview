import { Children, isValidElement, type ComponentProps, type ReactNode } from "react";

export type Tone = "paper" | "wash" | "ink";

// Full-width page band. Leave `tone` unset and the enclosing SectionStack picks
// paper or wash from the sections that actually render. `ink` marks a dark band.
export function Section({
  tone,
  className = "",
  ...props
}: ComponentProps<"section"> & { tone?: Tone }) {
  return (
    <section {...props} className={`tone-band ${className}`.trim()} data-tone={tone ?? "auto"} />
  );
}

// Components that always render a dark band can declare it statically, e.g.
// `FinalCTA.tone = "ink"`, so the stack restarts after them without a prop.
type ToneMarked = { tone?: Tone };

const toneOf = (child: ReactNode): Tone | undefined => {
  if (!isValidElement<{ tone?: Tone }>(child)) return undefined;
  return child.props.tone ?? (child.type as ToneMarked).tone;
};

// Page body between the hero and the footer. Children are split into runs at
// every dark band. Within a run, CSS alternates paper and wash across the bands
// present in the DOM, so a child that renders nothing never leaves two matching
// light bands touching. Each run starts on paper, matching the homepage.
export function SectionStack({ children }: { children: ReactNode }) {
  const runs: ReactNode[][] = [[]];
  Children.toArray(children).forEach((child) => {
    if (toneOf(child) === "ink") runs.push([child], []);
    else runs[runs.length - 1].push(child);
  });
  return runs
    .filter((run) => run.length)
    .map((run, i) =>
      toneOf(run[0]) === "ink" ? (
        run[0]
      ) : (
        <div className="tone-run" key={`run-${i}`}>
          {run}
        </div>
      ),
    );
}
