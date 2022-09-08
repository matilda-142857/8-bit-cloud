import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import { useMusicContext } from "../../context/MusicContext";

const MusicPlayer = () => {
  const { audioLists, clearAudioList } = useMusicContext();

  return (
    <ReactJkMusicPlayer
      audioLists={audioLists}
      theme="light"
      toggleMode={false}
      mode="full"
      showDownload={false}
      defaultVolume={0.6}
      clearPriorAudioLists={clearAudioList}
      // showThemeSwitch={false}
      glassBg={true}
    />
  );
};

export default MusicPlayer;
