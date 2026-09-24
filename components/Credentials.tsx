import Link from "next/link";
import { AwardMedal } from "./AwardMedal";

export function Credentials() {
  return (
    <section className="band credentials">
      <div className="section-heading">
        <p className="eyebrow">Established and accountable</p>
        <h2>Credentials and recognition.</h2>
      </div>
      <div className="credential-list">
        <div>
          <strong>#80218</strong>
          <span>NC General Contractors License</span>
        </div>
        <div>
          <strong>Franklin County</strong>
          <span>Home Builders Association member</span>
        </div>
        <div>
          <strong>Wake County</strong>
          <span>Home Builders Association member</span>
        </div>
        <div>
          <strong>Russin Homes</strong>
          <span>Direct builder involvement</span>
        </div>
      </div>
      <div className="award-medal-row" aria-label="Parade of Homes recognition">
        <AwardMedal year="2020" level="Gold" />
        <Link href="/portfolio/108-red-cardinal-court">
          <AwardMedal year="2022" level="Silver" />
        </Link>
        <Link href="/portfolio/203-red-cardinal-court">
          <AwardMedal year="2024" level="Bronze" />
        </Link>
        <Link href="/portfolio/205-red-cardinal-court">
          <AwardMedal year="2025" level="Silver" />
        </Link>
      </div>
      <Link className="text-link" href="/parade-of-homes">
        See our Parade of Homes history
      </Link>
    </section>
  );
}
