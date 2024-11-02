const buttonClick = (msg) => {
  return alert(msg);
};
export default function Button() {
  return (
    // <button onClick={buttonClick}>
    //   I am button
    // </button>
    //     <button
    //       onClick={function () {
    //         alert("clicked!");
    //       }}
    //     >
    //       I am buton
    //     </button>
    <button
      onClick={() => buttonClick("clicked")}
    >
      I am button
    </button>
  );
}
