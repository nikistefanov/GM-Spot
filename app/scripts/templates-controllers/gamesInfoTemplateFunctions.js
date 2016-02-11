export default {
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
  }
};
