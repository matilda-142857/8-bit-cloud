const express = require('express')
const asyncHandler = require('express-async-handler');
const { Song } = require('../../db/models');
const {Op} = require('sequelize')

const router = express.Router();

router.post('/', asyncHandler(async(req,res)=>{
    const {search} = req.body;
    const songs = await Song.findAll({
        where:{
            title:{
                [Op.iLike]: `%${search}%`
            }
        }
    })
    res.json({songs})
  }));

  module.exports = router