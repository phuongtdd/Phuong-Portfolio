import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import profile from '../content/profile.json'
import { asset } from '../utils/asset.js'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

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
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  )
}
