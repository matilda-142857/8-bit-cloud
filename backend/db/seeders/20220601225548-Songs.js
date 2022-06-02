'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', [
      { title: 'Ragtime', 
        gameId: 1, 
        uploaderId: 1, 
        genre: "Survival/ Exploration", 
        songmp3: "s3://eightbitcloud/Don't Starve - Ragtime.mp3", 
        createdAt: new Date(), 
        updatedAt: new Date() },

        { title: 'DOTA 2- Main Theme', 
        gameId: 2, 
        uploaderId: 1, 
        genre: "MOBA", 
        songmp3: "s3://eightbitcloud/DOTA 2- Main.mp3", createdAt: new Date(), 
        updatedAt: new Date() },

        { title: 'Malenia, Blade of Miquella', 
        gameId: 3, 
        uploaderId: 1, 
        genre: "RPG", 
        songmp3: "s3://eightbitcloud/Elden Ring - Malenia, Blade of Miquella.mp3", 
        createdAt: new Date(), 
        updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Songs');
  }
};
