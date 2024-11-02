import { useState } from "react";

export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [msg, setMsg] = useState("Hi!");
  if (isSent) {
    return <h1>Thank you!</h1>;
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSent(true);
        setMsg(msg);
      }}
    >
      <textarea
        placeholder="Message"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button type="submit">send</button>
    </form>
  );
}
