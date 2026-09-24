import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="final-cta">
      <p className="eyebrow">Start with a conversation</p>
      <h2>Tell us what you are considering.</h2>
      <p>
        Ask about a current home, a homesite, a presale opportunity, or a potential custom build.
      </p>
      <Link className="button button-light" href="/contact">
        Start a Conversation <ArrowRight aria-hidden="true" size={17} />
      </Link>
    </section>
  );
}
