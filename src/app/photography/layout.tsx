import Link from "next/link";
import { site } from "@/lib/site";

export default function PhotographyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[var(--background)]/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/photography"
            className="text-xs tracking-[0.35em] uppercase text-black/70 hover:text-black"
          >
            {site.name}
          </Link>

          <div className="flex items-center gap-6 text-sm text-black/65">
            <Link href="/photography" className="hover:text-black">Photography</Link>
            <Link href="/about" className="hover:text-black">About</Link>
            <Link href="/contact" className="hover:text-black">Contact</Link>

            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black/15 bg-white/40 px-4 py-2 text-xs text-black/70 hover:border-black/25 hover:text-black transition"
            >
              Book
            </a>
          </div>
        </nav>
      </header>

      {children}

      <footer className="mx-auto max-w-6xl px-6 py-12 text-xs text-black/45">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </div>
  );
}