export function AlertButton({ msg, children }) {
  return (
    <button onClick={() => alert(msg)}>
      {children}
    </button>
  );
}
