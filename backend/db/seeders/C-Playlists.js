'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Playlists', [
    {
      title: 'Liked',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Hype Music',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Studying Playlist',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Playlists', null, {});
  }
};
