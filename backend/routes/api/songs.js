const { singlePublicFileUpload, singleMulterUpload }= require ('../../awsS3')

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
  check('genreId')
    .exists({ checkFalsy: true })
    .withMessage('Please pick an appropriate genre for this game.'),
  // check('songmp3')
  //   .exists({ checkFalsy: true })
  //   .withMessage('Please provide the audio file as a link.'),
  handleValidationErrors
];

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

//get 12 songs on splash
router.get(
  "/splash",
  asyncHandler(async (req, res) => {
    const allSongs = await Song.findAll(
        { 
          include: [Game, Genre],
        }
      );
      const twelveSongs = ([...allSongs].sort(() => 0.5 - Math.random())).slice(0, 12); 
      return res.json(twelveSongs);
  })
);

//get all songs of user
router.get(
  '/library', restoreUser, asyncHandler(async(req,res)=>{
  const songs = await Song.findAll({
    where:{
      userId: req.user.id
    }
  })
  console.log('this is the /library route')
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
  singleMulterUpload("songmp3"),
  validateSong, 
  requireAuth, asyncHandler(async(req,res)=>{
    const {title, gameId, uploaderId, genreId} = req.body
    const songmp3 = await singlePublicFileUpload(req.file)
    let newSong = await Song.create({
      title,
      gameId,
      uploaderId,
      genreId,
      songmp3
    })
    console.log('this is the /upload route')
    res.json(newSong)
  })
)

//get one song
router.get(
  '/:songId', 
  restoreUser, asyncHandler(async(req,res)=>{
    const songId = parseInt(req.params.songId, 10);
    const song = await Song.findByPk(songId)
    console.log('this is the /songId route')
    res.json(song)
  })
)



//edit single song

router.put(
  '/:songId', 
  singleMulterUpload("songmp3"),
  validateSong, requireAuth, asyncHandler(async(req,res)=>{
    const {title, gameId, genreId, songmp3} = req.body;
    const songId = parseInt(req.params.songId, 10);
    const editSong = await Song.findByPk(songId)
    let editedSong = await editSong.update({
      title, gameId, genreId, songmp3
    })
    return res.json(editedSong)
  })
)

router.delete(
  '/:songid', 
  requireAuth, asyncHandler(async(req,res)=>{
    let deleted = Song.destroy({
        where: {id :parseInt(req.params.songid, 10)}
    })
    return res.json(deleted)
  })
)

module.exports = router