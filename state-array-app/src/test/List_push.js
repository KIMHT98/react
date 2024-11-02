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
          artists.push({
            id: nextId++,
            name: name,
          });
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
