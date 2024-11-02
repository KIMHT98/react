import { useState } from "react";
import "./App.css";
const heavyWork = () => {
  console.log("배열가져오기");
  return [];
};
function App() {
  const [time, setTime] = useState(1);
  const handleClickUpdate = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };

  const [names, setNames] = useState(() => {
    return heavyWork();
  });
  const [input, setInput] = useState("");
  const handlClickUpload = () => {
    setNames((prevState) => {
      return [...prevState, input];
    });
    setInput("");
  };

  return (
    <div>
      <span>현재 시간 : {time}시</span>
      <button onClick={handleClickUpdate}>
        Update
      </button>
      <br />
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={handlClickUpload}>
        Upload
      </button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default App;
