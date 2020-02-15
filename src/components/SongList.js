import React, { useState } from "react";
import NewSongForm from "./NewSongForm";
import uuid from "uuid/v1";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Ready or Not", id: 1 },
    { title: "Here's To The One", id: 2 },
    { title: "As You Find Me", id: 3 },
    { title: "Highlands (Song of Ascent)", id: 4 }
  ]);
  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
