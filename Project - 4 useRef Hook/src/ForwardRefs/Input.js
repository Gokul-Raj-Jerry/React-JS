import React from "react";
import { useRef } from "react";

const Input = React.forwardRef((props, ref) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const nameInputHandler = () => {
    const enteredName = nameRef.current.value;
    console.log(enteredName);
  };

  const emailInputHandler = () => {
    const enteredEmail = emailRef.current.value;
    console.log(enteredEmail);
  };
  return (
    <form>
      <input
        onChange={nameInputHandler}
        ref={nameRef}
        type="text"
        placeholder="Enter Name"
      />
      <br />
      <br />
      <input
        onChange={emailInputHandler}
        ref={emailRef}
        type="text"
        placeholder="Enter Email"
      />
      <br /> <br />
      <button type="button">Submit</button>
    </form>
  );
});

export default Input;
