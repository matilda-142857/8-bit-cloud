'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Comments', [
      {
        comment: `In case you didn't know, she is Malenia, Blade of Miquella, and she has never known defeat`,
        songId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: `Heroes IV is so bad but at least the soundtrack is good`,
        songId: 4,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: `The Japanglish is aggressive with Kingdom Hearts songs but man does Utada kill it`,
        songId: 14,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: `we stan Mortis Ghost`,
        songId: 15,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: `sans.exe lol`,
        songId: 13,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment: `sephiroth vibes tbh`,
        songId: 2,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
