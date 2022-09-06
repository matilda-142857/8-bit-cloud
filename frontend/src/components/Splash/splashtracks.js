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

  return (
    <div className="splashsongs-container">
      <p id="trending-tracks-title">
        Hear what’s trending in the 8BitCloud community
      </p>
      <div className="splashsongs-container">
        {songs?.map((song) => {
          return (
            <div
              className="single-splashsong-div"
            //   key={song.id}
            //   onClick={() => {
            //     dispatch(openLogin());
            //     window.scrollTo(0, 0);
            //   }}
            >
              <img className="splashsong-cover" src={song.Game.img_url}></img>
              <a className="splashsong-title">{song.title}</a>
              <a className="splashsong-artist">{song.Game.title}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
