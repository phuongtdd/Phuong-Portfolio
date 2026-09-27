import Icon from './Icon.jsx'
import profile from '../content/profile.json'
import education from '../content/education.json'
import experience from '../content/experience.json'
import { asset } from '../utils/asset.js'

function TimelineCard({ heading, items }) {
  return (
    <div className="timeline-card" data-reveal>
      <h3 className="timeline-card__heading">{heading}</h3>
      <ol className="timeline">
        {items.map((item) => (
          <li key={item.title + item.period} className="timeline__item">
            <span className="timeline__period">{item.period}</span>
            <span className="timeline__title">{item.title}</span>
            {item.subtitle && <span className="timeline__subtitle">{item.subtitle}</span>}
            {item.description && <p className="timeline__desc">{item.description}</p>}
            {item.highlights?.length > 0 && (
              <ul className="timeline__list">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
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
  const educationItems = education.items.map((e) => ({
    period: e.period,
    title: e.school,
    subtitle: e.degree,
    highlights: e.highlights,
  }))
  const experienceItems = experience.items.map((e) => ({
    period: e.period,
    title: e.role,
    subtitle: e.company,
    description: e.description,
  }))

  return (
    <section id="about" className="section section--surface">
      <div className="container">
        <div className="about">
          <img
            className="about__image"
            src={asset(profile.aboutImage)}
            alt={`${profile.name} at work`}
            loading="lazy"
            width="440"
            height="480"
            data-reveal
          />
          <div className="about__text" data-reveal>
            <span className="eyebrow">01 — About me</span>
            <h2 className="section-title">{profile.aboutTitle}</h2>
            <p className="lead">{profile.about}</p>
            <div>
              <a className="btn btn--primary" href={asset(profile.cv)} download>
                <Icon name="download" size={18} />
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="timeline-grid">
          <TimelineCard heading="Education" items={educationItems} />
          <TimelineCard heading="Experience" items={experienceItems} />
        </div>
      </div>
    </section>
  )
}
