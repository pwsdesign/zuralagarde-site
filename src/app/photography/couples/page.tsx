"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

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

export default function CouplesPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeFile = useMemo(
    () => (activeIndex === null ? null : couples[activeIndex]),
    [activeIndex]
  );

  return (
    <main className="photo-page mx-auto max-w-6xl px-6 py-16 md:py-24 space-y-10">
      <div className="space-y-3">
        <p className="photo-kicker">Couples</p>
        <h1 className="photo-title">
          Quiet love stories,
          <span> lit by real moments.</span>
        </h1>
        <p className="photo-lede">
          Couples and family sessions that feel candid, warm, and effortless.
          Click to view any image full size.
        </p>
        <Link href="/photography" className="photo-button photo-button--ghost">
          ← Back to photography
        </Link>
      </div>

      <section className="photo-portraits-grid photo-portraits-grid--large">
        {couples.map((file, index) => (
          <button
            key={file}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="photo-stagger photo-lightbox-thumb"
            style={{ animationDelay: `${index * 50}ms` }}
            aria-label={`Open ${labelFromFile(file)} couples photo`}
          >
            <Image
              src={`/photography/couples/${file}`}
              alt={`${labelFromFile(file)} couples photo`}
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
              aria-label="Close couples viewer"
            >
              ×
            </button>
            <Image
              src={`/photography/couples/${activeFile}`}
              alt={`${labelFromFile(activeFile)} couples photo`}
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
