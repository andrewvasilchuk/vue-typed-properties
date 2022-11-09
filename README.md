# vue-typed-properties

> TypeScript utility type for setting Vue.js component properties

> ❗ This library is intended to be used with Vue 2.

## Installation

### Via NPM

```bash
$ npm i vue-typed-properties -D
```

### Via Yarn

```bash
$ yarn add vue-typed-properties --dev
```

### Usage

```ts
import Vue from 'vue'
// import type { WithProperties } from 'vue-typed-properties' TypeScript 3.8+
import { WithProperties } from 'vue-typed-properties'

export default (
  Vue as WithProperties<{ foo: 'foo'; bar: string; baz: boolean }>
).extend({
  name: 'Component',
  methods: {
    method() {
      this.foo = 'foo'
      this.bar = 'bar'
      this.baz = true
    },
  },
})
```

<details>
<summary>Extending extended components</summary>

```ts
// YourAwesomeExtendedComponent.vue
// ...

export default Vue.extend({
  // ...
  methods: {
    baz() {},
  },
  // ...
})
```

```ts
// ...
import YourAwesomeExtendedComponent from 'path/to/your/awewsome/extended/component'

export default (
  YourAwesomeExtendedComponent as WithProperties<
    { foo: 'foo' },
    typeof YourAwesomeExtendedComponent
  >
).extend({})
```

</details>

## Motivation

This library was introduces to prevent TypeScript from complaining when arbitrary values are assigned to `this` in `created` lifecycle hook.

**Before**

```ts
import Vue from 'vue'

export default Vue.extend({
  name: 'Component',
  created() {
    // Property 'foo' does not exist on type ...
    this.foo = 'foo'
  },
})
```

**After**

```ts
import Vue from 'vue'
import type { WithProperties } from 'vue-typed-properties'

export default (
  Vue as WithProperties<{
    foo: 'foo'
  }>
).extend({
  name: 'Component',
  created() {
    this.foo = 'foo'
  },
})
```

## Tests

```bash
npm test
```

## Build

```bash
npm run build
```

## License

[MIT](http://opensource.org/licenses/MIT)
