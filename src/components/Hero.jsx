import Icon from './Icon.jsx'
import SocialLinks from './SocialLinks.jsx'
import profile from '../content/profile.json'
import awards from '../content/awards.json'
import experience from '../content/experience.json'
import { asset } from '../utils/asset.js'
import { usePreferences } from '../i18n/Preferences.jsx'

export default function Hero() {
  const { t, l } = usePreferences()

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
          {l(profile.badge) && (
            <span className="pill">
              <span className="pill__dot" />
              {l(profile.badge)}
            </span>
          )}
          <h1 className="hero__title">
            <span className="hero__greeting">{t.greeting}</span> {profile.name}
            <span className="accent-dot">.</span>
          </h1>
          <p className="hero__headline">{l(profile.headline)}</p>
          <p className="hero__tagline">{l(profile.tagline)}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">
              {t.contactMe} <Icon name="arrow" size={18} />
            </a>
            <a className="btn btn--outline" href={asset(profile.cv)} download>
              {t.downloadCv}
            </a>
            <span className="hero__divider" aria-hidden="true" />
            <SocialLinks />
          </div>
        </div>

        <div className="hero__photo" data-reveal>
          <span className="hero__photo-block" aria-hidden="true" />
          <img src={asset(profile.portrait)} alt={t.portraitAlt(profile.name)} width="424" height="524" />
        </div>
      </div>

      {highlights.length > 0 && (
        <ul className="highlights" data-reveal>
          {highlights.map((h, i) => (
            <li key={i} className="highlights__item">
              <span className="mono-label">{l(h.period)}</span>
              <span className="highlights__title">{l(h.title)}</span>
              <span className="muted">{l(h.detail)}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
