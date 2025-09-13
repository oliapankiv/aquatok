<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { Component } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import { Section } from '$lib/enums'

  import Bulb from '$lib/ui/icons/Bulb.svelte'
  import Phone from '$lib/ui/icons/Phone.svelte'
  import Viber from '$lib/ui/icons/Viber.svelte'
  import Faucet from '$lib/ui/icons/Faucet.svelte'
  import Contact from '$lib/ui/icons/Contact.svelte'

  type Contact = {
    number: string
    icon: Component
    protocol: string
  }

  type Card = {
    name: string
    title: string
    description: string
    icon: Component
    contacts: Contact[]
  }

  const cards: Card[] = [
    {
      icon: Faucet,
      name: $_('section.contact.card.0.name'),
      title: $_('section.contact.card.0.title'),
      description: $_('section.contact.card.0.description'),
      contacts: [
        { number: '095 005 99 39', icon: Viber, protocol: 'viber://chat?number=%2B' },
        { number: '068 624 86 89', icon: Phone, protocol: 'tel:+' },
      ],
    },
    {
      icon: Bulb,
      name: $_('section.contact.card.1.name'),
      title: $_('section.contact.card.1.title'),
      description: $_('section.contact.card.1.description'),
      contacts: [
        { number: '095 006 03 36', icon: Viber, protocol: 'viber://chat?number=%2B' },
        { number: '068 337 70 44', icon: Phone, protocol: 'tel:+' },
      ],
    },
  ]

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()
</script>

{#snippet card(props: Card)}
  <div class="flex flex-col items-center gap-3 rounded-2xl bg-gray-200 p-4 text-center text-gray-900 shadow-2xl sm:p-8">
    <div class="rounded-2xl bg-gray-900 p-4 text-white">
      <props.icon class="h-12 w-auto" />
    </div>

    <h3 class="text-xl font-bold lg:text-2xl">{props.title}</h3>

    <p class="mb-2 tracking-tight text-gray-700">{props.description}</p>

    <div class="mt-auto mb-2 flex w-full justify-around">
      {#each props.contacts as contact}
        <a
          href={`${contact.protocol}38${contact.number.replaceAll(' ', '')}`}
          class="inline-flex items-center gap-2 underline-offset-4 hover:underline-offset-2"
        >
          <contact.icon class="h-5 w-auto sm:h-7" />

          <span class="font-medium tracking-tight underline transition-all sm:tracking-normal">{contact.number}</span>
        </a>
      {/each}
    </div>

    <span class="text-2xl font-light uppercase">{props.name}</span>
  </div>
{/snippet}

<section id={Section.CONTACT} class={['w-full text-white', className]} {...props}>
  <div id={Section.OFFERINGS} class="bg-gray-900/95 pt-20 pb-45">
    <div class="container">
      <div class="flex flex-col items-center justify-between lg:flex-row">
        <div class="max-w-100 text-center lg:text-left">
          <h2 class="mb-4 text-4xl font-bold">
            {$_('section.contact.title')}<span class="text-primary">{'.'}</span>
          </h2>

          <p class="text-gray-300">{$_('section.contact.description')}</p>
        </div>

        <Contact class="mt-10 h-82 w-auto lg:mt-0" />
      </div>
    </div>
  </div>

  <div class="relative">
    <div class="absolute inset-0 bg-gray-900/50 backdrop-blur-xl"></div>

    <div class="container grid -translate-y-30 gap-4 sm:gap-8 md:grid-cols-2">
      {#each cards as item}
        {@render card(item)}
      {/each}
    </div>
  </div>
</section>
