import React from "react";
import { Optic, Provider, useOptic } from "react-optix";
import onState from "./store";

interface Props {
  onCounterValue: Optic<number>;
}

const Counter = ({ onCounterValue }: Props) => {
  const [counterValue, setCounterValue] = useOptic(onCounterValue);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "30%" }}>
      <button onClick={() => setCounterValue((prev) => prev + 1)}>
        increment
      </button>
      <span style={{ alignSelf: "center" }}>{counterValue}</span>
      <button onClick={() => setCounterValue((prev) => prev - 1)}>
        decrement
      </button>
    </div>
  );
};

const onValueA = onState.focus("counters.counterA.value");
const onValueB = onState.focus("counters.counterB.value");

const Counters = () => {
  const [counters] = useOptic(onState.focus("counters"));

  return (
    <div>
      sum: {counters.counterA.value + counters.counterB.value}
      <div style={{ display: "flex" }}>
        <Counter onCounterValue={onValueA} />
        <div style={{ width: 20 }} />
        <Counter onCounterValue={onValueB} />
      </div>
    </div>
  );
};

const App = () => (
  <Provider>
    <Counters />
  </Provider>
);

export default App;
