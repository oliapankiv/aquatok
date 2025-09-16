<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements'

  const props: HTMLAttributes<SVGElement> = $props()
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" stroke="currentColor" {...props}>
  <path d="M4 6.5L8 10.5L12 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
