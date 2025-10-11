import type { NotificationType } from '$lib/enums'

export type Notification = {
  type: NotificationType
  message: string
}
