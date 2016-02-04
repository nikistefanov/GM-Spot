import data from 'scripts/data.js';

export default {
  loadGameTemplate: function () {
    var currentUser = data.users.current();
    if (currentUser == 'undefined') {
      $('#add-product-platform').on('click', function () {
        window.location.href='#/login';
      });
    }

    $('#site-slogan-title').text('Games section');
    $('#site-slogan-text').text('Brrowse this cool games...');
    $('#site-slogan-btn').css("display", "none");
    $('#carousel').addClass("games");
  }
};
