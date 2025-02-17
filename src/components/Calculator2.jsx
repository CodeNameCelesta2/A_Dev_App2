import React, { useState } from "react";
import InputField from './InputField';

function Calculator() {
  const [numbers, setNumbers] = useState([0, 0]); // Default with two input fields
  const [result, setResult] = useState(0);

  // Function to handle changes to the inputs
  const handleInputChange = (index, value) => {
    let updatedValue = parseFloat(value);
    if (isNaN(updatedValue) || updatedValue < 0) {
      updatedValue = 0;
    }

    const updatedNumbers = [...numbers];
    updatedNumbers[index] = updatedValue; // Update the specific number
    setNumbers(updatedNumbers);
  };

  // Function to add a new input field
  const addInputField = () => {
    setNumbers([...numbers, 0]); // Add a new zero to the list of numbers
  };

  // Function to remove an input field at a specific index
  const removeInputField = (index) => {
    const updatedNumbers = numbers.filter((_, i) => i !== index); // Remove the input field at the given index
    setNumbers(updatedNumbers);
  };

  // Calculate the result based on the selected operation
  const calculateResult = (operation) => {
    let total = numbers[0]; // Start with the first number

    for (let i = 1; i < numbers.length; i++) {
      switch (operation) {
        case "+":
          total += numbers[i];
          break;
        case "-":
          total -= numbers[i];
          break;
        case "*":
          total *= numbers[i];
          break;
        case "/":
          if (numbers[i] !== 0) {
            total /= numbers[i];
          } else {
            total = "Error: Division by zero";
            break;
          }
          break;
        default:
          break;
      }
    }
    setResult(total);
  };

  return (
    <div className="container">
      <h1>Calculator</h1>
      <div className="section">
        <div className="input-group">
          {/* Map over the numbers array to render input fields */}
          {numbers.map((num, index) => (
            <div key={index} className="input-wrapper">
              <InputField
                value={num}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />

              {/* Show the remove button only for newly added fields */}
              {index >= 2 && (
                <button
                  onClick={() => removeInputField(index)}
                  className="remove-btn"
                >
                  X
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="button-group">
          {/* Button to add a new input field */}
          <button onClick={addInputField} className="NewField-btn">
            Add Another Field
          </button>
        </div>

        <br />

        <div className="counter-box">
          <h2>Result: {result}</h2>
        </div>

        <div className="button-group">
          {/* Operation buttons */}
          <button onClick={() => calculateResult("+")} className="calculator-btn">+</button>
          <button onClick={() => calculateResult("-")} className="calculator-btn">-</button>
          <button onClick={() => calculateResult("*")} className="calculator-btn">*</button>
          <button onClick={() => calculateResult("/")} className="calculator-btn">/</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
