import notifier from 'scripts/notifier.js';
import data from 'scripts/data.js';
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
        if (!(index == 'genres' || index == 'platform' || index == 'price' || index == 'owner')) {
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
  }
};
