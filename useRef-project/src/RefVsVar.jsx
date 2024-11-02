import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;
  const increaseCountVar = () => {
    countVar = countVar + 1;
  };
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
  };
  return (
    <div>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      <button onClick={increaseCountRef}>
        Ref올려
      </button>
      <button onClick={increaseCountVar}>
        Var올려
      </button>
    </div>
  );
}

export default App;
