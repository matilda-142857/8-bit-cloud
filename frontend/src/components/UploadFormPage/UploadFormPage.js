import React, { useState, useEffect } from "react";
import { createSong } from "../../store/songs";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../Navigation";
import { useHistory } from "react-router-dom";
import image from '../UploadFormPage/image.png';
import "./upload.css";

const UploadForm = ({isLoaded}) => {

  const sessionUser = useSelector((state) => state.session.user);
  const [title, setTitle] = useState("");
  const [gameId, setGameId] = useState("13");
  const [genreId, setGenreId] = useState(1);
  const [songmp3, setsongmp3] = useState(null);
 
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(()=> {
      if(!sessionUser){
          history.push('/')
      }
  },[history, sessionUser])

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setsongmp3(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const uploaderId = sessionUser.id;
    const song = {
      title,
      genreId,
      uploaderId,
      gameId,
      songmp3,
    };
    return dispatch(createSong(song))
    .then(() => history.push('/songs'))
    .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
    })
}

  return (
    <div className="mainscreen">
      <div className="uploadcard">
      {/* <Navigation isLoaded={isLoaded} /> */}
      <div className="leftside">
        <img src={image} className="image"/>
      </div>
      <div className="rightside">
        <form onSubmit={handleSubmit}>
          <h2>Add a Track</h2>
          <p>Track Title</p>
          <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="inputbox"
              required
          />
          <p>Associated Game</p>
          <select
              type="text"
              placeholder="Game"
              value={gameId}
              onChange={(e) => setGameId(e.target.value)}
              className="inputbox"
              required>
              <option value="13" >Game not Listed</option>
              <option value="1" >Final Fantasy X</option>
              <option value="2" >Elden Ring</option>
              <option value="3" >Don't Starve</option>
              <option value="4" >Heroes Of Might And Magic IV</option>
              <option value="5" >DOTA 2</option>
              <option value="6" >Kahoot</option>
              <option value="7" >Hollow Knight</option>
              <option value="8" >Fibbage 3</option>
              <option value="9" >Ori and the Blind Forest</option>
              <option value="10" >Undertale</option>
              <option value="11" >Kingdom Hearts</option>
              <option value="12" >OFF</option>
            </select>
          {/* <p>Don't see the game you're looking for? Add it here:</p>
          <input
              type="text"
              placeholder="Game"
              value={game}
              onChange={(e) => setGame(e.target.value)}
              className="inputbox"
              required
          /> */}
          <p>Genre</p>
          <select
            placeholder="Genre"
            value={genreId}
            onChange={(e) => setGenreId(e.target.value)}
            className="inputbox"
            required>
              <option value="1" >Action/Adventure</option>
              <option value="2" >Role-playing Games(RPGs)</option>
              <option value="3" >Survival/ Exploration</option>
              <option value="4" >Strategy</option>
              <option value="5" >MOBAS</option>
              <option value="6" >Party Games</option>
          </select>

            <p> </p>
            <label>Audio Link</label>
            <p> </p>
            {/* <input
            type="text"
            placeholder="Link to an audio file"
            className="inputbox"
            onChange={(e) => setsongmp3(e.target.value)}
            required
            /> */}
            <input
              type="file"
              placeholder="Audio/MP3"
              onChange={updateFile}
              className="upload__inputs"
              id="audio__input"
              required
            />
          <p></p>
          <button type="submit" className="button">Submit</button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default UploadForm