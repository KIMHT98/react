import StopWatch from "./test/StopWatch";
import InputFocus from "./test/InputFocus";
import MyInput from "./test/MyInput";
import RemoveDom from "./test/RemoveDom";
import CatFriends from "./test/CatFriends";
import "./test/CatFriends.css";
function App() {
  return (
    <div className="App">
      <StopWatch />
      <br />
      <InputFocus />
      <br />
      <CatFriends />
      <br />
      <MyInput />
      <br></br>
      <RemoveDom />
    </div>
  );
}

export default App;
