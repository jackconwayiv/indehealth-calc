import { useState } from "react";
import "./App.css";

function App() {
  const [operandA, setOperandA] = useState<string | null>(null);
  const [operandB, setOperandB] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [resultDisplay, setResultDisplay] = useState<number | null>(null);

  const updateOperand = (e: string) => {
    if (!operator) {
      if (!operandA) {
        setOperandA(e);
      } else {
        setOperandA(operandA + e);
      }
    } else {
      if (!operandB) {
        setOperandB(e);
      } else {
        setOperandB(operandB + e);
      }
    }
  };

  // const routeDictionary = {
  //   "+": "add",
  //   "-": "subtract",
  //   "/": "divide",
  //   "*": "multiply",
  // };

  // const handleCalculation = async () => {
  //   const operationRoute = operator ? routeDictionary[operator] : "add";
  // };

  return (
    <div>
      <img src="/i-logo.png" width="50px"></img>
      <div>CALCULATOR</div>
      <div>DISPLAY: [ {resultDisplay ? resultDisplay : ""} ]</div>
      <div>
        operandA: {operandA} operandB: {operandB} operator: {operator}
      </div>
      <div>
        <button onClick={() => updateOperand("7")}>7</button>
        <button onClick={() => updateOperand("8")}>8</button>
        <button onClick={() => updateOperand("9")}>9</button>
        <button onClick={() => setOperator("*")}>*</button>
      </div>
      <div>
        <button onClick={() => updateOperand("4")}>4</button>
        <button onClick={() => updateOperand("5")}>5</button>
        <button onClick={() => updateOperand("6")}>6</button>
        <button onClick={() => setOperator("-")}>-</button>
      </div>
      <div>
        <button onClick={() => updateOperand("1")}>1</button>
        <button onClick={() => updateOperand("2")}>2</button>
        <button onClick={() => updateOperand("3")}>3</button>
        <button onClick={() => setOperator("+")}>+</button>
      </div>
      <div>
        <button
          onClick={() => {
            setOperandA(null);
            setOperandB(null);
            setOperator(null);
            setResultDisplay(null);
          }}
        >
          C
        </button>
        <button onClick={() => updateOperand("0")}>0</button>
        <button onClick={() => setOperator("/")}>/</button>
        <button>=</button>
      </div>
    </div>
  );
}

export default App;
