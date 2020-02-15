import React, { useState, useEffect } from "react";
import NewSongForm from "./NewSongForm";
import uuid from "uuid/v1";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Ready or Not", id: 1 },
    { title: "Here's To The One", id: 2 },
    { title: "As You Find Me", id: 3 },
    { title: "Highlands (Song of Ascent)", id: 4 }
  ]);

  const [age, setAge] = useState(20);

  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  useEffect(() => {
    console.log("useEffect hook run", songs);
  }, [songs]);

  useEffect(() => {
    console.log("useEffect hook run", age);
  }, [age]);

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

/* My Comment */
export default SongList;
