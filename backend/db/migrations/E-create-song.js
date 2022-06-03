'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(50)
      },
      gameId: {
        type: Sequelize.INTEGER,
        references: { model: 'Games'}
      },
      uploaderId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users'}
      },
      genreId: {
        type: Sequelize.INTEGER,
        references: { model: 'Genres'}
      },
      playlistId: {
        type: Sequelize.INTEGER,
        references: { model: 'Playlists'}
      },
      songmp3: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Songs');
  }
};