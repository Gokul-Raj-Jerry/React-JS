import { useEffect, useState } from "react";

const App = () => {
  const [enteredName, setEnteredName] = useState("");

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  useEffect(() => {
/*     console.log("User typed"); */
    const debouncing = setTimeout(() => {
      console.log("Name is valid")
    }, 3000);
    return () => {
      clearTimeout(debouncing);
    };
  }, [enteredName]);

  return (
    <input
      onChange={nameInputHandler}
      value={enteredName}
      type="text"
      placeholder="Enter Name"
    />
  );
};

export default App;

//Throttling: Performing something every 'x' milliseconds while the user is typing.