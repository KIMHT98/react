export default function Form({
  //status : submitting, error, success, empty
  status = "error",
}) {
  if (status === "success") {
    return <h1>감사합니다!</h1>;
  } else {
    return (
      <>
        <h2>City Quiz</h2>
        <p>내가 사는 도시는?</p>
        <form>
          <textarea
            disabled={status === "submitting"}
          />
          <br />
          <button
            disabled={
              status === "empty" ||
              status === "submitting"
            }
          >
            제출
          </button>
          {status === "error" && (
            <p className="Error">
              시도는 좋았으나..다시 한번더!
            </p>
          )}
        </form>
      </>
    );
  }
}
