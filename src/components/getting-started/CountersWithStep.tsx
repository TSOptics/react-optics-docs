import React from 'react';
import { Optic, useOptic } from 'react-optics';
import onState from './store';

interface Props {
    onCounter: Optic<{ value: number; step: number }>;
}

const Counter = ({ onCounter }: Props) => {
    const [value, setValue] = useOptic(onCounter.focus('value'));
    const [step, setStep] = useOptic(onCounter.focus('step'));

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
            <button onClick={() => setValue((prev) => prev + step)}>
                increment
            </button>
            <span style={{ alignSelf: 'center' }}>{value}</span>
            <button onClick={() => setValue((prev) => prev - step)}>
                decrement
            </button>
            <div style={{ marginTop: 10, width: '100%' }}>
                <span style={{ marginRight: 10 }}>step</span>
                <input
                    type="number"
                    value={step}
                    onChange={(event) => {
                        const input = event.target.valueAsNumber;
                        isNaN(input) ? setStep(0) : setStep(input);
                    }}
                    placeholder="step"
                />
            </div>
        </div>
    );
};

const onCounterA = onState.focus('counters.counterA');
const onCounterB = onState.focus('counters.counterB');

const CountersWithStep = () => {
    const [counters] = useOptic(onState.focus('counters'));

    return (
        <>
            sum: {counters.counterA.value + counters.counterB.value}
            <div style={{ display: 'flex' }}>
                <Counter onCounter={onCounterA} />
                <div style={{ width: 20 }} />
                <Counter onCounter={onCounterB} />
            </div>
        </>
    );
};

export default CountersWithStep;
