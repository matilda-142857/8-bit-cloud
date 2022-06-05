import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './comments.css'
import CommentForm from './CommEdit';
import { getAllUsers } from '../../store/users';

const CommentDisplay = ({ comment, song }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch]);

    const allUsers = useSelector(state => state.users)
    const commentUser = allUsers[comment.userId]
    const currentUser = useSelector(state => state.session.user)
    const [editFormOpen, setEditFormOpen] = useState(false)

    console.log(allUsers, commentUser, currentUser)

    // useEffect(()=> {},[comment])

    //return stuff renders PER user
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