import notifier from 'scripts/notifier.js';

export default {

  ifUndefined: function(value, name) {
    name = name || 'Value';
    if (value === undefined) {
      notifier.error(name + ' cannot be undefined.');
      throw new Error();
    }
  },

  ifString: function(value, name) {
    name = name || 'Value';

    if (typeof value !== 'string') {
      notifier.error(name + ' must be a string.');
      throw new Error();
    }
  },

  isValidString: function(value, name) {
    name = name || 'Value';

    if (/[~`#$%\^&*+=\-\[\]/{}|:<>\?]/g.test(value)) {
      notifier.error(name + ' cannot contains any special symbols.');
      throw new Error();
    }
  },

  valueLength: function(value, name, minLength, maxLength) {
    name = name || 'Value';
    if (value.length < minLength || value.length > maxLength) {
      notifier.error(name + ' must be between ' + minLength + ' and ' + maxLength + ' symbols.');
      throw new Error();
    }
  },

  valueMinLength: function(value, minLength, name) {
    name = name || 'Value';
    if (value.length < minLength) {
      notifier.error(name + ' must be at least ' + minLength + ' symbols.');
      throw new Error();
    }
  },

  containsOnlyTheCorrectCharacters: function(value, name) {
    name = name || 'Value';
    if (value.matches("^[a-zA-Z0-9]")) {
      notifier.error(name + ' Can contain only Latin letters, digits and the characters "_" and "."!');
      throw new Error();
    }
  }
};
