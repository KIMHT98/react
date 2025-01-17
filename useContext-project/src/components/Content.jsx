import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark
          ? "black"
          : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>홍길동님, 안녕하세요!</p>
    </div>
  );
};
export default Content;
