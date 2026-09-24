import Link from "next/link";
export default function NotFound() {
  return (
    <main>
      <section className="not-found">
        <p className="eyebrow">404</p>
        <h1>This page is not part of the plan.</h1>
        <p>Return to the Russin Homes portfolio or start a conversation.</p>
        <div className="button-row">
          <Link className="button button-dark" href="/">
            Return home
          </Link>
          <Link className="text-link" href="/contact">
            Contact Russin Homes
          </Link>
        </div>
      </section>
    </main>
  );
}
