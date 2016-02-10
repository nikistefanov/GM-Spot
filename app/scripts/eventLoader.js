import data from 'scripts/data.js';
import notifier from 'scripts/notifier.js';
import validate from 'scripts/validate.js';

var CONSTANTS = {
  PRODUCT_MIN_LENGTH: 3,
};

export default {
  gameEvents: function($container) {
    $container.on('click', '#btn-add-game', function(ev) {
      var genres = [];

      $(".genres-checkbox:checked").each(function() {
        genres.push($(this).val());
      });

      var gameData = {
        title: $('#tb-game-title').val(),
        platform: $("#tb-game-platform option:selected").text(),
        price: $('#tb-game-price').val(),
        img: $('#basic-url').val(),
        description: $('#tb-game-description').val(),
        genres: genres,
        owner: Parse.User.current()
      };

      $.each(gameData, function(index, value) {
        validate.ifUndefined(value);
        if (!(index == 'genres' || index == 'platform' || index == 'price')) {
          validate.valueMinLength(value, CONSTANTS.PRODUCT_MIN_LENGTH, index);
        }
      });

      data.games.add(gameData)
        .then(function(data) {
          notifier.success('Game added.');
          location.reload();
        });
    });

    $container.on('click', '#btn-delete-game', function(ev) {
      ev.stopPropagation();
      ev.preventDefault();

      var gameId = $(ev.target).closest('div').attr('data-game-id');
      data.games.remove(gameId)
        .then(function(data) {
          notifier.success('Game removed.');
          document.location = document.location.href = '#/games';
        })
        .catch(function(err) {
          notifier.error(err);
        });
    });
  },
  loginPageEvents: function($container) {
    $container.on('click', '#btn-login', function(ev) {
      ev.stopPropagation();
      ev.preventDefault();
      var username = $('#input-username')[0].value;
      var password = $('#input-password')[0].value;

      data.users.login(username, password)
        .then(function() {
          notifier.success('Logged in!');
          document.location = document.location.origin;
        });
    });

    $container.on('click', '#btn-reg', function(ev) {
      ev.stopPropagation();
      ev.preventDefault();
      var username = $('#input-username')[0].value,
        password = $('#input-password')[0].value;

      data.users.register(username, password)
        .then(function() {
          notifier.success('Registered!');
          document.location = document.location.origin;
        });
    });
  },
  movieEvents: function($container) {
    $container.on('click', '#btn-add-movie', function(ev) {
      var genres = [];

      $(".genres-checkbox:checked").each(function() {
        genres.push($(this).val());
      });

      var movieData = {
        title: $('#tb-movie-title').val(),
        year: $('#tb-movie-year').val(),
        price: $('#tb-movie-price').val(),
        img: $('#basic-url').val(),
        description: $('#tb-movie-description').val(),
        genres: genres,
        owner: Parse.User.current()
      };

      $.each(movieData, function(index, value) {
        validate.ifUndefined(value);
        if (!(index == 'genres' || index == 'price')) {
          validate.valueMinLength(value, CONSTANTS.PRODUCT_MIN_LENGTH, index);
        }
      });

      data.movies.add(movieData)
        .then(function(data) {
          notifier.success('Movie added.');
          location.reload();
        });
    });

    $container.on('click', '#btn-delete-movie', function(ev) {
      ev.stopPropagation();
      ev.preventDefault();

      var movieId = $(ev.target).closest('div').attr('data-movie-id');
      data.movies.remove(movieId)
        .then(function(data) {
          notifier.success('Movie removed.');
          document.location = document.location.href = '#/movies';
        })
        .catch(function(err) {
          notifier.error(err);
        });
    });
  },
  navigationEvents: function($container) {
    $container.on('click', '#btn-logout', function(ev) {
      data.users.logout()
        .then(function() {
          notifier.success('Logged out!');
          location.reload();
        });
    });
    $container.on('click', '#btn-search', function(ev) {
      ev.stopPropagation();
      ev.preventDefault();

      var value = $('#search').val();
      //document.location = document.location.origin + '#/search/' + value;
      document.location = document.location.origin;
    });
  },
  collapseEventes: function($container) {
    $(document).on('click', '#burger', function(ev) {
      var $this = $(this);

      if (!($this.hasClass("add-product-platform"))) {
        $("#site-slogan").toggle();
      }
    });
    $container.on('click', '#btn-txtarea', function(ev) {
      ev.stopPropagation();
      ev.preventDefault();

      var value = $('#txtarea').val();
      $('#user-comment p').text(value);
      $('#txtarea').val("");
    });
  }
};
