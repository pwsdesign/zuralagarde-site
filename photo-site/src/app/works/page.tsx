import Link from "next/link";

export default function WorksPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="flex items-center justify-between gap-6">
        <h1 className="text-3xl md:text-4xl tracking-tight">Works</h1>
        <Link className="text-sm text-black/60 hover:text-black" href="/">
          Home
        </Link>
      </div>

      <p className="mt-6 text-black/65 leading-relaxed">
        Selected bodies of work, installation views, and project documentation.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {["Project One", "Project Two", "Project Three", "Project Four"].map(
          (t) => (
            <Link
              key={t}
              href="#"
              className="rounded-3xl border border-black/10 bg-white/40 p-6 hover:border-black/20"
            >
              <div className="text-xs tracking-[0.35em] uppercase text-black/45">
                Ongoing
              </div>
              <div className="mt-3 text-lg">{t}</div>
              <div className="mt-2 text-sm text-black/60">
                Photography, installation, video
              </div>
            </Link>
          )
        )}
      </div>
    </main>
  );
}