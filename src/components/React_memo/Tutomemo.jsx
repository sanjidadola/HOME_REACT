import React, { useCallback, useMemo, useState } from 'react'
import Todos from './Todos';

const Tutomemo = () => {
    const[dola,setDola]=useState(true)
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);
    const[shoe,setShoe]=useState(false)
let num=300

    const increment = () => {
        setCount((c) => c + 1);
        console.log(count)
      };
      // let fun=useCallback(()=>{

      // },[count])
      let nume=useMemo(()=>{
        return num
      },[shoe])

    // const[obj,setObj]=useState({  
    //     num:0,
    //     name:'count'

    // })
 
    // console.log(obj.num)

  //  function increment(){

        // setObj((prev)=>{
        //     return({
        //         ...prev,
        //         num:2
        //     })
        // })
//  setObj(prev=>({...prev,num:prev.num +1}))
// setObj(prev=>({...prev,num:60}))

  //  }

    let slyle1={  
    height:'50vh',
    background:'yellow'
  
    }
    
    let sty={  
        color:"green",
        height:'20vh',
        background:(dola)?'black':'blue',
      
        }
        let stylee={  
          color:"pink",
          height:'20vh',
          background:(dola)?'red':'green',
        
          }
    

  return (
    <div style={dola?sty:stylee}>
        {/* <h1>{obj.num}</h1> */}
        <h1>{count}</h1>
        <button onClick={increment}>click</button>
        <button onClick={()=>setDola(!dola)}>mode</button>
        {/* <Todos /> */}
        <Todos todos={todos}/>
        <h1>{nume==100?200:0}</h1>
    </div>
  )
}

export default Tutomemo


