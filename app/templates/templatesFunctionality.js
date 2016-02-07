import data from 'scripts/data.js';

export default {
  loadHomeTemplate: function() {
    $('#active').removeAttr("id");
    var filename = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
    $(".navbar-nav a[href*="+filename+"]").attr("id", "active");

    $('#site-slogan-title').text('Your place for buying, selling or giving away games, movies and books!');
    $('#site-slogan-text').text('Are you bored with your current games, sell them and buy new ones.');
    $('#site-slogan-btn').css("display", "inline-block");

    $('#carousel').removeClass("games");
    $('#carousel').removeClass("games-info");
  },
  loadGameTemplate: function() {
    $('#active').removeAttr("id");
    var filename = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
    $(".navbar-nav a[href*="+filename+"]").attr("id", "active");

    var currentUser = data.users.current();
    if (currentUser == 'undefined') {
      $('#add-product-platform').on('click', function() {
        window.location.href = '#/login';
      });
    }

    $('#site-slogan-title').text('Games section');
    $('#site-slogan-text').text('Brrowse this cool games...');
    $('#site-slogan-btn').css("display", "none");

    $('#carousel').addClass("games");
    $('#carousel').removeClass("games-info");
  },
  loadGameInfoTemplate: function() {
    $(".navbar-nav a[href*=games]").attr("id", "active");

    $('#site-slogan-title').text('This games is awesome');
    $('#site-slogan-text').text('More info about this game...');
    $('#site-slogan-btn').css("display", "none");

    $('#carousel').addClass("games-info");
    $('#carousel').removeClass("games");
  }
};
