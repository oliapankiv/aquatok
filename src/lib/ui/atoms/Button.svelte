<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements'

  const { children, class: className, ...props }: HTMLButtonAttributes = $props()
</script>

<button
  type="button"
  class={['flex size-12 cursor-pointer items-center justify-center self-center rounded-lg hover:bg-white/5', className]}
  {...props}
>
  {@render children?.()}
</button>
