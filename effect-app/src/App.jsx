import "./App.css";
import ChatRoom from "./Test/ChatRoom";
import ChatRoomService from "./Test/ChatRoomService";
import ChatRoomService2 from "./Test/ChatRoomService2";
import VideoPlay from "./Test/VideoPlay";
import VideoPlay2 from "./Test/VideoPlay2";

function App() {
  return (
    <>
      <VideoPlay />
      <VideoPlay2 />
      <ChatRoom />
      <ChatRoomService />
      <ChatRoomService2 />
    </>
  );
}

export default App;
