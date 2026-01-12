import Link from "next/link";
import { site } from "@/lib/site";

const services = [
  {
    title: "Portraits",
    desc: "Natural, intimate portraits with film-like color and soft grain.",
    href: "/contact",
    tag: "Most requested",
  },
  {
    title: "Couples",
    desc: "Quiet moments, movement, and honest connection—no stiff posing.",
    href: "/contact",
    tag: "Story-driven",
  },
  {
    title: "Brands",
    desc: "Editorial visuals for founders, creatives, products, and campaigns.",
    href: "/contact",
    tag: "Commercial",
  },
  {
    title: "Weddings",
    desc: "Documentary coverage with warmth, texture, and timeless tone.",
    href: "/contact",
    tag: "Limited dates",
  },
  {
    title: "Travel",
    desc: "On-location sessions and destination storytelling.",
    href: "/contact",
    tag: "Miami + beyond",
  },
  {
    title: "Events",
    desc: "Atmosphere-first coverage for gatherings, launches, and dinners.",
    href: "/contact",
    tag: "Select only",
  },
];

export default function PhotographyPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-24 space-y-14">
      {/* INTRO */}
      <section className="space-y-6">
        <p className="text-xs tracking-[0.35em] uppercase text-black/50">
          Photography • Miami • Travel
        </p>

        <h1 className="text-4xl md:text-6xl leading-[1.05] tracking-tight">
          Choose your story.
        </h1>

        <p className="max-w-2xl text-base md:text-lg text-black/65 leading-relaxed">
          Bohemian, story-driven photography rooted in light, texture, and emotion.
          Pick a category below and I’ll shape the session around what you want to feel.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/40 px-6 py-3 text-sm hover:border-black/25"
          >
            Contact / inquire
          </Link>

          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm text-black/70 hover:text-black"
          >
            Book a session →
          </a>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-black/50">
              Sessions
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl tracking-tight">
              What are you looking for?
            </h2>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group rounded-3xl bg-white/35 ring-1 ring-black/10 p-7 hover:bg-white/50 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-xs tracking-[0.35em] uppercase text-black/45">
                  {s.tag}
                </p>
                <span className="text-sm text-black/40 group-hover:text-black/70 transition">
                  →
                </span>
              </div>

              <h3 className="mt-3 text-xl tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-black/60 leading-relaxed">
                {s.desc}
              </p>

              <div className="mt-6 h-32 rounded-2xl bg-black/5 ring-1 ring-black/10" />
              <p className="mt-3 text-xs text-black/45">
                Add a representative image here later.
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* SMALL CTA */}
      <section className="rounded-3xl bg-white/35 ring-1 ring-black/10 p-10 md:p-12">
        <h3 className="text-2xl md:text-3xl tracking-tight">
          Not sure what category fits?
        </h3>
        <p className="mt-3 max-w-2xl text-black/65 leading-relaxed">
          Tell me the vibe, the location, and what you want the photos to feel like.
          I’ll recommend the best session type and keep it easy.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-6 py-3 text-sm hover:border-black/25"
          >
            Send details
          </Link>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm text-black/70 hover:text-black"
          >
            Book a call →
          </a>
        </div>
      </section>
    </main>
  );
}