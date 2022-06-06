'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Playlist.associate = function(models){
    Playlist.belongsTo(models.User, {foreignKey: 'userId'})
    Playlist.hasMany(models.Song, {foreignKey: "playlistId"})
  };
  return Playlist;
};