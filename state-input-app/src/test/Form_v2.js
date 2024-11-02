import { useState } from "react";

export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing"); // 'typing', 'submitting', or 'success'

  if (status === "success") {
    return <h1>감사합니다!</h1>;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }
  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }
  return (
    <>
      <h2>City Quiz</h2>
      <p>내가 사는 도시는?</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button
          disabled={
            answer.length === 0 ||
            status === "submitting"
          }
        >
          제출
        </button>
        {error !== null && (
          <p className="Error">{error.message}</p>
        )}
      </form>
    </>
  );
}

function submitForm(answer) {
  //네트워크에 접속한다고 가정
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError =
        answer.toLowerCase() !== "서울";
      if (shouldError) {
        reject(
          new Error(
            "시도는 좋았으나..다시 한번 더!"
          )
        );
      } else {
        resolve();
      }
    }, 1500);
  });
}
