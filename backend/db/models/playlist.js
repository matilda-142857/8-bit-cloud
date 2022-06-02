'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    title: DataTypes.STRING,
    songId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Playlist.associate = function(models) {
    Playlist.belongsTo(models.Song, {foreignKey: 'songId'})
    Playlist.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Playlist;
};