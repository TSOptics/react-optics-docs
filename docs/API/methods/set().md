---
title: .set()
---

# .set(Value, Root): NewRoot

```ts
Optic<A, _, S>.set: (a: A | ((prev: A) => A), s: S) => S;
```

This method takes a value `a` of the focused type, a value `s` of the root type and it returns a new value of the root type where the focused value is replaced by `a`.  
To update the focused value based on its previous state you can pass an updater function (`(prev: A) => A`) instead of the next value itself.  
Just like [`get`](<get()>), this method is mostly useful for BaseOptics.

### Example:

```ts
type User = {
    name: string;
    age: number;
    verified: boolean;
};
const onName = optic<User>().focus('name');

const user: User = { name: 'Léon', age: 23, verified: false };

const updatedUser = onName.set('Aristide', user);
// updatedUser = { name: 'Aristide', age: 23, verified: false }
```
