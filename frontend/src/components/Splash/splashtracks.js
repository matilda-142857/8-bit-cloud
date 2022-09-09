import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSplashPageSongs } from "../../store/songs";
import SongElement from "../SongElement/SongElement";

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
    <div className="splashsongs-div">
      <p id="splash-tracks-title">
        Hear what’s trending in the 8BitCloud community:
      </p>
      <div className="splashsongs-container">
        {songs?.map((song) => (
            <SongElement song={song} />
        ))}
      </div>
    </div>
  );
}
