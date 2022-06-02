'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Genres', [
      { type: "Action/Adventure", 
      songId: 1
      },
      { type: "Role-playing Games(RPGs)", 
      songId: 2
      },
      { type: "Survival/ Exploration", 
      songId: 3
      },
      { type: "Strategy", 
      songId: 4
      },
      { type: "MOBAS", 
      songId: 5
      },
      { type: "Party Games", 
      songId: 6
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Genres', null, {});

  }
};
