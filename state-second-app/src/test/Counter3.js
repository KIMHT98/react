import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 10);
          console.log(number);
          setNumber((n) => n + 1);
        }}
      >
        +3
      </button>
    </>
  );
}
