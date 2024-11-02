import { useRef } from "react";

export default function Form() {
  const inputRef = useRef(null);

  function handleCLick() {
    inputRef.current.focus();
  }
  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleCLick}>
        Focus input
      </button>
    </>
  );
}
