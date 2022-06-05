import React, { useState, useEffect } from "react";
import Navigation from "../Navigation";
import CommDisplay from "../Comments/CommDisplay";
// import CommEdit from "../Comments/CommEdit";
import CommForm from "../Comments/CommForm";
import "./SongPage.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllSongs } from "../../store/songs";
import { getSongComments } from "../../store/commentss";
import { Redirect } from "react-router-dom";

export default function SongPage({ isLoaded }) {
  const dispatch = useDispatch();
  const {songId} = useParams();
  const [displayComments, setDisplayComments] = useState(false);

  useEffect(() => {
    dispatch(getAllSongs());
    dispatch(getSongComments(songId));
  }, [dispatch]);

  const song = useSelector((state) => state.songs[songId]);
  const comments = Object.values(useSelector((state) => state.comments));
  const user = useSelector((state) => state.session.user);

  let thisComments = [];
  if (comments && song && comments.length > 0) {
    thisComments = comments.filter((comment) => {
      return comment.songId === song.id;
    });
  }

  return (
    <div className="mainscreen">
      {song && (
        <div className="card">
          <Navigation isLoaded={isLoaded} />
          <div id="song-page-container">
            <div id="song-show-page">
              <div id="song-banner">
                <h1 className="header"> {song.title} </h1>
                <div id="song-show-play"></div>

                <div id="song-banner-info">
                  <div id="song-banner-top">
                    <h1 id="song-banner-artist">From: {song.Game.title}</h1>
                    <h3 id="song-banner-created-at"></h3>
                  </div>

                  <div id="song-banner-bottom">
                    <h2 id="song-banner-title">Category: {song.Genre.type}</h2>
                    <div id="player-container">
                      {/* <audio
                      className="audio-current-song"
                      src={song?.currentSong.songmp3}
                    ></audio> */}
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
        </div>
      )}
    </div>
  );
}
