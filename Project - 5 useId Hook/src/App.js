import { useId } from "react";

const App = () => {
  const id = useId();
  return (
    <>
      <h1>Hello world</h1>
      <form>
        <label htmlFor={id}></label>
        <input type="text" id={id} />
      </form>
    </>
  );
};

export default App;