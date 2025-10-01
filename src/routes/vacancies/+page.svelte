<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import { _ } from 'svelte-i18n'

  import Vacancy from '$lib/ui/molecules/Vacancy.svelte'

  const vacancies: ComponentProps<typeof Vacancy>[] = [
    {
      title: $_('section.vacancies.item.0.title'),
      subTitle: $_('section.vacancies.item.0.subTitle'),
      city: $_('section.vacancies.item.0.city'),
      salary: $_('section.vacancies.item.0.salary'),
      schedule: $_('section.vacancies.item.0.schedule'),
      sections: [
        {
          name: $_('section.vacancies.item.0.sections.0.name'),
          list: [
            $_('section.vacancies.item.0.sections.0.list.0'),
            $_('section.vacancies.item.0.sections.0.list.1'),
            $_('section.vacancies.item.0.sections.0.list.2'),
            $_('section.vacancies.item.0.sections.0.list.3'),
            $_('section.vacancies.item.0.sections.0.list.4'),
          ],
        },
        {
          name: $_('section.vacancies.item.0.sections.1.name'),
          list: [
            $_('section.vacancies.item.0.sections.1.list.0'),
            $_('section.vacancies.item.0.sections.1.list.1'),
            $_('section.vacancies.item.0.sections.1.list.2'),
            $_('section.vacancies.item.0.sections.1.list.3'),
            $_('section.vacancies.item.0.sections.1.list.4'),
          ],
        },
        {
          name: $_('section.vacancies.item.0.sections.2.name'),
          list: [
            $_('section.vacancies.item.0.sections.2.list.0'),
            $_('section.vacancies.item.0.sections.2.list.1'),
            $_('section.vacancies.item.0.sections.2.list.2'),
            $_('section.vacancies.item.0.sections.2.list.3'),
          ],
          highlighted: true,
        },
      ],
      contacts: [
        { number: '068 624 86 89', name: $_('generic.vasyl') },
        { number: '068 337 70 44', name: $_('generic.mykola') },
      ],
    },
  ].slice(1)
</script>

<section class="py-20">
  <div class="container">
    <div class="flex flex-col gap-8 md:gap-15">
      {#each vacancies as vacancy}
        <Vacancy class="rounded-2xl border border-white/5 bg-gray-950/80 p-10" {...vacancy} />
      {/each}

      <div class="rounded-2xl border border-white/5 bg-gray-950/80 px-10 py-20 text-center not-first:hidden">
        <h2 class="text-3xl font-bold">{$_('section.vacancies.empty.title')}</h2>
        <p class="mt-3 text-xl text-gray-500">{$_('section.vacancies.empty.description')}</p>
      </div>
    </div>
  </div>
</section>
