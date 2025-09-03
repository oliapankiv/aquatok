<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { HTMLAttributes } from 'svelte/elements'

  import { scroll } from '$lib/composables/scroll'

  import Button from '$lib/ui/atoms/Button.svelte'

  import X from '$lib/ui/icons/X.svelte'
  import Logo from '$lib/ui/icons/Logo.svelte'
  import Burger from '$lib/ui/icons/Burger.svelte'

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()

  let toggled = $state(false)

  const scrolled = $derived($scroll > 0.01)
  const headerBlur = $derived(scrolled ? 'bg-gray-900/70 backdrop-blur-md' : '')
</script>

{#snippet link(href: string, label: string)}
  <a {href} class="text-md px-5 py-2 capitalize">
    {label}
  </a>
{/snippet}

{#snippet links()}
  {@render link('/', $_('generic.contact'))}
{/snippet}

{#snippet logo(hide?: boolean)}
  <a href="/" class="inline-flex transition {hide ? 'opacity-0' : 'opacity-100'}">
    <Logo class="h-13 w-auto text-primary sm:h-14 lg:h-15" />
  </a>
{/snippet}

<header class={['text-pri fixed z-50 w-full transition-colors duration-300', headerBlur, className]} {...props}>
  <nav
    class="relative container mx-auto flex items-center justify-between px-4 transition-[padding] sm:px-6 {scrolled
      ? 'py-4'
      : 'py-6'}"
  >
    <div class="flex w-full items-center justify-between lg:w-auto">
      {@render logo(toggled)}

      <div class="-mr-2 flex items-center lg:hidden">
        <Button
          class="transition-colors duration-300 {toggled ? 'opacity-0' : 'opacity-100'}"
          onclick={() => (toggled = !toggled)}
        >
          <Burger class="mx-[3px] my-[5px]" />
        </Button>

        <div
          class="fixed inset-0 z-10 h-screen w-full origin-top bg-gray-900/70 opacity-90 backdrop-blur-2xl transition duration-500 lg:hidden {toggled
            ? 'scale-y-100'
            : 'scale-y-0'}"
        ></div>

        <div class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-4 transition {toggled ? '' : 'scale-y-0'}">
          <div class="flex flex-col gap-2 overflow-hidden rounded-xl border border-gray-800 bg-gray-900">
            <div class="flex items-center justify-between px-5 pt-4">
              {@render logo()}

              <Button class="-mr-2" onclick={() => (toggled = !toggled)}>
                <X />
              </Button>
            </div>

            <div class="flex flex-col items-start gap-y-2 pb-4">
              {@render links()}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden lg:flex lg:items-center lg:gap-x-8">
      {@render links()}
    </div>
  </nav>
</header>
