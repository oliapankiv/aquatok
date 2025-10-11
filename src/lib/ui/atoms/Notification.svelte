<script lang="ts">
  import { fly } from 'svelte/transition'

  import type { HTMLAttributes } from 'svelte/elements'

  import { close } from '$lib/composables/notification'

  import X from '$lib/ui/icons/X.svelte'
  import Checkmark from '$lib/ui/icons/Checkmark.svelte'
  import Crossmark from '$lib/ui/icons/Crossmark.svelte'

  import { NotificationType } from '$lib/enums'

  import type { Notification } from '$lib/types'

  type Props = HTMLAttributes<HTMLDivElement> & {
    notification: Notification
  }

  const { class: className, notification, ...props }: Props = $props()

  const isErrorType = notification.type === NotificationType.ERROR

  const Icon = isErrorType ? Crossmark : Checkmark
</script>

<div
  transition:fly
  class={[
    'w-full rounded-lg border-l-4 border-emerald-400 bg-emerald-600 p-2 shadow-lg sm:p-3',
    { 'border-red-300 bg-red-400': isErrorType },
  ]}
  {...props}
>
  <div class="flex items-center justify-between text-white">
    <div class="flex w-0 flex-1 items-center">
      <Icon class="h-6 w-6 shrink-0" />

      <p class="mx-3">{notification.message}</p>
    </div>

    <div class="order-2 mr-1 shrink-0 sm:order-3 sm:ml-2">
      <button
        type="button"
        aria-label="Close notification"
        class={[
          '-mr-1 flex cursor-pointer rounded-md p-2 hover:bg-emerald-500 focus:ring-2 focus:ring-emerald-400 focus:outline-hidden',
          { 'hover:bg-red-300 focus:ring-red-300': isErrorType },
        ]}
        onclick={() => close(notification)}
      >
        <X class="h-4 w-4" />
      </button>
    </div>
  </div>
</div>
