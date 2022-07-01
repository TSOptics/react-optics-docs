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
type User = {
    name: string;
    age: number;
    verified: boolean;
};
const onName = optic<User>().focus('name');

const user: User = { name: 'Léon', age: 23, verified: false };

const name = onName.get(user);
// name = 'Léon'
```
