<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements'

  const props: HTMLAttributes<SVGElement> = $props()
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" {...props}>
  <path
    d="M37 47H11a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h19c.3 0 .6.2.8.4l9.8 9.8c.2.2.4.5.4.8v31a4 4 0 0 1-4 4zM31 4.4V11h6.6L31 4.4zm8 8.6h-9a1 1 0 0 1-1-1V3H11a2 2 0 0 0-2 2v38c0 1.1.9 2 2 2h26a2 2 0 0 0 2-2V13zm-6 26H15a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2zm0-8H15a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2zm0-8H15a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2z"
  />
</svg>
