import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editComment, deleteComment } from '../../store/commentss';
import './comments.css'

const CommentForm = ({ song, comment, setEditFormOpen }) => {
    const [thisComment, setThisComment] = useState(comment.comment)
    let sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
        const newComment = {
            commentId: comment.id,
            comment: thisComment,
            userId: sessionUser.id,
            songId: song.id
        }
        dispatch(editComment(newComment))
            .then(() => {
                setEditFormOpen(false)
            })
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })
    }

    const handleDelete = e => {
        e.preventDefault()

        dispatch(deleteComment(comment.id))
            .then(() => {
                setEditFormOpen(false)
            })
    }

    const handleCancel = e => {
        setEditFormOpen(false)
    }

    return (
        <div className='review-form-container'>
            <p className='review-header'>Edit Your Comment:</p>
            <form className='review-form'>
                {errors.length > 0 &&
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                }

                <textarea onChange={e => setThisComment(e.target.value)} id='comment-input' type='text' placeholder='Write a comment...' value={thisComment}></textarea>

                <div id='review-button-holder'>
                    <button id='submit-comment-button' onClick={e => handleSubmit(e)}>Submit Edit</button>
                    <button id='submit-comment-button' onClick={e => handleDelete(e)}>Delete Comment</button>
                    <button id='submit-comment-button' onClick={e => handleCancel(e)}>Cancel</button>
                </div>
            </form>

        </div>
    )
}
export default CommentForm