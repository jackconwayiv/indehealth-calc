import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [operandA, setOperandA] = useState<string | null>(null);
  const [operandB, setOperandB] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [display, setDisplay] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const updateOperand = (operand: string) => {
    if (!operator) {
      if (!operandA) {
        setOperandA(operand);
        setDisplay(operand);
      } else {
        setOperandA(operandA + operand);
        setDisplay(operandA + operand);
      }
    } else {
      if (!operandB) {
        setOperandB(operand);
        setDisplay(operand);
      } else {
        setOperandB(operandB + operand);
        setDisplay(operandB + operand);
      }
    }
  };

  const updateOperator = (operator: string) => {
    //if no operandA, set operandA to 0
    //if already an operator, treat this as an equals press
    //and set return value to operandA after resetting state
    setOperator(operator);
  };

  const clearAll = () => {
    setOperandA(null);
    setOperandB(null);
    setOperator(null);
    setDisplay(null);
    setResult(null);
  };

  const handleCalculation = async () => {
    const request = { params: { operandA, operandB, operator } };
    const { data } = await axios.post("/api/calculate", request);
    clearAll();
    setResult(data);
    setDisplay(data);
  };

  return (
    <div className="calculator">
      <img
        src="/transparent-logo.png"
        width="200px"
        alt="inDeHealth logo"
      ></img>
      <div className="display-row-container">
        <span className="display-row">
          {operandA || ""} {operator || ""} {operandB || ""}
        </span>
        <span className="display-row">{display ? display : ""}</span>
      </div>
      <div className="button-row">
        <button className="operand-button" onClick={() => updateOperand("7")}>
          7
        </button>
        <button className="operand-button" onClick={() => updateOperand("8")}>
          8
        </button>
        <button className="operand-button" onClick={() => updateOperand("9")}>
          9
        </button>
        <button className="operator-button" onClick={() => updateOperator("*")}>
          *
        </button>
      </div>
      <div className="button-row">
        <button className="operand-button" onClick={() => updateOperand("4")}>
          4
        </button>
        <button className="operand-button" onClick={() => updateOperand("5")}>
          5
        </button>
        <button className="operand-button" onClick={() => updateOperand("6")}>
          6
        </button>
        <button className="operator-button" onClick={() => updateOperator("-")}>
          -
        </button>
      </div>
      <div className="button-row">
        <button className="operand-button" onClick={() => updateOperand("1")}>
          1
        </button>
        <button className="operand-button" onClick={() => updateOperand("2")}>
          2
        </button>
        <button className="operand-button" onClick={() => updateOperand("3")}>
          3
        </button>
        <button className="operator-button" onClick={() => updateOperator("+")}>
          +
        </button>
      </div>
      <div className="button-row">
        <button className="operator-button" onClick={clearAll}>
          C
        </button>
        <button className="operand-button" onClick={() => updateOperand("0")}>
          0
        </button>

        <button className="operator-button" onClick={() => updateOperator("/")}>
          /
        </button>
        <button className="operator-button" onClick={handleCalculation}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
