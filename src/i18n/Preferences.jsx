import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { ui, languages } from './ui.js'

const PreferencesContext = createContext(null)

function readStored(key) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function writeStored(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Storage blocked (private mode…): the choice just won't persist.
  }
}

function initialLang() {
  const stored = readStored('lang')
  if (languages.includes(stored)) return stored
  return navigator.language?.toLowerCase().startsWith('vi') ? 'vi' : 'en'
}

const systemDark = () => window.matchMedia?.('(prefers-color-scheme: dark)').matches

// Content fields are either a plain value or a { en, vi } object.
export function localize(value, lang) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value[lang] || value.en || ''
  }
  return value ?? ''
}

export function PreferencesProvider({ children }) {
  const [lang, setLang] = useState(initialLang)
  // null = follow the OS setting until the visitor picks one.
  const [storedTheme, setStoredTheme] = useState(() => readStored('theme'))
  const [isSystemDark, setIsSystemDark] = useState(systemDark)

  const theme = storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : isSystemDark ? 'dark' : 'light'

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)')
    if (!mq) return
    const onChange = (e) => setIsSystemDark(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0b1714' : '#f3f8f6')
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setStoredTheme(next)
    writeStored('theme', next)
  }, [theme])

  const toggleLang = useCallback(() => {
    const next = lang === 'en' ? 'vi' : 'en'
    setLang(next)
    writeStored('lang', next)
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      theme,
      toggleLang,
      toggleTheme,
      t: ui[lang],
      l: (v) => localize(v, lang),
    }),
    [lang, theme, toggleLang, toggleTheme],
  )

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
}

export function usePreferences() {
  return useContext(PreferencesContext)
}
