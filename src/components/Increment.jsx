import React, { useState } from "react";

function Increment() {
  const [num, setCount] = useState(0);

  function reset() {
    setCount(0);
  }

  function add() {
    setCount(num + 1);
  }

  function minus() {
    setCount(num > 0 ? num - 1 : 0);
  }

  return (
    <div className="container">
      <h1>Counter</h1>
      <div className="counter-box">
        <h2>Number: {num}</h2>
      </div>
      <div className="button-group">
        <button onClick={add} className="increment-btn">+ Increment</button>
        <button onClick={minus} className="decrement-btn">- Decrement</button>
        <button onClick={reset} className="reset-btn">Reset</button>
      </div>
    </div>
  );
}

export default Increment;
