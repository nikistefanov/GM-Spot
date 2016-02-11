import notifier from 'scripts/notifier.js';
import data from 'scripts/data.js';
import validate from 'scripts/validate.js';

export default {
  navigationEvents: function($container) {
    $container.on('click', '#btn-logout', function(ev) {
      data.users.logout()
        .then(function() {
          notifier.success('Logged out!');
          location.reload();
        });
    });
    $container.on('click', '#btn-search', function(ev) {
      ev.stopPropagation();
      ev.preventDefault();

      var value = $('#search').val();
      //document.location = document.location.origin + '#/search/' + value;
      document.location = document.referrer;
    });
  }
};
