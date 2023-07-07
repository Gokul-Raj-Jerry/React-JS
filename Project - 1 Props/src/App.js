import Parent from "./ChildToParentPropsPassing/Parent";
import Props from "./Props";
import PropsComposition from "./PropsComposition";
import Image from "./Image.jpg";

const App = () => {
  //passing data as props
  const make = "Germany";
  const model = 2020;
  const color = "blue";

  //passing array as props
  const arrayNames = ["Kanishka", "Priyanka", "Latha", "Palani", "Keerthana"];

  //passing object as props
  const objectNames = {
    name: "Kanishka",
    age: 24,
    salary: 60000,
  };
  const jsonData = [
    {
      id: 101,
      name: "Kanishka",
      age: 24,
    },
    {
      id: 102,
      name: "Priyanka",
      age: 25,
    },
    {
      id: 103,
      name: "Latha",
      age: 50,
    },
    {
      id: 104,
      name: "Palani",
      age: 53,
    },
    {
      id: 105,
      name: "Keerthana",
      age: 15,
    },
  ];

  const add = (a, b) => {
    return a + b;
  };

  return (
    <div>
      <div className="text-center"> 
      <h1>Props Topics Practised</h1>
      <ul>
        <h3>Passing Props - Parent to child</h3>
        <li>Passing Props as variables</li>
        <li>Passing Props as array</li>
        <li>Passing Props as objects</li>
        <li>Passing Props as functions</li>
        <li>Passing Props as JSON</li>
        <li>Passing Props as image</li>    </ul>
        <h3>Props Drilling</h3>
        <h3>{Props.children}</h3>
        <h3>Passing Props - Child to Parent</h3>
    </div>
      {/*    passing data as props  */}
      {/*   <Props make={make} model={model} color={color} />  */}

      {/*    passing array as props  */}
      {/*    <Props arrayNames={arrayNames} />  */}

      {/*    passing object as props  */}
      {/*  <Props objectNames={objectNames} />  */}

      {/*    passing function as props  */}
      {/*    <Props add={add} />   */}

      {/*    passing json as props  */}
      {/*   <Props jsonData={jsonData}/>  */}

      {/* passing image url as props */}
   {/*    <Props image={Image} /> */}

      {/* props,children */}
      {/*     <PropsComposition>Hai, this is Kanishka
        I am studying Fifth Standard in HAL East Primary School.
      </PropsComposition> */}

    {/*   <Parent /> */}
    </div>
  );
};

export default App;
