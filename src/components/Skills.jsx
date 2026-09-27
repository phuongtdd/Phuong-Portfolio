import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import skills from '../content/skills.json'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading index={2} label="Skills" title="Skills show our knowledge.">
          {skills.intro}
        </SectionHeading>

        <div className="skill-grid">
          {skills.groups.map((group) => (
            <div
              key={group.name}
              className={`skill-card ${group.highlight ? 'skill-card--dark' : ''}`}
              data-reveal
            >
              <div className="skill-card__head">
                <h3 className="skill-card__title">{group.name}</h3>
                <Icon name={group.icon} size={28} strokeWidth={1.75} />
              </div>
              <ul className="chips">
                {group.skills.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
