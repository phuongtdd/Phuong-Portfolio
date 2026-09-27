import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import projects from '../content/projects.json'
import { asset } from '../utils/asset.js'
import { usePreferences } from '../i18n/Preferences.jsx'

// Shown instead of a screenshot for projects that don't have one (private / client work).
function ProjectCover({ title, period }) {
  const [name, subtitle] = title.split(/\s+—\s+/)
  return (
    <div className="project__image project__cover" aria-hidden="true">
      {period && <span className="project__cover-period">{period}</span>}
      <span className="project__cover-name">{name}</span>
      {subtitle && <span className="project__cover-subtitle">{subtitle}</span>}
    </div>
  )
}

export default function Projects() {
  const { t, l } = usePreferences()

  return (
    <section id="projects" className="section section--surface">
      <div className="container">
        <SectionHeading index={3} label={t.projectsLabel} title={t.projectsTitle} />

        <div className="projects">
          {projects.items.map((p, i) => {
            const title = l(p.title)
            const period = l(p.period)
            const highlights = (p.highlights ?? []).map(l).filter(Boolean)

            return (
              <article key={i} className={`project ${i % 2 ? 'project--reverse' : ''}`} data-reveal>
                {p.image ? (
                  <img
                    className="project__image"
                    src={asset(p.image)}
                    alt={t.screenshotAlt(title)}
                    loading="lazy"
                    width="640"
                    height="400"
                  />
                ) : (
                  <ProjectCover title={title} period={period} />
                )}
                <div className="project__body">
                  <span className="mono-label mono-label--muted">
                    {String(i + 1).padStart(2, '0')}
                    {period && ` · ${period}`}
                  </span>
                  <h3 className="project__title">{title}</h3>
                  {l(p.role) && <span className="project__role">{l(p.role)}</span>}
                  <p className="muted">{l(p.description)}</p>
                  {highlights.length > 0 && (
                    <ul className="project__highlights">
                      {highlights.map((h, j) => (
                        <li key={j}>{h}</li>
                      ))}
                    </ul>
                  )}
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
