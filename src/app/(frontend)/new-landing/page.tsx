import { AboutHeroLogo } from '@/components/AboutHeroLogo'
import { HomeWall } from '@/components/HomeWall'

export default function NewLanding() {
  return (
    <main className="home">
      <section className="home-hero">
        <div className="home-hero-inner">
          <HomeWall />
          <div className="home-hero-foot">
            <h1 className="home-title">
              <span>Too Lost</span>
              <span>Music Group</span>
            </h1>
            <AboutHeroLogo />
          </div>
        </div>
      </section>
    </main>
  )
}
