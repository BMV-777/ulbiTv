import  { useState } from "react";

const Counter = () => {
 const[count, setCounter] = useState(0)

  let increment = () => {
   setCounter(count + 1)
  }
  
   let decrement = () => {
     setCounter(count - 1);
   };
  
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
  
}


 export default Counter;