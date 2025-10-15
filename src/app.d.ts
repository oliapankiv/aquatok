import type { ClientCaptcha } from '$lib/types/captcha'

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  interface Window {
    grecaptcha: ClientCaptcha
  }

  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {}
