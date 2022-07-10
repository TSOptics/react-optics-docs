---
title: Mapped optics
sidebar_position: 2
---

Besides total and partial an optic can be of a third type: **mapped**.  
A mapped optic is focused on multiple elements. When you read from a mapped optic you get all focused elements, and when you set a new value it is applied to all elements.

```ts
const onNumbers = createStore([4, 8, 9, 3, 7]).map();
// onNumbers: Optic<number, mapped>

onNumbers.getState(); // [14, 28, 79, 34, 57]

onNumbers.setState((n) => n + 1);
onNumbers.getState(); // [15, 29, 80, 35, 58]

onNumbers.setState(0);
onNumbers.getState(); // [0, 0, 0, 0, 0]
```

You can get a mapped optic from an optic focused on an array (by calling `.map()`), or from an optic focused on a record (by calling `.entries()` or `.values()`).

```ts
const onClientValidation = createStore<Record<string, boolean>>({
    Giuseppe: false,
    GianLuigi: true,
    Alessandra: false
});

const onValidation = onClientValidation.values(); // Optic<boolean, mapped>
onValidation.getState(); // [false, true, false]

onValidation.setState(true);
onClientValidation.getState(); // { Giuseppe: true, GianLuigi: true, Alessandra: true }
```

## Derive from mapped optic

Once you have a mapped optic you can continue to focus further on the elements, which will get you a new mapped optic:

```ts
const onNationalParks = createStore([
    { name: 'Denali', squareKilometers: 19185.8 },
    { name: 'Redwood', squareKilometers: 562.5 },
    { name: 'Yellowstone', squareKilometers: 8983.2 }
]).map(); // Optic<{ name: string; squareKilometers: number }, mapped>

const onAreas = onNationalParks.focus('squareKilometers'); // Optic<number, mapped>

onAreas.getState(); // [19185.8, 562.5, 8983.2]
```

Here `onAreas` focuses on the squareKilometers property of each element focused by `onNationalParks`.

### Mapped optic specfic methods

Mapped optics also have additional methods not found on total or partial optics. They resemble those from Javascript's `Array` type like `sort`, `filter` or `slice`.

-   `filter`

```ts
const onBigNationalParks = onNationalParks.filter(
    (park) => park.squareKilometers > 10000
);
// onBigNationalParks: Optic<{ name: string; squareKilometers: number }, mapped>

onBigNationalParks.getState(); // [{ name: 'Denali', squareKilometers: 19185.8 }]
```

-   `sort`

```ts
const onNationalParksByArea = onNationalParks.sort(
    (a, b) => a.squareKilometers - b.squareKilometers
);
// onNationalParksByArea: Optic<{ name: string; squareKilometers: number }, mapped>

const nationalParksByArea = onNationalParksByArea.getState();
// nationalParksByArea = [
//     { name: 'Redwood', squareKilometers: 562.5 },
//     { name: 'Yellowstone', squareKilometers: 8983.2 },
//     { name: 'Denali', squareKilometers: 19185.8 }
// ];
```

They also have methods to focus back on a single element, giving you a partial optic.

-   `findFirst`

```ts
const onFirstBelow10000 = onNationalParks.findFirst(
    (park) => park.squareKilometers < 10000
); // Optic<{ name: string; squareKilometers: number }, partial>

onFirstBelow10000.getState(); // { name: 'Redwood', squareKilometers: 562.5 }
```

-   `min` and `max`

```ts
const maxParkByArea = onNationalParks.max((park) => park.squareKilometers);
// maxParkByArea: Optic<{ name: string; squareKilometers: number }, partial>

const minParkByArea = onNationalParks.min((park) => park.squareKilometers);
// minParkByArea: Optic<{ name: string; squareKilometers: number }, partial>

maxParkByArea.getState(); // { name: 'Denali', squareKilometers: 19185.8 }
minParkByArea.getState(); // { name: 'Redwood', squareKilometers: 562.5 }
```

## Chain mapped optics

You can keep calling `.map()` as long the focused value is an array, or you can keep calling `.values()`/`.entries()` as long as the focused value is a record.

You will get a flattened representation of your data.

```ts
const onArrayOfArray = createStore([[7, 98], [56, 4, 2], [300]]);
// onArrayOfArray: Optic<number[][]>

const onNumbers = onArrayOfArray.map().map();
// onNumbers: Optic<number, mapped>

onNumbers.getState(); // [7, 98, 56, 4, 2, 300]

onNumbers.setState(42);
onArrayOfArray.getState(); // [[42, 42], [42, 42, 42], [42]]
```
