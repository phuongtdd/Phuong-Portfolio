import Icon from './Icon.jsx'
import SocialLinks from './SocialLinks.jsx'
import profile from '../content/profile.json'
import { composeMailUrl } from '../utils/mail.js'
import { usePreferences } from '../i18n/Preferences.jsx'

export default function Contact() {
  const { t, l } = usePreferences()
  const mailUrl = composeMailUrl(profile.email)

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner" data-reveal>
        <span className="eyebrow eyebrow--accent">05 — {t.contactLabel}</span>
        <h2 className="contact__title">
          {t.contactTitle}
          <span className="accent">{t.contactTitleAccent}</span>
        </h2>
        <div className="contact__row">
          <div className="contact__info">
            <a className="contact__email" href={mailUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="mail" size={28} strokeWidth={1.75} />
              {profile.email}
            </a>
            {l(profile.location) && (
              <span className="contact__location">
                <Icon name="pin" size={18} strokeWidth={1.75} />
                {l(profile.location)}
              </span>
            )}
          </div>
          <div className="contact__actions">
            <SocialLinks tone="dark" />
            <a className="btn btn--accent" href={mailUrl} target="_blank" rel="noopener noreferrer">
              {t.sayHello}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
