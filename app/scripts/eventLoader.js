import data from 'scripts/data.js'
import notifier from 'scripts/notifier.js'

export default {
	loginPageEvents: function ($container) {
		$container.on('click', '#btn-login', function (ev) {
			ev.stopPropagation();
            ev.preventDefault();
			var username = $('#input-username')[0].value;
			var password = $('#input-password')[0].value;

			data.users.login(username, password)
				.then(function () {
                	notifier.success("Logged in!");
                    document.location = document.location.origin;
                })
		});

		$container.on('click', '#btn-reg', function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
            var username = $('#input-username')[0].value,
                password = $('#input-password')[0].value;

            data.users.register(username, password)
            	.then(function () {
            		notifier.success("Registered!");
            		document.location = document.location.origin;
            	})
        })
	},

	navigationEvents: function ($container) {
        $container.on('click', '#btn-logout', function (ev) {
            data.users.logout()
                .then(function () {
                	notifier.success("Logged out!");
                    document.location = document.location.origin;
                })
        });
        $container.on('click', '#btn-search', function (ev) {
            ev.stopPropagation();
            ev.preventDefault();

            var value = $('#search')[0].value;
            document.location = document.location.origin + '#/search/' + value;
        });
    },
}