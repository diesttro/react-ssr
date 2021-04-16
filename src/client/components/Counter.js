import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((count) => ++count);
  const decrement = () => setCount((count) => --count);

  return (
    <div className="container">
      <h1>Counter</h1>
      <span className="count">{count}</span>
      <div className="button-group">
        <button className="button bg-primary" onClick={increment}>
          Increment
        </button>
        <button className="button bg-secondary" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
