import Link from "next/link";
import { site } from "@/lib/site";

export default function PhotographyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[color:var(--bg)]/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/photography"
            className="text-sm tracking-[0.22em] uppercase text-black/70 hover:text-black"
          >
            Zura Lagarde
          </Link>

          <div className="flex items-center gap-5 text-sm text-black/60">
            <Link href="/photography" className="hover:text-black">
              Photography
            </Link>
            <Link href="/portfolio" className="hover:text-black">
              Portfolio
            </Link>
            <Link href="/about" className="hover:text-black">
              About
            </Link>
            <Link href="/contact" className="hover:text-black">
              Contact
            </Link>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black/15 bg-white/60 px-4 py-2 text-xs text-black/70 hover:border-black/25 hover:text-black"
            >
              Book
            </a>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="mx-auto max-w-6xl px-6 py-12 text-xs text-black/45">
        © {new Date().getFullYear()} Zura Lagarde
      </footer>
    </div>
  );
}