<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { Component } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import { Section } from '$lib/enums'

  import Bag from '$lib/ui/icons/Bag.svelte'
  import Bulb from '$lib/ui/icons/Bulb.svelte'
  import Faucet from '$lib/ui/icons/Faucet.svelte'
  import Wallet from '$lib/ui/icons/Wallet.svelte'
  import Heating from '$lib/ui/icons/Heating.svelte'
  import Sewerage from '$lib/ui/icons/Sewerage.svelte'
  import Generator from '$lib/ui/icons/Generator.svelte'
  import AirConditioning from '$lib/ui/icons/AirConditioning.svelte'
  import HomeElectricity from '$lib/ui/icons/HomeElectricity.svelte'

  type Card = {
    icon: Component
    title: string
    description: string
    highlight?: boolean
  }

  const cards: Card[] = [
    { icon: Heating },
    { icon: Wallet, highlight: true },
    { icon: Faucet },
    { icon: Bulb },
    { icon: AirConditioning },
    { icon: Bag },
    { icon: HomeElectricity },
    { icon: Sewerage },
    { icon: Generator },
  ].map((props, index) => ({
    ...props,
    title: $_(`section.offerings.item.${index}.title`),
    description: $_(`section.offerings.item.${index}.description`),
  }))

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()
</script>

{#snippet card(props: Card)}
  <div
    class={[
      'flex max-w-xl gap-4',
      { 'rounded-xs outline-1 outline-offset-8 outline-primary sm:outline-offset-12': props.highlight },
    ]}
  >
    <props.icon class="mt-1 h-7 w-7 shrink-0" />

    <div class="w-[calc(100%-3rem)] space-y-1">
      <span class="mb-1 inline-block text-lg font-medium text-white">{props.title}</span>

      <p class="text-sm text-gray-400">{props.description}</p>
    </div>
  </div>
{/snippet}

<section id={Section.OFFERINGS} class={['bg-gray-900/95 pt-16 pb-12 md:pt-24', className]} {...props}>
  <div class="container grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
    {#each cards as item}
      {@render card(item)}
    {/each}
  </div>
</section>
