import React, { useEffect } from "react";
import Navigation from "../Navigation";
import { useDispatch, useSelector } from "react-redux";
import {  useHistory } from "react-router-dom";

import { getAllSongs } from "../../store/songs";
import "./AllSongs.css";

export default function AllSongs({ isLoaded }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const songs = useSelector((state) => {return Object.values(state.songs)});
  console.log (songs);

  useEffect(() => {
    dispatch(getAllSongs());
  }, [dispatch]);

  // const sessionUser = useSelector((state) => state.session.user);



  // useEffect(() => {
  //   if (sessionUser) history.push("/songs");
  //   else history.push("/splash");
  // }, [sessionUser]);

  
  return (
    <div id="top-container">
      <Navigation isLoaded={isLoaded} />
      <h1 id="">Browse All Tracks on 8BITCLOUD</h1>
      <div className="">
        <div className="">
          {songs.map((song) => {
            return (
              <div
                className=""
                onClick={() => {
                  history.push(`/songs/${song.id}`);
                  window.scrollTo(0, 0);
                }}
                key={song.id}
              >
                <a className="">{song.title}</a>
                <img className="" src={song.imgUrl}></img>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}