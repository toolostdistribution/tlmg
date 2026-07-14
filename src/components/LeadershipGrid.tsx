import Link from 'next/link'
import { leaders, type Leader } from '@/payload/people-data'

export { leaders, type Leader }

export function LeadershipGrid() {
  return (
    <div className="cards-grid cards-grid-team">
      {leaders.map((member) => {
        const hasBio = member.bio && member.bio.length > 0

        if (hasBio) {
          return (
            <Link
              key={member.name}
              href={`/about/${member.slug}`}
              className="card board-card"
            >
              <div className="card-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={member.photo} alt={member.name} />
              </div>
              <div className="card-text">
                <h3 className="card-title">{member.name}</h3>
                <p className="card-desc">{member.role}</p>
              </div>
            </Link>
          )
        }

        return (
          <div key={member.name} className="card board-card">
            <div className="card-avatar">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={member.photo} alt={member.name} />
            </div>
            <div className="card-text">
              <h3 className="card-title">{member.name}</h3>
              <p className="card-desc">{member.role}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
