---
title: .values()
sidebar_position: 10
---

# .values(): Optic

```ts
Optic<A extends Record<string, infer Value>>.values: () => Optic<Value, mapped>;
```

---

Analogous to [Object.values](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/values), this method returns a [mapped optic](<../../guides/mapped optics()>) focused on the object's values.

### Example:

```ts
const onCapitals = createStore<Record<string, string>>({
    France: 'paris',
    Italy: 'roma',
    Australia: 'canberra'
});

const onValues = onCapitals.values();
// onValues: Optic<string, mapped>

const [values, setValue] = useOptic(onValues);
// values = ['paris', 'roma', 'canberra'];

setValue((prev) => prev[0].toUpperCase() + s.slice[1]);
// values = ['Paris', 'Roma', 'Canberra'];
// onCapitals.getState() = { France: 'Paris', Italy: 'Roma', Australia: 'Canberra' };
```
