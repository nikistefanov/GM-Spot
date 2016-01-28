import converter from 'scripts/converter.js';
import data from 'scripts/data.js';

var Game = Parse.Object.extend("Game");

export default {
  all: function() {
    var query = new Parse.Query(Game);
    return new Promise(function(resolve, reject) {
      query.find()
        .then(function(data) {
          return data.map(function(item) {
            return converter.dbGameToGameVM(item);
          });
        })
        .then(function(data) {
          var currentUserId = Parse.User.current() ? Parse.User.current().id : '';
          data.map(function(item) {
            item.isOwner = currentUserId === item.ownerId;
            return item;
          });
          resolve({
            games: data
          });
        });
    });
  },
  get: function(id) {
    var gameId = id;
    var query = new Parse.Query(Game);

    return new Promise(function(resolve, reject) {
      query.find()
        .then(function(data) {
          return data.map(function(item) {
            return converter.dbGameToGameVM(item);
          });
        })
        .then(function(data) {
          var currentGame;
          data.map(function(item) {
            if (item.id == gameId) {
              console.log(item);
              currentGame = item;
            }
          });
          console.log(currentGame);
          var currentUserId = Parse.User.current() ? Parse.User.current().id : '';
          currentGame.isOwner = currentUserId === currentGame.ownerId;
          resolve({
            game: currentGame
          });
        });
    });
  },
  add: function(gameData) {
    var game = new Game();

    ['title', 'platform', 'price', 'img', 'description', 'genres', 'owner'].forEach((key) => {
      game.set(key, gameData[key]);
    });

    return game.save();
  },
  remove: function(id) {
    var query = new Parse.Query(Game);

    return new Promise(function(resolve, reject) {
      query.get(id)
        .then(function(game) {
          resolve(game.destroy());
        });
    });
  }
};
