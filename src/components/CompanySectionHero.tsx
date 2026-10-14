import Link from 'next/link'

interface Crumb {
  href: string
  label: string
}

export function CompanySectionHero({
  title,
  trail = [{ href: '/company', label: 'Company' }],
}: {
  title: string
  trail?: Crumb[]
}) {
  return (
    <section className="about-hero-section">
      <div className="section-inner page-hero-titled">
        <nav className="page-breadcrumb" aria-label="Breadcrumb">
          {trail.map((crumb) => (
            <span key={crumb.href} className="page-breadcrumb-item">
              <Link href={crumb.href}>{crumb.label}</Link>
              <span className="page-breadcrumb-sep" aria-hidden="true">/</span>
            </span>
          ))}
          <span className="page-breadcrumb-current" aria-current="page">{title}</span>
        </nav>
        <h1 className="about-headline">{title}</h1>      </div>
    </section>
  )
}
