"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

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

const labelFromFile = (file: string) =>
  file
    .replace(".jpg", "")
    .replace(/\d+/g, "")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (c) => c.toUpperCase());

export default function PortraitsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeFile = useMemo(
    () => (activeIndex === null ? null : portraits[activeIndex]),
    [activeIndex]
  );

  return (
    <main className="photo-page mx-auto max-w-6xl px-6 py-16 md:py-24 space-y-10">
      <div className="space-y-3">
        <p className="photo-kicker">Portraits</p>
        <h1 className="photo-title">
          Portraits with texture,
          <span> softness, and soul.</span>
        </h1>
        <p className="photo-lede">
          A gallery of intimate portrait work. Click a favorite or reach out to plan your own session.
        </p>
        <Link href="/photography" className="photo-button photo-button--ghost">
          ← Back to photography
        </Link>
      </div>

      <section className="photo-portraits-grid photo-portraits-grid--large">
        {portraits.map((file, index) => (
          <button
            key={file}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="photo-stagger photo-lightbox-thumb"
            style={{ animationDelay: `${index * 50}ms` }}
            aria-label={`Open ${labelFromFile(file)} portrait`}
          >
            <Image
              src={`/photography/portraits/${file}`}
              alt={`${labelFromFile(file)} portrait`}
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
              aria-label="Close portrait viewer"
            >
              ×
            </button>
            <Image
              src={`/photography/portraits/${activeFile}`}
              alt={`${labelFromFile(activeFile)} portrait`}
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
