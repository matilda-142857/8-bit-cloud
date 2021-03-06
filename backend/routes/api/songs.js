const express = require('express')
const asyncHandler = require('express-async-handler');

const { requireAuth, restoreUser} = require('../../utils/auth');
const { User, Song, Game, Genre } = require('../../db/models');

const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const validateSong = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please provide the name of your track.')
    .isLength({max: 50})
    .withMessage('Track name must not be more than 50 characters.'),
  check('gameId')
    .exists({ checkFalsy: true })
    .withMessage('Please provide the game associated with this track.')
    .isLength({max: 50})
    .withMessage('Track name must not be more than 50 characters.'),
  check('genre')
    .exists({ checkFalsy: true })
    .withMessage('Please pick an appropriate genre for this game.'),
  check('songmp3')
    .exists({ checkFalsy: true })
    .withMessage('Please provide the audio file as a link.'),
  handleValidationErrors
];

//discover page


//get all songs
router.get(
  '/',
  asyncHandler(async(req, res) => {
    const songs = await Song.findAll
    ({
      include: [Game, Genre]
    })
    res.json(songs);
  })
)

//get all songs of user
router.get(
  '/library', restoreUser, asyncHandler(async(req,res)=>{
  const songs = await Song.findAll({
    where:{
      userId: req.user.id
    }
  })
  res.json(songs)
  })
)

router.get(
  '/:songId', restoreUser, asyncHandler(async(req,res)=>{
  const comments = await Song.findAll({
    include: [User, Game]
  })
  res.json(comments)
  })
)

//add a song
router.post(
  '/upload', 
  // validateSong, 
  requireAuth, asyncHandler(async(req,res)=>{
    const {title, gameId, uploaderId, genreId, songmp3} = req.body
    let newSong = await Song.create({
      title,
      gameId,
      uploaderId,
      genreId,
      songmp3
    })
    console.log(req.body)
    res.json(newSong)
  })
)

//get one song
router.get(
  '/:songId', 
  restoreUser, asyncHandler(async(req,res)=>{
    console.log('inside song route')
    console.log(req.params)
    const songId = parseInt(req.params.songId, 10);
    console.log(songId)
    const song = await Song.findByPk(songId)
    console.log(song);
    res.json(song)
  })
)

//get 12 songs on splash page
router.get(
  "/splash",
  asyncHandler(async (req, res) => {
    const splashSongs = await Song.findAll({ limit: 12 });
    return res.json({ splashSongs });
  })
);


//edit single song
router.put(
  '/:songid', 
  validateSong, requireAuth, asyncHandler(async(req,res)=>{
    const {title, gameId, genre, songmp3} = req.body
    const songId = parseInt(req.params.id, 10);
    const oldSong = await Song.findByPk(songId)
    let editSong = await oldSong.update({
     title, 
     gameId, 
     genre, 
     songmp3
    })
    return res.json(editSong)
  })
)

router.delete(
  '/songs/:songId', 
  requireAuth, asyncHandler(async(req,res)=>{
    let deleted = Song.destroy({
        where: parseInt(req.params.songId, 10)
    })
    res.json(deleted)
  })
)

module.exports = router