import {
  useCallback,
  useEffect,
  useState,
} from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  // const someFunction = () => {
  //   console.log(`someFunc: number: ${number}`);
  // };
  const someFunction = useCallback((number) => {
    console.log(`someFunc: number: ${number}`);
    return;
  }, []);
  useEffect(() => {
    console.log("someFunc변경");
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) =>
          setNumber(e.target.value)
        }
      />
      <br />
      <button
        onClick={() => {
          someFunction(number);
        }}
      >
        Call someFunc
      </button>
    </div>
  );
}

export default App;
