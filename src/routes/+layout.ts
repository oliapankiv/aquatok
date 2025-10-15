import { browser } from '$app/environment'
import { env } from '$env/dynamic/public'
import { PUBLIC_ADAPTER } from '$env/static/public'

import { i18n } from '$lib/i18n'
import { Adapter } from '$lib/enums'

export const prerender = PUBLIC_ADAPTER === Adapter.STATIC

export const load = async () => void (await i18n())

browser && Object.assign(globalThis, { dataLayer: ['js', new Date(), 'config', env.PUBLIC_GTAG_ID] })
