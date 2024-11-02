import { useState } from "react";

export default function Form() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    await sendMessage(text);
    setStatus("sent");
  }
  const isSending = status === "sending";
  const isSent = status === "sent";

  if (isSent) {
    return <h1>감사합니다!</h1>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>의견을 들려주세요.</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button disabled={isSending} type="submit">
        제출
      </button>
      {isSending && <p>전송 중...</p>}
    </form>
  );
}
function sendMessage(text) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });
}
