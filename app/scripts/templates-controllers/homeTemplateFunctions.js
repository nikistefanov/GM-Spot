export default {
  loadHomeTemplate: function() {
    $('#active').removeAttr("id");
    var filename = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $(".navbar-nav a[href*=" + filename + "]").attr("id", "active");

    $('#site-slogan-title').text('Your place for buying, selling or giving away games and movies!');
    $('#site-slogan-text').text('Are you bored with your current games, sell them and buy new ones.');
    $('#site-slogan-btn').css("display", "inline-block");

    $('#carousel').removeClass('movies');
    $('#carousel').removeClass('movies-info');
    $('#carousel').removeClass('games');
    $('#carousel').removeClass('location');
    $('#carousel').removeClass('games-info');
  }
};
