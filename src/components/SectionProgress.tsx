'use client'

import { useEffect, useState, useRef } from 'react'

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'group', label: 'Group' },
  { id: 'divisions', label: 'Divisions' },
  { id: 'press', label: 'News' },
  { id: 'governance', label: 'Governance' },
  { id: 'offices', label: 'Offices' },
  { id: 'careers', label: 'Careers' },
  { id: 'contact', label: 'Contact' },
]

export function SectionProgress() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [fillPercent, setFillPercent] = useState(0)
  const rafRef = useRef(0)

  useEffect(() => {
    function update() {
      const scrollY = window.scrollY
      const vh = window.innerHeight

      let currentIdx = 0
      let currentFill = 0

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const selector = SECTIONS[i].id === 'hero' ? '.hero' : `#${SECTIONS[i].id}`
        const el = document.querySelector(selector) as HTMLElement | null
        if (!el) continue

        const top = el.offsetTop
        const height = el.offsetHeight

        if (scrollY + vh * 0.3 >= top) {
          currentIdx = i
          const progress = Math.min(1, Math.max(0, (scrollY + vh * 0.3 - top) / height))
          currentFill = progress
          break
        }
      }

      setActiveIndex(currentIdx)
      setFillPercent(currentFill)
    }

    function onScroll() {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div className="section-progress">
      {SECTIONS.map((section, i) => (
        <a
          key={section.id}
          href={section.id === 'hero' ? '#' : `#${section.id}`}
          className={`section-progress-segment ${i === activeIndex ? 'is-active' : ''} ${i < activeIndex ? 'is-past' : ''}`}
          title={section.label}
        >
          <span className="section-progress-label">{section.label}</span>
          <span className="section-progress-track">
            <span
              className="section-progress-fill"
              style={{
                transform: `scaleX(${i < activeIndex ? 1 : i === activeIndex ? fillPercent : 0})`,
              }}
            />
          </span>
        </a>
      ))}
    </div>
  )
}
