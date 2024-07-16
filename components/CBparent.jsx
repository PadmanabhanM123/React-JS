import React, { useState, useCallback } from 'react';
import Child from './CBchild';

function CBParent() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  const addItem = useCallback(() => {
    setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
  }, []);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  console.log('Parent rendered');

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment Count</button>
      <Child items={items} addItem={addItem} />
    </div>
  );
}

export default CBParent;

