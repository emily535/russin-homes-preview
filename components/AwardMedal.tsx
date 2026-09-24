export function AwardMedal({ year, level }: { year: number | string; level: string }) {
  return (
    <span className="award-medal" aria-label={`${year} ${level}, Parade of Homes`}>
      <svg viewBox="0 0 100 100" role="img" aria-hidden="true">
        <circle cx="50" cy="50" r="47" className="award-medal-ring" />
        <circle cx="50" cy="50" r="40" className="award-medal-field" />
        <text x="50" y="37" textAnchor="middle" className="award-medal-level">
          {level.toUpperCase()}
        </text>
        <text x="50" y="51" textAnchor="middle" className="award-medal-name">
          Parade of Homes
        </text>
        <text x="50" y="70" textAnchor="middle" className="award-medal-year">
          {year}
        </text>
      </svg>
    </span>
  );
}
