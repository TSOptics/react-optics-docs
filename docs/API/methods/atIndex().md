---
title: .atIndex()
sidebar_position: 12
---

# .atIndex(index): Optic

```ts
Optic<A, mapped>.atIndex: (index: number) => Optic<A, partial>;
```

---

This method returns an optic focused on the element at the provided index in the mapped optic.

```ts
const onNumberArrays = createStore([
    [78, 90, 4, 7],
    [10, 7],
    [9],
    [789, 42, 90]
]);

const onNumbers = onNumberArrays.map().map();
// onNumbers: Optic<number, mapped>
// onNumbers.getState() = [78, 90, 4, 7, 10, 7, 9, 789, 42, 90]

const on5th = onNumbers.atIndex(4);
// on5th: Optic<number, partial>;
// on5th.getState() = 10
```
