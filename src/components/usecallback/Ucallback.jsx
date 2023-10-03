import React, { useCallback, useState } from 'react'
import Todays from './Todays';

const Ucallback = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    
  
    const increment = () => {
      setCount((c) => c + 1);
    };


    // const addTodo = () => {
    //   setTodos((t) => [...t, "today"]);
    // };

   let addTodo=useCallback(()=>{
      setTodos((t) => [...t, "today"]);

    },[todos])
 
    
  


  return (
    <div>
        
        <Todays todos={todos} addTodo={addTodo}/>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>





    </div>
  )
}

export default Ucallback