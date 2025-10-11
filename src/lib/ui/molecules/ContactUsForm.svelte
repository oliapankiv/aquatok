<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { enhance } from '$app/forms'
  import { env } from '$env/dynamic/public'

  import type { SubmitFunction } from '@sveltejs/kit'
  import type { HTMLAttributes } from 'svelte/elements'

  import Action from '$lib/ui/atoms/Action.svelte'
  import InputText from '$lib/ui/atoms/InputText.svelte'
  import InputPhone from '$lib/ui/atoms/InputPhone.svelte'
  import InputTextarea from '$lib/ui/atoms/InputTextarea.svelte'

  import Avatar from '$lib/ui/icons/Avatar.svelte'
  import Shield from '$lib/ui/icons/Shield.svelte'
  import Document from '$lib/ui/icons/Document.svelte'
  import Telephone from '$lib/ui/icons/Telephone.svelte'

  type Input<T> = {
    value: string
    isValid: boolean
    ref?: T
  }

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()

  let name = $state<Input<HTMLInputElement>>({ value: '', isValid: true, ref: undefined })
  let phone = $state<Input<HTMLInputElement>>({ value: '', isValid: true, ref: undefined })
  let issue = $state<Input<HTMLTextAreaElement>>({ value: '', isValid: true, ref: undefined })

  const inputs = [name, phone, issue]

  const onSubmit: SubmitFunction = ({ cancel }) => {
    const invalidInputs = inputs.filter(({ value, isValid }) => !value || !isValid).map((input) => (input.isValid = false))

    if (invalidInputs.length) return cancel()

    return () => {}
  }
</script>

<section class={['bg-gray-900 lg:bg-gray-900/50 lg:backdrop-blur-xl', className]} {...props}>
  <div class="container">
    <form use:enhance={onSubmit} method="post" action={`${env.PUBLIC_API_URL}/`} novalidate class="space-y-8">
      <div
        class="relative flex flex-wrap gap-y-4 rounded-3xl border-gray-800/50 bg-gray-900 py-8 md:px-8 md:py-12 lg:gap-y-8 lg:border lg:bg-gray-900/90 lg:shadow-2xl lg:backdrop-blur-xl"
      >
        <InputText
          required
          minlength={2}
          maxlength={32}
          class="w-full lg:w-1/2 lg:pr-3"
          name="name"
          autocomplete="name"
          label={$_('section.contactUsForm.name.label')}
          placeholder={$_('section.contactUsForm.name.placeholder')}
          errorMessage={$_('section.contactUsForm.name.error', { values: { n: 2 } })}
          icon={Avatar}
          bind:ref={name.ref}
          bind:value={name.value}
          bind:isValid={name.isValid}
        />

        <InputPhone
          required
          class="w-full lg:w-1/2 lg:pl-3"
          name="phone"
          label={$_('section.contactUsForm.phoneNumber.label')}
          placeholder={$_('section.contactUsForm.phoneNumber.placeholder')}
          icon={Telephone}
          bind:ref={phone.ref}
          bind:value={phone.value}
          bind:isValid={phone.isValid}
        />

        <InputTextarea
          required
          rows={6}
          minlength={3}
          maxlength={255}
          class="w-full"
          name="issue"
          label={$_('section.contactUsForm.issue.label')}
          placeholder={$_('section.contactUsForm.issue.placeholder')}
          errorMessage={$_('section.contactUsForm.issue.error')}
          icon={Document}
          bind:ref={issue.ref}
          bind:value={issue.value}
          bind:isValid={issue.isValid}
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
