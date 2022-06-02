'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    title: DataTypes.STRING,
    img_url: DataTypes.STRING
  }, {});
  Game.associate = function(models) {
    Game.hasMany(models.Song, {foreignKey: "songId"})
    Game.belongsTo(models.User, {foreignKey: "userId"})
  };
  return Game;
};