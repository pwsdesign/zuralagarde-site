import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          CLIENT NAME
        </Link>

        <nav className="flex items-center gap-5 text-sm text-white/80">
          <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/15 px-4 py-2 hover:border-white/30"
          >
            Book
          </Link>
        </nav>
      </div>
    </header>
  );
}