import { site } from "@/lib/site";

export const metadata = {
  title: "About — Zura Lagarde",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      {/* Header */}
      <header className="max-w-2xl">
        <p className="text-xs tracking-[0.4em] text-neutral-500 uppercase">
          About
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight">
          Zura Lagarde
        </h1>

        <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
          Zura Lagarde, born in Mexico City, is a self-taught photographer based in
          Miami. Her visual education includes studies in Latin American painting
          at Casa Lamm Cultural Center and multiple photography workshops and
          courses at Página en Blando School, both in Mexico City.
        </p>
      </header>

      {/* Content */}
      <section className="mt-20 grid gap-16 md:grid-cols-3">
        {/* Text */}
        <div className="md:col-span-2 space-y-6 text-neutral-700 leading-relaxed">
          <p>
            Her work has been presented in group exhibitions in the United States
            and internationally. <em>The Silent Pulse Beneath Still Stone</em>{" "}
            marks her third solo exhibition.
          </p>

          <p>
            Her work lives at the intersection of elegance and honesty. Influenced
            by cinema, architecture, and human connection, Zura’s imagery is less
            about perfection and more about feeling.
          </p>

          <p>
            Whether photographing people, places, or moments in motion, she
            approaches each project with intention, patience, and respect for the
            story unfolding in front of her.
          </p>

          <p>
            Zura works with individuals, brands, and creatives who value
            authenticity, subtlety, and timeless visual language.
          </p>
        </div>

        {/* Services */}
        <aside className="border-l border-neutral-200 pl-6">
          <h2 className="text-sm font-medium tracking-wide uppercase text-neutral-500">
            Services
          </h2>

          <ul className="mt-4 space-y-2 text-neutral-700">
            {site.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </aside>
      </section>

      {/* Footer note */}
      <footer className="mt-24 max-w-2xl text-sm text-neutral-500">
        Based in Miami and available for travel worldwide. Projects are accepted
        selectively to ensure each collaboration receives full creative
        attention.
      </footer>
    </main>
  );
}