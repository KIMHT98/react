import Gallery from "./test/Gallery.js";
import { Profile } from "./test/Profile.js";
import "./App.css";
import { Card } from "./test/Card.js";
import PackingList from "./test/PackingList.js";
import { PeopleList } from "./test/Peoples.js";

export default function App() {
  return (
    <div>
      <Card>
        <Gallery />
        <Profile />
        <PackingList />
      </Card>
      <PeopleList job="chemist" />
    </div>
  );
}
