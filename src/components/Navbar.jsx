import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="navbar-brand">
          Sandeep Mandal
        </a>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a href="/Sandeep_Mandal.pdf" download className="btn btn-outline btn-sm">Resume</a>
        </div>

        <button
          className="navbar-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
