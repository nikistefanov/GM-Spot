import notifier from 'scripts/notifier.js';
import data from 'scripts/data.js';
import validate from 'scripts/validate.js';

var CONSTANTS = {
  PRODUCT_MIN_LENGTH: 3,
};

export default {
  commentsEvents: function($container) {
    $container.on('click', '#btn-txtarea', function(ev) {
      ev.stopPropagation();
      ev.preventDefault();

      var date = new Date().toLocaleString();
      var value = $('#txtarea').val();

      validate.ifUndefined(value);
      validate.valueMinLength(value, CONSTANTS.PRODUCT_MIN_LENGTH);
      validate.isValidString(value);

      $('#user-comment p').text(value);
      $('#txtarea').val("");

      var commentData = {
        text: value,
        date: date,
        owner: Parse.User.current()
      };

      data.comments.add(commentData)
        .then(function(data) {
          notifier.success('Comment added.');
        });
    });
  }
};
