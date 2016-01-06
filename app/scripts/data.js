
Parse.initialize("CQQSRsV2TqaFPvfgN0LJuW49vI7usCNSQpxfNasJ", "kp0Hm8vWotsHZIlFLz20Vaa9nmNdDH0B3N3hF9ha");

export default {
	users: {
		login: function (username, password) {
			return Parse.User.logIn(username, password);
		},
		logout: function () {
			return Parse.User.logOut();
		},
		register: function (username, password) {
			var user = new Parse.User();
			user.set("username", username);
			user.set("password", password);

			return user.signUp();
		},
		current: function () {
			return new Promise(function (resolve, reject) {
                var user = Parse.User.current();
                resolve(user ? user.get('username') : undefined);
            });
		}
	}
}