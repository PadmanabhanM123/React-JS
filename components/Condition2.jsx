import React from 'react'

function Condition2(props){
    return(props.isLoggedIn?
        <h2 className='greet'>Hii {props.username}</h2>:
        <h2 className='apology'>Sorry {props.username}</h2>
    )
}
export default Condition2