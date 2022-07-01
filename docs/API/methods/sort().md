---
title: .sort()
sidebar_position: 15
---

# .sort(compareFn): Optic

```ts
Optic<A, mapped>.sort: (compareFn?: (a: A, b: A) => number) => Optic<A, mapped>;
```

---

This method returns a new mapped optic focused on the elements of the original mapped optic but sorted according to a comparison function.  
The comparison function works the same way as in [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort): it is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.

### Examples:

-   Default comparison function

```ts
const onLänder = createStore([
    'Hamburg',
    'Bayern',
    'Sachsen',
    'Brandenburg',
    'Saarland'
]);

const onSortedLänder = onLänder.map().sort();
// onSortedLänder: Optic<string, mapped>

const [sortedLänder] = useOptic(onSortedLänder);
// sortedLänder = ['Bayern', 'Brandenburg', 'Hamburg', 'Saarland', 'Sachsen']
```

-   Custom comparison function

```ts
const onNumbers = createStore([90, 76, 456, 2, 39, -15, 1, -65]);
// onNumbers: Optic<number[]>

const onSortedNumbers = onNumbers.map().sort((a, b) => a - b);
// onSortedNumbers: Optic<number, mapped>

const [sortedNumbers] = useOptic(onSortedNumbers);
// sortedNumbers = [-65, -15, 1, 2, 39, 76, 90, 456]
```
