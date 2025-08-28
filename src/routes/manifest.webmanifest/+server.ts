import type { RequestHandler } from '@sveltejs/kit'

import faviconsvg from '$lib/assets/favicon/favicon.svg'

export const prerender = true

const manifest = JSON.stringify({
  start_url: '/',
  name: 'Aquatok',
  short_name: 'Aquatok',
  display: 'standalone',
  orientation: 'portrait',
  theme_color: '#f7c86e',
  background_color: '#0f1115',
  icons: [{ src: faviconsvg, type: 'image/svg+xml', sizes: '64x64' }],
})

export const GET: RequestHandler = () => new Response(manifest, { headers: { 'content-type': 'application/manifest+json' } })
