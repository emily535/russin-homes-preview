export function AwardShield({ year, label }: { year: number | string; label: string }) {
  return (
    <span className="award-shield" aria-label={`${year} ${label}`}>
      <svg viewBox="0 0 64 78" role="img" aria-hidden="true">
        <path d="M4 4h56v49L32 74 4 53Z" />
        <path className="award-shield-border" d="M8 8h48v43L32 69 8 51Z" />
        <text x="32" y="28" textAnchor="middle" className="award-shield-year">
          {year}
        </text>
        <text x="32" y="42" textAnchor="middle" className="award-shield-label">
          {label}
        </text>
      </svg>
    </span>
  );
}
