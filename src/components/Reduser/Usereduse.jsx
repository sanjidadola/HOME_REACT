import React, { useReducer } from 'react'



 //let initialstate=20
//addision && less
// const reducer=(state,action)=>{
//     switch(action){
//         case 'INCREMENT':
//             return state +1;

//         case 'DECREMENT':
//             return state-1;    

//         default:
//         return state;    
//     }

// }

///  multy && division

// const reducer=(state,action)=>{
//         switch(action){
//             case 'MULTY':
//                 return state *3;
    
//             case 'DEVISION':
//                 return state/3;    
    
//             default:
//             return state;    
//         }

//     }

// let initialstate={
//     color:'green',
//     background:'crimson',
//     height:'30vh',
//     border:'6px solid green'
    

// }
let state={
    color:'green',
    background:'crimson',
    height:'30vh',
    border:'6px solid green'
    

}




// const reducer=(state,action)=>{
//             switch(action){
//                 case'Background':
//                     return {...state,background:'blue'}
        
//                 case'Height':
//                     return {...state,height:'60vh'}   
        
//                 default:
//                 return state;    
//             }
    
//         }

let initialbol=true

const reducer=(state,action)=>{
   switch(action){
    case 'SHOW':
        return false;
    case 'HIDE':
        return true;
    case 'TOGGLE':
        return !state;

    default:
        return state; 

   }

}


const Usereduse = () => {
    // const[state,dispatch]=useReducer(reducer,initialstate)
    const[bol,dispatch]=useReducer(reducer,initialbol)
  return (
    <>
   
    <div style={state}>
        <h1>{bol?'iam mango':'i am apple'}</h1>
    
    {/* <button onClick={()=>dispatch('Background')}>bg</button> */}
    <button onClick={()=>dispatch('SHOW')}>show</button> 
    <button onClick={()=>dispatch('HIDE')}>Hide</button> 
    <button onClick={()=>dispatch('TOGGLE')}>Toggle</button> 
    </div>
    <br/>



    {/* <button onClick={()=>dispatch('MULTY')}>*</button>
    <button onClick={()=>dispatch('DEVISION')}>/</button> */}


{/* <button onClick={()=>dispatch('MULTY')}>*</button>
    <button onClick={()=>dispatch('DEVISION')}>/</button> */}
   
    </>
  )
}

export default Usereduse


//what is the best way to popup avideo in react is there any package


