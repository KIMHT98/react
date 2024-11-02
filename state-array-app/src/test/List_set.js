import { useState } from "react";
let nextId = 0;

export default function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <div>
      <h1>내용 추가</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setName("");
          //   setArtists([
          //     ...artists,
          //     { id: nextId++, name: name },
          //   ]);
          setArtists(
            // 아래의 새로운 배열로 state를 변경합니다.
            [
              { id: nextId++, name: name }, // 마지막에 새 항목을 추가합니다.
              ...artists, // 기존 배열의 모든 항목에,
            ]
          );
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}
