import Link from 'next/link'
import { BoardGrid } from '@/components/BoardGrid'

export const metadata = { title: 'Governance — Too Lost Music Group' }

export default function GovernancePage() {
  return (
    <main>
      <div className="page-hero">
        <Link href="/" className="page-back">← back</Link>
        <h1 className="page-title">Corporate Governance</h1>
        <p className="page-desc">
          Transparency, accountability, and integrity guide everything we do.
        </p>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="section-title">Our Mission</h2>
              <p className="section-desc">
                Our mission is to provide creators, labels, and music businesses with the infrastructure, technology, capital, and global access needed to build, scale, and protect valuable music assets. Through a portfolio of music companies, brands, platforms, and owned catalog IP, we operate across distribution, publishing technology, rights management, catalog ownership, and music services. Our comprehensive framework empowers the independent music sector to grow efficiently, create long-term value, and maintain control over rights, ownership, and creative independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="section-title">Board</h2>
            </div>
          </div>
          <BoardGrid />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="section-title">Investors</h2>
              <p className="section-desc">
                Our investors include leading growth equity and strategic partners with deep experience scaling technology, media, music, and creator-focused businesses. Their support provides the company with long-term capital, institutional expertise, and strategic resources to accelerate growth across distribution, publishing technology, rights management, catalog ownership, and global music services. Together, our investor base helps strengthen our ability to build durable infrastructure for the independent music economy.
              </p>
            </div>
          </div>
          <div className="cards-grid">
            <div className="card">
              <p className="card-tag">capital</p>
              <h3 className="card-title">Investor</h3>
              <p className="card-desc">Strategic partner</p>
            </div>
            <div className="card">
              <p className="card-tag">capital</p>
              <h3 className="card-title">Investor</h3>
              <p className="card-desc">Strategic partner</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
