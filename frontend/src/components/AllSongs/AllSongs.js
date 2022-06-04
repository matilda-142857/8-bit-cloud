import React, { useEffect } from "react";
import Navigation from "../Navigation";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { getAllSongs } from "../../store/songs";
import "./AllSongs.css";

export default function AllSongs({ isLoaded }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const songs = useSelector((state) => {
    return Object.values(state.songs);
  });
  // const songs = useSelector((state) => state.songs);
  // const songsarray = Object.values(songs);

  useEffect(() => {
    dispatch(getAllSongs());
  }, [dispatch]);

  const sessionUser = useSelector((state) => state.session.user);

  // useEffect(() => {
  //   if (!sessionUser) history.push("/splash");
  //   else history.push("/splash");
  // }, [sessionUser]);

  return (
    <div className="mainscreen">
      <div className="card">
        <h1 className="header">Browse All Tracks on 8BITCLOUD</h1>
        <Navigation isLoaded={isLoaded} />
        <div className="discover-tracks-container">
          <div className="discover-songs">
            {songs.map((song) => {
              return (
                <div
                  id="top-discover"
                  className="discover-cover-container"
                  onClick={() => {
                    history.push(`/songs/${song.id}`);
                    window.scrollTo(0, 0);
                  }}
                  key={song.id}
                >
                  <img className="songimages" src={song.Game.img_url}></img>

                  <a className="songtitles">{song.title}</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
