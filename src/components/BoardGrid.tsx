import Link from 'next/link'
import { boardMembers, type BoardMember } from '@/payload/people-data'

export { boardMembers, type BoardMember }

export function BoardGrid() {
  return (
    <div className="cards-grid">
      {boardMembers.map((member) => {
        const hasProfile = member.bio.length > 0

        if (hasProfile) {
          return (
            <Link
              key={member.name}
              href={`/about/${member.slug}`}
              className="card board-director-card"
            >
              <div className="card-avatar">
                {member.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={member.photo} alt={member.name} />
                ) : (
                  <div className="card-avatar-placeholder" />
                )}
              </div>
              <h3 className="card-title">{member.name}</h3>
            </Link>
          )
        }

        return (
          <div key={member.name} className="card board-director-card" style={{ cursor: 'default' }}>
            <div className="card-avatar">
              {member.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={member.photo} alt={member.name} />
              ) : (
                <div className="card-avatar-placeholder" />
              )}
            </div>
            <h3 className="card-title">{member.name}</h3>
          </div>
        )
      })}
    </div>
  )
}
