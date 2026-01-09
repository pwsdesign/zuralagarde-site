// app/photography/page.tsx
import Link from "next/link";
import { site } from "@/lib/site";

export default function PhotographyPage() {
  return (
    <main>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24 md:pb-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.35em] uppercase text-black/50">
              Photography • Miami • Travel
            </p>

            <h1 className="mt-5 text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Sun-warmed stories,
              <br />
              soft edges,
              <br />
              real moments.
            </h1>

            <p className="mt-6 max-w-xl text-base md:text-lg text-black/65 leading-relaxed">
              Bohemian, story-driven photography rooted in light, texture, and
              emotion. For people and brands who want images that feel like
              memories.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/40 px-6 py-3 text-sm hover:border-black/25"
              >
                View portfolio
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
          </div>

          {/* Right "vibe" card */}
          <div className="md:col-span-5">
            <div className="rounded-3xl border border-black/10 bg-white/40 p-7">
              <p className="text-xs tracking-[0.35em] uppercase text-black/45">
                The vibe
              </p>

              <ul className="mt-5 space-y-3 text-sm text-black/65 leading-relaxed">
                <li>• Golden hour & natural textures</li>
                <li>• Film-like color, gentle grain</li>
                <li>• Movement, skin, sunlight, wind</li>
                <li>• Honest portraits & intimate details</li>
              </ul>

              <div className="mt-6 text-xs text-black/50">
                Available for Miami + destination work.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-black/10" />
      </div>

      {/* FEATURED */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-black/50">
              Selected work
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl tracking-tight">
              A few recent stories
            </h2>
          </div>

          <Link href="/portfolio" className="text-sm text-black/60 hover:text-black">
            See all →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {["Warm Portraits", "Desert Mood", "Coastal Light"].map((label) => (
            <div
              key={label}
              className="rounded-3xl border border-black/10 bg-white/40 p-6"
            >
              <div className="text-xs tracking-[0.35em] uppercase text-black/45">
                Collection
              </div>
              <div className="mt-3 text-lg">{label}</div>
              <div className="mt-2 text-sm text-black/60 leading-relaxed">
                Soft color, natural movement, honest texture.
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-black/10 bg-white/40 p-10 md:p-14">
          <p className="text-xs tracking-[0.35em] uppercase text-black/45">
            Booking
          </p>
          <h3 className="mt-4 text-2xl md:text-3xl tracking-tight">
            Ready when you are.
          </h3>
          <p className="mt-4 max-w-2xl text-black/65 leading-relaxed">
            Tell me what you’re dreaming up—portrait session, couples, brand
            shoot, or something wild and free. We’ll keep it easy and intentional.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-6 py-3 text-sm hover:border-black/25"
            >
              Contact
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
        </div>
      </section>
    </main>
  );
}