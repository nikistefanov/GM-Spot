export default {
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
