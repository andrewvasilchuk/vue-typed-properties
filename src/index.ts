import type { VueConstructor } from 'vue'

export type WithProperties<
  R extends Record<PropertyKey, unknown>,
  C extends VueConstructor = VueConstructor
> = C extends VueConstructor<infer V> ? VueConstructor<V & R> : never
