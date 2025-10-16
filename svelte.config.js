import adapterNode from '@sveltejs/adapter-node'
import adapterStatic from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    csrf: { trustedOrigins: ['*'] },
    adapter: process.env.PUBLIC_ADAPTER === 'static' ? adapterStatic({ fallback: '404.html' }) : adapterNode(),
  },
}

export default config
