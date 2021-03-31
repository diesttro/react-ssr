import React, { useState } from 'react';
import '../styles.scss';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((count) => ++count);
  const decrement = () => setCount((count) => --count);

  return (
    <div className="container">
      <h1>Counter</h1>
      <span className="count">{count}</span>
      <div className="button-group">
        <button className="button" onClick={increment}>
          Increment
        </button>
        <button className="button button--outline" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
