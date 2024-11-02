import {
  useState,
  useEffect,
  useEffectEvent,
} from "react";
import { createConnection } from "./Chat3";
import { showNotification } from "./Notifications.jsx";

const serverUrl = "https://localhost:1234";

export default function ChatRoom({
  roomId,
  theme,
}) {
  const onConnected = useEffectEvent(() => {
    showNotification("연결됨!", theme);
  });

  useEffect(() => {
    const connection = createConnection(
      serverUrl,
      roomId
    );
    connection.on("connected", () => {
      onConnected();
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return (
    <h1>{roomId} 방에 오신 것을 환영합니다!</h1>
  );
}
