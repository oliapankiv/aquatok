import { PRIVATE_ADAPTER } from '$env/static/private'
import { Adapter } from '$lib/enums'

import type { Actions } from './$types'

export const actions = PRIVATE_ADAPTER === Adapter.NODE && ({ default: async () => {} } satisfies Actions)
