---
sidebar_position: 1
---

```ts
function createStore<T>(initialValue: T, key?: string): Optic<T, total, T>;
```

Creates a store initialized to the value passed as argument.  
Takes a key as an optional string argument. It can be useful when debugging to distinguish this store from others.

Returns an optic focused on this value. It's the root optic from which we can create more specialized optics.

:::tip multi-store
You can create as many stores as you want, even though most applications will be fine with only one.
:::
