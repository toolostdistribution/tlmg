'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const NAV = [
  { href: '#group', label: 'The Group', num: '01' },
  { href: '#divisions', label: 'Divisions', num: '02' },
  { href: '#governance', label: 'Governance', num: '03' },
  { href: '#offices', label: 'Offices', num: '04' },
  { href: '#news', label: 'Newsroom', num: '05' },
  { href: '#contact', label: 'Contact', num: '06' },
]

export function NewHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className={`nw-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nw-header-inner">
          <Link href="/new" className="nw-wordmark" onClick={() => setOpen(false)}>
            <span className="nw-wordmark-mark">TL</span>
            <span className="nw-wordmark-text">
              Too Lost <em>Music Group</em>
            </span>
          </Link>

          <nav className="nw-header-nav" aria-label="Primary">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                <sup>{item.num}</sup> {item.label}
              </a>
            ))}
          </nav>

          <div className="nw-header-right">
            <a href="https://toolost.com" target="_blank" rel="noopener noreferrer" className="nw-header-cta">
              Artist &amp; Label Portal
            </a>
            <button
              type="button"
              className={`nw-burger ${open ? 'is-open' : ''}`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`nw-drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              style={{ transitionDelay: open ? `${80 + i * 45}ms` : '0ms' }}
              onClick={() => setOpen(false)}
            >
              <sup>{item.num}</sup>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nw-drawer-foot">
          <a href="https://toolost.com" target="_blank" rel="noopener noreferrer">
            Artist &amp; Label Portal ↗
          </a>
          <Link href="/" onClick={() => setOpen(false)}>
            Original site
          </Link>
        </div>
      </div>
    </>
  )
}
