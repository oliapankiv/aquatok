import { init, register } from 'svelte-i18n'

export enum Locales {
  UA = 'ua',
}

export const i18n = () => {
  register('ua', () => import('$lib/i18n/locales/ua.json'))

  return init({
    fallbackLocale: Locales.UA,
    initialLocale: Locales.UA,
  })
}
