'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    gameId: DataTypes.INTEGER,
    uploaderId: DataTypes.INTEGER,
    genreId: DataTypes.STRING,
    songmp3: DataTypes.STRING
  }, {});
  Song.associate = function(models) {
    Song.belongsTo(models.Genre, {foreignKey: 'genreId'})
    Song.belongsTo(models.User, {foreignKey: 'uploaderId'})
    Song.belongsTo(models.Game, {foreignKey: 'gameId'})
    // Song.hasMany(models.Comment, {foreignKey: 'songId'})
  };
  return Song;
};