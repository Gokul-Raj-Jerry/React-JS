import { useReducer } from "react";

const initialValue = { count: 0 };

const reducer = (state, action) => {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  }
  if (action.type === "decrement") {
    return { count: state.count - 1 };
  }
  if (action.type === "reset") {
    return { count: (state.count = 0) };
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>&nbsp;
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>&nbsp;
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};
export default Counter;