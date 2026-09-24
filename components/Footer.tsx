import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  const socialIcons = { Instagram, Facebook, YouTube: Youtube };
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <Link className="wordmark wordmark-light" href="/">
            Russin Homes
          </Link>
          <p>
            Award winning custom home builder serving Youngsville, Wake Forest, and the surrounding
            areas.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/opportunities">Opportunities</Link>
          <Link href="/parade-of-homes">Parade of Homes</Link>
          <Link href="/build-updates">Build Updates</Link>
        </div>
        <div>
          <h2>Connect</h2>
          <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <Link href="/contact">Start a Conversation</Link>
          <p>{site.license}</p>
          <div className="footer-social" aria-labelledby="footer-social-title">
            <h2 id="footer-social-title">Follow Russin Homes</h2>
            <div>
              {site.social.map(({ name, href }) => {
                const Icon = socialIcons[name];
                return (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Russin Homes on ${name} (opens in a new tab)`}
                  >
                    <Icon aria-hidden="true" size={18} />
                    <span>{name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 {site.legalName}</span>
        <span>Youngsville, North Carolina</span>
      </div>
    </footer>
  );
}
