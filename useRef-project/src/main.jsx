import React from "react";
import ReactDOM from "react-dom/client";
import StateVsRef from "./StateVsRef.jsx";
import RefVsVar from "./RefVsVar.jsx";
import App from "./App";
import TouchDom from "./TouchDom.jsx";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <StateVsRef />
    <RefVsVar />
    <App />
  </React.StrictMode>
);
