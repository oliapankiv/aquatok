import { Bot } from 'grammy'
import { fail } from '@sveltejs/kit'
import { isValidPhoneNumber } from 'libphonenumber-js'

import { PUBLIC_ADAPTER } from '$env/static/public'
import { PRIVATE_BOT_KEY, PRIVATE_CAPTCHA, PRIVATE_GROUP_ID, PRIVATE_THREAD_ID } from '$env/static/private'

import { Adapter } from '$lib/enums'

import type { Actions } from './$types'
import type { ServerCaptcha } from '$lib/types/captcha'

const IS_ENABLED = (PUBLIC_ADAPTER === Adapter.NODE) as unknown as true

const makeMessage = (name: string, phone: string, issue: string): string =>
  `🚨 *Запит на контакт:*\nІм'я:\` \`\`${name}\`\nТелефон:\` \`\`${phone}\`\nПроблема:\` \`\`${issue}\``

const isCaptchaInvalid = async (token: string): Promise<boolean> => {
  const formData = new FormData()
  formData.set('response', token)
  formData.set('secret', PRIVATE_CAPTCHA)

  const result = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    body: formData,
  })
    .then((result): Promise<ServerCaptcha> => result.json())
    .catch(() => undefined)

  return !result || !result.success || result.score < 0.4
}

export const actions =
  IS_ENABLED &&
  ({
    default: async ({ request }) => {
      const formData = await request.formData().catch(() => undefined)
      if (!formData) return fail(400, { errorMessage: 'section.contactUsForm.error.nodata' })

      const captcha = formData.get('captcha')
      if (typeof captcha !== 'string' || (await isCaptchaInvalid(captcha)))
        return fail(400, { errorMessage: 'section.contactUsForm.error.captcha' })

      const name = formData.get('name')
      if (typeof name !== 'string' || name.length < 2) return fail(400, { errorMessage: 'section.contactUsForm.name.error' })

      const phone = formData.get('phone')
      if (typeof phone !== 'string' || !isValidPhoneNumber(phone, 'UA'))
        return fail(400, { errorMessage: 'section.contactUsForm.phoneNumber.error' })

      const issue = formData.get('issue')
      if (typeof issue !== 'string' || issue.length < 3) return fail(400, { errorMessage: 'section.contactUsForm.issue.error' })

      try {
        await new Bot(PRIVATE_BOT_KEY).api.sendMessage(PRIVATE_GROUP_ID, makeMessage(name, phone, issue), {
          parse_mode: 'MarkdownV2',
          message_thread_id: +PRIVATE_THREAD_ID,
        })
      } catch (error) {
        console.error(`Failed to send telegram message: ${error}`)

        return fail(400, { errorMessage: 'section.contactUsForm.error.submit' })
      }
    },
  } satisfies Actions)
