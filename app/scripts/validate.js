export default {

  ifUndefined: function(value, name) {
    name = name || 'Value';
    if (value === undefined) {
      toastr.error(name + ' cannot be undefined.');
      throw new Error();
    }
  },

  ifString: function(value, name) {
    name = name || 'Value';

    if (typeof value !== 'string') {
      toastr.error(name + ' must be a string.');
      throw new Error();
    }
  },

  isValidString: function(value, name) {
    name = name || 'Value';

    if (/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(value)) {
      toastr.error(name + ' cannot contains any special symbols.');
      throw new Error();
    }
  },

  valueLength: function(value, name, minLength, maxLength) {
    name = name || 'Value';
    if (value.length < minLength || value.length > maxLength) {
      toastr.error(name + ' must be between ' + minLength + ' and ' + maxLength + ' symbols.');
      throw new Error();
    }
  },

  containsOnlyTheCorrectCharacters: function(value, name) {
    name = name || 'Value';
    if (value.matches("^[a-zA-Z0-9]")) {
      toastr.error(name + ' Can contain only Latin letters, digits and the characters "_" and "."!');
      throw new Error();
    }
  }
};
