import React, { useState } from "react";
import { createSong } from "../../store/songs";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import image from '../UploadFormPage/image.png';
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
      game,
      songmp3,
    };
    const newSong = dispatch(createSong(song));
    history.push(`/library`);
  };

  return (
    <div class="mainscreen">
    <div class="card">
      <div class="leftside">
        <img src={image} class="image"/>
      </div>
      <div class="rightside">
        <form onSubmit={handleSubmit}>
          <h2>Add a Track</h2>
          <p>Track Title</p>
          <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              class="inputbox"
              required
          />
          <p>Associated Game</p>
          <input
              type="text"
              placeholder="Game"
              value={game}
              onChange={(e) => setGame(e.target.value)}
              class="inputbox"
              required
          />
          <p>Don't see the game you're looking for? Add it here:</p>
          <input
              type="text"
              placeholder="Game"
              value={game}
              onChange={(e) => setGame(e.target.value)}
              class="inputbox"
              required
          />
          <p>Genre</p>
          <select
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="inputbox"
            required>
              <option value="1" >Action/Adventure</option>
              <option value="2" >Role-playing Games(RPGs)</option>
              <option value="3" >Survival/ Exploration</option>
              <option value="4" >Strategy</option>
              <option value="5" >MOBAS</option>
              <option value="6" >Party Games</option>
          </select>
            <label>Audio File</label>
            <input
            type="text"
            placeholder="Audio/MP3"
            onChange={(e) => setsongmp3(e.target.value)}
            required
            />
            {/* <input
              type="file"
              placeholder="Audio/MP3"
              onChange={(e) => setsongmp3(e.target.files[0])}
              className="upload__inputs"
              id="audio__input"
              required
            /> */}
          <p></p>
          <button type="submit" class="button">Submit</button>
        </form>
      </div>
    </div>
  </div>
  );
}

