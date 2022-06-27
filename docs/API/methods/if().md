---
title: .if()
sidebar_position: 7
---

# .if(predicate): Optic

```ts
Optic<A>.if: (predicate: (a: A) => boolean) => Optic<A, partial | mapped>;
```

---

This method takes a predicate and return a new optic focused either on the original value or undefined if the predicate return false.

### Example:

```ts
const onNumber = createStore(42);

const onEvenNumber = onNumber.if((n) => n % 2 === 0);
// onEvenNumber: Optic<number, partial>

const [n, setN] = useOptic(onEvenNumber);
// n === 42

setN(43);
// n === undefined
```
