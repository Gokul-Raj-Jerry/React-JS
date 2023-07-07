import { useEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const incrementHandler = () => {
    setValue(value + 1);
  };

  useEffect(() => {
    if (value === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [value]);

  const decrementHandler = () => {
    if (value === 0) {
      setValue(value);
    } else {
      setValue(value - 1);
    }
  };

  return (
    <div>
      <h1>Counter Value: {value}</h1>
      <button type="button" onClick={incrementHandler}>
        Increment button
      </button>{" "}
      &nbsp;
      <button type="button" disabled={disabled} onClick={decrementHandler}>
        Decrement button
      </button>
    </div>
  );
};

export default App;