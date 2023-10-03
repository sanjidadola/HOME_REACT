import React, { useMemo, useState } from 'react'

const Usemem = () => {

  const [count, setCount] = useState(0);
  const[bol,setBol]=useState(true)
  let a=20
  
  
  const increment = () => {
    setCount((c) => c + 1);
  };



  // let usecalculation=useMemo(()=>{
  //    return expensiveCalculation(count)
  // },[count])


  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };
  const calculation = useMemo(() =>{
   return expensiveCalculation(count)

  },[count]);
  return (
    <div>
      <h2>My Todos</h2>
      <div>
       <h4> Count: {count}</h4>
        <button onClick={increment}>+</button>



        <h2>Expensive Calculation:
       {calculation}
        </h2>


        <button onClick={()=>setBol(!bol)}>{bol?'click me':'touch me'}</button>
        
      </div>




    </div>
  )
}

export default Usemem