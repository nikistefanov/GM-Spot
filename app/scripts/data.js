import converter from 'scripts/converter.js'

Parse.initialize("CQQSRsV2TqaFPvfgN0LJuW49vI7usCNSQpxfNasJ", "kp0Hm8vWotsHZIlFLz20Vaa9nmNdDH0B3N3hF9ha");
var Game = Parse.Object.extend("Game");
var Movie = Parse.Object.extend("Movie");

export default {
  users: {
    login: function(username, password) {
      return Parse.User.logIn(username, password);
    },
    logout: function() {
      return Parse.User.logOut();
    },
    register: function(username, password) {
      var user = new Parse.User();
      user.set("username", username);
      user.set("password", password);

      return user.signUp();
    },
    current: function() {
      return new Promise(function(resolve, reject) {
        var user = Parse.User.current();
        resolve(user ? user.get('username') : undefined);
      });
    }
  },
  games: {
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
            resolve({games: data});
          })
      })

    },
    get: function(id) {

    },
    add: function(gameData) {
      var game = new Game();

      ['title', 'platform', 'price', 'img', 'description', 'genres'].forEach((key) => {
        game.set(key, gameData[key]);
      });

      return game.save();
    },
    remove: function(id) {

    }
  }
}
