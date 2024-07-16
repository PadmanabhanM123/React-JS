// import React from 'react'
// import useCounter from './Hook'
// function CounterComponent() {
//   // Using the useCounter custom hook
//   const [count, increment, decrement, reset]   = useCounter(0, 1)
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }
// export default CounterComponent

import React from 'react'
import useToggle from './Hook'

function ToggleComponent() {
  // Using the useToggle custom hook
  const [isToggled, toggle] = useToggle()

  return (
    <div>
      <button onClick={toggle}>
        {isToggled ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default ToggleComponent

