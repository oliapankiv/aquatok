<script lang="ts">
  import { _ } from 'svelte-i18n'

  import { resolve } from '$app/paths'

  import type { Component } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'
  import type { RouteId } from '$app/types'

  import Logo from '$lib/ui/icons/Logo.svelte'
  import Facebook from '$lib/ui/icons/Facebook.svelte'
  import Telegram from '$lib/ui/icons/Telegram.svelte'
  import Instagram from '$lib/ui/icons/Instagram.svelte'

  import Lined from '$lib/ui/atoms/Lined.svelte'
  import Spaced from '$lib/ui/atoms/Spaced.svelte'

  type Link = {
    href: RouteId
    label: string
    logo?: Component
  }

  type Section = {
    name: string
    links: Link[]
  }

  const siteLinks: Link[] = [
    { href: '/', label: $_('generic.offerings') },
    { href: '/', label: $_('generic.contact') },
  ]

  const socialLinks: Link[] = [
    { href: '/', label: 'Telegram', logo: Telegram },
    { href: '/', label: 'Instagram', logo: Instagram },
    { href: '/', label: 'Facebook', logo: Facebook },
  ]

  const sections: Section[] = [
    { name: $_('section.footer.sections.sitemap'), links: siteLinks },
    { name: $_('section.footer.sections.social'), links: socialLinks },
  ]

  const copyright = `© ${new Date().getFullYear()} ${$_('brand')}`

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()
</script>

{#snippet section({ name, links }: Section)}
  <div class="text-sm/6 font-medium">
    <h3 class="text-white/50">{name}</h3>

    <ul class="mt-4 -ml-1.5 text-white capitalize">
      {#each links as { href, label }}
        <li>
          <a href={resolve(href)} class="inline-flex p-1.5 hover:text-white/75">
            {label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
{/snippet}

<footer class={['relative border border-gray-800/50 bg-gray-900/50 text-white backdrop-blur-xl', className]} {...props}>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="pt-20 pb-16 text-center sm:py-24">
      <hgroup>
        <p class="text-lg font-medium text-primary sm:text-2xl">
          {$_('section.footer.banner.subTitle')}
        </p>

        <p class="mx-auto mt-6 max-w-[600px] text-3xl font-semibold tracking-tight sm:text-5xl">
          {$_('section.footer.banner.title')}
        </p>
      </hgroup>

      <p class="mx-auto mt-6 max-w-xs text-sm text-gray-300 sm:text-base">
        {$_('section.footer.banner.description')}
      </p>

      <a
        href={resolve('/')}
        class="mx-auto mt-6 inline-flex cursor-pointer rounded-lg bg-primary px-6 py-3 font-medium text-gray-900 saturate-[1.4] transition-all duration-300 hover:shadow-md hover:shadow-primary/20 hover:saturate-[1.6]"
      >
        {$_('section.footer.banner.action')}
      </a>
    </div>

    <div class="pb-10">
      <Lined>
        <div class="flex flex-col justify-between gap-y-10 pb-8 sm:flex-row sm:pb-6">
          <div class="flex w-min flex-col">
            <Spaced class="pt-6">
              <Logo class="h-10 w-auto text-primary lg:h-12" />
            </Spaced>

            <div class="flex h-9 justify-around gap-2 text-white">
              {#each socialLinks as link}
                <a class="p-2 hover:text-white/75" target="_blank" rel="noopener noreferrer" href={resolve(link.href)}>
                  <link.logo class="h-full w-auto" />
                </a>
              {/each}
            </div>
          </div>

          <div class="flex gap-x-20 sm:pt-6">
            {#each sections as item}
              {@render section(item)}
            {/each}
          </div>
        </div>
      </Lined>

      <Lined class="flex justify-center">
        <div>
          <Spaced class="px-2 py-3">
            <div class="text-sm/6 text-primary/70">{copyright}</div>
          </Spaced>
        </div>
      </Lined>
    </div>
  </div>
</footer>
