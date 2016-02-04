import data from 'scripts/data.js';
import notifier from 'scripts/notifier.js';


export default {
  loginPageEvents: function($container) {
    $container.on('click', '#btn-login', function(ev) {
      ev.stopPropagation();
      ev.preventDefault();
      var username = $('#input-username')[0].value;
      var password = $('#input-password')[0].value;

      data.users.login(username, password)
        .then(function() {
          notifier.success("Logged in!");
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
          notifier.success("Registered!");
          document.location = document.location.origin;
        });
    });
  },

  navigationEvents: function($container) {
    $container.on('click', '#btn-logout', function(ev) {
      data.users.logout()
        .then(function() {
          notifier.success("Logged out!");
          location.reload();
        });
    });
    $container.on('click', '#btn-search', function(ev) {
      ev.stopPropagation();
      ev.preventDefault();

      var value = $('#search')[0].value;
      document.location = document.location.origin + '#/search/' + value;
    });
    $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
      var $this   = $(this);

      if (!($this.hasClass("add-product-platform"))) {
        $("#site-slogan").toggle();
      }
    });
  },

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

      data.games.add(gameData)
        .then(function(data) {
          notifier.success("Game added.");
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
          notifier.err(err);
        });
    });
  }
};
