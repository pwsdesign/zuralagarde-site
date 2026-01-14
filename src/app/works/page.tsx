import Link from "next/link";

export default function WorksPage() {
  const projects = [
    {
      title: "Fu: El Retorno",
      years: "2024",
      medium: "Photography, video",
      href: "/works/elretorno",
      videoSrc: "/projects/elretorno/elretorno.mp4",
    },
    { title: "Dias de Luna", years: "2021–" },
    { title: "Mitología de la Tangente", years: "2020" },
    { title: "Pinhole Camera", years: "2019" },
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
            {p.description ?? "Luego me avisas que ponemos aqui mi zura!"}
              </p>

              {"videoSrc" in p && (
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
