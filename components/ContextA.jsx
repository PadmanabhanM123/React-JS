import React,{useState,createContext} from "react";
import ContextB from "./ContextB";
export const UserContext=createContext()
function ContextA(){
    const[user,setUser]=useState("Dhanu")
    return(
        <div className="box">
            <h1>ContextA</h1>
            <h2>Hello {user}</h2>
            <UserContext.Provider value={user}>
            <ContextB user={user}/>
            </UserContext.Provider>
        </div>
    )
}
export default ContextA