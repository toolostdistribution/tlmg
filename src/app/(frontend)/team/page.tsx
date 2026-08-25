import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Team — Too Lost Music Group',
}

export default function TeamPage() {
  return (
    <main>
      <div className="page-hero">
        <Link href="/" className="page-back">← back</Link>
        <h1 className="page-title">Our Team</h1>
        <p className="page-desc">
          Our leadership team brings together deep experience across music, technology, operations, finance, rights management, and global business development. Supported by a team of more than 150 professionals across our portfolio, leadership is focused on building the infrastructure, platforms, and services that empower independent creators, labels, and music businesses worldwide.
        </p>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="section-title">Leadership</h2>
            </div>
          </div>
          <div className="cards-grid">
            <div className="card">
              <p className="card-tag">office of the ceo</p>
              <h3 className="card-title">Bjarki Lárusson</h3>
              <p className="card-desc">Founder &amp; CEO</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
