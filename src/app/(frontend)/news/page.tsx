import { NEWS_ARTICLES } from '@/payload/news-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News — Too Lost Music Group',
  description: 'Latest news, press coverage, and announcements from Too Lost Music Group.',
}

export default function NewsPage() {
  const sorted = [...NEWS_ARTICLES].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <main className="subpage">
      <section className="about-hero-section">
        <div className="section-inner">
          <h1 className="about-headline">News</h1>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="news-grid">
            {sorted.map((article) => {
              const d = new Date(article.date)
              const dateLabel = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
              return (
                <a
                  key={article.url}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-card"
                >
                  <div className="news-card-image">
                    {article.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={article.image} alt="" loading="lazy" />
                    ) : (
                      <div className="news-card-image-fallback" aria-hidden="true" />
                    )}
                  </div>
                  <div className="news-card-body">
                    <p className="news-card-meta">{dateLabel} · {article.source}</p>
                    <h3 className="news-card-title">{article.title}</h3>
                    <p className="news-card-summary">{article.summary}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
