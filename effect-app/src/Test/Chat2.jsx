export function createConnection(
  serverUrl,
  roomId
) {
  return {
    connect() {
      console.log(
        '✅ Connecting to "' +
          roomId +
          '" room at ' +
          serverUrl +
          "..."
      );
    },
    disconnect() {
      console.log(
        '❌ Disconnected from "' +
          roomId +
          '" room at ' +
          serverUrl
      );
    },
  };
}
export function sendMessage(message) {
  console.log("🔵 전송한 메시지: " + message);
}
