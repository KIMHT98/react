import "./App.css";
import Button from "./test/Button";
import Signup from "./test/Signup";
import Toolbar from "./test/Toolbar";

function App() {
  return (
    <div>
      <Button />
      <br />
      <Toolbar
        onPlayMovie={() => alert("Playing!")}
        onUploadImage={() => alert("Uploading!")}
      />
      <br />
      <Signup />
    </div>
  );
}

export default App;
