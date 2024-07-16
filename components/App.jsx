// import React,{Component} from "react";
// import Student from "./components/student";
// import Counter from "./components/state";
// import Cprops from "./components/Cprops";
// import Fprops from "./components/Fprops"
// import FavoriteColor from "./components/Hook";
// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Cprops name="dfsg" age={34} id="fsfs"/>
//         <Fprops name="faerfe" age={33} id="fef"/>
//         <Student name="Dhanu" age={21} gender="male"/>
//         <Student name="Padhu" age= {22} gender="male"/>
//         <Student name="ABC" />
//         <Counter />
//         <FavoriteColor/>
              
//       </div>
//     )
//   }
// }


// import React from 'react'
// import MouseEvents from './components/MEvent'
// import Kevent from './components/Kevent'
// import Condition1 from './components/Condition1'
// import Condition2 from './components/Condition2'
// import Condition3 from './components/Condition3'

// const App = () => {
//   return (
//     <div>
//       <Condition1 isLoggedIn={true} username="Dhanu" />
//       <Condition2 isLoggedIn={false} username="Dhanush"/>
//       <Condition3 isLoggedIn={true} username="ABC"/>
//       <MouseEvents/>
//       <Kevent/>
//     </div>
//   )
// }

// export default App



import React from "react";
import ToggleComponent from "./CustomCounter";
// import Parent from "./components/Hook";
// import ContextA from "./components/ContextA";
// import Refnorender from "./components/Hook";
// import Example from "./components/Hook";
// import Reference from "./components/Hook";
// import FavoriteColor from "./components/Hook";
// import NoDependency from "./components/Hook";
// import EmptyDependencies from "./components/Hook";
// import Component from "./components/Hook";
const App=()=>{
  return(
    <div>
      {/* <Example /> */}
      {/* <FavoriteColor/>  */}
      {/* <NoDependency/>  */}
      {/* <Refnorender />  */}
      {/* <EmptyDependencies/> */}
      {/* <Component/> */}
      {/* <ContextA/> */}
      {/* <Parent/> */}
      <ToggleComponent/>
    </div>
  )
}
export default App





