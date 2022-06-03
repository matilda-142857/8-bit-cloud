'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Genres', [
      { type: "Action/Adventure"
      },
      { type: "Role-playing Games(RPGs)"
      },
      { type: "Survival/ Exploration"
      },
      { type: "Strategy"
      },
      { type: "MOBAS"
      },
      { type: "Party Games"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Genres', null, {});

  }
};
