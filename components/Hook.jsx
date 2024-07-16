//useState
import React, { useState } from "react";
function FavoriteColor() {
  const [color, setColor] = useState("red");
  console.log("color",color);
  return (
    <div>
        <h1>My favourite color is {color}</h1>
          <button type="button" onClick={()=>setColor("blue")} >Blue</button>
          <button type="button" onClick={()=>setColor("red")} >red</button>
          <button type="button" onClick={()=>setColor("green")} >green</button>
          <button type="button" onClick={()=>setColor("black")} >Black</button>
    </div>
  );
}
export default FavoriteColor

//useEffect
import React, { useState, useEffect } from 'react';
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count)
  }, [count]); //dependency
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Example

import React, { useEffect, useState } from 'react';
function EmptyDependencies() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Effect runs only once after initial render');
  }, []); //empty dependency
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default EmptyDependencies;

import React, { useState, useEffect } from 'react';
function Component() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Component rendered: count is ${count}`);
    return () => {
      console.log('Cleanup');
    };
  }); // No dependency
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Component;


//ref no render
import React, { useRef, useState } from "react";
function Refnorender() {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };
const handleRef = () => {
    counterRef.current += 1;
    console.log("Ref value:", counterRef.current);
  };

  console.log("I am rendering");
  return (
    <div>
      <h1>Counter is : {counter}</h1>
      <h1>Ref is:{counterRef.current}</h1>
      <button onClick={handleClick}>counter increment</button>
      <button onClick={handleRef}>Ref increment</button>
    </div>
  );
}
export default Refnorender;


import React, { useState, useCallback } from 'react';
function Parent() {
  const [count, setCount] = useState(0);
  // Memoize the increment function using useCallback
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const reset = () => {
    setCount(0);
  };

  console.log('Parent rendered');

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Parent;


import { useState } from 'react'
// Custom hook for managing a counter
function useCounter(initialValue = 0, step = 1) {
  const [count, setCount] = useState(initialValue)
  const increment = () => {
    setCount(count + step)
  }
  const decrement = () => {
    setCount(count - step)
  }
  const reset = () => {
    setCount(initialValue)
  }
  return[count,increment,decrement,reset]  
}
export default useCounter


import { useState } from 'react'
// Custom hook for boolean state toggle
function useToggle(initialValue = true) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => {
    setValue(prevValue => !prevValue)
  }
  return [value, toggle];
}

export default useToggle;

