<script lang="ts">
  const { children, class: className = '', ...props } = $props()
</script>

<button
  class="focus-ring-inset inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-700 {className}"
  {...props}
>
  {@render children?.()}
</button>
