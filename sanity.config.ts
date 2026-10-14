'use client'

import { HomeIcon } from '@sanity/icons/Home'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { dataset, projectId } from './src/sanity/env'
import { schemaTypes } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'
import { homeTool } from './src/sanity/studio/HomeTool'
import { StudioIcon } from './src/sanity/studio/StudioIcon'
import { studioTheme } from './src/sanity/studio/theme'

export default defineConfig({
  basePath: '/studio',
  name: 'tlmg',
  title: 'Too Lost Music Group',
  icon: StudioIcon,
  theme: studioTheme,
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [structureTool({ structure, title: 'Content' })],
  tools: (prev) => [{ ...homeTool, icon: HomeIcon }, ...prev],
})
