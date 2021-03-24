import React, { useState } from 'react';
import '../styles.css';

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount((count) => ++count);
  const decrease = () => setCount((count) => --count);

  return (
    <div className="container">
      <h1>Counter</h1>
      <span className="count">{count}</span>
      <div className="button-group">
        <button className="button" onClick={increase}>
          Increase
        </button>
        <button className="button button--decrease" onClick={decrease}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default App;
