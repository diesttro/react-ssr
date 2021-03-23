import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount((count) => ++count);
  const decrease = () => setCount((count) => --count);

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default App;
