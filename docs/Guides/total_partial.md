---
title: Total vs partial
sidebar_position: 1
---

# Total vs partial optics

Optics can either be total or partial:

-   Total is the default type for an optic, it means that the focused value exists and reading and/or updating it will always succeed.

```ts
const onName = createStore({ name: 'Vincent' }).focus('name');
// onName: Optic<string, total>

// onName.getState() = 'Vincent'
```

:::info total is the default
When the optic's type isn't specified it defaults to `total`:  
`Optic<string>` is equivalent to `Optic<string, total>`
:::

-   Partial means that the focused value might not exist.

```ts
const onUsers = createStore([
    { name: 'Vincent', contact: { phone: '999-999-999' } },
    { name: 'Gabin' }
]);
// onUsers: Optic<{ name: string; contact?: { phone: string } }[]>

const onFirstUserPhone = onUsers.focus(0).focus('contact?.phone');
// onFirstUserPhone: Optic<string, partial>

const onSecondUserPhone = onUsers.focus(1).focus('contact?.phone');
// onSecondUserPhone: Optic<string, partial>
```

Here both optics are **partial** because some users might not have a contact field with a phone number in it, as denoted by the `?.` operator used in the path.

The type of the retrieved value in both cases will be `string | undefined`. If an optic can't find the focused value it will return `undefined`:

```ts
const vincentsPhone = onFirstUserPhone.getState();
// vincentsPhone: string | undefined
// vincentsPhone = '999-999-999'

const gabinsPhone = onSecondUserPhone.getState();
// gabinsPhone: string | undefined
// gabinsPhone = undefined
```

When trying to set a new value with a partial optic that fails to focus on a value it will simply noop:

```ts
onSecondUserPhone.setState('888-888-888');
onSecondUserPhone.getState(); // undefined
```

Some methods like `.findFirst()` or `.if()` also return partial optics:

```ts
const onNumber = createStore(42);
const onEvenNumber = onNumber.if((n) => n % 2 === 0);
// onEvenNumber: Optic<number, partial>

onEvenNumber.getState(); // 42

onEvenNumber.setState((n) => n + 1);

onNumber.getState(); // 43
onEvenNumber.getState(); // undefined
```

Here `onEvenNumber` is partial because it will fail to focus on a value if the predicate returns false.

### Type relations

`total` is a subtype of `partial`, meaning we can assign a total optic to a partial one:

```ts
const onNumber = createStore(42);
const onNumberPartial: Optic<number, partial> = onNumber; // ✅ allowed
```

However the reverse is not true:

```ts
const onEvenNumber = createStore(42).if((n) => n % 2 === 0); // Optic<number, partial>
const onNumberTotal: Optic<number, total> = onEvenNumber; // ❌ not allowed
```

In the event you have a partial optic but you're really sure it will never fail to focus a value, then it's ok to use the unsafe `as` to downcast the partial optic to a total one:

```ts
const onMinNumber = createStore([9, 6, 4, 0, 3]).map().min(); // Optic<number, partial>

const onNumberTotal = onMinNumber as Optic<number, total>;
// ✅ unsafe, but ok as long as you don't empty the array
```
