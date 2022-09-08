import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useMusicContext } from '../../context/MusicContext';
import './SongElement.css';

function SongElement({song}) {
  const sessionUser = useSelector(state=> state.session.user);
  const dispatch = useDispatch();
  const {audioLists, setAudioLists, setClearAudioList} = useMusicContext();

  const addToPlayer = async() => {
    setClearAudioList(true);
    const audioListTemp = [];
   
    audioListTemp.push({
        name: song.title,
        singer: song.Game.title,
        musicSrc: song.songmp3,
        cover: song.Game.img_url
    })
    await setAudioLists(audioListTemp);
  }

  return (
    <div className="single-song-div">
        <img id="song-cover" src={song.Game.img_url}></img>
        <div id="element-play-button" className = "playbkg playicon"
        onClick={addToPlayer}></div> 
        <a id="song-title">{song.title}</a>
        <a id="song-artist">{song.Game.title}</a>
    </div>
  )
}
export default SongElement
