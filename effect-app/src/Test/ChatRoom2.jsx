import { useState, useEffect } from "react";
import {
  createConnection,
  sendMessage,
} from "./Chat2";

function logVisit(roomId) {
  console.log("visit " + roomId);
}
export default function ChatRoom({ roomId }) {
  const [message, setMessage] = useState("");
  const [serverUrl, setServerUrl] = useState(
    "https://localhost:1234"
  );
  useEffect(() => {
    logVisit(roomId);
  }, [roomId]);
  useEffect(() => {
    const connection = createConnection(
      serverUrl,
      roomId
    );
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);

  function handleSendClick() {
    sendMessage(message);
  }
  return (
    <>
      <label>
        Server URL:{" "}
        <input
          value={serverUrl}
          onChange={(e) =>
            setServerUrl(e.target.value)
          }
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>;
      <input
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
      />
      <button onClick={handleSendClick}>
        전송
      </button>
    </>
  );
}
