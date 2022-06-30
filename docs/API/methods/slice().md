---
title: .slice()
sidebar_position: 14
---

# .slice(start?, end?): Optic

```ts
Optic<A, mapped>.slice: (start?: number, end?: number) => Optic<A, mapped>;
```

---

Analogous to [Array.slice](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), this method returns a mapped optic focused on a slice of the original mapped optic elements.  
If `start` isn't specified the slice will begin at index 0, if `end` isn't specified the slice won't stop until the end of the array.

### Example:

```ts
const onAegeanIslands = createStore([
    'Crete',
    'Lesbos',
    'Mykonos',
    'Santorini',
    'Rhodos',
    'Kalokairi'
]);
// onAegeanIslands: Optic<string[]>

const onRealAgeanIslands = onAegeanIslands.map().slice(0, 5);
// onRealAgeanIslands: Optic<string, mapped>;

const [realAgeanIslands] = useOptic(onRealAgeanIslands);
// realAgeanIslands = ['Crete', 'Lesbos', 'Mykonos', 'Santorini', 'Rhodos'];
```
