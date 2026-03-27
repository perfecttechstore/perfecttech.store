import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: "mh8uwsqp", // Use your ID from manage.sanity.io
  dataset: "production",
  apiVersion: "2024-03-23",
  useCdn: false, // Set to true for production to make it lightning fast
})