import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black/90 to-black" />

      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs tracking-widest text-white/60">
            PHOTOGRAPHY & VISUAL STORYTELLING
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Images that feel
            <br />
            <span className="text-white/70">honest, timeless, human.</span>
          </h1>

          <p className="mt-2 text-black">
            Editorial portraits, commercial campaigns, weddings, and travel.
            Shot with intention. Crafted for longevity.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="/work"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              View Work
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}