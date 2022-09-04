const express = require('express')
const asyncHandler = require('express-async-handler');
const { Song, User } = require('../../db/models');
const {Op} = require('sequelize')
const router = express.Router();

router.post('/:search', asyncHandler(async(req,res)=>{
    const search = req.params.search
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