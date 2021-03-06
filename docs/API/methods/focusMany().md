---
title: .focusMany()
sidebar_position: 3
---

# .focusMany(props, prefix?): Optics

---

This method allows you to derive optics for multiple properties of an object in a single expression.

```ts
const onState = createStore({ name: 'Leo', age: 32, married: false });

const { onName, onAge, onMarried } = onState.focusMany([
    'name',
    'age',
    'married'
]);
// onName: Optic<string>
// onAge: Optic<number>
// onMarried: Optic<boolean>
```

By default the name of each derived optics is prefixed by `on` but you can change it:

```ts
const { focusedOnName, focusedOnAge, focusedOnMarried } = onState.focusMany(
    ['name', 'age', 'married'],
    'focusedOn'
);
```
