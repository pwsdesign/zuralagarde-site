import Link from "next/link";

export default function Home() {
  return (
    <main className="fork">
      <div className="fork__wrap" aria-label="Choose section">
        <Link className="fork__link" href="/works">
  <span className="fork__label fork__label--works">Works</span>
</Link>

        <div className="fork__divider" aria-hidden="true" />

        <Link className="fork__link" href="/photography">
  <span className="fork__label fork__label--photo">Photography</span>
</Link>
      </div>
    </main>
  );
}