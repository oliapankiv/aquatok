import type { Section } from '$lib/enums'

export const isInEnum = <T extends { [K in keyof T]: T[K] }>(value: unknown, object: T): value is T[keyof T] =>
  Object.values(object).includes(value)

export const scrollIntoView = (section: Section) => (event: MouseEvent) => {
  const target = document.getElementById(section)

  target && event.preventDefault()

  target?.scrollIntoView({ behavior: 'smooth' })
}
