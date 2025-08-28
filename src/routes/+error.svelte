<script>
  import { _ } from 'svelte-i18n'
  import { page } from '$app/state'
</script>

<svelte:head>
  <title>{$_('title.404')}</title>
</svelte:head>

<h1>{page?.error?.message}</h1>
