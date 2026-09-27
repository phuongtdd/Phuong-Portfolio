import Icon from './Icon.jsx'
import SocialLinks from './SocialLinks.jsx'
import profile from '../content/profile.json'
import { usePreferences } from '../i18n/Preferences.jsx'

export default function Contact() {
  const { t } = usePreferences()
  const mailto = `mailto:${profile.email}`

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner" data-reveal>
        <span className="eyebrow eyebrow--accent">05 — {t.contactLabel}</span>
        <h2 className="contact__title">
          {t.contactTitle}
          <span className="accent">{t.contactTitleAccent}</span>
        </h2>
        <div className="contact__row">
          <a className="contact__email" href={mailto}>
            <Icon name="mail" size={28} strokeWidth={1.75} />
            {profile.email}
          </a>
          <div className="contact__actions">
            <SocialLinks tone="dark" />
            <a className="btn btn--accent" href={mailto}>
              {t.sayHello}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
