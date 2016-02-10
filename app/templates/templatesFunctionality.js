import data from 'scripts/data.js';

export default {
  loadHomeTemplate: function() {
    $('#active').removeAttr("id");
    var filename = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $(".navbar-nav a[href*=" + filename + "]").attr("id", "active");

    $('#site-slogan-title').text('Your place for buying, selling or giving away games, movies and books!');
    $('#site-slogan-text').text('Are you bored with your current games, sell them and buy new ones.');
    $('#site-slogan-btn').css("display", "inline-block");

    $('#carousel').removeClass('movies');
    $('#carousel').removeClass('movies-info');
    $('#carousel').removeClass('games');
    $('#carousel').removeClass('location');
    $('#carousel').removeClass('games-info');
  },
  loadGameTemplate: function() {
    $('#active').removeAttr("id");
    var filename = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $(".navbar-nav a[href*=" + filename + "]").attr("id", "active");

    // var currentUser = data.users.current();
    // if (currentUser == 'undefined') {
    //   $('#add-product-platform').on('click', function() {
    //     window.location.href = '#/login';
    //   });
    // }

    $('#site-slogan-title').text('Games section');
    $('#site-slogan-text').text('Browse this cool games...');
    $('#site-slogan-btn').css("display", "none");

    $('#carousel').addClass("games");
    $('#carousel').removeClass('movies');
    $('#carousel').removeClass('movies-info');
    $('#carousel').removeClass('location');
    $('#carousel').removeClass('games-info');
  },
  loadGameInfoTemplate: function() {
    $('#active').removeAttr("id");
    $(".navbar-nav a[href*=games]").attr("id", "active");

    $('#site-slogan-title').text('This games is awesome');
    $('#site-slogan-text').text('More info about this game...');
    $('#site-slogan-btn').css("display", "none");

    $('#carousel').addClass("games-info");
    $('#carousel').removeClass("games", "movies", "movies-info");
    $('#carousel').removeClass('movies');
    $('#carousel').removeClass('movies-info');
    $('#carousel').removeClass('location');
    $('#carousel').removeClass('games');
  },
  loadMovieTemplate: function() {
    $('#active').removeAttr("id");
    var filename = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $(".navbar-nav a[href*=" + filename + "]").attr("id", "active");

    $('#site-slogan-title').text('Movies section');
    $('#site-slogan-text').text('Oh it\' movie time already...');
    $('#site-slogan-btn').css("display", "none");

    $('#carousel').addClass("movies");
    $('#carousel').removeClass('movies-info');
    $('#carousel').removeClass('games');
    $('#carousel').removeClass('location');
    $('#carousel').removeClass('games-info');
  },
  loadMovieInfoTemplate: function() {
    $('#active').removeAttr("id");
    $(".navbar-nav a[href*=movies]").attr("id", "active");

    $('#site-slogan-title').text('Nice choice!');
    $('#site-slogan-text').text('More info about this movie...');
    $('#site-slogan-btn').css("display", "none");

    $('#carousel').addClass("movies-info");
    $('#carousel').removeClass('movies');
    $('#carousel').removeClass('games');
    $('#carousel').removeClass('games-info');
    $('#carousel').removeClass('location');
  },
  loadLocationTemplate: function () {
    $('#active').removeAttr("id");
    var filename = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $(".navbar-nav a[href*=" + filename + "]").attr("id", "active");

    $('#site-slogan-title').text('Location section');
    $('#site-slogan-text').text('Oh now you can find us. Bravo!');
    $('#site-slogan-btn').css("display", "none");

    $('#carousel').addClass("location");
    $('#carousel').removeClass('movies');
    $('#carousel').removeClass('movies-info');
    $('#carousel').removeClass('games');
    $('#carousel').removeClass('games-info');
  }
};
