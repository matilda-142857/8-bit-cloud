'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    type: DataTypes.STRING,
    songId: DataTypes.INTEGER
  }, {});
  Genre.associate = function(models) {
    Genre.hasMany(models.Song, {foreignKey: "genreId"})
  };
  return Genre;
};