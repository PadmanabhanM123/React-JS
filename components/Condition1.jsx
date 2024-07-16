import React from "react"
function Condition1(props) {
    if(props.isLoggedIn){
        return(
        <h2>welcome {props.username} </h2>
    )
    }
    return(<h2>pls log in {props.username} </h2>)
    
}

export default Condition1