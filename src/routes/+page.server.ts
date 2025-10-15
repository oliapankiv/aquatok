import { Bot } from 'grammy'
import { fail } from '@sveltejs/kit'
import { isValidPhoneNumber } from 'libphonenumber-js'

import { PUBLIC_ADAPTER } from '$env/static/public'
import { PRIVATE_BOT_KEY, PRIVATE_GROUP_ID, PRIVATE_THREAD_ID } from '$env/static/private'

import { Adapter } from '$lib/enums'

import type { Actions } from './$types'

const IS_ENABLED = (PUBLIC_ADAPTER === Adapter.NODE) as unknown as true

const bot = new Bot(PRIVATE_BOT_KEY)

const makeMessage = (name: string, phone: string, issue: string): string =>
  `🚨 *Запит на контакт:*\nІм'я:\` \`\`${name}\`\nТелефон:\` \`\`${phone}\`\nПроблема:\` \`\`${issue}\``

export const actions =
  IS_ENABLED &&
  ({
    default: async ({ request }) => {
      const formData = await request.formData().catch(() => undefined)
      if (!formData) return fail(400, { errorMessage: 'section.contactUsForm.error.nodata' })

      const name = formData.get('name')
      if (typeof name !== 'string' || name.length < 2) return fail(400, { errorMessage: 'section.contactUsForm.name.error' })

      const phone = formData.get('phone')
      if (typeof phone !== 'string' || !isValidPhoneNumber(phone, 'UA'))
        return fail(400, { errorMessage: 'section.contactUsForm.phoneNumber.error' })

      const issue = formData.get('issue')
      if (typeof issue !== 'string' || issue.length < 3) return fail(400, { errorMessage: 'section.contactUsForm.issue.error' })

      try {
        await bot.api.sendMessage(PRIVATE_GROUP_ID, makeMessage(name, phone, issue), {
          parse_mode: 'MarkdownV2',
          message_thread_id: +PRIVATE_THREAD_ID,
        })
      } catch {
        return fail(400, { errorMessage: 'section.contactUsForm.error.submit' })
      }
    },
  } satisfies Actions)
