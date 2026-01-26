<script lang="ts">
  import { notifications } from '$lib/composables/notification'

  import Notification from '$lib/ui/atoms/Notification.svelte'
</script>

<div class="fixed top-0 right-0 z-50 m-4 flex w-full flex-col gap-3 sm:mx-6 sm:my-8 md:w-xl">
  {#each $notifications as notification}
    <Notification {notification} />
  {/each}
</div>
