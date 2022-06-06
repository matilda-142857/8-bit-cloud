'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Genres', [
      { type: "Action/Adventure",
        createdAt: new Date(), 
        updatedAt: new Date() },
      { type: "Role-playing Games(RPGs)", 
        createdAt: new Date(), 
        updatedAt: new Date() },
      { type: "Survival/ Exploration", 
        createdAt: new Date(), 
        updatedAt: new Date() },
      { type: "Strategy", 
        createdAt: new Date(), 
        updatedAt: new Date() },
      { type: "MOBAS", 
        createdAt: new Date(), 
        updatedAt: new Date() },
      { type: "Party Games", 
        createdAt: new Date(), 
        updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Genres', null, {});

  }
};
