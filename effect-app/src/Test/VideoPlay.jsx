import {
  useState,
  useRef,
  useEffect,
} from "react";
import VideoPlayer from "./VideoPlayer";

export default function VideoPlay() {
  const [isPlaying, setIsPlaying] =
    useState(false);
  return (
    <>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? "일시 정지" : "재생"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
