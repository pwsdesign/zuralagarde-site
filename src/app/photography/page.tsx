import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const services = [
  {
    title: "Portraits",
    desc: "Natural, intimate portraits with film-like color and soft grain.",
    href: "/photography/portraits",
    tag: "Most requested",
  },
  {
    title: "Couples",
    desc: "Quiet moments, movement, and honest connection—no stiff posing.",
    href: "/photography/couples",
    tag: "Story-driven",
  },
  {
    title: "Brands",
    desc: "Editorial visuals for founders, creatives, products, and campaigns.",
    href: "/contact",
    tag: "Commercial",
  },
  {
    title: "Weddings",
    desc: "Documentary coverage with warmth, texture, and timeless tone.",
    href: "/contact",
    tag: "Limited dates",
  },
  {
    title: "Travel",
    desc: "On-location sessions and destination storytelling.",
    href: "/contact",
    tag: "Miami + beyond",
  },
  {
    title: "Events",
    desc: "Atmosphere-first coverage for gatherings, launches, and dinners.",
    href: "/contact",
    tag: "Select only",
  },
];

const portraits = [
  "Ale1.jpg",
  "Ale2.jpg",
  "Ale3.jpg",
  "Ale4.jpg",
  "Ale5.jpg",
  "Ale6.jpg",
  "Eyla1.jpg",
  "Eyla2.jpg",
  "Eyla3.jpg",
  "Litus1.jpg",
  "Litus2.jpg",
  "Litus3.jpg",
  "Vane1.jpg",
  "danababy1.jpg",
  "dani1.jpg",
  "dani2.jpg",
  "dani3.jpg",
  "dani4.jpg",
  "dani5.jpg",
  "kelly1.jpg",
  "kelly2.jpg",
  "kelly3.jpg",
  "kelly4.jpg",
  "kelly5.jpg",
  "kelly6.jpg",
];

const couples = [
  "Callie_pregnancy-114.jpg",
  "Callie_pregnancy-115.jpg",
  "Callie_pregnancy-124.jpg",
  "Callie_pregnancy-85.jpg",
  "Melissa&AlexWEDDING-563.jpg",
  "Melissa&AlexWEDDING-720.jpg",
  "Melissa&AlexWEDDING-89.jpg",
  "Tete&Jesus-13.jpg",
  "Tete&Jesus-6.jpg",
  "Tete&Jesus-7.jpg",
  "Vane&Kley2024-3.jpg",
  "Vane&Kley2024B&W-1.jpg",
  "Vane&Kley2024B&W-3.jpg",
  "lindseyfamily-243.jpg",
  "lindseyfamily-245.jpg",
  "lindseyfamily-246.jpg",
  "lindseyfamily-48.jpg",
  "litus1.jpg",
];

const labelFromFile = (file: string) =>
  file
    .replace(".jpg", "")
    .replace(/\d+/g, "")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (c) => c.toUpperCase());

export default function PhotographyPage() {
  const portraitPreview = "Eyla1.jpg";
  const couplesPreview = "litus1.jpg";

  return (
    <main className="photo-page mx-auto max-w-6xl px-6 py-16 md:py-24 space-y-16">
      {/* INTRO */}
      <section className="photo-hero">
        <div className="photo-hero__content animate-rise">
          <p className="photo-kicker">Photography • Miami • Travel</p>
          <h1 className="photo-title">
            Bohemian modern portraits,
            <span> with light you can feel.</span>
          </h1>
          <p className="photo-lede">
            Story-led sessions with soft film tones, textured light, and a calm, poetic pace.
            Tell me the mood you want and I’ll shape the ritual around it.
          </p>

          <div className="photo-actions">
            <Link href="/contact" className="photo-button photo-button--solid">
              Contact / inquire
            </Link>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="photo-button photo-button--ghost"
            >
              Book a session →
            </a>
          </div>

          <div className="photo-meta">
            <span>Editorial portraits</span>
            <span>Intimate couples</span>
            <span>Destination stories</span>
          </div>
        </div>

        <div className="photo-hero__media">
          <div className="photo-hero__frame photo-hero__frame--tall">
            <Image
              src="/photography/portraits/Ale2.jpg"
              alt="Portrait"
              width={720}
              height={960}
              className="photo-hero__image"
              priority
            />
          </div>
          <div className="photo-hero__frame photo-hero__frame--short">
            <Image
              src="/photography/portraits/kelly2.jpg"
              alt="Portrait"
              width={720}
              height={540}
              className="photo-hero__image"
            />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="space-y-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="photo-kicker">Sessions</p>
            <h2 className="photo-subtitle">What story are we telling?</h2>
          </div>
        </div>

        <div className="photo-service-grid">
          {services.map((s, index) => {
            if (s.title === "Portraits") {
              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className="photo-card photo-card--portraits photo-stagger"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="photo-card__top">
                    <p className="photo-card__tag">{s.tag}</p>
                    <span className="photo-card__arrow">→</span>
                  </div>

                  <h3 className="photo-card__title">{s.title}</h3>
                  <p className="photo-card__desc">{s.desc}</p>

                  {portraitPreview && (
                    <div className="photo-card__preview">
                      <Image
                        src={`/photography/portraits/${portraitPreview}`}
                        alt={`${labelFromFile(portraitPreview)} portrait`}
                        width={520}
                        height={680}
                        className="photo-card__preview-image"
                      />
                    </div>
                  )}
                </Link>
              );
            }

            if (s.title === "Couples") {
              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className="photo-card photo-card--portraits photo-stagger"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="photo-card__top">
                    <p className="photo-card__tag">{s.tag}</p>
                    <span className="photo-card__arrow">→</span>
                  </div>

                  <h3 className="photo-card__title">{s.title}</h3>
                  <p className="photo-card__desc">{s.desc}</p>

                  {couplesPreview && (
                    <div className="photo-card__preview">
                      <Image
                        src={`/photography/couples/${couplesPreview}`}
                        alt={`${labelFromFile(couplesPreview)} couples preview`}
                        width={520}
                        height={680}
                        className="photo-card__preview-image"
                      />
                    </div>
                  )}
                </Link>
              );
            }

            return (
              <Link
                key={s.title}
                href={s.href}
                className="photo-card photo-stagger"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="photo-card__top">
                  <p className="photo-card__tag">{s.tag}</p>
                  <span className="photo-card__arrow">→</span>
                </div>

                <h3 className="photo-card__title">{s.title}</h3>
                <p className="photo-card__desc">{s.desc}</p>

                <div className="photo-card__glow" aria-hidden="true" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* SMALL CTA */}
      <section className="photo-cta">
        <div>
          <h3>Not sure what category fits?</h3>
          <p>
            Tell me the vibe, the location, and what you want the photos to feel like.
            I’ll recommend the best session type and keep it easy.
          </p>
        </div>

        <div className="photo-actions">
          <Link href="/contact" className="photo-button photo-button--solid">
            Send details
          </Link>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="photo-button photo-button--ghost"
          >
            Book a call →
          </a>
        </div>
      </section>
    </main>
  );
}
