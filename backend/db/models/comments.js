'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    content: DataTypes.STRING,
    songId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Comments.associate = function(models) {
    Comment.belongsTo(models.Song, {foreignKey: "songId"})
    Comment.belongsTo(models.User, {foreignKey:"userId"})
  }
  return Comment;
};