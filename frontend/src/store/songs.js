import { ValidationError } from "../utils/validationError"
import { csrfFetch } from './csrf';

const GET_ALL_SONGS = "song/GET";
const ADD_SONG = "song/ADD";
const DELETE_SONG= "song/DELETE"

const uploadSong = (payload) => async dispatch=>{
  const response = await csrfFetch(`api/songs/upload`, {
    method: "post",
    headers: "multipart/form-data"
  })
}

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


export const getSongsUser = () => async (dispatch) => {
  const response = await fetch(`/api/songs/library`);

  if (response.ok) {
    const songs = await response.json();
    dispatch (actionAllSongs(songs));
    return songs;
  }
};

export const createSong = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const song = await response.json();
  dispatch(addSong(song));
  return song;

};

export const updateSong = (id, data) => async(dispatch)=>{
  const response=await csrfFetch(`/api/songs/${id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if(response.ok){
    const song=await response.json()
    dispatch(addSong(song))
  }
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
     return dispatch(load(songs));
    }
  }

  const addSong= (song) => {

    return {
      type: ADD,
      song:song,
    };
  };

const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
          console.log(action.list)
            const Songs = {};
            action.list.forEach((song) => {
              Songs[song.id] = song
            });
            return {
              ...Songs,
              ...state,
              list: sortList(action.list),
            };
            case ADD:
                if (!state[action.song.id]) {
                  const newState = {
                    ...state,
                    [action.song.id]: action.song,
                  };
                  const songList = newState.list.map((id) => newState[id]);
                  songList.push(action.song);
                  newState.list = sortList(songList);
                  return newState;
                }
                return {
                  ...state,
                  [action.song.id]: {
                    ...state[action.song.id],
                    ...action.song,
                  },
                };
              case DELETE:
                const newState = {...state};
                delete newState[action.songId]
                return newState;


        default:
            return state;
    }
}

export default songReducer