import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './comments.css'
import CommentForm from './CommEdit';

const CommentDisplay = ({ comment, song }) => {
    const allUsers = useSelector(state => state.session.user)
    console.log(allUsers)
    const commentUser = allUsers[comment.userId]

    const currentUser = useSelector(state => state.session.user)
    const [editFormOpen, setEditFormOpen] = useState(false)

    useEffect(()=> {},[comment])

    return (
        <div className='comment-container'>
            {commentUser && <p className='comment-username'>{commentUser.username}</p>}
            {comment &&
                <>
                    <p className='comment-text-header'>Comment:</p>
                    <p className='comment-text'>{comment.comment}</p>
                </>
            }
            {currentUser && commentUser && currentUser.id === commentUser.id && <button className='edit-open-button' onClick={()=>setEditFormOpen(!editFormOpen)}>Edit Your Comment</button>}
            {editFormOpen && <CommentForm song={song} comment={comment} setEditFormOpen={setEditFormOpen} ></CommentForm>} 

        </div>
    )
}

export default CommentDisplay