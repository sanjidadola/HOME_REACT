import React from "react";
import { useState, useEffect } from "react";
import usefetching from "../CUSTOM_HOOK/data_fetching_hook/usefetching";
import use_add from "../CUSTOM_HOOK/add_funciton/use_add";

const Data = () => {

   const [bol, setBol] = useState(false);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((res1) => setData(res1));
//   }, []);
let dat=usefetching('https://fakestoreapi.com/products')
// let dat=usefetching('https://fakestoreapi.com/products/1')
setTimeout(()=>{
    setBol(true)
},3000)

let add=use_add(20)
  return (
    <>
      <h1>show data   {add}   </h1>
      {
        bol && <div>
        {dat.map((item) => {
     // console.log(item);
     const { title, image, rating } = item;

     return (
       <>
         <h1>{title}</h1>

         <img src={image} alt="nice shoe" />
       </>
     );
   })}

  </div>

}
 </>
  );
};

export default Data;





