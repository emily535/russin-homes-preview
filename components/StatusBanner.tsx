export const propertyStatuses = [
  "Move-In Ready",
  "Coming Soon",
  "Pre-Sale Opportunity",
  "Sold",
] as const;

export type PropertyStatus = (typeof propertyStatuses)[number];

export function StatusBanner({ status }: { status: PropertyStatus }) {
  return <span className="status-banner">{status}</span>;
}
