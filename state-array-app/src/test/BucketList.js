import { useState } from "react";
import ItemList from "./ItemList";

let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  {
    id: 1,
    title: "Lunar Landscape",
    seen: false,
  },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function BucketList() {
  const [myList, setMyList] =
    useState(initialList);
  const [yourList, setYourList] =
    useState(initialList);

  function handleToggleMyList(
    artworkId,
    nextSeen
  ) {
    // const myNextList = [...myList];
    // const artwork = myNextList.find(
    //   (a) => a.id === artworkId
    // );
    // artwork.seen = nextSeen;
    // setMyList(myNextList);
    setMyList(
      myList.map((artwork) => {
        if (artwork.id === artworkId) {
          // 변경된 *새* 객체를 만들어 반환합니다.
          return { ...artwork, seen: nextSeen };
        } else {
          // 변경시키지 않고 반환합니다.
          return artwork;
        }
      })
    );
  }

  function handleToggleYourList(
    artworkId,
    nextSeen
  ) {
    // const yourNextList = [...yourList];
    // const artwork = yourNextList.find(
    //   (a) => a.id === artworkId
    // );
    // artwork.seen = nextSeen;
    // setYourList(yourNextList);
    setYourList(
      yourList.map((artwork) => {
        if (artwork.id === artworkId) {
          // 변경된 *새* 객체를 만들어 반환합니다.
          return { ...artwork, seen: nextSeen };
        } else {
          // 변경시키지 않고 반환합니다.
          return artwork;
        }
      })
    );
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList}
      />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList}
      />
    </>
  );
}
