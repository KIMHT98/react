export default function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("제출");
        alert("제출");
      }}
    >
      <input />
      <button>제출</button>
    </form>
  );
}
