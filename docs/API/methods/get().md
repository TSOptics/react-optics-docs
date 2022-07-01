---
title: .get()
---

# .get(Root): Value

```ts
BaseOptic<A, total, S>.get: (root: S) => A;
BaseOptic<A, partial, S>.get: (root: S) => A | undefined;
BaseOptic<A, mapped, S>.get: (root: S) => A[];
```

This method returns the value focused by a BaseOptic from a root object.  
A [`BaseOptic`](../../guide/BaseOptic) doesn't have a root, unlike optics originating from `createStore`, so we need to manually specify the root to retrieve the focused value and that's what `get` allows us to do.

### Example

```ts
const onName = optic<{
    name: string;
    age: number;
    verified: boolean;
}>().focus('name');

const name = onName.get({ name: 'Léon', age: 23, verified: false });
// name = 'Léon'
```
