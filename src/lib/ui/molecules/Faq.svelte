<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { HTMLAttributes } from 'svelte/elements'

  import Accordion from '$lib/ui/atoms/Accordion.svelte'

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()
</script>

<section class={['py-15 text-white', className]} {...props}>
  <div class="container max-w-5xl">
    <h4 class="mb-10 text-center text-4xl font-bold">
      {$_('section.faq.titleStart')}

      <span class="text-primary">{$_('section.faq.titleEnd')}</span>
    </h4>

    <div class="flex flex-col gap-4">
      {#each { length: 13 }, index}
        <Accordion header={$_(`section.faq.item.${index}.question`)} content={$_(`section.faq.item.${index}.answer`)} />
      {/each}
    </div>
  </div>
</section>
