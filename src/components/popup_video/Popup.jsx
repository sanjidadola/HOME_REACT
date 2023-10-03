import React, { useEffect, useState } from 'react'
import cr from "../../assets/cr.mp4"

const Popup = () => {
    const[cry,setCrying]=useState(true)
    
   

  return (
    <>
     <div style={{background:'green',width:'700px'}}>
        <h1>i am crying wait for after 2min</h1>
        {
            cry ? <div style={{display:'flex',justifyContent:"spaceBetween",alignItems:'flex-start',gap:'1rem'}}>
            <video controls autoPlay muted loop style={{border:'9px dotted gold'}}>
              <source src={cr} type="video/mp4"/>
             </video>
             <button onClick={()=>setCrying(false)}>x</button>

            </div>:<div><h1></h1></div>
        }
        
          
        
 


       
       
    </div>
    
    
    </>
   
  )
}

export default Popup