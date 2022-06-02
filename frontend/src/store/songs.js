import { csrfFetch } from './csrf';

const GET_ALL_SONGS = "song/GET";
const ADD_SONG = "song/ADD";
const DELETE_SONG= "song/DELETE"
const GET_ONE_SONG = "songs/getOneSong";

const getOneSong = (song) => {
  return {
    type: GET_ONE_SONG,
    song,
  };
};

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
  const response = await fetch(`/api/songs`);
  if (response.ok) {
    const songs = await response.json();
    dispatch (actionAllSongs(songs));
    return songs;
  }
};

export const getCurrentSong = (id) => async (dispatch) => {
  const res = await fetch(`/api/songs/${id}`);
  const data = await res.json();
  dispatch(getOneSong(data));
  return res;
};

export const getSongsUser = () => async (dispatch) => {
  const response = await fetch(`/api/songs/library`);

  if (response.ok) {
    const songs = await response.json();
    dispatch (actionAllSongs(songs));
    return songs;
  }
};

export const createSong = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/songs/upload`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const song = await response.json();
  if (response.ok){
    dispatch(actionAddSong(song))
  }
  return song;
};

export const updateSong = (id, data) => async(dispatch)=>{
  const response = await csrfFetch(`/api/songs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const song = await response.json()
  if (response.ok){
    dispatch(actionAddSong(song))
  }
  return song;
}

export const deleteSong = (songId) => async dispatch => {

  const response = await csrfFetch(`api/songs/${songId}`,{
    method: 'DELETE',
    body: JSON.stringify(deleteSong)
  })

  if (response.ok) {
    const deleteId = await response.json()
    dispatch(actionDeleteSong(deleteId))
    return deleteId
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
          action.songs.forEach(song => newState[song.id] = song)
          return currentState

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