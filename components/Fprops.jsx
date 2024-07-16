//functions
import React from "react"
function Fun(props)
{
  return <div> 
      <h1>React Js</h1>
      <h2>Your name: {props.name} </h2>
      <h2>Your id: {props.id} </h2> 
      <h2>your age: {props.age}</h2>  
  </div>
}
export default Fun