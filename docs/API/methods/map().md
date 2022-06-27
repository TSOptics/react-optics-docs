---
title: .map()
sidebar_position: 8
---

# .map(): Optic

```ts
Optic<A extends any[]>.map: () => Optic<A[number], mapped>;
```

---

This method returns a new [mapped optic](<../../guides/mapped optics()>) from an optic focused on an array.

### Example:

```ts
const onArray = createStore([1, 2, 3, 4, 5]);

const onNumbers = onArray.map();
// onNumbers: Optic<number, mapped>

const [numbers, setNumber] = useOptic(onNumbers);
setNumber((prev) => prev * 2);
// numbers = [2, 4, 6, 8, 10]
```
