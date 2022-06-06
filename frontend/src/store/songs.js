import { csrfFetch } from './csrf';

const GET_ALL_SONGS = "song/GET";
const ADD_SONG = "song/ADD";
const DELETE_SONG= "song/DELETE"

const actionAllSongs = songs => {
  return {
      type: GET_ALL_SONGS,
      songs
  }
}

const actionAddSong = song => {
  return {
      type: ADD_SONG,
      song
  };
};

const actionDeleteSong = songId => {
  return {
      type: DELETE_SONG,
      songId
  }
}

export const getAllSongs = () => async (dispatch) => {
  const response = await csrfFetch(`/api/songs`);
  if (response.ok) {
    const songs = await response.json();
    dispatch (actionAllSongs(songs));
    return songs;
  }
};

// export const getCurrentSong = (id) => async (dispatch) => {
//   const response = await csrfFetch(`/api/songs/${id}`);
//   if (response.ok) {
//     const data = await response.json();
//     dispatch (getOneSong(data));
//     return data;
//   }
// };

export const getSongsUser = () => async (dispatch) => {
  const response = await fetch(`/api/songs/library`);

  if (response.ok) {
    const song = await response.json();
    dispatch (actionAllSongs(song));
    return song;
  }
};

export const createSong = (newSong) => async (dispatch) => {

  const { title, gameId, uploaderId, genreId, songmp3 } = newSong;
  console.log(newSong);
  // const formData = new FormData();
  // formData.append("title", title);
  // formData.append("gameId", gameId);
  // if (uploaderId) {
  //   formData.append("uploaderId", uploaderId);
  // };
  // formData.append("genreId", genreId);
  // formData.append("songmp3", songmp3);

  const response = await csrfFetch(`/api/songs/upload`, {
    method: "POST",
    // headers: {
    //   "Content-Type": "multipart/formData",
    // },
    headers: {
      "Content-Type": "application/json",
    },
    // body: formData,
    body: JSON.stringify(newSong),
  });

  const song = await response.json();
  dispatch(getAllSongs());
  return song;
};

export const updateSong = (song) => async(dispatch)=>{

  const { title, gameId, uploaderId, genreId, playlistId, songmp3 } = song;

  const formData = new FormData();
  formData.append("title", title);
  formData.append("gameId", gameId);
  formData.append("uploaderId", uploaderId);
  formData.append("genreId", genreId);
  formData.append("playlistId", playlistId);
  formData.append("songmp3", songmp3);
  
  const response = await csrfFetch(`/api/songs`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: formData,
  });
  const editedSong = await response.json()
  if (response.ok){
    dispatch(actionAddSong(song))
  }
  return editedSong;
}

export const deleteSong = (songId) => async dispatch => {

  const response = await csrfFetch(`api/songs/${songId}`,{
    method: 'DELETE',
    body: JSON.stringify(deleteSong)
  })

  if (response.ok) {
    const deleteId = await response.json()
    dispatch(actionDeleteSong(deleteId))
    return deleteId;
  }
}

  export const getSearchResults = (payload) => async(dispatch) =>{
    const response = await csrfFetch('api/search',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const songs = await response.json();
     return dispatch(actionAllSongs(songs));
    }
  }

const songReducer = (state = {}, action) => {

    switch (action.type) {

      case GET_ALL_SONGS:
        const currentState = {}
          action.songs.forEach(song => currentState[song.id] = song)
          return currentState

      // case GET_ONE_SONG:
      //   let thisState = {}
      //   thisState = {...state, [action.song.id]: action.song}
      //   return thisState

      case ADD_SONG:
        let newState = {}
          newState = {...state, [action.song.id]: action.song}
          return newState

      case DELETE_SONG:
        const delState = {...state};
        delete delState[action.songId]
        return delState;

      default:
        return state;
    }
}

export default songReducer