import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import projects from '../content/projects.json'
import { asset } from '../utils/asset.js'
import { usePreferences } from '../i18n/Preferences.jsx'

export default function Projects() {
  const { t, l } = usePreferences()

  return (
    <section id="projects" className="section section--surface">
      <div className="container">
        <SectionHeading index={3} label={t.projectsLabel} title={t.projectsTitle} />

        <div className="projects">
          {projects.items.map((p, i) => (
            <article key={i} className={`project ${i % 2 ? 'project--reverse' : ''}`} data-reveal>
              <img
                className="project__image"
                src={asset(p.image)}
                alt={t.screenshotAlt(l(p.title))}
                loading="lazy"
                width="640"
                height="400"
              />
              <div className="project__body">
                <span className="mono-label mono-label--muted">
                  {String(i + 1).padStart(2, '0')} · {l(p.role)}
                </span>
                <h3 className="project__title">{l(p.title)}</h3>
                <p className="muted">{l(p.description)}</p>
                {p.tech?.length > 0 && (
                  <ul className="tags">
                    {p.tech.map((tech) => (
                      <li key={tech} className="tag">
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
                {p.link && (
                  <a className="btn btn--dark btn--sm" href={p.link} target="_blank" rel="noopener noreferrer">
                    {t.viewProject} <Icon name="arrow" size={16} />
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
