'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Games', [
      { title: 'Final Fantasy X', 
        img_url: "https://m.media-amazon.com/images/I/71QklcDxWNL._SS500_.jpg", 
        userId: 1,
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        title: 'Elden Ring', 
        img_url: "https://i1.sndcdn.com/artworks-HO74CQCdo1lfaj9i-NymDCA-t500x500.jpg", 
        userId: 1,
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { title: `Don't Starve`, 
        img_url: "https://i.scdn.co/image/ab67616d0000b2739ba269cfd0d33ec064a70e7d", 
        userId: 1,
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { title: 'Heroes Of Might And Magic IV', 
        img_url: "https://vgmsite.com/soundtracks/heroes-of-might-magic-4-waxer/6474-mumcteerqm.jpg",
        userId: 1, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { title: 'DOTA 2', 
        img_url: "https://i.scdn.co/image/ab67616d0000b273b3214263b61c5ce47f5b8041", 
        userId: 1,
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { title: 'Kahoot', 
        img_url: "https://i1.sndcdn.com/artworks-000366202734-owwjub-t500x500.jpg", 
        userId: 1,
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { title: 'Hollow Knight', 
        img_url: "https://static.wikia.nocookie.net/hollowknight/images/1/12/Mainpromo13.png/revision/latest?cb=20210112203001", 
        userId: 1,
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { title: 'Fibbage 3', 
        img_url: "https://i1.sndcdn.com/artworks-000286960088-7l0bbf-t500x500.jpg", 
        userId: 1,
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { title: 'Ori and the Blind Forest', 
        img_url: "https://f4.bcbits.com/img/a1402023301_10.jpg", 
        userId: 1,
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { title: 'Undertale', 
        img_url: "https://f4.bcbits.com/img/a2854475053_5.jpg", 
        userId: 1,
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { title: 'Kingdom Hearts', 
        img_url: "https://i.scdn.co/image/ab67616d0000b2736a5a249912d0d3573aaa264f", 
        userId: 1,
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { title: 'OFF', 
        img_url: "https://static.wikia.nocookie.net/offgame/images/8/81/Off-soundtrack.jpg/revision/latest?cb=20121223002501", 
        userId: 1,
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {   
      return queryInterface.bulkDelete('Games', null, {});

  }
};
