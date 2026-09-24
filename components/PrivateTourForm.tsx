"use client";

import { FormEvent, useState } from "react";

type RequiredField =
  "name" | "email" | "phone" | "preferred-date" | "preferred-time" | "timeline" | "agent-status";

export function PrivateTourForm({ property }: { property: string }) {
  const [errors, setErrors] = useState<Partial<Record<RequiredField, string>>>({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Partial<Record<RequiredField, string>> = {};
    const required: RequiredField[] = [
      "name",
      "email",
      "phone",
      "preferred-date",
      "preferred-time",
      "timeline",
      "agent-status",
    ];
    required.forEach((field) => {
      if (!String(data.get(field) || "").trim()) next[field] = "This field is required.";
    });
    const email = String(data.get("email") || "").trim();
    if (email && !/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("Please correct the marked fields.");
      requestAnimationFrame(() => form.querySelector<HTMLElement>("[aria-invalid=true]")?.focus());
      return;
    }
    setLoading(true);
    setStatus("Sending your tour request.");
    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!response.ok) throw new Error();
      setComplete(true);
      setStatus("");
    } catch {
      setStatus("We could not send your request. Please try again or call Jeremy at 919-520-7342.");
    } finally {
      setLoading(false);
    }
  }

  if (complete) {
    return (
      <div className="tour-confirmation" role="status">
        <p className="eyebrow">Request received</p>
        <h2>Thank you for reaching out.</h2>
        <p>Jeremy personally follows up to discuss the property and arrange the next step.</p>
      </div>
    );
  }

  const fieldError = (name: RequiredField) => ({
    "aria-invalid": !!errors[name],
    "aria-describedby": `${name}-error`,
  });

  return (
    <form
      className="contact-form private-tour-form"
      name="russin-homes-inquiry"
      method="POST"
      noValidate
      onSubmit={submit}
    >
      <input type="hidden" name="form-name" value="russin-homes-inquiry" />
      <input type="hidden" name="inquiry-type" value="Private tour request" />
      <p className="honeypot">
        <label>
          Leave this blank <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="field">
        <label htmlFor="tour-name">Name</label>
        <input id="tour-name" name="name" autoComplete="name" required {...fieldError("name")} />
        <span id="name-error" className="error">
          {errors.name}
        </span>
      </div>
      <div className="field">
        <label htmlFor="tour-email">Email</label>
        <input
          id="tour-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          {...fieldError("email")}
        />
        <span id="email-error" className="error">
          {errors.email}
        </span>
      </div>
      <div className="field">
        <label htmlFor="tour-phone">Phone</label>
        <input
          id="tour-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          {...fieldError("phone")}
        />
        <span id="phone-error" className="error">
          {errors.phone}
        </span>
      </div>
      <div className="field">
        <label htmlFor="tour-property">Property</label>
        <input id="tour-property" name="interest" value={property} readOnly />
      </div>
      <div className="field">
        <label htmlFor="preferred-date">Preferred date</label>
        <input
          id="preferred-date"
          name="preferred-date"
          type="date"
          required
          {...fieldError("preferred-date")}
        />
        <span id="preferred-date-error" className="error">
          {errors["preferred-date"]}
        </span>
      </div>
      <div className="field">
        <label htmlFor="preferred-time">Preferred time window</label>
        <select
          id="preferred-time"
          name="preferred-time"
          defaultValue=""
          required
          {...fieldError("preferred-time")}
        >
          <option value="" disabled>
            Select a time window
          </option>
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
        </select>
        <span id="preferred-time-error" className="error">
          {errors["preferred-time"]}
        </span>
      </div>
      <div className="field full">
        <label htmlFor="timeline">What is your timeline for building or buying?</label>
        <select id="timeline" name="timeline" defaultValue="" required {...fieldError("timeline")}>
          <option value="" disabled>
            Select a timeline
          </option>
          <option>As soon as possible</option>
          <option>Within 3 months</option>
          <option>3 to 6 months</option>
          <option>6 to 12 months</option>
          <option>More than 12 months</option>
          <option>Still exploring</option>
        </select>
        <span id="timeline-error" className="error">
          {errors.timeline}
        </span>
      </div>
      <fieldset className="field full">
        <legend>Are you currently working with a real estate agent?</legend>
        <div className="choice-row">
          <label>
            <input type="radio" name="agent-status" value="Yes" /> Yes
          </label>
          <label>
            <input type="radio" name="agent-status" value="No" /> No
          </label>
        </div>
        <span id="agent-status-error" className="error">
          {errors["agent-status"]}
        </span>
      </fieldset>
      <fieldset className="field full">
        <legend>
          Have you spoken with a lender or been pre-approved? <span>(optional)</span>
        </legend>
        <div className="choice-row">
          <label>
            <input type="radio" name="lender-status" value="Pre-approved" /> Pre-approved
          </label>
          <label>
            <input type="radio" name="lender-status" value="Spoken with a lender" /> Spoken with a
            lender
          </label>
          <label>
            <input type="radio" name="lender-status" value="Not yet" /> Not yet
          </label>
        </div>
      </fieldset>
      <div className="form-footer">
        <p className="form-status" role="status" aria-live="polite">
          {status}
        </p>
        <button className="button button-dark" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send tour request"}
        </button>
      </div>
    </form>
  );
}
