const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();
const {Comment} = require('../../db/models')

const validateComment = [
    check('comment')
        .isLength({ max: 300 })
        .withMessage('Your comment must not be more than 300 characters.')
        .exists({checkFalsy: true})
        .withMessage('Please provide a comment'),
    handleValidationErrors
];

router.post('/', validateComment, requireAuth, asyncHandler(async (req,res)=> {
    const buildComment = await Comment.build(req.body)
    const newComment = await buildComment.save()
    res.json(newComment)
}))

router.get('/', asyncHandler(async (req, res) => {
    const comments = await Comment.findAll()
    return res.json(comments)
}))

router.put('/', requireAuth, validateComment, asyncHandler(async (req, res) => {
    const {commentId, comment} = req.body
    const updatingComment = await Comment.findByPk(commentId)
    const updatedComment = await updatingComment.update({comment})
    res.json(updatedComment)
}))

router.delete('/', requireAuth, asyncHandler(async (req, res) => {
    const {commentId} = req.body
    const deleteComment = await Comment.findByPk(commentId)
    await deleteComment.destroy()
    res.json(commentId)
}))

module.exports = router;