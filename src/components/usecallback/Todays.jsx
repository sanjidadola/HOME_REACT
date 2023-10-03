import React, { memo } from 'react'

const Todays = ({todos,addTodo}) => {
    
    console.log("child render");
  return (
    <div>
          {todos.map((todo, index) => {
        return <p key={index}>{todo}+{index}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>

    </div>
  )
}

export default memo(Todays)