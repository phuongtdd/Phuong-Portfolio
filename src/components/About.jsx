import Icon from './Icon.jsx'
import profile from '../content/profile.json'
import education from '../content/education.json'
import experience from '../content/experience.json'
import { asset } from '../utils/asset.js'
import { usePreferences } from '../i18n/Preferences.jsx'

function TimelineCard({ heading, items }) {
  return (
    <div className="timeline-card" data-reveal>
      <h3 className="timeline-card__heading">{heading}</h3>
      <ol className="timeline">
        {items.map((item, i) => (
          <li key={i} className="timeline__item">
            <span className="timeline__period">{item.period}</span>
            <span className="timeline__title">{item.title}</span>
            {item.subtitle && <span className="timeline__subtitle">{item.subtitle}</span>}
            {item.description && <p className="timeline__desc">{item.description}</p>}
            {item.highlights?.length > 0 && (
              <ul className="timeline__list">
                {item.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function About() {
  const { t, l } = usePreferences()

  const educationItems = education.items.map((e) => ({
    period: l(e.period),
    title: l(e.school),
    subtitle: l(e.degree),
    highlights: (e.highlights ?? []).map(l),
  }))
  const experienceItems = experience.items.map((e) => ({
    period: l(e.period),
    title: l(e.role),
    subtitle: l(e.company),
    description: l(e.description),
  }))

  return (
    <section id="about" className="section section--surface">
      <div className="container">
        <div className="about">
          <img
            className="about__image"
            src={asset(profile.aboutImage)}
            alt={t.aboutImageAlt(profile.name)}
            loading="lazy"
            width="440"
            height="480"
            data-reveal
          />
          <div className="about__text" data-reveal>
            <span className="eyebrow">01 — {t.aboutLabel}</span>
            <h2 className="section-title">{l(profile.aboutTitle)}</h2>
            <p className="lead">{l(profile.about)}</p>
            <div>
              <a className="btn btn--primary" href={asset(profile.cv)} download>
                <Icon name="download" size={18} />
                {t.downloadCv}
              </a>
            </div>
          </div>
        </div>

        <div className="timeline-grid">
          <TimelineCard heading={t.education} items={educationItems} />
          <TimelineCard heading={t.experience} items={experienceItems} />
        </div>
      </div>
    </section>
  )
}
