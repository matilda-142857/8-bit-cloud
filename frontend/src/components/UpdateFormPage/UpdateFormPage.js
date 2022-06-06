import React, { useEffect, useState} from "react";
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { updateSong, deleteSong } from "../../store/songs";
import Navigation from "../Navigation";
import image from '../UpdateFormPage/image.jpg';
import "./update.css";

const UpdateForm = ({isLoaded}) => {

  const allSongs = useSelector(state => state.songs)
  const editSongId = useParams().songId
  const editSong = allSongs[editSongId] || {}
  const sessionUser = useSelector((state) => state.session.user);

  const [title, setTitle] = useState(editSong.title || '');
  const [gameId, setGameId] = useState(editSong.gameId || '');
  const [genreId, setGenreId] = useState(editSong.genreId || '');
  const [songmp3, setsongmp3] = useState(editSong.songmp3 || '');
  const [playlistId, setplaylistId] = useState(editSong.playlistId || '');
 
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(()=> {
    if(!sessionUser || sessionUser.id !== editSong.uploaderId){
      history.push('/')
    }
  },[editSong.uploaderId, history, sessionUser])

  const handleSubmit = (e) => {
    e.preventDefault();

    const uploaderId = sessionUser.id;
    const editedSong = {
      id: editSong.id,
      title,
      gameId,
      uploaderId,
      genreId,
      songmp3,
      playlistId
    };

    dispatch(updateSong(editedSong))
    history.push('/songs')
  }

  const handleDelete = (e, song) => {
    e.preventDefault()
    dispatch(deleteSong(editSong))
    history.push('/songs')
  }

  return (
    <div className="mainscreen">
      <div className="uploadcard">
      <Navigation isLoaded={isLoaded} />
      <div className="leftside">
        <img src={image} className="image"/>
      </div>
      <div className="rightside">
        <form onSubmit={handleSubmit}>
        {errors.length > 0 &&
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
                }
          <h2>Edit this Track</h2>
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
            <input
            type="text"
            placeholder="Link to an audio file"
            className="inputbox"
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
          <button type="submit" className="button">Submit</button>
          <button type="submit" className="button" onClick={(e) => handleDelete(e, editSong)}>Delete Song</button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default UpdateForm