<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements'

  const { children, class: className, ...props }: HTMLButtonAttributes = $props()
</script>

<button
  type="button"
  class={[
    'group relative inline-block h-14 w-full cursor-pointer rounded-xl bg-gradient-to-r  from-blue-500 to-primary p-px shadow-lg transition-all duration-300 before:absolute before:inset-0  before:scale-75 before:rounded-xl before:bg-gradient-to-r before:from-blue-400 before:to-primary before:opacity-50 before:blur-lg before:transition before:duration-300 hover:shadow-xl hover:before:scale-100 hover:before:opacity-100 focus:before:scale-90 focus:before:opacity-75 active:before:scale-90',
    className,
  ]}
  {...props}
>
  <p
    class="relative flex h-full items-center justify-center rounded-[calc(0.75rem-1px)] bg-gray-950 px-8 text-sm font-semibold tracking-wide text-white transition duration-300 group-hover:bg-gray-900"
  >
    {@render children?.()}
  </p>
</button>
