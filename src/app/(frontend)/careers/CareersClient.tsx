'use client'

import { useState, useMemo } from 'react'
import { openings } from '@/data/careers'

const departments = Array.from(new Set(openings.map((o) => o.dept)))
const types = Array.from(new Set(openings.map((o) => o.type)))
const locations = Array.from(new Set(openings.map((o) => o.location)))

export function CareersClient() {
  const [search, setSearch] = useState('')
  const [deptFilter, setDeptFilter] = useState<string>('all')
  const [typeFilter, setTypeFilter] = useState<string>('all')
  const [locationFilter, setLocationFilter] = useState<string>('all')

  const filtered = useMemo(() => {
    return openings.filter((role) => {
      if (deptFilter !== 'all' && role.dept !== deptFilter) return false
      if (typeFilter !== 'all' && role.type !== typeFilter) return false
      if (locationFilter !== 'all' && role.location !== locationFilter) return false
      if (search) {
        const q = search.toLowerCase()
        return (
          role.title.toLowerCase().includes(q) ||
          role.dept.toLowerCase().includes(q) ||
          role.location.toLowerCase().includes(q) ||
          role.summary.toLowerCase().includes(q)
        )
      }
      return true
    })
  }, [search, deptFilter, typeFilter, locationFilter])

  const hasActiveFilters = deptFilter !== 'all' || typeFilter !== 'all' || locationFilter !== 'all' || search !== ''

  function clearFilters() {
    setSearch('')
    setDeptFilter('all')
    setTypeFilter('all')
    setLocationFilter('all')
  }

  return (
    <main className="subpage">
      <section className="about-hero-section">
        <div className="section-inner">
          <h1 className="about-headline">
            Careers
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="section-title">Current Openings</h2>
            </div>
            <span className="section-count">{filtered.length} of {openings.length} roles</span>
          </div>

          <div className="careers-toolbar">
            <div className="careers-search">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search roles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="careers-search-input"
              />
            </div>
            <div className="careers-filters">
              <select
                value={deptFilter}
                onChange={(e) => setDeptFilter(e.target.value)}
                className="careers-filter-select"
              >
                <option value="all">All departments</option>
                {departments.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="careers-filter-select"
              >
                <option value="all">All types</option>
                {types.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="careers-filter-select"
              >
                <option value="all">All locations</option>
                {locations.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
              {hasActiveFilters && (
                <button onClick={clearFilters} className="careers-filter-clear">
                  Clear
                </button>
              )}
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="careers-list">
              {filtered.map((role) => (
                <a
                  key={role.id}
                  href="https://toolost.com/careers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="career-row"
                >
                  <div className="career-row-dept">
                    <span className="career-row-dept-label">{role.dept}</span>
                  </div>
                  <div className="career-row-info">
                    <h3 className="career-row-title">{role.title}</h3>
                    <p className="career-row-summary">{role.summary}</p>
                  </div>
                  <div className="career-row-meta">
                    <span className="career-row-badge">{role.type}</span>
                    <span className="career-row-location">{role.location}</span>
                    {role.comp && <span className="career-row-comp">{role.comp}</span>}
                  </div>
                  <span className="career-row-arrow">&rarr;</span>
                </a>
              ))}
            </div>
          ) : (
            <div className="careers-empty">
              <p>No roles match your filters.</p>
              <button onClick={clearFilters} className="careers-empty-reset">
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

    </main>
  )
}
