import { writable } from 'svelte/store'

import { NotificationType } from '$lib/enums'

import type { Notification } from '$lib/types'

export const notifications = writable<Notification[]>([])

export const close = (notification: Notification): void => {
  notifications.update((value) => value.filter((item) => item !== notification))
}

export const notify = (type: NotificationType, message: string): void => {
  const notification: Notification = { type, message }

  notifications.update((value) => [...value, notification])

  setTimeout(() => close(notification), 8_000)
}
