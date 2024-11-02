import {
  useState,
  useRef,
  useEffect,
} from "react";
export default function VideoPlayer({
  src,
  isPlaying,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log("video.play() 호출");
      ref.current.play();
    } else {
      console.log("video.pause() 호출");
      ref.current.pause();
    }
  }, [isPlaying]);
  return (
    <video ref={ref} src={src} loop playsInline />
  );
}
