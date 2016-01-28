export default {
  login: function(username, password) {
    return Parse.User.logIn(username, password);
  },
  logout: function() {
    return Parse.User.logOut();
  },
  register: function(username, password) {
    var user = new Parse.User();
    user.set("username", username);
    user.set("password", password);

    return user.signUp();
  },
  current: function() {
    return new Promise(function(resolve, reject) {
      var user = Parse.User.current();
      resolve(user ? user.get('username') : undefined);
    });
  }
};
