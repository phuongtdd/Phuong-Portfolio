import Icon from './Icon.jsx'
import profile from '../content/profile.json'

const labels = { github: 'GitHub', linkedin: 'LinkedIn', facebook: 'Facebook' }

export default function SocialLinks({ tone = 'light' }) {
  return (
    <ul className={`socials socials--${tone}`}>
      {Object.entries(profile.socials)
        .filter(([, url]) => url)
        .map(([key, url]) => (
          <li key={key}>
            <a href={url} target="_blank" rel="noopener noreferrer" aria-label={labels[key] ?? key}>
              <Icon name={key} />
            </a>
          </li>
        ))}
    </ul>
  )
}
