<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements'

  import { _ } from 'svelte-i18n'

  type Section = {
    name: string
    list: string[]
    highlighted?: boolean
  }

  type Contact = {
    number: string
    name: string
  }

  export type Props = HTMLAttributes<HTMLElement> & {
    title: string
    subTitle: string
    city: string
    salary: string
    schedule: string
    sections: Section[]
    contacts: Contact[]
  }

  const { class: className, title, subTitle, sections, city, salary, schedule, contacts, ...props }: Props = $props()
</script>

{#snippet section({ name, list, highlighted }: Section)}
  <p class={['mb-2 text-2xl font-semibold', { 'text-primary': highlighted }]}>{name}</p>

  <ul class="mb-8 pl-6 text-lg [list-style:circle] sm:mb-12">
    {#each list as item}
      <li>{item}</li>
    {/each}
  </ul>
{/snippet}

<div class={[className]} {...props}>
  <h1 class="mb-1 text-4xl font-bold">{title}</h1>
  <p class="mb-8 text-sm text-gray-600 sm:mb-12">{subTitle}</p>

  <ul class="mb-8 list-none text-xl sm:mb-12">
    <li class="mb-2 capitalize">{$_('generic.city')}{': '}<span class="text-primary">{city}</span></li>
    <li class="mb-2"><span class="text-primary capitalize">{$_('generic.salary')}{': '}</span>{salary}</li>
    <li class="capitalize">{$_('generic.schedule')}{': '}{schedule}</li>
  </ul>

  {#each sections as item}
    {@render section(item)}
  {/each}

  <p class="flex flex-col gap-3 text-lg md:flex-row">
    <span class="text-primary capitalize">{$_('generic.callUs')}{': '}</span>

    {#each contacts as { number, name }, index}
      {@const last = index >= contacts.length - 1}

      <a class="hover:text-gray-300" href={`+38${number.replaceAll(' ', '')}`}>
        <span class="underline underline-offset-4">{number}</span>
        {' - '}{name}
        {#if !last}{','}{/if}
      </a>
    {/each}
  </p>
</div>
