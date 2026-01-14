import { site } from "@/lib/site";

type ContactPageProps = {
  searchParams?: {
    service?: string;
  };
};

export default function ContactPage({ searchParams }: ContactPageProps) {
  const isWeddingRequest = searchParams?.service === "weddings";

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24 space-y-10">
      <header className="space-y-4">
        <p className="text-xs tracking-[0.35em] uppercase text-black/50">Booking / Contact</p>
        <h1 className="text-4xl md:text-5xl tracking-tight">Let’s create something unforgettable.</h1>
        <p className="text-black/65 leading-relaxed">
          For bookings, collaborations, press, or exhibition inquiries, send a note. Include location, timeline,
          and a short description of what you’re envisioning.
        </p>

        {isWeddingRequest && (
          <div className="rounded-3xl bg-white/70 ring-1 ring-black/10 p-5 text-sm text-black/70">
            <p className="font-medium text-black/80">
              Weddings are exclusive and by request only.
            </p>
            <p className="mt-2 leading-relaxed">
              I accept a limited number of wedding commissions each year. If the date, location, and vision align,
              I’ll share additional galleries and availability details. Please note that submitting a request does
              not guarantee availability.
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.35em] text-black/45">
              Request access + availability
            </p>
          </div>
        )}
      </header>

      <section className="rounded-3xl bg-white/35 ring-1 ring-black/10 p-8 md:p-10 space-y-6">
        <div className="grid gap-4">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-black/45">Email</p>
            <p className="mt-1 text-black/70">{site.email}</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-black/45">Location</p>
            <p className="mt-1 text-black/70">{site.locationLine}</p>
          </div>
        </div>

        <form className="space-y-4">
          {[
            { label: "Name", placeholder: "Your name" },
            { label: "Email", placeholder: "you@email.com" },
            { label: "Shoot type", placeholder: "Portraits, brand, wedding…" },
            { label: "Location", placeholder: "Miami / NYC / destination…" },
            { label: "Desired date", placeholder: "Approx date or timeframe" },
            { label: "Budget range", placeholder: "Optional" },
          ].map((f) => (
            <label key={f.label} className="block">
              <span className="text-xs tracking-[0.35em] uppercase text-black/45">{f.label}</span>
              <input
                className="mt-2 w-full rounded-2xl bg-white/60 px-4 py-3 ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-black/20"
                placeholder={f.placeholder}
              />
            </label>
          ))}

          <label className="block">
            <span className="text-xs tracking-[0.35em] uppercase text-black/45">Message</span>
            <textarea
              className="mt-2 w-full min-h-[140px] rounded-2xl bg-white/60 px-4 py-3 ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-black/20"
              placeholder="Tell me about the concept, timeline, deliverables, and any references."
            />
          </label>

          <button
            type="button"
            className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-black/15 bg-white/70 px-6 py-3 text-sm hover:border-black/25"
          >
            Send inquiry (we’ll connect this next)
          </button>

          <p className="text-xs text-black/50">
            Prefer email? Send details to <span className="underline">{site.email}</span>.
          </p>
        </form>
      </section>
    </main>
  );
}
