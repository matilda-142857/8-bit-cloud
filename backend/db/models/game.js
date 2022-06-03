'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    title: DataTypes.STRING,
    img_url: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Game.associate = function(models) {
    Game.hasMany(models.Song, {foreignKey: "gameId"})
    Game.belongsTo(models.User, {foreignKey: "userId"})
  };
  return Game;
};