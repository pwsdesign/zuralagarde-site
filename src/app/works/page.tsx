import Link from "next/link";

type WorkProject = {
  title: string;
  years: string;
  medium: string;
  description: string;
  href?: string;
  videoSrc?: string;
};

export default function WorksPage() {
  const projects: WorkProject[] = [
    {
      title: "Fu: El Retorno",
      years: "2024",
      medium: "Photography, video",
      description: "A return to origin—ritual, memory, and the quiet tension of coming home.",
      href: "/works/elretorno",
      videoSrc: "/projects/elretorno/elretorno.mp4",
    },
    {
      title: "Dias de Luna",
      years: "2021–",
      medium: "Photography, installation, video",
      description: "Lunar cycles as visual score—light, rhythm, and the body in motion.",
    },
    {
      title: "Mitología de la Tangente",
      years: "2020",
      medium: "Photography",
      description: "Fragments of myth rendered as quiet symbols and tactile studies.",
    },
    {
      title: "Pinhole Camera",
      years: "2019",
      medium: "Photography, process",
      description: "Analog studies of time, exposure, and the materiality of light.",
    },
  ];

  return (
    <main
      className="works-page mx-auto max-w-6xl px-6 py-16 md:py-24 space-y-12"
    >
      <header className="works-header space-y-4">
        <h1 className="works-title">Works</h1>
        <p className="works-intro">
          Selected bodies of work, installation views, and project documentation.
        </p>
      </header>

      <section className="works-grid">
        {projects.map((p) => {
          const content = (
            <>
              <div className="works-card__top">
                <div className="works-card__title-wrap">
                  <span className="works-annotation works-annotation--green" aria-hidden="true" />
                  <span className="works-annotation works-annotation--pink" aria-hidden="true" />
                  <span className="works-annotation works-annotation--blue" aria-hidden="true" />
                  <span className="works-annotation works-annotation--orange" aria-hidden="true" />
                  <h2 className="works-card__title">{p.title}</h2>
                </div>
                <p className="works-card__years">{p.years}</p>
              </div>

              <p className="works-card__meta">
                <span className="works-card__label">Medium</span>
                {p.medium}
              </p>

              <p className="works-card__desc">
                {p.description}
              </p>

              {p.videoSrc && (
                <div className="works-card__media">
                  <video
                    className="works-card__video"
                    src={p.videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                </div>
              )}
            </>
          );

          if ("href" in p) {
            return (
              <Link
                key={p.title}
                href={p.href}
                className="works-card works-card--link"
              >
                {content}
              </Link>
            );
          }

          return (
            <article
              key={p.title}
              className="works-card"
            >
              {content}
            </article>
          );
        })}
      </section>
    </main>
  );
}
