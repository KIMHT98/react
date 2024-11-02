import { useState } from "react";
import "./App.css";
import { useInput } from "./useInput";
function displayMessage(message) {
  alert(message);
}
function App() {
  const [inputValue, handleChange, handleSubmit] =
    useInput("", displayMessage);
  // const [inputValue2, handleChange2] =
  //   useInput("second");

  return (
    <div>
      <h1>useInput</h1>
      <input
        value={inputValue}
        onChange={handleChange}
      />
      {/* <input
        value={inputValue2}
        onChange={handleChange2}
      /> */}
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default App;
