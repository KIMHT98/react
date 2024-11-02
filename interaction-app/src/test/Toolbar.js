import { AlertButton } from "./AlertButton";
import { Button2 } from "./Button2";
import { Button3 } from "./Button3";
import PlayButton from "./PlayButton";
import UploadButton from "./UploadButton";

export default function Toolbar({
  onPlayMovie,
  onUploadImage,
}) {
  return (
    <div>
      <AlertButton msg="Playing">
        Play Movie
      </AlertButton>
      <AlertButton msg="Uploading!">
        Upload Image
      </AlertButton>
      <br></br>
      <PlayButton movieName="기생충" />
      <UploadButton />
      <br />
      <Button2 onClick={onPlayMovie}>
        Play Movie
      </Button2>
      <Button2 onClick={onUploadImage}>
        Upload Image
      </Button2>
      <div
        className="Toolbar"
        onClick={() => {
          alert("You clicked on the toolbar!");
        }}
      >
        <button onClick={() => alert("Playing!")}>
          Play Movie
        </button>
        <button
          onClick={() => alert("Uploading!")}
        >
          Upload Image
        </button>
      </div>
      <div
        className="Toolbar"
        onClick={() => {
          alert("You clicked on the toolbar!");
        }}
      >
        <Button3
          onClick={() => alert("Playing!")}
        >
          Play Movie
        </Button3>
        <Button3
          onClick={() => alert("Uploading!")}
        >
          Upload Image
        </Button3>
      </div>
    </div>
  );
}
