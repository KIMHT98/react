import { useState, useEffect } from "react";
import { createConnection } from "./Chat";

export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, []);
  return <h1>채팅룸</h1>;
}
