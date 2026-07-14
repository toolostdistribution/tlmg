'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useCallback } from 'react'
import { ThemeToggle } from './ThemeToggle'

const NAV_ITEMS = [
  { href: '/about', label: 'About' },
  { href: '/divisions', label: 'Divisions' },
  { href: '/news', label: 'News' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact', cta: true },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [heroLogoVisible, setHeroLogoVisible] = useState(false)
  const [heroDark, setHeroDark] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isHeroLogoPage = pathname === '/about'

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isHome) {
      setHeroDark(false)
      return
    }
    function onScroll() {
      setHeroDark(window.scrollY < window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  useEffect(() => {
    if (!isHeroLogoPage) {
      setHeroLogoVisible(false)
      return
    }
    function onScroll() {
      setHeroLogoVisible(window.scrollY < 200)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHeroLogoPage])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const toggle = useCallback(() => setMobileOpen(prev => !prev), [])

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''} ${mobileOpen ? 'nav-mobile-open' : ''} ${heroDark ? 'nav-hero-dark' : ''}`}>
      <div className="nav-inner">
        <Link href="/" className={`nav-logo${isHeroLogoPage && heroLogoVisible ? ' nav-logo-hero-active' : ''}`} aria-label="Too Lost Music Group">
          <svg className="nav-logo-spin" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path
                id="circlePath"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="nav-logo-circle-text">
              <textPath href="#circlePath" startOffset="0%">
                Too Lost Music Group - EST 2026 -&nbsp;
              </textPath>
            </text>
          </svg>
        </Link>

        <ul className="nav-links">
          {NAV_ITEMS.map(item => (
            <li key={item.href} className="nav-item">
              <Link href={item.href} className={`nav-link ${item.cta ? 'nav-link-cta' : ''}`}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <ThemeToggle />
          <button
            className={`nav-burger ${mobileOpen ? 'nav-burger-open' : ''}`}
            onClick={toggle}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className="nav-burger-line" />
            <span className="nav-burger-line" />
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${mobileOpen ? 'mobile-nav-open' : ''}`} aria-hidden={!mobileOpen}>
        <ul className="mobile-nav-links">
          {NAV_ITEMS.map(item => (
            <li key={item.href} className="mobile-nav-item">
              <Link
                href={item.href}
                className={`mobile-nav-link ${pathname === item.href ? 'mobile-nav-link-active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
