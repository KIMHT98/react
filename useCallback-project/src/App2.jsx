import React, {
  useState,
  useCallback,
  useEffect,
} from "react";
import Box from "./Box";

function App2() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);
  return (
    <div
      style={{
        backgroundColor: isDark
          ? "black"
          : "white",
      }}
    >
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <button onClick={() => setIsDark(!isDark)}>
        테마변경
      </button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}
export default App2;
