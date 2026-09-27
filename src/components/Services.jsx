import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import services from '../content/services.json'
import { usePreferences } from '../i18n/Preferences.jsx'

export default function Services() {
  const { t, l } = usePreferences()

  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading index={4} label={t.servicesLabel} title={t.servicesTitle} />

        <ul className="services">
          {services.items.map((s, i) => (
            <li key={i} className="service" data-reveal>
              <div className="service__head">
                <span className="service__icon">
                  <Icon name={s.icon} size={26} strokeWidth={1.75} />
                </span>
                <span className="mono-label mono-label--muted">/{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="service__title">{l(s.title)}</h3>
              <p className="muted">{l(s.description)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
