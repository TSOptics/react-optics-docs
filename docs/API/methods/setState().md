---
title: .setState()
sidebar_position: 17
---

# .setState(newValue)

```ts
Optic<A, _, S>.setState: (a: A | ((prev: A) => A)) => void;
```

---

This method allows you to update the value focused by the optic.  
It is equivalent to the setter function returned by [`useOptic`](<../hooks/useOptic()>) but unlike `useOptic` you can use it outside of React components and hooks.

### Example:

```ts
const onStates = createStore([
    { name: 'virginia', capital: 'Richmond', inhabitants: 8_535_519 },
    { name: 'Illinois', capital: 'Chicago', inhabitants: 12_812_508 }
]);

onStates.focus(1).focus('capital').setState('Springfield');

onStates
    .focus(0)
    .focus('name')
    .set((prev) => prevName.charAt(0).toUpperCase() + prevName.slice(1));

// onStates.getState() = [
//     { name: 'Virginia', capital: 'Richmond', inhabitants: 8_535_519 },
//     { name: 'Illinois', capital: 'Springfield', inhabitants: 12_812_508 }
// ];
```
