import "./App.css";
import Counter from "./test/Counter";
import Counter2 from "./test/Counter2";
import Counter3 from "./test/Counter3";
import Form from "./test/Form";

function App() {
  return (
    <div className="App">
      <Form />
      <br />
      <Counter />
      <Counter2 />
      <Counter3 />
    </div>
  );
}

export default App;
