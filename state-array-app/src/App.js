import List_push from "./test/List_push";
import List_set from "./test/List_set";
import Delete from "./test/Delete";
import Insert from "./test/Insert";
import "./App.css";
import ShapeEditor from "./test/ShapeEditor";
import CounterList from "./test/CounterList";
import Reverse from "./test/Reverse";
import BucketList from "./test/BucketList";
function App() {
  return (
    <div className="App">
      <List_push />
      <List_set />
      <Delete />
      <ShapeEditor />
      <CounterList />
      <Insert />
      <Reverse />
      <BucketList />
    </div>
  );
}

export default App;
