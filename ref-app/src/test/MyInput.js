import {
  useState,
  useRef,
  forwardRef,
} from "react";

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default function Form() {
  const intputRef = useRef(null);

  function handleCLick() {
    intputRef.current.focus();
  }

  return (
    <div>
      <MyInput ref={intputRef} />
      <button onClick={handleCLick}>
        Focus input
      </button>
    </div>
  );
}
