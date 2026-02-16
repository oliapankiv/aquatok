import { PUBLIC_ADAPTER, PUBLIC_GTAG_ID } from '$env/static/public'

import { i18n } from '$lib/i18n'
import { Adapter } from '$lib/enums'

export const prerender = PUBLIC_ADAPTER === Adapter.STATIC

export const load = async () => void (await i18n())
