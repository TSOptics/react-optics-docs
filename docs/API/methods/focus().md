---
sidebar_position: 1
title: .focus()
---

# .focus(path): Optic

---

This method is how you'll create new optics the majority of the time.  
It takes a path and returns a new optic focusing on the element at the end of the path.

```ts
const onState = createStore({ a: { b: { c: 'example' } } });
// onState: Optic<{ a: { b: { c: string }}}>;

// highlight-start
const onC = onState.focus('a.b.c');
// onC: Optic<string>
// highlight-end

const [c] = useOptic(onC);
// c === 'example'
```

Just like in plain javascript you use the `?.` operator to access a nullable property of the path:

```ts
const onState = createStore<{ a: string; b?: { c: number } }>({ a: 'value' });

const onC = onState.focus('b?.c');
// onC: Optic<number, partial>

const [c] = useOptic(onC);
// c === undefined
```

:::tip partial optic
A path that access nullable properties with `?.` yields a [**partial**](../../guide/partial) optic.
:::

You also can focus on an array's element with its index:

```ts
const onCities = createStore(['Paris', 'Berlin', 'Madrid']);

const onThirdCity = onCities.focus(2);

const [city] = useOptic(onThirdCity);
// city === 'Madrid'
```
