'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', [
      { title: 'To Zanarkand', 
        gameId: 1, 
        uploaderId: 1, 
        genreId: 1, 
        songmp3: "s3://eightbitcloud/Final Fantasy X - To Zanarkand.mp3", 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { title: 'Malenia, Blade of Miquella', 
        gameId: 2, 
        uploaderId: 1, 
        genreId: 2, 
        songmp3: "s3://eightbitcloud/Elden Ring - Malenia, Blade of Miquella.mp3", 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { title: 'Ragtime', 
        gameId: 3, 
        uploaderId: 1, 
        genreId: 3, 
        songmp3: "s3://eightbitcloud/Don't Starve - Ragtime.mp3", 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  
      { title: 'Sea Theme', 
        gameId: 4, 
        uploaderId: 1, 
        genreId: 4, 
        songmp3: "s3://eightbitcloud/Heroes Of Might And Magic IV - Sea Theme.mp3", 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },  
      { title: 'Main Theme', 
        gameId: 5, 
        uploaderId: 1, 
        genreId: 5, 
        songmp3: "s3://eightbitcloud/DOTA 2- Main.mp3", 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { title: '20 Seconds', 
        gameId: 6, 
        uploaderId: 1, 
        genreId: 6, 
        songmp3: "s3://eightbitcloud/Kahoot - 20 Seconds.mp3", 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { title: 'Main Theme- Flute vers.', 
        gameId: 5, 
        uploaderId: 1, 
        genreId: 5, 
        songmp3: "s3://eightbitcloud/Dota 2 - Main Menu Flute Theme.mp3", 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { title: 'Mohg, Lord of Blood', 
        gameId: 2, 
        uploaderId: 1, 
        genreId: 2, 
        songmp3: "s3://eightbitcloud/Elden Ring - Mohg, Lord of Blood.mp3", 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        title: 'Fungal Wastes', 
        gameId: 7, 
        uploaderId: 1, 
        genreId: 1, 
        songmp3: "s3://eightbitcloud/Hollow Knight - Fungal Wastes.mp3", 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },   
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Songs');
  }
};
