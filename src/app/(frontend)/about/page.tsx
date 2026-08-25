import { AboutHeroLogo } from '@/components/AboutHeroLogo'
import { BoardGrid } from '@/components/BoardGrid'
import { DotMap } from '@/components/DotMap'
import { LeadershipGrid } from '@/components/LeadershipGrid'

const offices = [
  { name: 'New York', label: 'HQ', country: 'United States', address: '915 Broadway, 8th Floor, New York NY 10010', image: '/offices/new-york.jpg' },
  { name: 'Hollywood', label: 'West Coast', country: 'United States', address: '1680 Vine Street, 11th Floor, Los Angeles, CA 90028', image: '/offices/hollywood.jpg' },
  { name: 'Reykjavík', label: 'Europe', country: 'Iceland', address: 'Laugavegur 26, 101 Reykjavík', image: '/offices/reykjavik.jpg' },
  { name: 'Brisbane', label: 'APAC', country: 'Australia', address: '279 Brunswick St, Fortitude Valley QLD 4006, Australia', image: '/offices/brisbane.jpg' },
  { name: 'Sydney', label: 'APAC', country: 'Australia', address: '', image: '/offices/sydney.jpg' },
  { name: 'Melbourne', label: 'APAC', country: 'Australia', address: '', image: '/offices/melbourne.jpg' },
  { name: 'Manila', label: 'APAC', country: 'Philippines', address: '', image: '/offices/manila.jpg' },
  { name: 'Mumbai', label: 'APAC', country: 'India', address: '', image: '/offices/mumbai.jpg' },
  { name: 'São Paulo', label: 'Americas', country: 'Brazil', address: '', image: '/offices/sao-paulo.jpg' },
  { name: 'Toronto', label: 'Americas', country: 'Canada', address: '', image: '/offices/toronto.jpg' },
]

export const metadata = { title: 'About — Too Lost Music Group' }

export default function AboutPage() {
  return (
    <main className="subpage">
      <section className="about-hero-section">
        <div className="section-inner">
          <AboutHeroLogo />
          <h1 className="about-headline">Too Lost Music Group</h1>
        </div>
      </section>

      <section className="section section-solid">
        <div className="section-inner">
          <div className="about-body">
            <p>
              Too Lost Music Group is a global independent music company providing artists, record labels, and music businesses with the infrastructure, technology, capital, and international reach needed to build, scale, monetize, and protect valuable music assets.
            </p>
            <p>
              The group operates a diversified portfolio of music companies, platforms, brands, and owned intellectual property across distribution, publishing, rights management, catalog investment, marketing, and artist and label services.
            </p>
            <p>
              Across its portfolio, Too Lost Music Group serves more than half a million artists and record labels, manages millions of recordings and compositions worldwide, and delivers approximately 10% of the world&apos;s newly released music each day.
            </p>
            <p>
              With more than 170 professionals across ten global offices, the group combines sophisticated technology, operational expertise, and flexible capital to help independent creators and music companies grow efficiently, create long-term value, and retain control of their rights, ownership, and creative independence.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="section-title">Board of Directors</h2>
            </div>
          </div>
          <BoardGrid />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="section-title">Leadership</h2>
            </div>
          </div>
          <LeadershipGrid />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="section-title">Strategic Partners</h2>
            </div>
          </div>
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

      <section className="section offices-section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="section-title">Global Presence</h2>
            </div>
          </div>
          <DotMap />
        </div>
      </section>
    </main>
  )
}
