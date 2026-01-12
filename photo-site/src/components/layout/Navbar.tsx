import Link from "next/link";
import { site } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[var(--background)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* LOGO → FORK PAGE */}
        <Link href="/" className="text-sm font-semibold tracking-wide">
          {site.name}
        </Link>

        <nav className="flex items-center gap-5 text-sm">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}