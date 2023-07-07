import { createContext } from "react";
import { useContext } from "react";

const NameContext = createContext();

const App = () => {
  return (
    <>
      <NameContext.Provider value="Kanishka">
        <ProviderAndConsumer />
      </NameContext.Provider>
    </>
  );
};

const ProviderAndConsumer = () => {
  const name = useContext(NameContext);
  console.log(name);
  return (
    <>
   {/*    <NameContext.Consumer>
        <h1>Using Provider and Consumer</h1>
        {(value) => <h3>My name is {value}</h3>} // Using CONSUMER
      </NameContext.Consumer> */} 
      <h1>Using UseContext Hook</h1>
      <h2>The name is {name}</h2> {/* Using USECONTEXT HOOK */}
    </>
  );
};

export default App;
