'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/#divisions', label: 'Divisions' },
  { href: '/#leadership', label: 'Leadership' },
  { href: '/#offices', label: 'Offices' },
  { href: '/#governance', label: 'Governance' },
  { href: '/#press', label: 'Press' },
  { href: '/#careers', label: 'Careers' },
]

export function MenuOverlay() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <button
        type="button"
        className={`menu-toggle ${open ? 'is-open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`menu-overlay ${open ? 'is-open' : ''}`} role="dialog" aria-modal="true">
        <nav className="menu-nav">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="menu-link"
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${0.12 + i * 0.04}s` : '0s' }}
            >
              <span className="menu-link-index">{String(i + 1).padStart(2, '0')}</span>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="menu-overlay-footer">
          <span>Too Lost Music Group</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </>
  )
}
