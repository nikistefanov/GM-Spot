import converter from 'scripts/converter.js';
import data from 'scripts/data.js';

var Movie = Parse.Object.extend("Movie");

export default {
  all: function() {
    var query = new Parse.Query(Movie);
    return new Promise(function(resolve, reject) {
      query.find()
        .then(function(data) {
          return data.map(function(item) {
            return converter.dbMovieToMovieVM(item);
          });
        })
        .then(function(data) {
          var currentUserId = Parse.User.current() ? Parse.User.current().id : '';
          data.map(function(item) {
            item.isOwner = currentUserId === item.ownerId;
            return item;
          });
          resolve({
            movies: data
          });
        });
    });
  },
  get: function(id) {
    var movieId = id;
    var query = new Parse.Query(Movie);
    return query.get(movieId)
      .then(function(data) {
        return converter.dbMovieToMovieVM(data);
      })
      .then(function(currentMovie) {
        var currentUserId = Parse.User.current() ? Parse.User.current().id : '';
        currentMovie.isOwner = currentUserId === currentMovie.ownerId;
        return {
          movie: currentMovie
        };
      });
  },
  add: function(movieData) {
    var movie = new Movie();

    ['title', 'year', 'price', 'img', 'description', 'genres', 'owner'].forEach((key) => {
      movie.set(key, movieData[key]);
    });

    return movie.save();
  },
  remove: function(id) {
    var query = new Parse.Query(Movie);

    return new Promise(function(resolve, reject) {
      query.get(id)
        .then(function(movie) {
          resolve(movie.destroy());
        });
    });
  }
};
