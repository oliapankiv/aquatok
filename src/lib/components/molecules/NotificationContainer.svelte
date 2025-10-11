<script lang="ts">
  import { notifications } from '$lib/composables/notification'

  import Notification from '$lib/ui/atoms/Notification.svelte'
</script>

<div class="absolute top-0 right-0 z-50 flex w-full flex-col gap-3 p-4 sm:px-6 sm:py-8 md:w-xl">
  {#each $notifications as notification}
    <Notification {notification} />
  {/each}
</div>
