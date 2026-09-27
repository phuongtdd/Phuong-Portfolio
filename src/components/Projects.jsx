import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import projects from '../content/projects.json'
import { asset } from '../utils/asset.js'

export default function Projects() {
  return (
    <section id="projects" className="section section--surface">
      <div className="container">
        <SectionHeading index={3} label="Projects" title="Selected work." />

        <div className="projects">
          {projects.items.map((p, i) => (
            <article key={p.title} className={`project ${i % 2 ? 'project--reverse' : ''}`} data-reveal>
              <img
                className="project__image"
                src={asset(p.image)}
                alt={`${p.title} screenshot`}
                loading="lazy"
                width="640"
                height="400"
              />
              <div className="project__body">
                <span className="mono-label mono-label--muted">
                  {String(i + 1).padStart(2, '0')} · {p.role}
                </span>
                <h3 className="project__title">{p.title}</h3>
                <p className="muted">{p.description}</p>
                {p.tech?.length > 0 && (
                  <ul className="tags">
                    {p.tech.map((t) => (
                      <li key={t} className="tag">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
                {p.link && (
                  <a className="btn btn--dark btn--sm" href={p.link} target="_blank" rel="noopener noreferrer">
                    View on GitHub <Icon name="arrow" size={16} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
