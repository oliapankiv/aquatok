import { init, register } from 'svelte-i18n'

export enum Locales {
  UK = 'uk',
}

export const i18n = () => {
  register(Locales.UK, () => import('$lib/i18n/locales/uk.json'))

  return init({
    fallbackLocale: Locales.UK,
    initialLocale: Locales.UK,
  })
}
