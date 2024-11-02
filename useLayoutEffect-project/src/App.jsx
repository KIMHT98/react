import { useState, useEffect } from "react";
import { useLayoutEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect", count);
  }, [count]);
  useLayoutEffect(() => {
    console.log("useLayoutEffect", count);
  }, [count]);
  const handleCountClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={handleCountClick}>
        Update
      </button>
    </div>
  );
}

export default App;
