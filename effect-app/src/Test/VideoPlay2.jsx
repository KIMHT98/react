import {
  useState,
  useRef,
  useEffect,
} from "react";
import VideoPlayer2 from "./VideoPlayer2";

export default function VideoPlay() {
  const [isPlaying, setIsPlaying] =
    useState(false);
  const [text, setText] = useState("");
  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? "일시 정지" : "재생"}
      </button>
      <VideoPlayer2
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
