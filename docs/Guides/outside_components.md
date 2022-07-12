---
title: Outside of components
---

# Usage outside of components

Every optic has a [`.getState()`](<../API/methods/getState()>) and [`.setState()`](<../API/methods/setState()>) method to read and update the store without having to call `useOptic()`.  
You can call these methods everywhere in your code and not just in React components or hooks.

`.getState()` gets you the focused value while `.setState()` is the same as the setter function returned by `useOptic()`.  
These methods execute synchronously meaning `.getState()` will always return the latest focused value.

```ts
const onNumber = createStore(42);

onNumber.getState(); // 42
onNumber.setState((n) => n * 2);
onNumber.getState(); // 84
```
