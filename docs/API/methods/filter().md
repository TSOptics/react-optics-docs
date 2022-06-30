---
title: .filter()
sidebar_position: 13
---

# .filter(predicate): Optic

```ts
Optic<A, mapped>.filter: (predicate: (a: A) => boolean) => Optic<A, mapped>;
```

Analogous to [Array.filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), this method returns a mapped optic focused on the elements of the original mapped optic that satisfy the predicate.

### Example:

```ts
const onCountries = createStore([
    { name: 'Spain', continent: 'Europe' },
    { name: 'Sénégal', continent: 'Africa' },
    { name: 'Columbia', continent: 'South America' },
    { name: 'Gabon', continent: 'Africa' }
]);
// onCountries: Optic<{ name: string; continent: string }>;

const onAfricanCountries = onCountries
    .map()
    .filter((country) => country.continent === 'Africa');
// onAfricanCountries: Optic<{ name: string; continent: string }, mapped>

const [africanCountries, setAfricanCountries] = useOptic(onAfricanCountries);
// africanCountries = [
//    { name: 'Sénégal', continent: 'Africa' },
//    { name: 'Gabon', continent: 'Africa' }
// ];
```
