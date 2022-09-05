import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSplashPageSongs } from "../../store/songs";

export function SplashTracks() {
  const dispatch = useDispatch();
  const history = useHistory();

  const songs = useSelector((state) => {
    return Object.values(state.songs);
  });

  useEffect(() => {
    dispatch(getSplashPageSongs());
  }, [dispatch]);

  const splashSongs = useSelector((state) => state.songs.splashSongs);
  console.log("aaaaasfggsgsg", songs)

  return (
    <div className="tr-container">
      <p id="trending-tracks-title">
        Hear what’s trending in the 8BitCloud community
      </p>
      <div className="trending-covers-container">
        {songs?.map((song) => {
          return (
            <div
              className="trending-cover-container"
            //   key={song.id}
            //   onClick={() => {
            //     dispatch(openLogin());
            //     window.scrollTo(0, 0);
            //   }}
            >
              <img className="trending-cover" src={song.Game.img_url}></img>
              <a className="trending-cover-title">{song.title}</a>
              <a className="trending-cover-artist">{song.Game.title}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
