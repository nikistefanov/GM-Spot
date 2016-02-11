export default {
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
  }
};
