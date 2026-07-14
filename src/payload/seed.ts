import { getPayload } from 'payload'
import config from '../payload.config'
import { fallbackCompanies } from './fallback-data'

async function seed() {
  const payload = await getPayload({ config })

  const existing = await payload.find({ collection: 'companies', limit: 1 })
  if (existing.docs.length > 0) {
    console.log('Database already seeded. Skipping.')
    process.exit(0)
  }

  console.log('Seeding companies...')

  for (const company of fallbackCompanies) {
    await payload.create({
      collection: 'companies',
      data: {
        name: company.name,
        slug: company.slug,
        type: company.type,
        shortDescription: company.shortDescription,
        clients: company.clients || '',
        clientsLabel: company.clientsLabel || '',
        website: company.website || '',
        order: company.order || 0,
      },
    })
    console.log(`  Created: ${company.name}`)
  }

  console.log('Done! Seeded', fallbackCompanies.length, 'companies.')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed error:', err)
  process.exit(1)
})
