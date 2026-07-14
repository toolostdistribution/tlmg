import Link from 'next/link'

export const metadata = { title: 'Press Inquiries — Too Lost Music Group' }

export default function PressPage() {
  return (
    <main>
      <div className="page-hero">
        <Link href="/" className="page-back">← back</Link>
        <h1 className="page-title">Press Inquiries</h1>
        <p className="page-desc">
          For media inquiries, interviews, or press kit access, please get in touch.
        </p>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="section-title">Contact</h2>
              <p className="section-desc">
                Email us at{' '}
                <a href="mailto:press@tlmg.co" style={{ color: 'inherit', textDecoration: 'underline' }}>
                  press@tlmg.co
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
