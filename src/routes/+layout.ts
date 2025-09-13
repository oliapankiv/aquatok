import { browser } from '$app/environment'
import { env } from '$env/dynamic/public'

import { i18n } from '$lib/i18n'

export const prerender = true

export const load = async () => void (await i18n())

browser && Object.assign(globalThis, { dataLayer: ['js', new Date(), 'config', env.PUBLIC_GTAG_ID] })
