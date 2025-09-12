<script lang="ts">
  import { _ } from 'svelte-i18n'

  import Hero from '$lib/ui/molecules/Hero.svelte'
  import Contact from '$lib/ui/molecules/Contact.svelte'
</script>

<Hero />

<Contact />

<h1>{$_('')}</h1>
