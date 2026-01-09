import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact — Zura Lagarde",
  description: "Booking and inquiries",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* LEFT: Editorial intro */}
        <section className="max-w-xl">
          <p className="text-xs tracking-[0.4em] text-neutral-500 uppercase">
            Booking / Contact
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight">
            Let’s create something unforgettable.
          </h1>

          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            For bookings, collaborations, press, or exhibition inquiries, use the
            form. Please include timeline, location, and a short description of
            what you’re envisioning.
          </p>

          <div className="mt-10 space-y-4 text-sm text-neutral-600">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
              <span className="uppercase tracking-wide text-neutral-500">
                Email
              </span>
              <a className="hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>

            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
              <span className="uppercase tracking-wide text-neutral-500">
                Location
              </span>
              <span>Miami • Available for travel</span>
            </div>

            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
              <span className="uppercase tracking-wide text-neutral-500">
                Booking
              </span>
              <a
                className="hover:underline"
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer"
              >
                Schedule a call
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Book via Calendly
            </a>

            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 hover:border-neutral-400"
            >
              View portfolio
            </Link>
          </div>

          <p className="mt-8 text-xs text-neutral-500 leading-relaxed">
            Typical response time: 24–72 hours. Projects are accepted selectively
            to ensure each collaboration receives full creative attention.
          </p>
        </section>

        {/* RIGHT: Form card */}
        <section className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          <h2 className="text-lg font-medium">Inquiry form</h2>
          <p className="mt-2 text-sm text-neutral-600">
            Share a few details and I’ll reply with next steps.
          </p>

          {/* UI-only form for now (we’ll wire it next) */}
          <form className="mt-8 space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" placeholder="Your name" />
              <Field label="Email" placeholder="you@email.com" type="email" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Shoot type" placeholder="Portraits, brand, wedding…" />
              <Field label="Location" placeholder="Miami / NYC / destination…" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Desired date" placeholder="Approx date or timeframe" />
              <Field label="Budget range" placeholder="Optional" />
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wide text-neutral-500">
                Message
              </label>
              <textarea
                className="mt-2 h-32 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-neutral-400"
                placeholder="Tell me about the concept, timeline, deliverables, and any references."
              />
            </div>

            <button
              type="button"
              className="w-full rounded-2xl bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Send inquiry (we’ll connect this next)
            </button>

            <p className="text-xs text-neutral-500 leading-relaxed">
              Prefer email? Send details to{" "}
              <a className="underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-wide text-neutral-500">
        {label}
      </label>
      <input
        type={type}
        className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-neutral-400"
        placeholder={placeholder}
      />
    </div>
  );
}