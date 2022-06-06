import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../../store/commentss';
import './comments.css'

const CommentForm = ({ song, setEditFormOpen }) => {
    const [comment, setComment] = useState('')
    let sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
        const newComment = {
            comment,
            userId: sessionUser.id,
            songId: song.id
        }
        dispatch(createComment(newComment))
            .then(() => {
                setEditFormOpen(false)
            })
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })
    }

    const handleCancel = e => {
        setEditFormOpen(false)
    }

    return (
        <div className='comment-form-container'>
            <p className='commet-header'>Write a comment:</p>
            <form className='comment-form'>
                {errors.length > 0 &&
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                }

                <textarea onChange={e => setComment(e.target.value)} id='comment-input' type='text' placeholder='Write a comment...' value={comment}></textarea>

                <div id='review-button-holder'>
                    <button id='submit-comment-button' onClick={e => handleSubmit(e)}>Submit Comment</button>
                    <button id='submit-comment-button' onClick={e => handleCancel(e)}>Cancel</button>
                </div>
            </form>

        </div>
    )

}

export default CommentForm