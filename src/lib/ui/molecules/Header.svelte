<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { fade } from 'svelte/transition'

  import type { RouteId } from '$app/types'
  import type { HTMLAttributes } from 'svelte/elements'

  import { scroll } from '$lib/composables/scroll'

  import { Axis, Section } from '$lib/enums'
  import { scrollIntoView } from '$lib/helpers'

  import Lined from '$lib/ui/atoms/Lined.svelte'
  import Button from '$lib/ui/atoms/Button.svelte'
  import Spaced from '$lib/ui/atoms/Spaced.svelte'

  import X from '$lib/ui/icons/X.svelte'
  import Logo from '$lib/ui/icons/Logo.svelte'
  import Burger from '$lib/ui/icons/Burger.svelte'

  type Link = {
    label: string
    section: Section
  }

  const links: Link[] = [
    { section: Section.OFFERINGS, label: $_('generic.offerings') },
    { section: Section.CONTACT, label: $_('generic.contact') },
  ]

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()

  let toggled = $state<boolean>(false)

  const scrolled = $derived<boolean>($scroll > 0.01)
</script>

{#snippet logo(href: RouteId = '/')}
  <a {href} class="inline-flex h-full w-40 items-center justify-center text-primary" aria-label={$_('brand')}>
    <Logo class="h-10 w-auto" />
  </a>
{/snippet}

{#snippet link({ section, label }: Link, axis: Axis)}
  <Spaced {axis}>
    <a
      href={`#${section}`}
      onclick={(event) => (toggled = false) || scrollIntoView(section)(event)}
      class="inline-flex h-full w-full items-center px-4 py-3 capitalize bg-blend-multiply hover:bg-white/[2.5%]"
    >
      {label}
    </a>
  </Spaced>
{/snippet}

<header class={['sticky top-0 z-40 text-base', { 'backdrop-blur-md': scrolled && !toggled }, className]} {...props}>
  <div
    class={[
      'fixed inset-0 h-screen w-full origin-top scale-y-0 bg-neutral-950/80 backdrop-blur-2xl transition-[scale] duration-400',
      { 'scale-y-100': toggled },
    ]}
  ></div>

  <div class="container">
    <Lined class="flex justify-between">
      <div>
        <Spaced class="h-full">
          {@render logo()}
        </Spaced>
      </div>

      <nav class="hidden font-medium lg:flex">
        {#each links as item}
          {@render link(item, Axis.HORIZONTAL)}
        {/each}
      </nav>

      <Button class="lg:hidden" aria-label="Open main menu" aria-expanded={toggled} onclick={() => (toggled = !toggled)}>
        <Burger />
      </Button>

      {#if toggled}
        <div
          transition:fade={{ duration: 100 }}
          class="absolute inset-x-0 z-10 flex flex-col rounded-xl bg-secondary ring-[0.66px] ring-neutral-800"
        >
          <div class="flex items-center justify-between">
            {@render logo()}

            <Button class="rounded-xl" aria-label="Close main menu" onclick={() => (toggled = !toggled)}>
              <X />
            </Button>
          </div>

          <nav class="flex w-40 flex-col pb-4 pl-4">
            {#each links as item}
              {@render link(item, Axis.VERTICAL)}
            {/each}
          </nav>
        </div>
      {/if}
    </Lined>
  </div>
</header>
