import ChatRoom3 from "./ChatRoom3";
import { useState, useEffect } from "react";
export default function App() {
  const [roomId, setRoomId] = useState("general");
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        채팅방 선택:{" "}
        <select
          value={roomId}
          onChange={(e) =>
            setRoomId(e.target.value)
          }
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) =>
            setIsDark(e.target.checked)
          }
        />
        어두운 테마 사용
      </label>
      <hr />
      <ChatRoom3
        roomId={roomId}
        theme={isDark ? "dark" : "light"}
      />
    </>
  );
}
