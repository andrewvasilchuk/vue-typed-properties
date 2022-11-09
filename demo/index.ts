import Vue from 'vue'

import type { WithProperties } from '../src'

export default (
  Vue as WithProperties<{
    foo: 'foo'
    bar: string
    baz: boolean
  }>
).extend({
  name: 'Component',
  created() {
    this.foo = 'foo'
    this.bar = 'bar'
    this.baz = true
  },
})
