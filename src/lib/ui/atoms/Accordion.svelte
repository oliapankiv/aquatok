<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements'

  import { slide } from 'svelte/transition'

  import Arrow from '$lib/ui/icons/Arrow.svelte'

  type Props = HTMLAttributes<HTMLDivElement> & {
    header: string
    content: string
    show?: boolean
  }

  let { class: className, header, content, show = $bindable(false), ...props }: Props = $props()
</script>

<div class={['grid-area grid gap-x-2 rounded-2xl border border-white/15 bg-neutral-950/50 px-5', className]} {...props}>
  <button class="cursor-pointer py-5 text-left font-medium [grid-area:header]" onclick={() => (show = !show)}>
    {header}
  </button>

  <Arrow
    class={[
      'h-16 w-6 cursor-pointer self-center py-5 text-primary transition-transform [grid-area:toggle]',
      { 'rotate-180': show },
    ]}
    onclick={() => (show = !show)}
  />

  {#if show}
    <main
      class="mb-5 rounded-2xl bg-neutral-950/50 p-5 text-sm font-light text-gray-100 backdrop-blur-2xl [grid-area:body]"
      transition:slide
    >
      {content}
    </main>
  {/if}
</div>

<style>
  .grid-area {
    grid:
      'header toggle' min-content
      'body body' min-content / 1fr min-content;
  }
</style>
