---
title: .findFirst()
sidebar_position: 10
---

# .findFirst(predicate): Optic

```ts
Optic<A, mapped>.findFirst: (predicate: (a: A) => boolean) => Optic<A, partial>;
```

---

Analogous to [Array.find](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/find), this method returns an optic focused on the first element of the mapped optic that satisfies the predicate. The returned optic is partial and yields `undefined` if no value satisfies the predicate.

```ts
const onNumbers = createStore([42, 16, 98, 123, 8, 245]).map();
// onNs: Optic<number, mapped>

const onGreaterThan100 = onNumbers.findFirst((n) => n > 100);
// onGreaterThan100: Optic<number, partial>

const [greaterThan100, setGreaterThan100] = useOptic(onGreaterThan100);
// greaterThan100 = 123

setGreaterThan100(99);
// greaterThan100 = 245
```
