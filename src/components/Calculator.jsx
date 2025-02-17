import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  function addition() {
    setResult(parseFloat(num1) + parseFloat(num2));
  }

  function subtraction() {
    setResult(parseFloat(num1) - parseFloat(num2));
  }

  function division() {
    setResult(parseFloat(num1) / parseFloat(num2));
  }

  function multiplication() {
    setResult(parseFloat(num1) * parseFloat(num2));
  }

  return (
    <div className="container">
      <h1>Calculator</h1>

      <div className="section">
        <div className="input-group">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter number"
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter number"
          />
        </div>

        <div className="counter-box">
        <h2>Result: {result}</h2>
        </div>

        <div className="button-group">
          <button onClick={addition} className="calculator-btn">+</button>
          <button onClick={subtraction} className="calculator-btn">-</button>
          <button onClick={division} className="calculator-btn">/</button>
          <button onClick={multiplication} className="calculator-btn">*</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
