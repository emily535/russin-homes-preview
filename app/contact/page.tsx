import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { pageMetadata } from "@/data/metadata";
import { site } from "@/data/site";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = pageMetadata(
  "Contact Jeremy Russin | Russin Homes",
  "Ask Jeremy about a Russin Homes property, presale homesite, or custom-home inquiry in Youngsville, Wake Forest, or Raleigh.",
  "/contact",
);
export default function ContactPage() {
  return (
    <main>
      <section className="contact-layout">
        <div className="contact-intro">
          <p className="eyebrow">Contact Russin Homes</p>
          <Breadcrumb visuallyHidden items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <h1>Talk with Jeremy.</h1>
          <p>
            Whether you have a specific Russin Homes property in mind or are exploring a custom-home
            project, tell Jeremy what you are considering. Include the location, your preferred
            timing, and any questions you would like to discuss.
          </p>
          <a href={`tel:${site.phoneHref}`} className="phone-link">
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p className="small">
            Formal showings are coordinated through the appropriate real estate process.
          </p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
