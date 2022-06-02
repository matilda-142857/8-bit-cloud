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
    Song.belongsTo(models.Genre, {foreignKey: 'genre'})
    Song.belongsTo(models.User, {foreignKey: 'userId'})
    Song.belongsTo(models.Game, {foreignKey: 'gameId'})
    // Song.hasMany(models.Comment, {foreignKey: 'songId'})
  };
  return Song;
};