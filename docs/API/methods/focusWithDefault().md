---
title: .focusWithDefault()
sidebar_position: 2
---

# .focusWithDefault(prop, fallback): Optic

```ts
Optic<A>.focusWithDefault: <Prop extends keyof A>(
    prop: Prop,
    fallback: (parent: A) => NonNullable<A[Prop]>
) => Optic<NonNullable<A[Prop]>;
```

---

This method focuses on an object's property and yield the provided default value if the property is null or undefined.

### Example:

```ts
const onStore = createStore<{ a?: number }>({ a: undefined });
const onA = onStore.focusWithDefault('a', () => 42);

const [a, setA] = useOptic(onA);
// a === 42

setA((prev) => prev * 2);
// a === 84
```
