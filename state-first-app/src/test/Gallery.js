import { sculptureList } from "./data";
import { useState } from "react";
export default function Gallery() {
  //   let index = 0;
  //index : state변수 | useState : setter함수
  const [index, setIndex] = useState(0);
  //showdetail을 눌렀을떼 토글되는 변수
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    // index = index + 1;
    setIndex(index + 1);
  }
  function handleMoreClick() {
    // showMore = !showMore;
    setShowMore(!showMore);
  }
  let sculpture = sculptureList[index];
  return (
    <div>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <br />
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </div>
  );
}
