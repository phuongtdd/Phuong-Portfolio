import Icon from './Icon.jsx'
import SocialLinks from './SocialLinks.jsx'
import profile from '../content/profile.json'

export default function Contact() {
  const mailto = `mailto:${profile.email}`

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner" data-reveal>
        <span className="eyebrow eyebrow--accent">05 — Contact</span>
        <h2 className="contact__title">
          Let's build something<span className="accent"> together.</span>
        </h2>
        <div className="contact__row">
          <a className="contact__email" href={mailto}>
            <Icon name="mail" size={28} strokeWidth={1.75} />
            {profile.email}
          </a>
          <div className="contact__actions">
            <SocialLinks tone="dark" />
            <a className="btn btn--accent" href={mailto}>
              Say hello
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
