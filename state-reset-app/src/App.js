import { useState } from "react";
import Counter from "./Test/Counter";
import Fancy from "./Test/Fancy";
import "./Test/Counter.css";
import "./Test/Fancy.css";
import "./Test/Messenger.css";
import Messenger from "./Test/Messenger";
function App() {
  const [showB, setShowB] = useState(true);
  const [isFancy, setIsFancy] = useState(false);
  return (
    <div className="App">
      <Counter />
      {showB && <Counter />}
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={(e) => {
            setShowB(e.target.checked);
          }}
        />
        {showB
          ? "두번째 없애기"
          : "두번쨰 보이기"}
      </label>
      <br />
      {isFancy ? (
        // <Fancy isFancy={true} />
        <h1>Fancy!</h1>
      ) : (
        <Fancy isFancy={false} />
      )}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        />
        {isFancy ? "스타일 지우기" : "Fancy하게"}
      </label>
      <br></br>
      <Messenger />
    </div>
  );
}

export default App;
