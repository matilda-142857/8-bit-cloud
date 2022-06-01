'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    gameId: DataTypes.INTEGER,
    uploaderId: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    songmp3: DataTypes.STRING
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
  };
  return Song;
};