<script lang="ts">
  import { _ } from 'svelte-i18n'

  import '../app.css'

  import faviconsvg from '$lib/assets/favicon/favicon.svg'
  import faviconpng from '$lib/assets/favicon/favicon.png'

  import Header from '$lib/ui/molecules/Header.svelte'
  import LayoutBackground from '$lib/ui/atoms/LayoutBackground.svelte'

  const { children } = $props()
</script>

<svelte:head>
  <link rel="icon" href={faviconsvg} type="image/svg+xml" />
  <link rel="icon" href={faviconpng} type="image/png" sizes="64x64" />
  <title>{$_('title.default')}</title>
</svelte:head>

<LayoutBackground />

<Header />

{@render children?.()}
