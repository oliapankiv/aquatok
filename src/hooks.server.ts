import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  if (event.request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'x-sveltekit-action, content-type',
        'Access-Control-Allow-Credentials': 'true',
      },
    })
  }

  const response = await resolve(event)

  response.headers.set('Access-Control-Allow-Origin', '*')

  return response
}
