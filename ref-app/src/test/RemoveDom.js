import { useState, useRef } from "react";

export default function Show() {
  const [show, setShow] = useState(true);
  const ref = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle with setState
      </button>
      <button
        onClick={() => {
          ref.current.remove();
        }}
      >
        Remove from th DOM
      </button>
      {show && <p ref={ref}>Hello World!</p>}
    </div>
  );
}
