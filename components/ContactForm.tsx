"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import { opportunities } from "@/data/site";
type Errors = Partial<Record<"name" | "email" | "message", string>>;
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const interest = useRef<HTMLSelectElement>(null);
  useEffect(() => {
    const selected = new URLSearchParams(location.search).get("property");
    if (selected && interest.current) interest.current.value = selected;
  }, []);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const next: Errors = {};
    const name = String(fd.get("name") || "").trim(),
      email = String(fd.get("email") || "").trim(),
      message = String(fd.get("message") || "").trim();
    if (!name) next.name = "Enter your name.";
    if (!email) next.email = "Enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
    if (!message) next.message = "Enter a message.";
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("Please correct the marked fields.");
      requestAnimationFrame(() => form.querySelector<HTMLElement>("[aria-invalid=true]")?.focus());
      return;
    }
    setLoading(true);
    setStatus("Sending your inquiry.");
    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(fd as unknown as Record<string, string>).toString(),
      });
      if (!response.ok) throw new Error();
      form.reset();
      setStatus("Thank you. Your inquiry has been received.");
    } catch {
      setStatus(
        "We could not send your inquiry. Please try again, call 919-520-7342, or email russinhomes@gmail.com.",
      );
    } finally {
      setLoading(false);
    }
  }
  return (
    <form
      className="contact-form"
      name="russin-homes-inquiry"
      method="POST"
      noValidate
      onSubmit={submit}
    >
      <input type="hidden" name="form-name" value="russin-homes-inquiry" />
      <p className="honeypot">
        <label>
          Leave this blank <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby="name-error"
        />
        <span id="name-error" className="error">
          {errors.name}
        </span>
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={!!errors.email}
          aria-describedby="email-error"
        />
        <span id="email-error" className="error">
          {errors.email}
        </span>
      </div>
      <div className="field">
        <label htmlFor="phone">
          Phone <span>(optional)</span>
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="interest">Property or homesite interest</label>
        <select ref={interest} id="interest" name="interest" defaultValue="">
          <option value="">General inquiry</option>
          {opportunities.map((p) => (
            <option key={p.slug}>{p.planName || p.address}</option>
          ))}
        </select>
      </div>
      <div className="field full">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          aria-invalid={!!errors.message}
          aria-describedby="message-error"
        />
        <span id="message-error" className="error">
          {errors.message}
        </span>
      </div>
      <div className="form-footer">
        <p className="form-status" role="status" aria-live="polite">
          {status}
        </p>
        <button className="button button-dark" type="submit" disabled={loading}>
          {loading ? "Sending…" : "Send Inquiry"}
        </button>
      </div>
    </form>
  );
}
