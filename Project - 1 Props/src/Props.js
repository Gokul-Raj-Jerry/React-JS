import PropDrilling from "./PropDrilling";

const Props = (props) => {
  return (
    <>
      {/*    passing variables as props */}
      {/*    <li>{props.make}</li>
      <li>{props.model}</li>
      <li>{props.color}</li> */}

      {/*    passing array as props */}
      {/*  <li>{props.arrayNames}</li> */}

      {/*    passing object as props */}
      {/*    <li>{props.objectNames.name}</li>
      <li>{props.objectNames.age}</li>
      <li>{props.objectNames.salary}</li> */}

      {/*     passing function as props */}
      {/*   <p>The addition is {props.add(3,5)}</p> */}

      {/*     passing jsonData as props */}
      {/* <p>
       The Json data is{" "}
        {props.jsonData.map((emp) => {
          return (
            <>
              <li>The name of the employee is {emp.name}</li>
              <li>The id of the employee is {emp.id}</li>
              <li>The age of the employee is {emp.age}</li>
            </>
          );
        })}
      </p> */}
      {/*     passing image as props */}
      {/*     <img src={props.image} alt="heading"/> */}
      {/*   <PropDrilling make={props.make} model={props.model} color={props.color}/> */}
      {/*   <PropDrilling name={props.arrayNames}/> */}
      {/* <PropDrilling name={props.objectNames.name} age={props.objectNames.age} salary={props.objectNames.salary} /> */}
     {/*  <PropDrilling add={props.add}/> */}
   {/*   <PropDrilling jsonData={props.jsonData}/> */}
     <PropDrilling image={props.image}/> 
    
    
    </>
  );
};

export default Props;