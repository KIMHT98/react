import React, { useRef } from "react";
const TourhDom = () => {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);
  const handleToucjLogin = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="username"
      />
      <button onClick={handleToucjLogin}>
        로그인
      </button>
    </div>
  );
};
