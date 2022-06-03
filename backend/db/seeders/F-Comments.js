'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Comments', [
      {
        content: `In case you didn't know, she is Malenia, Blade of Miquella, and she has never known defeat`,
        songId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: `Heroes IV is so bad but at least the soundtrack is good`,
        songId: 4,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: `The Japanglish is aggressive with Kingdom Hearts songs but man does it sound good`,
        songId: 14,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
