"use client";

import Link from "next/link";

export default function ElRetornoPage() {
  return (
    <main className="works-body mx-auto max-w-6xl px-6 py-16 md:py-24 space-y-10">
      <div className="space-y-4">
        <Link href="/works" className="text-xs tracking-[0.35em] uppercase text-black/50">
          ← Back to works
        </Link>
        <h1 className="text-4xl md:text-5xl tracking-tight">Fu: El Retorno</h1>
        <p className="max-w-2xl text-black/65 leading-relaxed">
          A return to origin—ritual, memory, and the quiet tension of coming home.
        </p>
        <p className="text-sm text-black/55">Photography, video • 2024</p>
      </div>

      <section className="rounded-3xl bg-white/30 ring-1 ring-black/10 p-6 md:p-8 space-y-5">
        <h2 className="text-2xl tracking-tight">Project preview</h2>
        <p className="text-sm text-black/60">
          This preview is available by request. Reach out for access and full availability.
        </p>
        <Link
          href="/contact?service=weddings"
          className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-6 py-3 text-sm hover:border-black/25"
        >
          Request access
        </Link>
      </section>

      <section className="rounded-3xl bg-white/30 ring-1 ring-black/10 p-6 md:p-8 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl tracking-tight">Gallery PDF</h2>
          <a
            href="/projects/elretorno/elretorno.pdf"
            className="text-sm text-black/60 underline underline-offset-4 hover:text-black"
            target="_blank"
            rel="noreferrer"
          >
            Open full PDF
          </a>
        </div>
        <div className="h-[70vh] w-full overflow-hidden rounded-2xl bg-black/5 ring-1 ring-black/10">
          <object
            data="/projects/elretorno/elretorno.pdf"
            type="application/pdf"
            className="h-full w-full"
          >
            <p className="p-4 text-sm text-black/60">
              PDF preview not available.{" "}
              <a
                href="/projects/elretorno/elretorno.pdf"
                className="underline underline-offset-4"
                target="_blank"
                rel="noreferrer"
              >
                Open the PDF
              </a>
              .
            </p>
          </object>
        </div>
        <p className="text-xs text-black/50">
          Loaded from <code>public/projects/elretorno/elretorno.pdf</code>.
        </p>
      </section>
    </main>
  );
}
