import { useOptic } from 'react-optics';
import React from 'react';
import onState from './store';

const onValueA = onState.focus('counters.counterA.value');

const NaiveCounter = () => {
    const [counterValue, setCounterValue] = useOptic(onValueA);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
            <button onClick={() => setCounterValue((prev) => prev + 1)}>
                increment
            </button>
            <span style={{ alignSelf: 'center' }}>{counterValue}</span>
            <button onClick={() => setCounterValue((prev) => prev - 1)}>
                decrement
            </button>
        </div>
    );
};

export default NaiveCounter;
