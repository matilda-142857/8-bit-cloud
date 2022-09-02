const express = require('express')
const asyncHandler = require('express-async-handler');
const { Song } = require('../../db/models');
const {Op} = require('sequelize')
const router = express.Router();

router.post('/:keyword', asyncHandler(async(req,res)=>{
    const keyword = req.params.keyword
    const songs = await Song.findAll({
        where:{
            title:{
                [Op.iLike]: `%${search}%`
            }
        },
        include: User
    })
    return res.json({songs})
  }));

  module.exports = router