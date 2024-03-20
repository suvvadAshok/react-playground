import React from "react";

export function Counter_useState() {
  const [state, setState] = React.useState<number>(0);

  return (
    <>
      <h3>{state}</h3>
      <button onClick={() => setState(state + 1)}>+</button>
      <button onClick={() => setState(0)}>reset</button>
      <button onClick={() => setState(state - 1)}>-</button>
    </>
  );
}
