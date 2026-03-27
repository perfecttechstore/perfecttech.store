'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity/sanity.config' // Only 3 jumps now!

export default function StudioPage() {
  return <NextStudio config={config} />
}