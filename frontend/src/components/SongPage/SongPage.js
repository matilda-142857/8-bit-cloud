import React, { useEffect } from "react";
import Navigation from "../Navigation";
// import Comment from "../Comment/comment";
// import CommentForm from "./Comments/comment";
// import "./SongPage.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllSongs } from "../../store/songs";
// import { getSongComments } from "../../store/comments";
import { Redirect } from "react-router-dom";

export default function SongPage({ isLoaded }) {
  const dispatch = useDispatch();
  const songId = useParams().songId;
  console.log(songId);

  useEffect(() => {
    dispatch(getAllSongs());
    // dispatch(getSongComments(songId));
  }, [dispatch]);

  const song = useSelector((state) => state.songs[songId]);
  //   const comments = useSelector((state) => state.comments);
  //   const user = useSelector((state) => state.session.user);
  return (
    <div className="mainscreen">
    {song && (
      <div className="card">
        <Navigation isLoaded={isLoaded} />
        <h1 className="header"> {song.title} </h1>
        <div id="song-page-container">
          <div id="song-show-page">
            <div id="song-banner">
              <div id="song-show-play"></div>

              <div id="song-banner-info">
                <div id="song-banner-top">
                  <h2 id="song-banner-artist">Artist: {song.Game.title}</h2>
                  <h3 id="song-banner-created-at"></h3>
                </div>

                <div id="song-banner-bottom">
                  <h1 id="song-banner-title">Title: {song.genre}</h1>
                  {/* <div id="player-container">
                    <audio
                      className="audio-current-song"
                      controls
                      controlsList="nodownload"
                      src={song?.currentSong.audioFile}
                    ></audio>
                  </div> */}
                </div>
              </div>

              <div>
                <img id="current-song-img" src={song.Game.img_url} />
              </div>
            </div>

            {/* <div id="song-comments">
              <div id="song-comments-container">
                <CommentForm songId={songId} user={user} />
                <div id="song-comments-index"></div>
              </div>
              <div id="song-desc-and-comments">
                {comments &&
                  comments?.map((comment) => (
                    <Comment
                      comment={comment}
                      key={comment.id}
                      user={user}
                      songId={songId}
                    />
                  ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    )}
    </div>
  );
}
