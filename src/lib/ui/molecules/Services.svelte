<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { HTMLAttributes } from 'svelte/elements'

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()
</script>

<section class={['h-100 w-full bg-neutral-200', className]} {...props}>
  <div class="mx-auto max-w-7xl px-6 lg:px-8"></div>
</section>
