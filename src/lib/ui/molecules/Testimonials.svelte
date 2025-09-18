<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { HTMLAttributes } from 'svelte/elements'

  import Lined from '$lib/ui/atoms/Lined.svelte'
  import Spaced from '$lib/ui/atoms/Spaced.svelte'

  import { avatars } from '$lib/assets/images/testimonials'

  type Testimonial = {
    name: string
    avatar: string
    service: string
    description: string
  }

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()

  const testimonials: Testimonial[] = avatars.map((avatar, index) => ({
    avatar,
    name: $_(`section.testimonials.item.${index}.name`),
    service: $_(`section.testimonials.item.${index}.service`),
    description: $_(`section.testimonials.item.${index}.description`),
  }))
</script>

{#snippet grid(columnCount: number)}
  {@const columnLength = Math.ceil(testimonials.length / columnCount)}

  {#each { length: columnCount }, index}
    <div class="space-y-5 md:space-y-8">
      {#each testimonials.slice(index * columnLength, (index + 1) * columnLength) as item}
        {@render testimonial(item)}
      {/each}
    </div>
  {/each}
{/snippet}

{#snippet testimonial({ avatar, description, name, service }: Testimonial)}
  <figure class="rounded-xl bg-linear-to-b from-gray-800 to-gray-950 p-px">
    <div class="space-y-4 rounded-[calc(0.75rem-1px)] bg-gray-950/80 p-[calc(1.5rem-1px)]">
      <div class="flex items-center gap-4">
        <img
          width="90"
          height="90"
          class="h-12 w-12 rounded-full outline-2 -outline-offset-1 outline-gray-950"
          src={avatar}
          alt={`${name}'s avatar'`}
        />

        <div class="w-full">
          <span class="font-semibold">{name}</span>

          <p class="text-gray-400">{service}</p>
        </div>
      </div>

      <blockquote>
        <p class="text-gray-400">{`“${description}”`}</p>
      </blockquote>
    </div>
  </figure>
{/snippet}

<section class={['bg-gray-900/50 py-20 backdrop-blur-xl', className]} {...props}>
  <div class="container">
    <div>
      <Lined class="flex justify-center">
        <div>
          <Spaced>
            <span class="mx-auto inline-block p-8 pb-3 text-4xl font-bold">{$_('section.testimonials.title')}</span>
          </Spaced>
        </div>
      </Lined>

      <p class="text-center text-gray-300">{$_('section.testimonials.description')}</p>
    </div>

    <div class="mt-12 grid grid-cols-1 gap-5 md:hidden xl:grid xl:grid-cols-3 xl:gap-8">
      {@render grid(3)}
    </div>

    <div class="mt-12 hidden grid-cols-2 gap-6 md:grid lg:gap-8 xl:hidden">
      {@render grid(2)}
    </div>
  </div>
</section>
