import React from "react";

function reducer(state: number, action: { type: string }): number {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return 0;
  }
}

export function Counter_useReducer() {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <>
      <h3>{state}</h3>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="border"
      >
        +
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
