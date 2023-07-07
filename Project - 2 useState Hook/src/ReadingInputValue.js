import { useState } from "react";

const ReadingInputValue = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
    console.log(enteredName);
  };

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
    console.log(enteredEmail);
  };

  const clickHandler = () => {
    console.log("Form Submitted")
    setEnteredEmail('');
    setEnteredName('');
  };

  const submitHandler  = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input value={enteredName} onChange={nameHandler} type="text" placeholder="Name"/><br/><br/>
        <input value={enteredEmail} onChange={emailHandler} type="text" placeholder="Email"/><br/><br/>
        <button type="button" onClick={clickHandler}>Submit</button>
      </form>
      <h1>The entered Name is: {enteredName}</h1>
      <h1>The entered Email is: {enteredEmail}</h1>
    </div>
  )
};

export default ReadingInputValue;