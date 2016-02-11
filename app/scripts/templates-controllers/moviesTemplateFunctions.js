export default {
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
  }
};
