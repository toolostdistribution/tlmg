import { CompanySectionHero } from '@/components/CompanySectionHero'

export const metadata = { title: 'Strategic Partners — Too Lost Music Group' }

export default function PartnersPage() {
  return (
    <main className="subpage">
      <CompanySectionHero title="Strategic Partners" />

      <section className="section">
        <div className="section-inner">
          <div className="partners-strip">
            <a href="https://goldstate.com" target="_blank" rel="noopener noreferrer" className="partners-strip-item">
              <div className="partners-strip-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/investors/goldstate.png" alt="GoldState Music" />
              </div>
              <div className="partners-strip-info">
                <h3>GoldState Music</h3>
                <p>Private investment firm with a primary focus on the music sector</p>
              </div>
            </a>
            <a href="https://ta.com" target="_blank" rel="noopener noreferrer" className="partners-strip-item">
              <div className="partners-strip-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/investors/ta-associates.png" alt="TA Associates" />
              </div>
              <div className="partners-strip-info">
                <h3>TA Associates</h3>
                <p>Leading global growth private equity firm</p>
              </div>
            </a>
            <a href="https://pnfp.com" target="_blank" rel="noopener noreferrer" className="partners-strip-item">
              <div className="partners-strip-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/investors/pinnacle.png" alt="Pinnacle Financial Partners" />
              </div>
              <div className="partners-strip-info">
                <h3>Pinnacle Financial Partners</h3>
                <p>Prominent American regional bank and financial holding company</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
