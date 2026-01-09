import Link from "next/link";
import { projects } from "@/lib/projects"; // adjust path if needed

export default function ProjectsGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img
                src={p.cover}
                alt={p.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                loading="lazy"
              />
            </div>

            {/* Gradient + text overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="text-xs tracking-widest text-white/70">
                  {p.category} • {p.year}
                </div>
                <div className="mt-1 text-base font-semibold text-white">
                  {p.title}
                </div>
                {p.location ? (
                  <div className="mt-0.5 text-xs text-white/70">{p.location}</div>
                ) : null}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}