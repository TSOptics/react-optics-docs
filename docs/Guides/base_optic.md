---
title: BaseOptic
---

A `BaseOptic` is an optic that is not linked to a store. You can't pass it to `useOptic()` and there's no `.getState()` or `.setState()` method.

Instead you pass the root object explicitly to the `.get()` and `.set()` methods. It allows you to use the full power of optics when you don't need a global store but just to read and/or tranform arbitrary immutable data.  
Imagine you receive a Json object from a remote server and you need to modify it while keeping the original response.

```ts
cconst fetchUser();
```
