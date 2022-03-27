import { createStore } from 'react-optics';

const onState = createStore({
    counters: {
        counterA: { value: 0, step: 1 },
        counterB: { value: 0, step: 2 }
    }
});

export default onState;
