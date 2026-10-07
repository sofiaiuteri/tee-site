"use client";

import { useState, useSyncExternalStore } from "react";

// Applications are stored by SponsorFlow's backend and reviewed in its admin (Team page).
const APPLY_ENDPOINT = "https://sponsorflowhq.com/api/tee/apply";

export const ROLES = [
  "Campus Correspondent",
  "Graphic & Layout Designer",
  "Social Media & Content Creator",
  "Photographer & Videographer",
  "Writer",
  "Podcast Host & Producer",
  "Business & Partnerships",
  "Events & Trips",
  "Not sure yet",
];

const field =
  "flex h-11 w-full rounded-md border-2 border-border bg-card px-3 py-2 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
const label = "block text-sm font-semibold text-forest-dark mb-2";
const submit =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 h-11 rounded-md px-8 gradient-forest text-white hover:shadow-glow w-full";

const subscribe = (cb: () => void) => {
  window.addEventListener("popstate", cb);
  window.addEventListener("hashchange", cb);
  return () => {
    window.removeEventListener("popstate", cb);
    window.removeEventListener("hashchange", cb);
  };
};

export default function ApplyForm() {
  // Role chosen from a role card's "Apply" link (?role=...), read without causing a hydration mismatch.
  const roleFromUrl = useSyncExternalStore(
    subscribe,
    () => new URLSearchParams(window.location.search).get("role") ?? "",
    () => "",
  );
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch(APPLY_ENDPOINT, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data) });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong");
      setState("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-lg bg-card shadow-sm border-2 border-border p-8 text-center">
        <h3 className="text-3xl font-serif font-bold text-forest-dark mb-4">Thanks for applying!</h3>
        <p className="text-muted-foreground">We read every application and will get back to you within a week. Check your email for a confirmation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg bg-card shadow-sm border-2 border-border p-6 sm:p-8 space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={label}>Your name</label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@school.edu" className={field} />
        </div>
        <div>
          <label htmlFor="school" className={label}>School</label>
          <input id="school" name="school" required placeholder="Washington and Lee University" className={field} />
        </div>
        <div>
          <label htmlFor="role" className={label}>Role you&apos;re interested in</label>
          <select key={roleFromUrl} id="role" name="role" defaultValue={ROLES.includes(roleFromUrl) ? roleFromUrl : ROLES[1]} className={field}>
            {ROLES.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="class_year" className={label}>Class year</label>
            <input id="class_year" name="class_year" placeholder="2028" className={field} />
          </div>
          <div>
            <label htmlFor="hours" className={label}>Hours / week</label>
            <input id="hours" name="hours" placeholder="2-4" className={field} />
          </div>
        </div>
        <div>
          <label htmlFor="major" className={label}>Major (or school)</label>
          <input id="major" name="major" placeholder="Journalism, Art, Undecided…" className={field} />
        </div>
        <div>
          <label htmlFor="instagram" className={label}>Instagram (optional)</label>
          <input id="instagram" name="instagram" placeholder="@yourhandle" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="why" className={label}>Why do you want to join? What would you love to make?</label>
        <textarea id="why" name="why" rows={4} required className={`${field} h-auto`} />
      </div>
      <div>
        <label htmlFor="samples" className={label}>Links to samples (optional)</label>
        <input id="samples" name="samples" placeholder="Portfolio, Google Drive folder, Instagram, articles…" className={field} />
        <p className="text-sm text-muted-foreground mt-2">No portfolio yet? No problem. Beginners are very welcome.</p>
      </div>
      {/* Honeypot: hidden from people, filled in by spam bots. */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px" }} />
      {state === "error" && <p className="text-sm text-destructive">{error}. Please try again, or email siuteri@mail.wlu.edu.</p>}
      <button type="submit" disabled={state === "sending"} className={submit}>
        {state === "sending" ? "Sending…" : "Submit application"}
      </button>
    </form>
  );
}
