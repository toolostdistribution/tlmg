import Link from 'next/link'
import { AboutHeroLogo } from '@/components/AboutHeroLogo'
import { COMPANY_SECTIONS, companySectionHref } from '@/data/company-sections'

export const metadata = { title: 'Company — Too Lost Music Group' }

export default function CompanyPage() {
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
          <div className="cards-grid cards-grid-sections">
            {COMPANY_SECTIONS.map((section) => (
              <Link
                key={section.slug}
                href={companySectionHref(section.slug)}
                className="card card-link company-section-card"
              >
                <svg className="company-section-card-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 12L12 4M12 4H5.5M12 4v6.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h2 className="card-title">{section.label}</h2>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
