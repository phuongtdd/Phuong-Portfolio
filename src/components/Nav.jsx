import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import profile from '../content/profile.json'
import { asset } from '../utils/asset.js'
import { usePreferences } from '../i18n/Preferences.jsx'

export default function Nav() {
  const { t, lang, theme, toggleLang, toggleTheme } = usePreferences()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#about', label: t.navAbout },
    { href: '#skills', label: t.navSkills },
    { href: '#projects', label: t.navProjects },
    { href: '#services', label: t.navServices },
    { href: '#contact', label: t.navContact },
  ]

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="nav">
      <div className="nav__inner container">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          {profile.name.toLowerCase()}
          <span className="accent-dot">.</span>
        </a>

        <nav aria-label="Primary" className={`nav__links ${open ? 'is-open' : ''}`} id="primary-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn--outline btn--sm nav__cv" href={asset(profile.cv)} download>
            <Icon name="download" size={18} />
            {t.resume}
          </a>
        </nav>

        <div className="nav__controls">
          <button type="button" className="toggle toggle--lang" onClick={toggleLang} aria-label={t.switchLang}>
            <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
            <span className={lang === 'vi' ? 'is-active' : ''}>VI</span>
          </button>
          <button
            type="button"
            className="toggle toggle--icon"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.toLight : t.toDark}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <button
            type="button"
            className="toggle toggle--icon nav__toggle"
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}
