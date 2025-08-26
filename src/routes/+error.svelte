<script>
  import { page } from '$app/state'
</script>

<svelte:head>
  <title>Not Found</title>
</svelte:head>

<h1>{page?.error?.message}</h1>
