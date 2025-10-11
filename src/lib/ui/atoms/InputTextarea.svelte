<script lang="ts">
  import type { Component } from 'svelte'
  import type { HTMLTextareaAttributes } from 'svelte/elements'

  type Props = HTMLTextareaAttributes & {
    name: string
    label: string
    icon?: Component
    isValid?: boolean
    errorMessage?: string
    ref?: HTMLTextAreaElement
  }

  let {
    ref = $bindable(),
    value = $bindable(''),
    isValid = $bindable(true),
    class: className,
    name,
    label,
    errorMessage,
    icon: Icon,
    ...props
  }: Props = $props()

  const onBlur = () => {
    if (!value) return

    if (props.minlength && `${value}`.length < props.minlength) isValid = false
    if (props.maxlength && `${value}`.length > props.maxlength) isValid = false
  }
</script>

<div class={['relative space-y-4', className]}>
  <label class="block text-lg font-semibold text-white" for={name}>
    <div class="flex items-center">
      {#if Icon}
        <Icon class="mr-2 h-5 w-5 text-gray-400" />
      {/if}

      <span>{label}</span>
      <span class="ml-1 text-red-500">{props.required ? '*' : ''}</span>
    </div>
  </label>

  <textarea
    {name}
    bind:value
    bind:this={ref}
    id={name}
    class={[
      'w-full resize-none rounded-2xl border-2 border-gray-700 bg-gray-900 px-6 py-4 text-lg text-white placeholder-gray-400 transition-all duration-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:outline-none',
      { 'border-red-400': !isValid },
    ]}
    onblur={onBlur}
    onfocus={() => (isValid = true)}
    {...props}
  >
  </textarea>

  <span
    class={[
      'absolute bottom-0 left-3.5 text-sm text-red-400 opacity-0 transition-opacity duration-300',
      { 'opacity-100': errorMessage && !isValid },
    ]}
  >
    {errorMessage}
  </span>
</div>
