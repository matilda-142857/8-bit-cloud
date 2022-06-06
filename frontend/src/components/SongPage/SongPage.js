import React, { useState, useEffect } from "react";
import Navigation from "../Navigation";
import CommDisplay from "../Comments/CommDisplay";
import CommForm from "../Comments/CommForm";
import "./SongPage.css";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllSongs } from "../../store/songs";
import { getSongComments } from "../../store/commentss";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

export default function SongPage({ isLoaded }) {

  const dispatch = useDispatch();
  const history = useHistory();
  const songId = useParams().songId;
  const song = useSelector((state) => state.songs[songId]);
  const comments = Object.values(useSelector((state) => state.comments));
  const sessionUser = useSelector((state) => state.session.user);
  const [audioLists, setAudioLists] = useState([]);

  const [displayComments, setDisplayComments] = useState(true);

  useEffect(() => {
    dispatch(getAllSongs());
    dispatch(getSongComments(songId));
  }, [dispatch]);

  function addToPlayer(){
    const audioListtemp = [];
    // playlistsongs.forEach(song => {
    audioListtemp.push({
        name: song.title,
        singer: song.Game.title,
        musicSrc: song.songmp3
        // })
    })
    setAudioLists(audioListtemp)
  }

  let thisComments = [];
  if (comments && song && comments.length > 0) {
    thisComments = comments.filter((comment) => {
      return comment.songId === song.id;
    });
  }

  if (!sessionUser) {
    sessionUser = { id: 0 }
  }

  const handleEdit = song => {
    history.push(`/song/edit/${song.id}`)
  }

  return (
    <div className="mainscreen">
      {song && (
        <div className="card">
          <Navigation isLoaded={isLoaded} />
          <div id="song-page-container">
            <div id="song-show-page">
              <div id="song-banner">
              <div className="play-button" onClick={addToPlayer}></div>
                <h1 className="header"> {song.title} </h1>
                <div id="song-show-play"></div>

                <div id="song-banner-info">
                  <div id="song-banner-top">
                    <h1 id="song-banner-artist">From: {song.Game.title}</h1>
                    <h3 id="song-banner-created-at"></h3>
                  </div>

                  <div id="song-banner-bottom">
                    <h2 id="song-banner-title">Category: {song.Genre.type}</h2>
                    <div className='button-container'>
                    {sessionUser.id === song.uploaderId && <button onClick={() => handleEdit(song)} className='edit-button'>Edit Song</button>}
                    {sessionUser.id && <button onClick={() => setDisplayComments(!displayComments)} className='edit-button'>Review Song</button>}
                    </div>
                  </div>
                </div>

                <div>
                  <img id="current-song-img" src={song.Game.img_url} />
                </div>
              </div>

              {comments && displayComments && (
                <CommForm setDisplayComments={setDisplayComments} song={song} />
              )}
              <div id="song-comments">
                <div id="song-comments-container"></div>
                <div id="song-desc-and-comments">
                  {thisComments.length < 1 && <h2>No Comments Yet</h2>}
                  {thisComments.length >= 1 && (
                    <h2>Comments for {song.title}:</h2>
                  )}
                  {thisComments &&
                    thisComments.length > 0 &&
                    thisComments.map((comment) => (
                      <CommDisplay
                        key={comment.id}
                        song={song}
                        comment={comment}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
          <ReactJkMusicPlayer audioLists={audioLists}/>
        </div> 
      )}
    </div>
  );
}
