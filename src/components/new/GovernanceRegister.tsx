'use client'

import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export interface Person {
  name: string
  role: string
  tag: string
  photo: string
  linkedin?: string
  bio?: string[]
}

export function GovernanceRegister({ label, people }: { label: string; people: Person[] }) {
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState<Person | null>(null)

  const close = useCallback(() => setOpen(null), [])

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [open, close])

  const current = people[active]

  return (
    <div className="nw-register">
      <div className="nw-register-media" aria-hidden="true">
        <p className="nw-register-label">{label}</p>
        <div className="nw-register-frame">
          {people.map((person, i) =>
            person.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={person.name}
                src={person.photo}
                alt=""
                className={i === active ? 'is-active' : ''}
              />
            ) : (
              <div key={person.name} className={`nw-register-blank ${i === active ? 'is-active' : ''}`} />
            ),
          )}
        </div>
        <div className="nw-register-caption">
          <span className="nw-person-tag">{current.tag}</span>
          <span className="nw-register-caption-name">{current.name}</span>
        </div>
      </div>

      <div className="nw-register-list" role="list">
        <p className="nw-register-label nw-register-label--inline">{label}</p>
        {people.map((person, i) => {
          const clickable = person.bio && person.bio.length > 0
          const Tag = clickable ? 'button' : 'div'
          return (
            <Tag
              key={person.name}
              role="listitem"
              {...(clickable ? { type: 'button' as const, onClick: () => setOpen(person) } : {})}
              className={`nw-register-row ${i === active ? 'is-active' : ''} ${clickable ? 'is-clickable' : ''}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="nw-register-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="nw-register-thumb" aria-hidden="true">
                {person.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={person.photo} alt="" loading="lazy" />
                ) : (
                  <span className="nw-register-thumb-blank" />
                )}
              </span>
              <span className="nw-register-id">
                <span className="nw-register-name">{person.name}</span>
                {person.role && <span className="nw-register-role">{person.role}</span>}
              </span>
              <span className="nw-register-meta">
                <span className="nw-person-tag">{person.tag}</span>
                {clickable && (
                  <span className="nw-register-plus" aria-hidden="true">
                    <svg viewBox="0 0 12 12" width="11" height="11">
                      <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1.4" />
                      <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </span>
                )}
              </span>
            </Tag>
          )
        })}
      </div>

      {open &&
        createPortal(
          <div className="nw-modal-backdrop" onClick={close}>
            <div
              className="nw-modal"
              role="dialog"
              aria-modal="true"
              aria-label={open.name}
              onClick={(e) => e.stopPropagation()}
            >
              <button type="button" className="nw-modal-close" onClick={close} aria-label="Close">
                ×
              </button>
              <div className="nw-modal-head">
                <div className="nw-modal-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={open.photo} alt={open.name} />
                </div>
                <div>
                  <span className="nw-person-tag">{open.tag}</span>
                  <h3>{open.name}</h3>
                  <p>{open.role}</p>
                  {open.linkedin && (
                    <a href={open.linkedin} target="_blank" rel="noopener noreferrer" className="nw-modal-linkedin">
                      LinkedIn ↗
                    </a>
                  )}
                </div>
              </div>
              <div className="nw-modal-bio">
                {open.bio!.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  )
}
