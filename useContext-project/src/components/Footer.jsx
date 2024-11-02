import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { isDark, setIsDark } =
    useContext(ThemeContext);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark
          ? "black"
          : "lightgray",
      }}
    >
      <button onClick={toggleTheme}>
        테마변경
      </button>
    </footer>
  );
};
export default Footer;
