export default function WorksPage() {
  const projects = [
    { title: "Dias de Luna", years: "2021–", medium: "Photography, installation, video" },
    { title: "Mitología de la Tangente", years: "2020", medium: "Photography" },
    { title: "Pinhole Camera", years: "2019", medium: "Photography, process" },
  ];

  return (
    <main
      className="works-body mx-auto max-w-6xl px-6 py-16 md:py-24 space-y-14"
    >
      <header className="space-y-5">
        <h1 className="text-4xl md:text-5xl tracking-tight">Works</h1>
        <p className="max-w-2xl text-black/65 leading-relaxed">
          Selected bodies of work, installation views, and project documentation.
        </p>
      </header>

      <section className="grid gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-3xl bg-white/30 ring-1 ring-black/10 p-8 hover:bg-white/40 transition"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-2xl md:text-3xl tracking-tight">{p.title}</h2>
              <p className="text-sm text-black/50">{p.years}</p>
            </div>

            <p className="mt-4 text-sm text-black/65">{p.medium}</p>

            <p className="mt-5 text-sm text-black/55 leading-relaxed max-w-3xl">
              Short project description goes here (2–3 lines). Keep it calm, poetic, and clear.
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
