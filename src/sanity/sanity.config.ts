import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Perfect Tech Admin',
  projectId: 'mh8uwsqp', // Get this from manage.sanity.io
  dataset: 'production',
  basePath: '/studio',
  plugins: [deskTool(), visionTool()],
  schema: schema,
})