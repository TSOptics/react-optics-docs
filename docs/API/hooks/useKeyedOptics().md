---
sidebar_position: 4
title: useKeyedOptics()
---

# useKeyedOptics(opticOnArray, keyExtractor): opticFromKey

```ts
function useKeyedOptics<T>(
    onArray: Optic<T[]>,
    keyExtractor: (t: T) => string
): (key: string) => Optic<T>;
```

---

When you have an optic focused on an array, use this hook to derive a new optic for each index in the array.  
The hook returns a function that gets you the right optic from its key.  
The key serves the same purpose as the [key you pass to jsx elements in lists](https://beta.reactjs.org/learn/rendering-lists#keeping-list-items-in-order-with-key), in fact you should use the same key for both the React element and the function returning the optic !

### Example:

```tsx
const Users = ({ onUsers }: { onUsers: Optic<User[]> }) => {
    const [users] = useOptic(onUsers);

    const keyExtractor = (user: User) => user.id;

    const opticFromKey = useKeyedOptics(onUsers, keyExtractor);

    return users.map((user) => {
        const key = keyExtractor(user);
        return <User key={key} onUser={opticFromKey(key)} />;
    });
};

const User = memo(({ onUser }: { onUser: Optic<User> }) => ...)
```

### Motivation

Technically to derive a new optic for every element of the array you can simply call `.focus(index)` for every index of the array:

```tsx
const optics = useMemo(
    () => users.map((_, index) => onUsers.focus(index)),
    [users, onUsers]
);

return users.map((user, index) => <User key={key} onUser={optics[index]} />);
```

However with this approach the optics will all change reference every time `users` changes, even if we just added a single user to it.
In turn every `User` element in the list will also rerender bacause their optic changed.

With the function returned by `useKeyedOptics` we are guaranteed to always get the same optic for a given key.  
And we get this for free since React already makes us get a key for each element in the list.
