---
title: .compose()
sidebar_position: 5
---

# .compose(baseOptic): Optic

```ts
Optic<B, _, A>.compose: <C>(baseOptic: BaseOptic<C, _, B>) => Optic<C, _, A>;
```

---

On an optic on B from A, the compose method takes a base optic on C from B and returns a new optic on C from A.

### Example:

```ts
type Person = {
    contact: {
        phone: string;
        address: {
            line1: string;
        };
    };
};
const onState = createStore<{ buyer: Person; seller: Person }>();

const onBuyer = onState.focus('buyer');
const onSeller = onState.focus('seller');
```

Here we want an optic to focus on the first line of the buyer's address and an other that does the same for the seller.

```ts
const onLine1 = optic<Person>().focus('contact.address.line1'); // BaseOptic

const onBuyerLine1 = onBuyer.compose(onLine1);

const onSellerLine1 = onSeller.compose(onLine1);
```
