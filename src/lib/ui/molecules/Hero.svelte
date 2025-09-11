<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { HTMLAttributes } from 'svelte/elements'

  import man from '$lib/assets/images/hero-man.png'

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()
</script>

<section class={['relative -mt-21.5 pt-33.5 sm:-mt-26.5 md:pt-52', className]} {...props}>
  <div class="absolute inset-0 bg-gray-900/20"></div>

  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="flex flex-col items-center gap-8 sm:flex-row sm:gap-10 md:gap-12 lg:gap-20">
      <div class="z-1 flex-2 space-y-8 text-left lg:-mt-35">
        <div class="space-y-6">
          <h1 class="text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            {$_('section.hero.titleStart')}

            <span class="text-primary saturate-120">{$_('section.hero.titleEnd')}</span>
          </h1>

          <p class="text-lg leading-relaxed text-gray-300 sm:text-lg">
            {$_('section.hero.description')}
          </p>

          <a
            href="/"
            class="mx-auto inline-flex cursor-pointer rounded-lg bg-primary px-6 py-3 font-medium text-gray-900 saturate-[1.4] transition-all duration-300 hover:shadow-md hover:shadow-primary/20 hover:saturate-[1.6] md:mt-6"
          >
            {$_('section.hero.action')}
          </a>
        </div>
      </div>

      <div class="flex-1 self-center sm:self-end">
        <img class="h-100 w-auto sm:h-auto" src={man} alt="Hero section man" width="680" height="1350" />
      </div>
    </div>
  </div>
</section>
