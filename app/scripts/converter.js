export default {
  dbGameToGameVM: function(dbGame) {
    var owner = dbGame.get('owner');
    return {
      id: dbGame.id,
      title: dbGame.get('title'),
      platform: dbGame.get('platform'),
      price: dbGame.get('price'),
      img: dbGame.get('img'),
      description: dbGame.get('description'),
      genres: dbGame.get('genres'),
      ownerId: owner ? owner.id : null
    };
  }
};
