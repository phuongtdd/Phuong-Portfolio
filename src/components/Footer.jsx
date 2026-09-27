import profile from '../content/profile.json'
import { usePreferences } from '../i18n/Preferences.jsx'

export default function Footer() {
  const { t } = usePreferences()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}. {t.rights}
        </span>
        <a href="#home" className="footer__top">
          {t.backToTop}
        </a>
      </div>
    </footer>
  )
}
