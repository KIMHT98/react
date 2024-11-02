import { useReducer, useState } from "react";
import "./App.css";
//reducer - state를 업데이트하는 역할
//dispatch - state 업데이트를 위한 요구
//action - 요구 내용
const reducer = (state, action) => {
  console.log(
    "reducer가 일을 한다.",
    state,
    action
  );
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "exposit":
      return state - action.payload;
    default:
      return state;
  }
};
function App() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(
    reducer,
    0
  );

  return (
    <div>
      <h2>useReducer은행에 오신 것을 환영한다</h2>
      <p>잔고: {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) =>
          setNumber(parseInt(e.target.value))
        }
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({
            type: "deposit",
            payload: number,
          });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "exposit",
            payload: number,
          });
        }}
      >
        출금
      </button>
    </div>
  );
}

export default App;
