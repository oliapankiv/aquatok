<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { enhance } from '$app/forms'
  import { env } from '$env/dynamic/public'

  import type { HTMLAttributes } from 'svelte/elements'

  import Action from '$lib/ui/atoms/Action.svelte'
  import InputText from '$lib/ui/atoms/InputText.svelte'
  import InputTextarea from '$lib/ui/atoms/InputTextarea.svelte'

  import Avatar from '$lib/ui/icons/Avatar.svelte'
  import Shield from '$lib/ui/icons/Shield.svelte'
  import Document from '$lib/ui/icons/Document.svelte'
  import Telephone from '$lib/ui/icons/Telephone.svelte'

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()
</script>

<section class={['bg-gray-900 lg:bg-gray-900/50 lg:backdrop-blur-xl', className]} {...props}>
  <div class="container">
    <form use:enhance method="post" action={`${env.PUBLIC_API_URL}/`} class="space-y-8">
      <div
        class="relative flex flex-wrap gap-y-4 rounded-3xl border-gray-800/50 bg-gray-900 py-8 md:px-8 md:py-12 lg:gap-y-8 lg:border lg:bg-gray-900/90 lg:shadow-2xl lg:backdrop-blur-xl"
      >
        <InputText
          required
          class="w-full lg:w-1/2 lg:pr-3"
          name="name"
          label={$_('section.contactUsForm.name.label')}
          placeholder={$_('section.contactUsForm.name.placeholder')}
          icon={Avatar}
        />

        <InputText
          required
          class="w-full lg:w-1/2 lg:pl-3"
          name="phone"
          label={$_('section.contactUsForm.phoneNumber.label')}
          placeholder={$_('section.contactUsForm.phoneNumber.placeholder')}
          icon={Telephone}
        />

        <InputTextarea
          required
          rows={6}
          class="w-full"
          name="issue"
          label={$_('section.contactUsForm.issue.label')}
          placeholder={$_('section.contactUsForm.issue.placeholder')}
          icon={Document}
        />

        <Action class="mt-3 w-full lg:mt-1" type="submit">{$_('section.contactUsForm.submit')}</Action>

        <p class="flex w-full items-center justify-center space-x-2 text-center text-sm text-gray-400 md:-mt-2">
          <Shield class="inline-block h-4 w-4 text-green-500" />

          <span>{$_('section.contactUsForm.respond')}</span>
        </p>
      </div>
    </form>
  </div>
</section>
