import profile from '../content/profile.json'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </span>
        <a href="#home" className="footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
