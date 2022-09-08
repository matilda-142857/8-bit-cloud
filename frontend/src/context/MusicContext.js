import React, { useContext, useState, createContext } from "react";

const MusicContext = createContext();

export const useMusicContext = () => useContext(MusicContext);

export default function MusicProvider({ children }) {
  const [audioLists, setAudioLists] = useState([]);
  const [clearAudioList, setClearAudioList] = useState(false);

  return (
    <>
      <MusicContext.Provider
        value={{ 
            audioLists, setAudioLists, 
            clearAudioList, setClearAudioList
        }}
      >
        {children}
      </MusicContext.Provider>
    </>
  );
}
