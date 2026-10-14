import { buildLegacyTheme } from 'sanity'

const ink = '#0e0e0c'
const paper = '#f0efe8'

export const studioTheme = buildLegacyTheme({
  '--font-family-base': 'var(--font-display), Inter, system-ui, sans-serif',
  '--font-family-monospace': 'var(--font-mono), "Space Mono", ui-monospace, monospace',
  '--black': ink,
  '--white': paper,
  '--gray-base': '#363632',
  '--gray': '#77766f',
  '--component-bg': '#111111',
  '--component-text-color': paper,
  '--brand-primary': paper,
  '--default-button-color': '#77766f',
  '--default-button-primary-color': paper,
  '--default-button-success-color': '#5fb87a',
  '--default-button-warning-color': '#ff8a00',
  '--default-button-danger-color': '#e5484d',
  '--focus-color': paper,
  '--main-navigation-color': ink,
  '--main-navigation-color--inverted': paper,
  '--state-info-color': paper,
  '--state-success-color': '#5fb87a',
  '--state-warning-color': '#ff8a00',
  '--state-danger-color': '#e5484d',
})
