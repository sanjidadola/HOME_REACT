import React, { useRef, useState } from 'react'

const Tutform = () => {
    const[inputf,setInputf]=useState({
        uname:'',
        age:''
    })
   const ref= useRef()
   const jef= useRef()
    //  let inpo1=document.querySelectorAll('#inpo1')
    // let inpo1=document.querySelector('#inpo1')
    // let inpo2=document.querySelector('#inpo')

function handelinput(e){
    // const name=e.target.name
    // const value=e.target.value
    const{name,value}=e.target
    // setInputf((prev)=>({...prev,[name]:value}))
     setInputf({...inputf,[name]:value}) 
}


    function formsubmit(e){
        e.preventDefault()
        console.log(inputf)
       // setInputf('')
       alert('form submit seccessfully')
       //setInputf('')
    //    inpo1[0].value=''
    //    inpo1[1].value=''
        // inpo1[1].style.background='red'
        ref.current.value=''
        jef.current.value=''

    }

  return (
  <>
  <form action='POST' onSubmit={formsubmit}>
    <div className='inputform'>
    <label >Fname</label>
    <input type="text" name='uname' onChange={handelinput} ref={ref}/>
    </div>
    <div className='inputform'>
    <label >Fname</label>
    <input type="text" name='age'onChange={handelinput} ref={jef} />
    </div>
    <button type='submit'>submit</button>

  </form>
  </>
  )
}

export default Tutform