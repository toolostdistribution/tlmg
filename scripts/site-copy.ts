/**
 * Export site copy to CSV (with an empty New Copy column) and import filled rows.
 *
 *   npx tsx scripts/site-copy.ts export
 *   npx tsx scripts/site-copy.ts import [path]
 */
import fs from 'node:fs'
import path from 'node:path'
import { boardMembers, leaders } from '../src/payload/people-data'
import { fallbackCompanies } from '../src/payload/fallback-data'
import { divisionContent } from '../src/payload/division-content'
import { NEWS_ARTICLES } from '../src/payload/news-data'
import { openings, perks } from '../src/data/careers'
import { offices } from '../src/components/OfficesShowcase'

const ROOT = path.resolve(import.meta.dirname, '..')
const CSV_PATH = path.join(ROOT, 'site-copy.csv')

type Row = {
  key: string
  page: string
  section: string
  field: string
  file: string
  current: string
  newCopy: string
}

function csvCell(value: string) {
  if (/[",\n\r]/.test(value)) return `"${value.replace(/"/g, '""')}"`
  return value
}

function toCsv(rows: Row[]) {
  const header = ['Key', 'Page', 'Section', 'Field', 'Current Copy', 'New Copy']
  const lines = [header.join(',')]
  for (const row of rows) {
    lines.push(
      [row.key, row.page, row.section, row.field, row.current, row.newCopy]
        .map(csvCell)
        .join(','),
    )
  }
  return `${lines.join('\n')}\n`
}

function parseCsv(text: string): Record<string, string>[] {
  const rows: string[][] = []
  let row: string[] = []
  let cell = ''
  let inQuotes = false
  const src = text.replace(/^\uFEFF/, '')

  for (let i = 0; i < src.length; i++) {
    const ch = src[i]
    const next = src[i + 1]
    if (inQuotes) {
      if (ch === '"' && next === '"') {
        cell += '"'
        i++
      } else if (ch === '"') {
        inQuotes = false
      } else {
        cell += ch
      }
    } else if (ch === '"') {
      inQuotes = true
    } else if (ch === ',') {
      row.push(cell)
      cell = ''
    } else if (ch === '\n') {
      row.push(cell)
      if (row.some((c) => c.length)) rows.push(row)
      row = []
      cell = ''
    } else if (ch !== '\r') {
      cell += ch
    }
  }
  if (cell.length || row.length) {
    row.push(cell)
    if (row.some((c) => c.length)) rows.push(row)
  }

  const header = rows.shift()
  if (!header) return []
  return rows.map((cols) => {
    const record: Record<string, string> = {}
    header.forEach((name, i) => {
      record[name.trim()] = cols[i] ?? ''
    })
    return record
  })
}

function jsQuote(value: string) {
  return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')}'`
}

function replaceJsString(src: string, oldVal: string, newVal: string, from = 0, to = src.length) {
  const slice = src.slice(from, to)
  const oldLit = jsQuote(oldVal)
  const idx = slice.indexOf(oldLit)
  if (idx !== -1) {
    return src.slice(0, from) + slice.slice(0, idx) + jsQuote(newVal) + slice.slice(idx + oldLit.length) + src.slice(to)
  }
  const rawIdx = slice.indexOf(oldVal)
  if (rawIdx !== -1) {
    return src.slice(0, from) + slice.slice(0, rawIdx) + newVal + slice.slice(rawIdx + oldVal.length) + src.slice(to)
  }
  return null
}

function slugRange(src: string, slug: string) {
  const needle = `slug: '${slug}'`
  const start = src.indexOf(needle)
  if (start === -1) return null
  const next = src.indexOf("slug: '", start + needle.length)
  return { start, end: next === -1 ? src.length : next }
}

function add(
  rows: Row[],
  key: string,
  page: string,
  section: string,
  field: string,
  file: string,
  current: string | undefined,
) {
  if (!current?.trim()) return
  rows.push({ key, page, section, field, file, current, newCopy: '' })
}

function collect(): Row[] {
  const rows: Row[] = []

  add(rows, 'site.meta.description', 'Global', 'SEO', 'Description', 'src/app/layout.tsx',
    'TLMG is a global music company building the infrastructure, technology, and services that power independent artists, labels, and music businesses worldwide.')

  add(rows, 'home.headline', 'Home', 'Hero', 'Heading', 'src/app/(frontend)/page.tsx', 'Too Lost\nMusic Group')

  add(rows, 'nav.about', 'Global', 'Nav', 'Link', 'src/components/Navigation.tsx', 'About')
  add(rows, 'nav.divisions', 'Global', 'Nav', 'Link', 'src/components/Navigation.tsx', 'Brands')
  add(rows, 'nav.news', 'Global', 'Nav', 'Link', 'src/components/Navigation.tsx', 'News')
  add(rows, 'nav.careers', 'Global', 'Nav', 'Link', 'src/components/Navigation.tsx', 'Careers')
  add(rows, 'nav.contact', 'Global', 'Nav', 'Link', 'src/components/Navigation.tsx', 'Contact')

  add(rows, 'footer.ctaLabel', 'Global', 'Footer', 'Press label', 'src/components/Footer.tsx', 'Press & Media Inquiries')
  add(rows, 'footer.ctaLink', 'Global', 'Footer', 'Press link', 'src/components/Footer.tsx', 'Email →')
  add(rows, 'footer.copyright', 'Global', 'Footer', 'Copyright', 'src/components/Footer.tsx',
    'Too Lost Music Group Limited. All Rights Reserved.')

  add(rows, 'about.headline', 'About', 'Hero', 'Heading', 'src/app/(frontend)/about/page.tsx', 'Too Lost Music Group')
  add(rows, 'about.body.0', 'About', 'Intro', 'Paragraph 1', 'src/app/(frontend)/about/page.tsx',
    'Too Lost Music Group is a global independent music company providing artists, record labels, and music businesses with the infrastructure, technology, capital, and international reach needed to build, scale, monetize, and protect valuable music assets.')
  add(rows, 'about.body.1', 'About', 'Intro', 'Paragraph 2', 'src/app/(frontend)/about/page.tsx',
    'The group operates a diversified portfolio of music companies, platforms, brands, and owned intellectual property across distribution, publishing, rights management, catalog investment, marketing, and artist and label services.')
  add(rows, 'about.body.2', 'About', 'Intro', 'Paragraph 3', 'src/app/(frontend)/about/page.tsx',
    "Across its portfolio, Too Lost Music Group serves more than half a million artists and record labels, manages millions of recordings and compositions worldwide, and delivers approximately 10% of the world's newly released music each day.")
  add(rows, 'about.body.3', 'About', 'Intro', 'Paragraph 4', 'src/app/(frontend)/about/page.tsx',
    'With more than 170 professionals across ten global offices, the group combines sophisticated technology, operational expertise, and flexible capital to help independent creators and music companies grow efficiently, create long-term value, and retain control of their rights, ownership, and creative independence.')
  add(rows, 'about.board.heading', 'About', 'Board', 'Heading', 'src/app/(frontend)/about/page.tsx', 'Board of Directors')
  add(rows, 'about.leadership.heading', 'About', 'Leadership', 'Heading', 'src/app/(frontend)/about/page.tsx', 'Leadership')
  add(rows, 'about.partners.heading', 'About', 'Partners', 'Heading', 'src/app/(frontend)/about/page.tsx', 'Strategic Partners')
  add(rows, 'about.partners.goldstate.desc', 'About', 'Partners', 'GoldState description', 'src/app/(frontend)/about/page.tsx',
    'Private investment firm with a primary focus on the music sector')
  add(rows, 'about.partners.ta.desc', 'About', 'Partners', 'TA Associates description', 'src/app/(frontend)/about/page.tsx',
    'Leading global growth private equity firm')
  add(rows, 'about.partners.pinnacle.desc', 'About', 'Partners', 'Pinnacle description', 'src/app/(frontend)/about/page.tsx',
    'Prominent American regional bank and financial holding company')
  add(rows, 'about.offices.heading', 'About', 'Offices', 'Heading', 'src/app/(frontend)/about/page.tsx', 'Global Presence')

  add(rows, 'contact.headline', 'Contact', 'Hero', 'Heading', 'src/app/(frontend)/contact/page.tsx', 'Contact')
  add(rows, 'contact.inquiry.title', 'Contact', 'Inquiries', 'Title', 'src/app/(frontend)/contact/page.tsx',
    'General Inquiries and Distribution Support')

  add(rows, 'press.headline', 'Press', 'Hero', 'Heading', 'src/app/(frontend)/press/page.tsx', 'Press Inquiries')
  add(rows, 'press.intro', 'Press', 'Hero', 'Description', 'src/app/(frontend)/press/page.tsx',
    'For media inquiries, interviews, or press kit access, please get in touch.')

  add(rows, 'governance.headline', 'Governance', 'Hero', 'Heading', 'src/app/(frontend)/governance/page.tsx', 'Corporate Governance')
  add(rows, 'governance.intro', 'Governance', 'Hero', 'Description', 'src/app/(frontend)/governance/page.tsx',
    'Transparency, accountability, and integrity guide everything we do.')
  add(rows, 'governance.mission.heading', 'Governance', 'Mission', 'Heading', 'src/app/(frontend)/governance/page.tsx', 'Our Mission')
  add(rows, 'governance.mission.body', 'Governance', 'Mission', 'Body', 'src/app/(frontend)/governance/page.tsx',
    'Our mission is to provide creators, labels, and music businesses with the infrastructure, technology, capital, and global access needed to build, scale, and protect valuable music assets. Through a portfolio of music companies, brands, platforms, and owned catalog IP, we operate across distribution, publishing technology, rights management, catalog ownership, and music services. Our comprehensive framework empowers the independent music sector to grow efficiently, create long-term value, and maintain control over rights, ownership, and creative independence.')
  add(rows, 'governance.investors.heading', 'Governance', 'Investors', 'Heading', 'src/app/(frontend)/governance/page.tsx', 'Investors')
  add(rows, 'governance.investors.body', 'Governance', 'Investors', 'Body', 'src/app/(frontend)/governance/page.tsx',
    'Our investors include leading growth equity and strategic partners with deep experience scaling technology, media, music, and creator-focused businesses. Their support provides the company with long-term capital, institutional expertise, and strategic resources to accelerate growth across distribution, publishing technology, rights management, catalog ownership, and global music services. Together, our investor base helps strengthen our ability to build durable infrastructure for the independent music economy.')

  add(rows, 'offices.headline', 'Offices', 'Hero', 'Heading', 'src/app/(frontend)/offices/page.tsx', 'Our Offices')
  add(rows, 'offices.intro', 'Offices', 'Hero', 'Description', 'src/app/(frontend)/offices/page.tsx',
    'Operating across ten cities on five continents, we work where music happens.')

  add(rows, 'divisions.headline', 'Divisions', 'Hero', 'Heading', 'src/app/(frontend)/divisions/page.tsx', 'Brands')
  add(rows, 'news.headline', 'News', 'Hero', 'Heading', 'src/app/(frontend)/news/page.tsx', 'News')
  add(rows, 'careers.headline', 'Careers', 'Hero', 'Heading', 'src/app/(frontend)/careers/CareersClient.tsx', 'Careers')
  add(rows, 'careers.openings.heading', 'Careers', 'Openings', 'Heading', 'src/app/(frontend)/careers/CareersClient.tsx', 'Current Openings')
  add(rows, 'careers.search.placeholder', 'Careers', 'Openings', 'Search placeholder', 'src/app/(frontend)/careers/CareersClient.tsx', 'Search roles...')

  for (const person of boardMembers) {
    const base = `board.${person.slug}`
    const file = 'src/payload/people-data.ts'
    add(rows, `${base}.name`, 'About', `Board · ${person.name}`, 'Name', file, person.name)
    add(rows, `${base}.role`, 'About', `Board · ${person.name}`, 'Affiliation', file, person.role)
    add(rows, `${base}.tag`, 'About', `Board · ${person.name}`, 'Tag', file, person.tag)
    person.bio?.forEach((para, i) => {
      add(rows, `${base}.bio.${i}`, 'About', `Board · ${person.name}`, `Bio ${i + 1}`, file, para)
    })
  }

  for (const person of leaders) {
    const base = `leader.${person.slug}`
    const file = 'src/payload/people-data.ts'
    add(rows, `${base}.name`, 'About', `Leadership · ${person.name}`, 'Name', file, person.name)
    add(rows, `${base}.role`, 'About', `Leadership · ${person.name}`, 'Title', file, person.role)
    person.bio?.forEach((para, i) => {
      add(rows, `${base}.bio.${i}`, 'About', `Leadership · ${person.name}`, `Bio ${i + 1}`, file, para)
    })
  }

  for (const company of fallbackCompanies) {
    const base = `company.${company.slug}`
    const file = 'src/payload/fallback-data.ts'
    add(rows, `${base}.name`, 'Divisions', company.name, 'Name', file, company.name)
    add(rows, `${base}.type`, 'Divisions', company.name, 'Type', file, company.type)
    add(rows, `${base}.shortDescription`, 'Divisions', company.name, 'Short description', file, company.shortDescription)
    add(rows, `${base}.mission`, 'Divisions', company.name, 'Long description', file, company.mission)
    add(rows, `${base}.clientsLabel`, 'Divisions', company.name, 'Clients label', file, company.clientsLabel)
    add(rows, `${base}.clients`, 'Divisions', company.name, 'Clients', file, company.clients)
    company.metrics?.forEach((metric, i) => {
      add(rows, `${base}.metric.${i}`, 'Divisions', company.name, `Metric ${i + 1}`, file, metric)
    })
    company.productSuite?.forEach((item, i) => {
      add(rows, `${base}.product.${i}`, 'Divisions', company.name, `Product ${i + 1}`, file, item)
    })
  }

  for (const [slug, content] of Object.entries(divisionContent)) {
    const file = 'src/payload/division-content.ts'
    const company = fallbackCompanies.find((c) => c.slug === slug)
    const section = company?.name ?? slug
    add(rows, `division.${slug}.tagline`, 'Divisions', section, 'Tagline', file, content.tagline)
    add(rows, `division.${slug}.longDescription`, 'Divisions', section, 'Page description', file, content.longDescription)
    content.features?.forEach((feature, i) => {
      add(rows, `division.${slug}.feature.${i}.title`, 'Divisions', section, `Feature ${i + 1} title`, file, feature.title)
      add(rows, `division.${slug}.feature.${i}.desc`, 'Divisions', section, `Feature ${i + 1} description`, file, feature.desc)
    })
    content.metrics?.forEach((metric, i) => {
      add(rows, `division.${slug}.metric.${i}.value`, 'Divisions', section, `Stat ${i + 1} value`, file, metric.value)
      add(rows, `division.${slug}.metric.${i}.label`, 'Divisions', section, `Stat ${i + 1} label`, file, metric.label)
    })
  }

  NEWS_ARTICLES.forEach((article, i) => {
    const file = 'src/payload/news-data.ts'
    add(rows, `news.${i}.title`, 'News', article.source, 'Headline', file, article.title)
    add(rows, `news.${i}.summary`, 'News', article.source, 'Summary', file, article.summary)
  })

  for (const role of openings) {
    const file = 'src/data/careers.ts'
    const section = role.title
    add(rows, `career.${role.id}.title`, 'Careers', section, 'Title', file, role.title)
    add(rows, `career.${role.id}.summary`, 'Careers', section, 'Summary', file, role.summary)
    add(rows, `career.${role.id}.description`, 'Careers', section, 'Description', file, role.description)
    role.responsibilities.forEach((item, i) => {
      add(rows, `career.${role.id}.responsibility.${i}`, 'Careers', section, `Responsibility ${i + 1}`, file, item)
    })
    role.requirements.forEach((item, i) => {
      add(rows, `career.${role.id}.requirement.${i}`, 'Careers', section, `Requirement ${i + 1}`, file, item)
    })
  }

  perks.forEach((perk, i) => {
    const file = 'src/data/careers.ts'
    add(rows, `perk.${i}.title`, 'Careers', 'Perks', `Perk ${i + 1} title`, file, perk.title)
    add(rows, `perk.${i}.desc`, 'Careers', 'Perks', `Perk ${i + 1} description`, file, perk.desc)
  })

  for (const office of offices) {
    const file = 'src/components/OfficesShowcase.tsx'
    add(rows, `office.${office.city}.city`, 'Offices', office.city, 'City', file, office.city)
    add(rows, `office.${office.city}.country`, 'Offices', office.city, 'Country', file, office.country)
    add(rows, `office.${office.city}.role`, 'Offices', office.city, 'Label', file, office.role)
    add(rows, `office.${office.city}.address`, 'Offices', office.city, 'Address', file, office.address)
  }

  return rows
}

function mergePreviousNewCopy(rows: Row[]) {
  if (!fs.existsSync(CSV_PATH)) return
  const previous = parseCsv(fs.readFileSync(CSV_PATH, 'utf8'))
  const byKey = new Map(previous.map((r) => [r.Key, r['New Copy'] ?? '']))
  for (const row of rows) {
    const saved = byKey.get(row.key)?.trim()
    if (saved) row.newCopy = saved
  }
}

function applyReplacement(file: string, oldVal: string, newVal: string, slug?: string) {
  const abs = path.join(ROOT, file)
  const src = fs.readFileSync(abs, 'utf8')
  let next: string | null = null
  if (slug) {
    const range = slugRange(src, slug)
    if (range) next = replaceJsString(src, oldVal, newVal, range.start, range.end)
  }
  if (!next) next = replaceJsString(src, oldVal, newVal)
  if (!next) {
    const jsxOld = oldVal.replace(/'/g, '&apos;')
    const jsxNew = newVal.replace(/'/g, '&apos;')
    if (src.includes(jsxOld)) next = src.replace(jsxOld, jsxNew)
    else if (src.includes(oldVal)) next = src.replace(oldVal, newVal)
  }
  if (!next || next === src) {
    throw new Error(`Could not find current copy for ${file}${slug ? ` (${slug})` : ''}`)
  }
  fs.writeFileSync(abs, next)
}

function slugFromKey(key: string) {
  const leader = key.match(/^leader\.([^.]+)\./)
  if (leader) return leader[1]
  const board = key.match(/^board\.([^.]+)\./)
  if (board) return board[1]
  const company = key.match(/^company\.([^.]+)\./)
  if (company) return company[1]
  const division = key.match(/^division\.([^.]+)\./)
  if (division) return division[1]
  const office = key.match(/^office\.([^.]+)\./)
  if (office) return office[1]
  return undefined
}

function exportCopy() {
  const rows = collect()
  mergePreviousNewCopy(rows)
  fs.writeFileSync(CSV_PATH, toCsv(rows))
  console.log(`Wrote ${rows.length} rows to ${path.relative(ROOT, CSV_PATH)}`)
  console.log('Fill the New Copy column, then run: npm run copy:import')
}

function importCopy(csvPath = CSV_PATH) {
  if (!fs.existsSync(csvPath)) {
    throw new Error(`No CSV at ${csvPath}. Run npm run copy:export first.`)
  }
  const records = parseCsv(fs.readFileSync(csvPath, 'utf8'))
  const catalog = new Map(collect().map((row) => [row.key, row]))
  let applied = 0
  let skipped = 0

  for (const record of records) {
    const key = record.Key?.trim()
    const next = (record['New Copy'] ?? '').trim()
    if (!key || !next) {
      skipped++
      continue
    }
    const row = catalog.get(key)
    if (!row) {
      console.warn(`Unknown key, skipped: ${key}`)
      skipped++
      continue
    }
    if (next === row.current) {
      skipped++
      continue
    }
    applyReplacement(row.file, row.current, next, slugFromKey(key))
    applied++
    console.log(`Updated ${key}`)
  }

  console.log(`Imported ${applied} change${applied === 1 ? '' : 's'} (${skipped} rows unchanged or empty).`)
}

const command = process.argv[2]
if (command === 'import') {
  importCopy(process.argv[3] ? path.resolve(process.argv[3]) : CSV_PATH)
} else if (command === 'export' || !command) {
  exportCopy()
} else {
  console.error('Usage: npx tsx scripts/site-copy.ts [export|import] [csv]')
  process.exit(1)
}
