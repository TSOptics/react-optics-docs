---
sidebar_position: 3
title: useOpticReducer()
---

# useOpticReducer(optic, reducer): [value, dispatch]

```tsx
function useOpticReducer<T, TOpticType, Action>(
    onState: Optic<T, TOpticType>,
    reducer: (state: T, action: Action, onState: Optic<T, total, T>) => T
): [T, Dispatch<Action>];
```

---

This hook allows you to manage the slice of store focused on by the optic with a reducer.
As arguments it takes an optic and a reducer function while it returns the focused value as well as a dispatch function.

It works pretty much just like React `useReducer`, you use the dispatch function to send actions that the reducer will use to compute the next state.  
The only difference is that you can use a reducer that takes an optic as third argument. With it you can derive new optics to handle immutable updates inside of the reducer with the [`get`](<../methods/get()>) and [`set`](<../methods/set()>) methods.

### Example:

```tsx
import { createStore, useReducer } from 'react-optics';

const initialCounter = { value: 0, step: 1 };
const onCounter = createStore(initialCounter);

const reducer = (state, action, onState) => {
    const onValue = onState.focus('value');
    const onStep = onState.focus('step');
    switch (action.type) {
        case 'increment':
            // equivalent to: return { ...state, value: state.value + state.step };
            return onValue.set((prev) => prev + state.step, state);
        case 'decrement':
            return onValue.set((prev) => prev - state.step, state);
        case 'changeStep':
            return onStep.set(action.step, state);
        case 'reset':
            return initialCounter;
    }
};

const MyCounterComponent = () => {
    const [counter, dispatch] = useOpticReducer(onCounter, reducer);

    useEffect(() => {
        dispatch({ type: 'increment' });
        dispatch({ type: 'changeStep', step: 10 });
        dispatch({ type: 'increment' });
        dispatch({ type: 'changeStep', step: 3 });
        dispatch({ type: 'decrement' });
        // counter.value will be 8
    }, [dispatch]);

    // ...
};
```
