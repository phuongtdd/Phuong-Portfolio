import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import services from '../content/services.json'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading index={4} label="Services" title="What I can do for you." />

        <ul className="services">
          {services.items.map((s, i) => (
            <li key={s.title} className="service" data-reveal>
              <div className="service__head">
                <span className="service__icon">
                  <Icon name={s.icon} size={26} strokeWidth={1.75} />
                </span>
                <span className="mono-label mono-label--muted">/{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="service__title">{s.title}</h3>
              <p className="muted">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
