const PropDrilling = (props) => {
    return (
        <>
           {/*    passing variables as props */}
  {/*      <li>{props.make}</li>
      <li>{props.model}</li>
      <li>{props.color}</li>  */}

      {/*    passing array as props */}
      {/*  <li>{props.arrayNames}</li> */}

      {/*    passing object as props */}
{/*   <li>{props.name}</li>
      <li>{props.age}</li>
      <li>{props.salary}</li>  */}

      {/*     passing function as props */}
     {/*     <p>The addition is {props.add(3,5)}</p>  */}

      {/*     passing jsonData as props */}
   {/*  <p>
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
      </p>  */}
  {/*     passing image as props */}
     <img src={props.image} alt="heading"/> 
  </>
    ) 
}

export default PropDrilling;