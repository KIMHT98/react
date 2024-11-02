export function Button3({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        console.log("clicked");
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}
