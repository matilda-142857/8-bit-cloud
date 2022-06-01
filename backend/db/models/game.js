'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    title: DataTypes.STRING,
    img_url: DataTypes.STRING
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
  };
  return Game;
};