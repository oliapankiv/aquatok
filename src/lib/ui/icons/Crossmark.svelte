<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements'

  const props: HTMLAttributes<SVGElement> = $props()
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
  <path stroke-width="2" d="M9.5 14.5 12 12m0 0 2.5-2.5M12 12l2.5 2.5-5-5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
