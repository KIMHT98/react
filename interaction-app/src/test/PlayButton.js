import { Button2 } from "./Button2";

export default function PlayButton({
  movieName,
}) {
  function handlePlayClick() {
    alert(`Playing ${movieName}`);
  }
  return (
    <Button2 onClick={handlePlayClick}>
      Play "{movieName}"
    </Button2>
  );
}
