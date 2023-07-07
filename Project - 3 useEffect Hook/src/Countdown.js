import { useState, useEffect } from "react";

const Countdown = () => {
  const [value, setValue] = useState(5);
  useEffect(() => {
    const Timer = setInterval(() => {
      setValue(value - 1);
    }, 1000);
    return () => {
      clearInterval(Timer);
    };
  });

  return (
    <div>
      <h1>{value > 0 ? "Time Remaining:" : "OOOOOOPS"}</h1>
      <br />
      <p>{value <= 0 ? <p>Time's up</p> : value}</p>
    </div>
  );
};

export default Countdown;
