import Link from "next/link";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-xs tracking-[0.35em] text-white/60">PHOTOGRAPHY</p>

      <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
        {site.tagline}
      </h1>

      <p className="mt-6 max-w-xl text-white/70">{site.description}</p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/portfolio"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950"
        >
          View Portfolio
        </Link>

        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/20 px-6 py-3 text-sm text-center"
        >
          Book
        </a>
      </div>
    </main>
  );
}