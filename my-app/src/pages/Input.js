import React from "react";
import { useState } from "react";

function Input() {
  const [txtValue, setTxtValue] = useState("");

  const onChange = (event) => {
    setTxtValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={txtValue} onChange={onChange} />
      <br />
      <p>{txtValue}</p>

    </div>
  );
}
export default Input;
