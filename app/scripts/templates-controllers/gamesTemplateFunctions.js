export default {
  loadGameTemplate: function() {
    $('#active').removeAttr("id");
    var filename = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $(".navbar-nav a[href*=" + filename + "]").attr("id", "active");

    $('#site-slogan-title').text('Games section');
    $('#site-slogan-text').text('Browse this cool games...');
    $('#site-slogan-btn').css("display", "none");

    $('#carousel').addClass("games");
    $('#carousel').removeClass('movies');
    $('#carousel').removeClass('movies-info');
    $('#carousel').removeClass('location');
    $('#carousel').removeClass('games-info');
  }
};
