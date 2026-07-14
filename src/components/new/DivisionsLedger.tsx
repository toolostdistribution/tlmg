'use client'

import { useState } from 'react'
import type { Company } from '@/payload/queries'

const LOGOS: Record<string, string> = {
  'too-lost': '/too-lost-icon.png',
  gyro: '/logos/gyro.png',
  'group-speed': '/logos/group-speed.png',
  distrodirect: '/logos/distrodirect.png',
  'soothe-sounds': '/logos/soothe-sounds.png',
  florecilla: '/logos/florecilla.png',
}

export function DivisionsLedger({ companies }: { companies: Company[] }) {
  const [open, setOpen] = useState<string | null>(companies[0]?.id ?? null)

  return (
    <div className="nw-ledger" role="list">
      {companies.map((company, i) => {
        const isOpen = open === company.id
        const logo = LOGOS[company.slug] || company.logo?.url
        return (
          <div key={company.id} role="listitem" className={`nw-ledger-row ${isOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="nw-ledger-head"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : company.id)}
            >
              <span className="nw-ledger-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="nw-ledger-name">{company.name}</span>
              <span className="nw-ledger-type">{company.type}</span>
              <span className="nw-ledger-toggle" aria-hidden="true">
                <svg viewBox="0 0 12 12" width="12" height="12">
                  <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1.4" />
                  <line className="nw-ledger-toggle-v" x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </span>
            </button>

            <div className="nw-ledger-body" aria-hidden={!isOpen}>
              <div className="nw-ledger-body-inner">
                <div className="nw-ledger-desc">
                  <p>{company.shortDescription}</p>
                  {company.clients && (
                    <p className="nw-ledger-clients">
                      <strong>{company.clientsLabel || 'Clients:'}</strong> {company.clients}
                    </p>
                  )}
                  <div className="nw-ledger-links">
                    {company.website && (
                      <a href={company.website} target="_blank" rel="noopener noreferrer">
                        Visit website ↗
                      </a>
                    )}
                  </div>
                </div>
                <div className="nw-ledger-side">
                  {logo && (
                    <div className="nw-ledger-logo">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={logo} alt={`${company.name} logo`} />
                    </div>
                  )}
                  {company.metrics && company.metrics.length > 0 && (
                    <ul className="nw-ledger-metrics">
                      {company.metrics.map((m) => (
                        <li key={m}>{m}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
