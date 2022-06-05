import { csrfFetch } from './csrf';

const ADD_COMMENT = 'commentss/add'
const LOAD_COMMENT = 'commentss/load'
const DELETE_COMMENT = 'commentss/delete'

const addComment = newComment => {
    return {
        type: ADD_COMMENT,
        newComment
    }
}

const deleteComm = commentId => {
    return {
        type: DELETE_COMMENT,
        commentId
    }
}

const loadComments = comments => {
    return {
        type: LOAD_COMMENT,
        comments
    }
}

export const getSongComments = (songId) => async dispatch => {
    const response = await csrfFetch(`/api/commentss`)
    //${songId}
    if (response.ok){
        const songComments = await response.json()
        dispatch(loadComments(songComments));
    }
}

export const createComment = (comment) => async dispatch => {
    const response = await csrfFetch('/api/commentss', {
        method: 'POST',
        body: JSON.stringify(comment)
    })
    if (response.ok){
        const newComment = await response.json()
        dispatch(addComment(newComment))
        return newComment;
    }
    return response;
}

export const editComment = (comment) => async dispatch => {
    const response = await csrfFetch(`/api/commentss`, {
        method: 'PUT',
        body: JSON.stringify(comment)
    })
    if(response.ok){
        const editedComment = await response.json()   
        dispatch(addComment(editedComment))
        return editComment;
    }
}

export const deleteComment = (commentId) => async dispatch => {
    const response = await csrfFetch(`/api/commentss`, {
        method: 'DELETE',
        body: JSON.stringify({commentId})
    })

    if(response.ok){
        const deletedId = await response.json()
        dispatch(deleteComm(deletedId));
    }
}

const commentReducer = (state={}, action) => {
    switch (action.type){

        case ADD_COMMENT:
            let newState = {...state}
            newState[action.newComment.id] = action.newComment
            return newState

        case LOAD_COMMENT:
            let newLoadState = {}
            action.comments.map(comment => newLoadState[comment.id] = comment)
            return newLoadState

        case DELETE_COMMENT:
            let newDelState = {...state}
            delete newDelState[action.commentId]
            return newDelState

        default:
            return state
    }
}

export default commentReducer