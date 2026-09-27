import Icon from './Icon.jsx'
import SocialLinks from './SocialLinks.jsx'
import profile from '../content/profile.json'
import awards from '../content/awards.json'
import experience from '../content/experience.json'
import { asset } from '../utils/asset.js'

export default function Hero() {
  const highlights = [
    ...awards.items.map((a) => ({ period: a.period, title: a.title, detail: a.detail })),
    ...experience.items
      .filter((e) => e.showInHero)
      .map((e) => ({ period: e.period, title: e.role, detail: e.company })),
  ]

  return (
    <section id="home" className="hero container">
      <div className="hero__grid">
        <div className="hero__text" data-reveal>
          {profile.badge && (
            <span className="pill">
              <span className="pill__dot" />
              {profile.badge}
            </span>
          )}
          <h1 className="hero__title">
            Hi, I'm <br className="hero__br" />
            {profile.name}
            <span className="accent-dot">.</span>
          </h1>
          <p className="hero__headline">{profile.headline}</p>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">
              Contact me <Icon name="arrow" size={18} />
            </a>
            <a className="btn btn--outline" href={asset(profile.cv)} download>
              Download CV
            </a>
            <span className="hero__divider" aria-hidden="true" />
            <SocialLinks />
          </div>
        </div>

        <div className="hero__photo" data-reveal>
          <span className="hero__photo-block" aria-hidden="true" />
          <img src={asset(profile.portrait)} alt={`Portrait of ${profile.name}`} width="424" height="524" />
        </div>
      </div>

      {highlights.length > 0 && (
        <ul className="highlights" data-reveal>
          {highlights.map((h) => (
            <li key={h.title + h.period} className="highlights__item">
              <span className="mono-label">{h.period}</span>
              <span className="highlights__title">{h.title}</span>
              <span className="muted">{h.detail}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
