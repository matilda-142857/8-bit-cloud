import React, { useState } from "react";
import { postSong } from "../../store/songs";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./upload.css";

export default function UploadForm() {

  const [title, setTitle] = useState("");
  const [game, setGame] = useState("");
  const [genre, setGenre] = useState("");
  const [songmp3, setsongmp3] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const song = {
      title,
      genre,
      gameId,
      songmp3,
    };
    const newSong = dispatch(postSong(song));
    history.push(`/library`);
  };

  return (
    <div className="upload__form__c">
      <div className="up__f__c">
        <form onSubmit={handleSubmit}>
          <div id="upload__title">Upload</div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="upload_inputs"
            required
          />
          <input
            type="text"
            placeholder="Game"
            value={game}
            onChange={(e) => setGame(e.target.value)}
            className="upload_inputs"
            required
          />
          <input
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="upload_inputs"
            required
          />
          <label>Audio File</label>
          <input
            type="file"
            placeholder="Audio/MP3"
            onChange={(e) => setsongmp3(e.target.files[0])}
            className="upload__inputs"
            id="audio__input"
            required
          />
          <button className="uploadBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
