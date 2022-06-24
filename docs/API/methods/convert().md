---
title: .convert()
sidebar_position: 4
---

# .convert(to, from): Optic

```ts
Optic<A>.convert: <B>(to: (a: A) => B, from: (b: B) => A) => Optic<B>;
```

---

This method takes a `to` function that converts the focused value to another value, and a `from` that does the reverse conversion.
It returns an optic focused on this converted representation.

### Example:

```ts
const onState = createStore({ milliseconds: 78450000 });

const onMilliseconds = onState.focus('milliseconds');
const onMinutes = onMilliseconds.convert(
    (ms) => ms / 60000,
    (minutes) => minutes * 60000
);
```

Here our `onMinutes` optic allows us to read and manipulate our time measurement in minutes even though it is represented in milliseconds in our store.

```ts
const [minutes, setMinutes] = useOptic(onMinutes);
// minutes = 1307.5

setMinutes((prev) => prev + 120);
// minutes = 1427.5
// in our store: milliseconds = 85650000
```

:::info
The conversion should be lossless, it means that this laws must be respected:

-   `from(to(a)) = a`
-   `to(from(b)) = b`

:::
