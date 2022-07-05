---
title: .getState()
sidebar_position: 16
---

# .getState(): FocusedValue

```ts
Optic<A, total, S>.getState: () => A;
Optic<A, partial, S>.getState: () => A | undefined;
Optic<A, mapped, S>.getState: () => A[];
```

---

This method returns the value focused by the optic.  
Unlike [`useOptic`](<../hooks/useOptic()>) you can use it to retrieve the focused value outside of React components and hooks.

### Example:

```ts
const onStates = createStore([
    { name: 'Virginia', capital: 'Richmond', inhabitants: 8_535_519 },
    { name: 'Illinois', capital: 'Springfield', inhabitants: 12_812_508 }
]);

onStates.focus(1).focus('capital').getState(); // 'Springfield'

onStates.focus(0).focus('name').getState(); // 'Virginia'

onStates.map().focus('inhabitants'); // [8_535_519, 12_812_508]
```
