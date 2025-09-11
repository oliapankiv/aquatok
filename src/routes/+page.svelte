<script lang="ts">
  import { _ } from 'svelte-i18n'

  import Hero from '$lib/ui/molecules/Hero.svelte'
  import Services from '$lib/ui/molecules/Services.svelte'
</script>

<Hero />

<Services />

<h1>{$_('')}</h1>
