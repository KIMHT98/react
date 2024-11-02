import { useRef, useState } from "react";

export default function StopWatch() {
  const [startTime, setStartTime] =
    useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    //카운팅 시작
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      //10ms마다 시간 업데이트
      setNow(Date.now());
    }, 10);
  }
  function handleStop() {
    clearInterval(intervalRef.current);
  }
  let secondPassed = 0;
  if (startTime != null && now != null) {
    secondPassed = (now - startTime) / 1000;
  }
  return (
    <>
      <h1>
        Time passed : {secondPassed.toFixed(3)}
      </h1>
      <button onClick={handleStart}>시작</button>
      <button onClick={handleStop}>중지</button>
    </>
  );
}
