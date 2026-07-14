'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function AboutHeroLogo() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      setProgress(Math.min(1, window.scrollY / 250))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="about-hero-logo">
      <div
        className="about-hero-logo-scroll"
        style={{
          opacity: 1 - progress,
          transform: `scale(${1 - progress * 0.4}) translateY(${progress * -50}px)`,
          pointerEvents: progress > 0.5 ? 'none' : 'auto',
        }}
      >
        <Link href="/" aria-label="Too Lost Music Group" className="about-hero-logo-link">
          <svg className="about-hero-logo-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path
                id="heroCirclePath"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="nav-logo-circle-text">
              <textPath href="#heroCirclePath" startOffset="0%">
                Too Lost Music Group - EST 2026 -&nbsp;
              </textPath>
            </text>
          </svg>
        </Link>
      </div>
    </div>
  )
}
