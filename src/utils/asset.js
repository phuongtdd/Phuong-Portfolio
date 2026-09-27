// Resolves a path from the content files (e.g. "images/a.png" or "/images/a.png")
// against the site's base URL, so it works under /Phuong-Portfolio/ on GitHub Pages.
export function asset(path) {
  if (!path) return ''
  if (/^(https?:)?\/\//.test(path)) return path
  return import.meta.env.BASE_URL + path.replace(/^\/+/, '')
}
