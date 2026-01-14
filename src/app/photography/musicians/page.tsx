"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const musicians = [
  "Brayant_Anama_banda-11.jpg",
  "Brayant_Anama_banda-3.jpg",
  "Litus_javi_banda-109.jpg",
  "Litus_javi_banda-145.jpg",
  "Litus_javi_banda-92.jpg",
  "amychicoguitarra-9.jpg",
  "brothersofothers-16.jpg",
  "brothersofothers-7.jpg",
  "litus_ACE_metales-15.jpg",
  "litus_ACE_metales-35.jpg",
  "litus_ACE_metales-36.jpg",
  "litus_ACE_metales-45.jpg",
];

const labelFromFile = (file: string) =>
  file
    .replace(".jpg", "")
    .replace(/\d+/g, "")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (c) => c.toUpperCase());

export default function MusiciansPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeFile = useMemo(
    () => (activeIndex === null ? null : musicians[activeIndex]),
    [activeIndex]
  );

  return (
    <main className="photo-page mx-auto max-w-6xl px-6 py-16 md:py-24 space-y-10">
      <div className="space-y-3">
        <p className="photo-kicker">Musicians</p>
        <h1 className="photo-title">
          Live sets and studio light,
          <span> framed like album art.</span>
        </h1>
        <p className="photo-lede">
          Editorial coverage for bands, artists, sessions, and live performances.
          Click any image to view full size.
        </p>
        <Link href="/photography" className="photo-button photo-button--ghost">
          ← Back to photography
        </Link>
      </div>

      <section className="photo-portraits-grid photo-portraits-grid--large">
        {musicians.map((file, index) => (
          <button
            key={file}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="photo-stagger photo-lightbox-thumb"
            style={{ animationDelay: `${index * 50}ms` }}
            aria-label={`Open ${labelFromFile(file)} musicians photo`}
          >
            <Image
              src={`/musicians/${file}`}
              alt={`${labelFromFile(file)} musicians photo`}
              width={900}
              height={1200}
              className="photo-portraits-grid__image"
            />
          </button>
        ))}
      </section>

      {activeFile && (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
        >
          <div className="photo-lightbox__inner" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="photo-lightbox__close"
              onClick={() => setActiveIndex(null)}
              aria-label="Close musicians viewer"
            >
              ×
            </button>
            <Image
              src={`/musicians/${activeFile}`}
              alt={`${labelFromFile(activeFile)} musicians photo`}
              width={1200}
              height={1600}
              className="photo-lightbox__image"
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}
