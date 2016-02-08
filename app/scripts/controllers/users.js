import validate from '../validate.js';

var CONSTANTS = {
  NAME_MIN_LENGTH: 6,
  NAME_MAX_LENGTH: 30,
  PASSWORD_MIN_LENGTH: 3,
  PASSWORD_MAX_LENGTH: 30,
};

export default {
  login: function(username, password) {
    validate.valueLength(password, 'Password', CONSTANTS.PASSWORD_MIN_LENGTH, CONSTANTS.PASSWORD_MAX_LENGTH);
    validate.ifUndefined(password, 'Password');
    validate.isValidString(password, 'Passowrd');
    validate.ifUndefined(username, 'Username');
    validate.ifString(username, 'Username');
    validate.isValidString(username, 'Username');
    validate.valueLength(username, 'Username', CONSTANTS.NAME_MIN_LENGTH, CONSTANTS.NAME_MAX_LENGTH);

    return Parse.User.logIn(username, password);
  },
  logout: function() {
    return Parse.User.logOut();
  },
  register: function(username, password) {
    validate.valueLength(password, 'Password', CONSTANTS.PASSWORD_MIN_LENGTH, CONSTANTS.PASSWORD_MAX_LENGTH);
    validate.ifUndefined(password, 'Password');
    validate.isValidString(password, 'Passowrd');
    validate.ifUndefined(username, 'Username');
    validate.ifString(username, 'Username');
    validate.isValidString(username, 'Username');
    validate.valueLength(username, 'Username', CONSTANTS.NAME_MIN_LENGTH, CONSTANTS.NAME_MAX_LENGTH);

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
