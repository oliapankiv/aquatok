<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { Component } from 'svelte'
  import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements'

  import { Section } from '$lib/enums'
  import { SocialLink } from '$lib/constants'
  import { isInEnum, scrollIntoView } from '$lib/helpers'

  import Logo from '$lib/ui/icons/Logo.svelte'
  import Facebook from '$lib/ui/icons/Facebook.svelte'
  import Telegram from '$lib/ui/icons/Telegram.svelte'
  import Instagram from '$lib/ui/icons/Instagram.svelte'

  import Lined from '$lib/ui/atoms/Lined.svelte'
  import Spaced from '$lib/ui/atoms/Spaced.svelte'

  type Link = {
    href: Section | SocialLink
    label: string
    logo?: Component
  }

  type Column = {
    name: string
    links: Link[]
  }

  const siteLinks: Link[] = [
    { href: Section.OFFERINGS, label: $_('generic.offerings') },
    { href: Section.CONTACT, label: $_('generic.contact') },
  ]

  const socialLinks: Link[] = [
    { href: SocialLink.TELEGRAM, label: 'Telegram', logo: Telegram },
    { href: SocialLink.INSTAGRAM, label: 'Instagram', logo: Instagram },
    { href: SocialLink.FACEBOOK, label: 'Facebook', logo: Facebook },
  ]

  const columns: Column[] = [
    { name: $_('section.footer.sections.sitemap'), links: siteLinks },
    { name: $_('section.footer.sections.social'), links: socialLinks },
  ]

  const copyright = `© ${new Date().getFullYear()} ${$_('brand')}`

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()

  const applyLink = (url: Link['href']) => {
    const isLink = isInEnum(url, SocialLink)

    return {
      href: isLink ? url : `#${url}`,
      ...(isLink ? { target: '_blank', rel: 'noopener noreferrer' } : { onclick: scrollIntoView(url) }),
    } satisfies Partial<HTMLAnchorAttributes>
  }
</script>

{#snippet section({ name, links }: Column)}
  <div class="text-sm/6 font-medium">
    <h4 class="text-white/50">{name}</h4>

    <ul class="mt-4 -ml-1.5 text-white capitalize">
      {#each links as { href, label }}
        <li>
          <a {...applyLink(href)} class="inline-flex p-1.5 hover:text-white/75">
            {label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
{/snippet}

<footer class={['relative border border-gray-800/50 bg-gray-900/50 text-white backdrop-blur-xl', className]} {...props}>
  <div class="container">
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
        {...applyLink(Section.CONTACT)}
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
                <a {...applyLink(link.href)} class="p-2 hover:text-white/75" aria-label={link.label}>
                  <link.logo class="h-full w-auto" />
                </a>
              {/each}
            </div>
          </div>

          <div class="flex gap-x-20 sm:pt-6">
            {#each columns as item}
              {@render section(item)}
            {/each}
          </div>
        </div>
      </Lined>

      <Lined class="flex justify-center">
        <div>
          <Spaced class="px-2 py-3">
            <div class="text-sm/6 text-primary">{copyright}</div>
          </Spaced>
        </div>
      </Lined>
    </div>
  </div>
</footer>
