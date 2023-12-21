import * as React from "react";
import "./styles.css";

function multiply(a: number, b: number): number {
  return a * b;
}

function getHeaders(): String {
  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
export default function App() {
  return (
    <div className="App">
      {getHeaders()}
      <p>{multiply("a", 3)}</p>
    </div>
  );
}
