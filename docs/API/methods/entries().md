---
title: .entries()
sidebar_position: 9
---

# .entries(): Optic

```ts
Optic<A extends Record<string, infer V>>.entries: () => Optic<
    [key: string, value: V],
    mapped
>;
```

Analogous to [Object.entries](https://developer.mozilla.org/docs/web/javascript/reference/global_objects/object/entries), this method returns a [mapped optic](<../../guides/mapped optics()>) focused on `[key, value]` pairs.  
Its purpose is to map over a record, allowing you to change both keys and values.

### Example:

```ts
const onOlympicCities = createStore<Record<string, number>>({
    paris: 2,
    london: 3,
    losAngeles: 2,
    tokyo: 2
});

const onEntries = onOlympicCities.entries();
// onEntries: Optic<[key: string, value: number], mapped>;

const [entries, setEntries] = useOptic(onEntries);
// entries = [["paris", 2], ["london", 3], ["losAngeles", 2], ["tokyo", 2]];

setEntries(([city, olympiads]) => [
    city.toUpperCase,
    city === 'paris' || city === 'losAngeles' ? olympiads + 1 : olympiads
]);
// onOlympicCities.getState() = { PARIS: 3, LONDON: 3, LOSANGELES: 3, TOKYO: 2 };
```
