import notifier from 'scripts/notifier.js';
import data from 'scripts/data.js';
import validate from 'scripts/validate.js';

export default {
  loginPageEvents: function($container) {
    $container.on('click', '#btn-login', function(ev) {
      ev.stopPropagation();
      ev.preventDefault();
      var username = $('#input-username')[0].value;
      var password = $('#input-password')[0].value;

      data.users.login(username, password)
        .then(function() {
          notifier.success('Logged in!');
          document.location = document.referrer;
        });
    });

    $container.on('click', '#btn-reg', function(ev) {
      ev.stopPropagation();
      ev.preventDefault();
      var username = $('#input-username')[0].value,
        password = $('#input-password')[0].value;

      data.users.register(username, password)
        .then(function() {
          notifier.success('Registered!');
          document.location = document.referrer;
        });
    });
  }
};
